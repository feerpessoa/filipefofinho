var MongoClient = require('mongodb').MongoClient;
 
var myCollection;
//var db = MongoClient.connect('mongodb://127.0.0.1:27017/filipefofinho', function(err, db)
var db = MongoClient.connect('mongodb://filipefofinho:12345678@ds047800.mongolab.com:47800/filipefofinho', function(err, db) 
{
    if(err)
        throw err;
    console.log("Conectado com mongoDB!");
    myCollection = db.collection('username');
});

var AWS = require('aws-sdk');

var s3 = new AWS.S3();

s3.createBucket({Bucket: 'myBucket'}, function() {

  var params = {Bucket: 'myBucket', Key: 'myKey', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)

          console.log(err)

      else console.log("Successfully uploaded data to myBucket/myKey");

   });

});


module.exports = function( app ) {
    var controller = {

    direcionarIndex : function (request, response)
    {
    response.render("index");
    },

    direcionarHello : function (request, response)
    {
        response.render("hello", {
            mensagem : "Hello World!"
        });
    },

    direcionarMeuNome : function (request, response) 
    {
    response.render("index");
    },

    meuNome : function (request, response)
    {
    var nome = request.body.nome;
    response.render("index", {
    "nome" : nome
    }); 

        myCollection.insert({nome: nome}, function(err, result) {
            if(err)
                throw err;
         
            console.log("********* " + nome + ", salvo com sucesso!!! *********");
        });     

    },

    direcionarSoma : function (request, response)
    {
    response.render("somar");
    },

    somar : function (request, response) {
    var num1 = parseInt(request.body.num1);
    var num2 = parseInt(request.body.num2);

    var resultado = controller.somar2Numeros (num1, num2);

    response.render("somar", {
    "resultado" : resultado
    });
    },

    somar2Numeros : function (num1, num2) {
        return num1 + num2;
    },

    direcionarSubtracao : function (request, response)
    {
        response.render("subtrair");
    },

    subtrair : function (request, response) {
        var num1 = parseInt(request.body.num1);
        var num2 = parseInt(request.body.num2);

        var resultado = controller.subtrair2Numeros (num1, num2);

        response.render("subtrair", {
            "resultado" : resultado
        });
    },

    subtrair2Numeros : function (num1, num2) {
        return num1 - num2;
    },

    direcionarCPF : function (request, response) {     
        response.render("validarCPF");     
    },

    cpf : function (request, response) {

        var cpf = request.body.cpf;

        if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" ||  cpf == "33333333333" || 
        cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || 
        cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
        {
            response.render("validarCPF", {
                mensagem : "CPF Inválido!"
             });  
        }

        add = 0; 
          
        for (i=0; i < 9; i ++)       
            add += parseInt(cpf.charAt(i)) * (10 - i);  

        rev = 11 - (add % 11);  

        if (rev == 10 || rev == 11)     
            rev = 0;    

        if (rev != parseInt(cpf.charAt(9)))  
        {
            response.render("validarCPF", {
                mensagem : "CPF Inválido!"
             }); 
        }   

        add = 0; 

        for (i = 0; i < 10; i ++)        
            add += parseInt(cpf.charAt(i)) * (11 - i); 

        rev = 11 - (add % 11);  

        if (rev == 10 || rev == 11) 
            rev = 0;   

        if (rev != parseInt(cpf.charAt(10)))
        {
            response.render("validarCPF", {
                mensagem : "CPF Inválido!"
             }); 
        }
                 
        response.render("validarCPF", {
                mensagem : "CPF Válido!"
             });      
    },

    validarCPF : function (cpf) {
        var Soma;
        var Resto;

            Soma = 0;

            if (cpf == "00000000000") {
                return false;   
            } 

            for (i = 1; i <= 9; i++) {
                Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            } 

            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) {
                Resto = 0;
            }

            if (Resto != parseInt(cpf.substring(9, 10))) {
                return false;
            }

            Soma = 0;

            for (i = 1; i <= 10; i++) {
                Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }

            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) {
                Resto = 0;
            }

            if (Resto != parseInt(cpf.substring(10, 11))) {
                return false;
            }

            return true;
    },

    validarCNPJ : function (cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g,'');

            if(cnpj == '') return false;

            if (cnpj.length != 14)
                return false;

            if (cnpj == "00000000000000" || cnpj == "11111111111111" ||  cnpj == "22222222222222" || cnpj == "33333333333333" || 
                cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || 
                cnpj == "88888888888888" || cnpj == "99999999999999")
                return false; 

            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0,tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;

            for (i = tamanho; i >= 1; i--) {
              soma += numeros.charAt(tamanho - i) * pos--;
              if (pos < 2)
                    pos = 9;
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;

            for (i = tamanho; i >= 1; i--) {
              soma += numeros.charAt(tamanho - i) * pos--;
              if (pos < 2)
                    pos = 9;
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (resultado != digitos.charAt(1))
                  return false; 

            return true; 
    }
    
 };  
    return controller;
};
