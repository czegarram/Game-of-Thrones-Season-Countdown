(function() {
  $(document).ready(function() {
    var hideHouses, routeURLHash, updateActivatorText, updateTheme, updateURLHash;
    hideHouses = function() {
      return $(".houses").removeClass("active");
    };
    updateActivatorText = function(text) {
      if (text) {
        return $(".house_activator").text("house: " + text);
      } else {
        return $(".house_activator").text("choose a house");
      }
    };
    updateURLHash = function(text) {
      if (text) {
        return window.location.hash = text;
      } else {
        return history.pushState("", document.title, window.location.pathname);
      }
    };
    updateTheme = function(house) {
      if (house) {
        $("body").removeClass().addClass(house);
        return $(".clear").css("display", "inline-block");
      } else {
        $("body").removeClass();
        return $(".clear").hide();
      }
    };
    routeURLHash = function(house) {
      var hash;
      if (house) {
        hideHouses();
        updateActivatorText(house);
        updateURLHash(house);
        updateTheme(house);
        return false;
      } else {
        hash = window.location.hash.substring(1);
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
      var house;
      event.preventDefault();
      house = $(this).data("house").toLowerCase();
      routeURLHash(house);
      return false;
    });
    return routeURLHash();
  });

}).call(this);
