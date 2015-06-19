var PessoaController = require("../app/controllers/index")

var assert = require("assert");

describe("index", function() {
	it("Espero que quando passar 2 e 2 retorne 4", function() {

		var retorno = assert.equal(2 + 2, 4);
		console.log(retorno)

	});

	it("Espero que quando passar 5 menos 2 retorne 3", function() {
		var retorno = assert.equal(5 - 2, 3);
		console.log(retorno)
	});

});
