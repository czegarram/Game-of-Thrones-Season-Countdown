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
      history.pushState('', document.title, window.location.pathname);
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

  // check url hash on page load
  routeURLHash = function(house) {
    if ( house ) {
      hideHouses();
      updateActivatorText(house);
      updateURLHash(house);
      updateTheme(house);
      return false;
    } else {
      var hash = window.location.hash.substring(1);
      updateActivatorText(hash);
      updateTheme(hash);
      return false;
    }
  };

  $(".house_activator").click(function() {
    $(".houses").toggleClass("active");
    return false;
  });

$(".clear").click(function() {
    $(".houses").removeClass("active");
    updateActivatorText(false);
    updateURLHash(false);
    updateTheme(false);
    return false;
  });

  $(".house a").click(function(event) {
    event.preventDefault();
    var house = $(this).data('house').toLowerCase();

    // if ( house === "clear" ) {
    //   house = false;
    // }

    routeURLHash(house);
    return false;
  });

  routeURLHash();

});