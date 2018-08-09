$(document).ready(function() {
    
    /* ======= ScrollTo ======= */
  $('.scrollTo').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
    $('body').scrollTo(target, 800, {offset: -100, 'axis':'y'});
    
  });


  $(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

});