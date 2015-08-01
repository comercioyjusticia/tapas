var DiaM = Backbone.Model.extend({
	defaults: {
		anio: '', 
		mes: '',
		dia: '',
	},
	initialize: function(){
		anio = this.get('anio');
		mes = this.get('mes');
		dia = this.get('dia');
		base = App.Configuration.baseURLPDF + '/tapa-comercio-y-justicia-'+ anio +'-' + mes +'-' + dia;
		this.set('diaJPG', base + '.jpg');
		this.set('diaPDF', base + '.pdf');
		// this.set('messtr', mesesGbl[parseInt(mes).toString()].slice(0, 3));
		this.set('messtr', mesesGbl[mes]);
		var d = new Date(anio, mes-1, dia);
		this.set('diaSem', diasGbl[d.getDay()]);
		
	},
	

});

var DiaV = Backbone.View.extend({
	el: '#mainD',
	template: template('dia'),
	render: function(){
		var tpl = this.template(this.model.toJSON());
		this.$el.html(tpl);
		return this;
	},
});

