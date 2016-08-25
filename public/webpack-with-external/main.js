require("jquery");
require('jquery-ui/ui/version');
require('jquery-ui/ui/core');
require('jquery-ui/ui/keycode');
require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/mouse');
require('jquery-ui/ui/widgets/slider');

require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/slider.css');
require('jquery-ui/themes/base/theme.css');

$(function(){
  console.log('document.getElementById("slider"));',
    document.getElementById("slider"));
  $( "#slider" ).slider({
    range: true,
    values: [ 17, 67 ]
  });
});
