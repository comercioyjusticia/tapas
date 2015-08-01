var MesM = Backbone.Model.extend({
	defaults: {
		anio: '', 
		mes: '',
		dias: [], // info from server
	},
	initialize: function(){
		anio = this.get('anio');
		mes = this.get('mes');
		//this.set('messtr', mesesGbl[parseInt(mes).toString()].slice(0, 3));
		this.set('messtr', mesesGbl[mes]);
		this.getDias();
		
	},
	getDias: function(anio, mes){
		// get from server
		diasSrv = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
		var anio = this.get('anio');
		var mes = this.get('mes');
		base = App.Configuration.baseURLPDF + '/tapa-comercio-y-justicia-'+ anio +'-' + mes + '-';
		
		var dias = [];
		_.each(diasSrv, function(dia){
			var src = base + dia + '-thumb.jpg';	
			var link= '#dia/' + anio + '/' + mes + '/' + dia;
			var d = new Date(anio, mes-1, parseInt(dia));
			var diaSem = diasGbl[d.getDay()];
		
			dias.push({src: src, link: link, dia: dia, diaSem: diaSem});
		});

		this.set('dias', dias);
	},

});

var MesV = Backbone.View.extend({
	el: '#mainD',
	template: template('mes'),
	render: function(){
		var tpl = this.template(this.model.toJSON());
		this.$el.html(tpl);
		return this;
	},
});

