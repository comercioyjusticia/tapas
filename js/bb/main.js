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

      var url = App.Configuration.baseURLPDF + '/map.json';
      var xhr = $.ajax({
            url: url,
            type: 'GET',
            //data: {data: self.attributes},
            async: false});
        
        xhr.done(function(data){
          window.fullDates = data;
        });

      // last available day
      var lista = Object.keys(fullDates);
      window.lastYear = lista[lista.length-1];
      var lista = Object.keys(fullDates[lastYear]);
      window.lastMonth = lista[lista.length-1];
      var lista = fullDates[lastYear][lastMonth];
      window.lastDay = lista[lista.length-1];

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

  window.refreshImages = function(){
    var $container_home = $('#filter-container-feature');
  
    $container_home.imagesLoaded( function(){
      $container_home.isotope({
        itemSelector : 'li',
      });
    });
  };