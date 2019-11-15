class Simulacao{
	// ====== parametros para calculo ======================================================
	//tipo de feixe (bessel, gauss)
	tipo_feixe = 'bessel';
	//post para comunicação python
	nova(){
		//post para comunicação python
		console.log("novo_grafico");
	}

	//retorno do console python
	show(img_id = "#simulacao"){
		console.log('exibir_imagem');
		var data = this.getJSON();
		$.getJSON('./json/first_test.json', function(data){
			$(simulacao).attr('src', 'data:image/png;base64, ' + data['data_img']);
		});
		
	}

	getJSON(){
		return $.getJSON('./json/first_test.json', function(data){
			return data;
		});
	}
}