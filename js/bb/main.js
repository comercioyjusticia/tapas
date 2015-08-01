(function(){

  // Init App Object
  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {},
    Configuration: {baseURLPDF: 'http://andresvazquez.com.ar/data/comercio-y-justicia/tapas'},
    Logs: ''
  };

  // Template Helper
  window.template = function(tpl){
    $.ajax({url: 'js/bb/' + tpl + '.tpl'
      , dataType:'text'
      , async: false
      , success: function(data){
          dat = String(data);
          }
        });
    return _.template( dat );
    
  };
  
  window.touchAnalytics = function(page, title){
    ga('send', 'pageview', {'page': page,'title': title});
  };

  window.loadDatesMenu = function(){
      // load dates menu (just one time)
      if (undefined !== App.Models.dates) return false;
      App.Models.dates = new DatesM({}); 
      App.Views.dates = new DatesV({model: App.Models.dates});
      App.Views.dates.render();
  };

  window.mesesGbl= {'01': "Enero", '02':"Febrero", '03': "Marzo", '04': "Abril", 
        '05': "Mayo", '06': "Junio", '07': "Julio", '08': "Agosto", 
        '09': "Septiembre", '10': "Octubre", '11': "Noviembre",
        '12': "Diciembre"};
  window.diasGbl= {'0': "Dom", '1': "Lun", '2': "Mar", '3': "Mie", '4': "Jue", 
          '5': "Vie", '6': "Sab", '7': "Dom"};
  })();