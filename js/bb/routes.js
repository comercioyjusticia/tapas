App.Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'mes/:anio/:mes': 'mes',
        'dia/:anio/:mes/:dia': 'dia',
        '*other': 'default',
    },

  /** mostrar el panel principal */
    index: function() {
        loadDatesMenu();
        $(document).attr('title', 'Las tapas del diario Comercio y Justicia');
        touchAnalytics('/', 'Home');
        },

    mes: function(anio, mes){
        loadDatesMenu();
        $(document).attr('title', 'Las tapas del diario Comercio y Justicia de ' + mesesGbl[mes] + ' de ' + anio);
        
        App.Models.mes = new MesM({anio: anio, mes:mes}); 
        App.Views.mes = new MesV({model: App.Models.mes});
        App.Views.mes.render();

        touchAnalytics('/mes/' + anio + '/' + mes, mesesGbl[mes] + ' de ' + anio);
    },

    dia: function(anio, mes, dia){
        loadDatesMenu();
        $(document).attr('title', 'La tapa del diario Comercio y Justicia del ' + dia + ' de ' + mesesGbl[mes] + ' del ' + anio);

        App.Models.dia = new DiaM({anio: anio, mes:mes, dia: dia}); 
        App.Views.dia = new DiaV({model: App.Models.dia});
        App.Views.dia.render();

        touchAnalytics('/mes/' + anio + '/' + mes + '/' + dia , dia + ' de ' + mesesGbl[mes] + ' del ' + anio);
    },

});

new App.Router;
Backbone.history.start();