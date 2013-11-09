$(document).ready(function(){

  hideHouses = function() {
    $(".houses").removeClass("active");
  };

  updateActivatorText = function(text) {
    if ( text ) {
      $(".house_activator").text("house: " + text);
    } else {
      $(".house_activator").text("choose a house");
    }
  };

  updateURLHash = function(text) {
    if ( text ) {
      window.location.hash = text;
    } else {
      window.location.hash = "";
    }
  };

  updateTheme = function(house) {
    if ( house ) {
      $("body").removeClass().addClass(house);
      $(".clear").css('display', 'inline-block');
    } else {
      $("body").removeClass();
      $(".clear").hide();
    }
  };

  $(".house_activator").click(function() {
    $(".houses").toggleClass("active");
    return false;
  });

  $(".house a").click(function(event) {
    event.preventDefault();
    var house = $(this).data('house').toLowerCase();

    if ( house === "clear" ) {
      house = false;
    }

    hideHouses();
    updateActivatorText(house);
    updateURLHash(house);
    updateTheme(house);

    return false;
  });

});