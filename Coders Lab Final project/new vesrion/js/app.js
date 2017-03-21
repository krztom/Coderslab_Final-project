$(document).ready(function() {
    today = new Date()
    if (today.getHours() >= 0 && today.getHours() < 12) {
        document.getElementById('Good morning').innerHTML = 'Good morning mr Tomecki';
    }if (today.getHours() >= 0 && today.getHours() < 17) {
        document.getElementById('Good morning').innerHTML = 'Good morning mr Tomecki';
    }else {
        document.getElementById('Good morning').innerHTML = 'Good evening mr Tomecki';
    }

  /*
  * Plugin intialization
  */
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['page1', 'page2', 'page3', 'page4'],
      sectionsColor: ['#b5b5b7', '#252839', '#677077', '#252839'],
      navigation: {
        'position': 'right',
        'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
      },
      afterRender: function(){
        $('#pp-nav').addClass('custom');
      },
      afterLoad: function(anchorLink, index){
        if(index>1){
          $('#pp-nav').removeClass('custom');
        }else{
          $('#pp-nav').addClass('custom');
        }
      }
  });




    $('#showExamples').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#examplesList').toggle();
  });

  $('html').click(function(){
    $('#examplesList').hide();
  });
  });
