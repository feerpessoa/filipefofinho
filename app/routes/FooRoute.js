module.exports = function( app ) {
    var controller = app.controllers.index;
    
    app.route("/")
    	.get(controller.direcionarIndex);

    app.route("/hello")
        .get(controller.direcionarHello);

    app.route("/meuNome")
        .get(controller.direcionarMeuNome)
        .post(controller.meuNome);

    app.route("/somar")
    	.get(controller.direcionarSoma)
    	.post(controller.somar);

    app.route("/subtrair")
    	.get(controller.direcionarSubtracao)
    	.post(controller.subtrair);

    app.route("/validarCPF")
        .get(controller.direcionarCPF)
        .post(controller.cpf);
    
};