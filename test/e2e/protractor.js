describe("Teste de operação binária de soma", function(){
	it("Espero que a minha função some dois números inteiros", function(){
		var driver = browser.driver;

		driver.get('http://localhost:3000/somar');
		
		driver.findElement( by.name( "num1" ) ).click();
		driver.findElement( by.name( "num2" ) ).click();
		driver.findElement( by.id( "somar" ) ).click();

		driver.findElement( by.name( "num1" ) ).sendKeys("4");
		driver.findElement( by.name( "num2" ) ).sendKeys("4");
		driver.findElement( by.id( "somar" ) ).click();


		driver.findElement( by.id( "resultado" ) ).getText().then(function (text) {
			expect(text).toEqual("Resultado: 8");
		});

	});
});