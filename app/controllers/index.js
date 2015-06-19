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
    }
    
 };  
    return controller;
};
