(function() {
  $(document).ready(function() {
    var hideHouses, routeURLHash, updateActivatorText, updateNav, updateTheme, updateURLHash;
    updateNav = function(house) {
      if (house) {
        return $(".selector").addClass("active");
      } else {
        return $(".selector").removeClass("active");
      }
    };
    hideHouses = function() {
      return $(".houses").removeClass("active");
    };
    updateActivatorText = function(text) {
      if (text) {
        return $(".nav_text").text("house " + text);
      } else {
        return $(".nav_text").text("select your house:");
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
        $(".clear").css("display", "inline-block");
        return updateNav(house);
      } else {
        $("body").removeClass();
        $(".clear").hide();
        return updateNav(false);
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
    $(".nav_text").click(function() {
      $(".houses").toggleClass("active");
      if ($(".houses").hasClass("active")) {
        $(".nav_text").text("hide houses");
      } else {
        $(".nav_text").text("select your house:");
      }
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
