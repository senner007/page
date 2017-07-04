

  page('/', function(){
    // Do something to set up the index page
    console.log('main page')
  });
  page('/app', function(){
    // Do something to set up the index page
    console.log('from inside app')
  });

  page('*', function(){
    // Do something to set up the index page
    console.log('page not found')
  });


page.start();
