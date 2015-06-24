var controller = require("../app/controllers/index")();

var assert = require("assert");
var expect = require("expect");


describe("Teste das operações binárias", function() {
	it("Espero que quando passar 2 e 3 retorne 5", function() {

	var retorno = assert.equal(controller.somar2Numeros(2,3), 5);
	console.log(retorno)
		
	});

	it("Espero que quando passar 5 menos 2 retorne 3", function() {
		var retorno = assert.equal(controller.subtrair2Numeros(5,2), 3);
	console.log(retorno)
	});

});

describe( "Teste de validação de CPF", function() {
		it("Espero true quando passar CPF válido", function() {
			var retorno = controller.validarCPF("08332068690");
			
			expect(retorno).toBe(true);
		});
		
		it("Espero false quando passar CPF inválido", function() {
			var retorno = controller.validarCPF("08332068699");
			
			expect(retorno).toBe(false);
		});
});

describe( "Teste de validação de CNPJ", function() {
		it("Espero true quando passar CNPJ válido", function() {
			var retorno = controller.validarCNPJ("23354848000114");
			
			expect(retorno).toBe(true);
		});
		
		it("Espero false quando passar CNPJ inválido", function() {
			var retorno = controller.validarCNPJ("23354848000115");
			
			expect(retorno).toBe(false);
		});
});
