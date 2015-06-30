var controller = require("../app/controllers/index")();

var assert = require("assert");
var expect = require("expect");

describe("Teste de HL, index e nome", function() {
	it("Espero receber a view index como retorno no metodo direcionarIndex", function() {

			var request = { };
			var response = criarResponse();
			
			controller.direcionarIndex( request, response );
			
			expect( response.view ).toBe("index");		   
	});

	it("Espero receber a view hello como retorno no metodo direcionarHello", function() {

			var request = { };
			var response = criarResponse();
			
			controller.direcionarHello( request, response );
			
			expect( response.view ).toBe("hello");		   
	});

	it("Espero receber a view index como retorno no metodo direcionarMeuNome", function() {

			var request = { };
			var response = criarResponse();
			
			controller.direcionarMeuNome( request, response );
			
			expect( response.view ).toBe("index");		   
	});

});

describe("Teste das operações", function() {
	it("Espero que quando passar 2 e 3 retorne 5", function() {

		var retorno = assert.equal(controller.somar2Numeros(2,3), 5);
		
	});

	it("Espero que quando passar 5 menos 2 retorne 3", function() {

		var retorno = assert.equal(controller.subtrair2Numeros(5,2), 3);

	});

	it("Espero que quando passar 10 dividido por 2 retorne 5", function() {

		var retorno = assert.equal(controller.dividir2Numeros(10,2), 5);

	});

	it("Espero que quando passar 5 vezes 2 retorne 10", function() {

		var retorno = assert.equal(controller.multiplicar2Numeros(5,2), 10);

	});

	it("Espero que quando passar 5 e 2 retorne 2", function() {

		var retorno = assert.equal(controller.menorNumero(5,2), 2);

	});

	it("Espero que quando passar 5 e 2 retorne 5", function() {

		var retorno = assert.equal(controller.maiorNumero(5,2), 5);

	});

	it("Espero 9 quando passar 81", function() {

		var retorno = controller.raizQuadrada(81);

		expect(retorno).toBe(9)

	});

	it("Espero 126 quando passar 125.7", function() {

		var retorno = controller.arredondaValor(125.7);

		expect(retorno).toBe(126)

	});

	it("Espero que quando passar 4 e 3 retorne 64", function() {

		var retorno = assert.equal(controller.exponencial(4,3), 64);

	});

	it("Espero que quando passar base e altura de um quadrado retorne area", function() {

		var retorno = assert.equal(controller.areaQuadrado(2,2), 4);

	});

	it("Espero receber a view subtrair como retorno no metodo direcionarSubtracao", function() {

			var request = { };
			var response = criarResponse();
			
			controller.direcionarSubtracao( request, response );
			
			expect( response.view ).toBe("subtrair");		   
	});

	it("Espero que minha funcao subtraia dois numeros e renderise para view subtrair", function() {
		var request = { 
						body: 
							{ 
								num1: '10',
								num2: '3'
							}
						};
		var response = criarResponse();
		
		controller.subtrair(request, response);
		
		expect(response.view).toEqual("subtrair");
		expect(response.object.resultado).toEqual(7);

			
	});

	it("Espero receber a view somar como retorno no metodo direcionarSoma", function() {

			var request = { };
			var response = criarResponse();
			
			controller.direcionarSoma( request, response );
			
			expect( response.view ).toBe("somar");		   
	});

	it("Espero que minha funcao some dois numeros e renderise para view somar", function() {
		var request = { 
						body: 
							{ 
								num1: '3',
								num2: '7'
							}
						};
		var response = criarResponse();
		
		controller.somar(request, response);
		
		expect(response.view).toEqual("somar");
		expect(response.object.resultado).toEqual(10);	
	});

});

describe( "Teste de validação de telefone", function() {
		it("Espero false quando passar telefone com menos de 9 digitos", function() {
			var retorno = controller.validarTelefone("00999999");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar telefone com mais de 11 digitos", function() {
			var retorno = controller.validarTelefone("009999999999");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar telefone apenas com 0", function() {
			var retorno = controller.validarTelefone("0000000000");
			
			expect(retorno).toBe(false);
		});

		it("Espero true quando passar telefone válido", function() {
			var retorno = controller.validarTelefone("3498220293");
			
			expect(retorno).toBe(true);
		});
		
});

describe( "Teste de validação de nome", function() {
		it("Espero false quando passar nome vazio", function() {
			var retorno = controller.validarNome(" ");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar nome nulo", function() {
			var retorno = controller.validarNome(null);
			
			expect(retorno).toBe(false);
		});

		it("Espero true quando passar nome válido", function() {
			var retorno = controller.validarNome("Filipe Fofinho");
			
			expect(retorno).toBe(true);
		});

		it("Espero false quando passar nome inválido", function() {
			var retorno = controller.validarNome("huehuehuebr");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar nome inválido", function() {
			var retorno = controller.validarNome("aaa");
			
			expect(retorno).toBe(false);
		});
		
});

describe( "Teste de validação de CPF", function() {
		it("Espero receber a view validarCPF como retorno no metodo direcionarCPF", function() {

			var request = { };
			var response = criarResponse();
			
			controller.direcionarCPF( request, response );
			
			expect( response.view ).toBe("validarCPF");		   
		});

		it("Verifico se direcionarCPF é uma function", function() {
			
			expect(typeof controller.direcionarCPF).toEqual('function');
		});
	
		it("Espero true quando passar CPF válido", function() {
			var retorno = controller.validarCPF("08332068690");
			
			expect(retorno).toBe(true);
		});
		
		it("Espero false quando passar CPF inválido", function() {
			var retorno = controller.validarCPF("08332068699");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar CPF 0", function() {
			var retorno = controller.validarCPF("00000000000");
			
			expect(retorno).toBe(false);
		});

		
});

describe( "Teste de validação de CNPJ", function() {
		it("Espero true quando passar CNPJ válido", function() {
			var retorno = controller.validarCNPJ("23354848000114");
			
			expect(retorno).toBe(true);
		});
		
		it("Espero false quando passar CNPJ numerico mas inválido", function() {
			var retorno = controller.validarCNPJ("23354848000115");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar CNPJ somente 0", function() {
			var retorno = controller.validarCNPJ("00000000000000");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar CNPJ somente letras", function() {
			var retorno = controller.validarCNPJ("aaaaa");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar CNPJ com quantidade de números diferente de 14", function() {
			var retorno = controller.validarCNPJ("1111");
			
			expect(retorno).toBe(false);
		});

		it("Espero false quando passar CNPJ inválido primeiro numero", function() {
			var retorno = controller.validarCNPJ("53354848000114");
			
			expect(retorno).toBe(false);
		});
});

function criarResponse() {
	return {
	   view : "",
	   object : {},
	   
	   render : function( view, object ) {
		   this.view = view;
		   this.object = object;
	   },
	   
	   redirect : function( view ) {
		   this.view = view;
	   }
   };	
};

function criarRequest( view, objectValue ) {
	return {
	   view : view,
	   object : objectValue,				   
	   render : function() {}
   };
};
