var DatesM = Backbone.Model.extend({
	defaults: {
		dates: [], // dates for top menu
	},
	initialize: function(){
		this.loadDates()
	},
	// load dates from external service
	loadDates: function(){
		var messtr = mesesGbl;
		this.set('dates', 	{'anios': {
								'1939': ['10'], 
								'2008': ['07', '08'], 
								'2009': ['01', '02', '03'], 
								'2015': ['01', '06', '07']
								},
							 'messtr': messtr,
							});
	},
	

});

var DatesV = Backbone.View.extend({
	el: '#datesbb',
	template: template('dates'),
	render: function(){
		var tpl = this.template(this.model.get('dates'));
		this.$el.html(tpl);
		return this;
	},
});

