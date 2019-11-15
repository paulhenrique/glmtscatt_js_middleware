function Simulacao(){
	// ====== parametros para calculo ======================================================
	//tipo de feixe (bessel, gauss)
	this.tipo_feixe = "bessel";
	//post para comunicação python
	this.nova = function(){
		//post para comunicação python
		console.log("novo_grafico");
		
	}

	//retorno do console python
	this.show = function(img_id = "#simulacao"){
		console.log('exibir_imagem');
		var data = this.getJSON();
		$.getJSON('./json/first_test.json', function(data){
			$(simulacao).attr('src', 'data:image/png;base64, ' + data['data_img']);
		});
	}

	this.getJSON = function(){
		return $.getJSON('./json/first_test.json', function(data){
			return data;
		});
	}
}