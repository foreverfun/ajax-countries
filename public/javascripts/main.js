//console.log('TEST');

$(document).on('ready', function() {
  $('#load-countries-btn').on('click', function(){
    //console.log('load-countries-btn clicked!');
    
    $.get('/load-countries-btn', function(data) {
        console.log(data);
        // _.map(data, function(value, index){
        //   console.log(value);
        //   console.log(index);
        //   return 1;
        //   //return value + " " + index;
        // });
        data.forEach(function(country){
          console.log(country.name);
        });
    });
    
    // $.post('/load-countries-btn', function(data) {
    //     console.log("main.js data:", data);
    //     data.forEach(function(country){
    //       console.log(country.name);
    //     });
    // });



  });

});