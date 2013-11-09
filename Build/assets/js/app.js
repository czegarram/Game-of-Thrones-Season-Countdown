(function() {
  $(document).ready(function() {
    var activateHouse, hideHouses, nextNavItem, prevNavItem, resetTheme, routeURLHash, runCountdown, updateNav, updateNavText, updateTheme, updateURLHash;
    runCountdown = function() {
      var airDate;
      airDate = new Date(Date.UTC(2014, 3 - 1, 19, 3, 0, 0));
      return $("#countdown").countdown({
        until: airDate,
        layout: $("#countdown").html()
      });
    };
    runCountdown();
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
    activateHouse = function(house) {
      $(".house").removeClass("active");
      return $("a[data-house='" + house + "']").parent().addClass("active");
    };
    updateNavText = function(text) {
      if (text) {
        return $(".nav_text").text("house " + text);
      } else {
        return $(".nav_text").text("Select your house:");
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
    prevNavItem = function() {
      return $('.house.active').prev('.house').children('a').click();
    };
    nextNavItem = function() {
      return $('.house.active').next('.house').children('a').click();
    };
    routeURLHash = function(house) {
      var hash;
      if (house) {
        hideHouses();
        activateHouse(house);
        updateNavText(house);
        updateURLHash(house);
        updateTheme(house);
        return false;
      } else {
        hash = window.location.hash.substring(1);
        updateNavText(hash);
        activateHouse(hash);
        updateTheme(hash);
        return false;
      }
    };
    resetTheme = function() {
      $(".houses").removeClass("active");
      updateNavText(false);
      updateURLHash(false);
      return updateTheme(false);
    };
    $(".nav_text").click(function() {
      $(".houses").toggleClass("active");
      return false;
    });
    $(".clear").click(function() {
      resetTheme();
      return false;
    });
    $(".house a").click(function(event) {
      var house;
      event.preventDefault();
      house = $(this).data("house").toLowerCase();
      routeURLHash(house);
      return false;
    });
    $(".nav.left").click(function(event) {
      event.preventDefault();
      prevNavItem();
      return false;
    });
    $(".nav.right").click(function(event) {
      event.preventDefault();
      nextNavItem();
      return false;
    });
    KeyboardJS.on("left, h", function() {
      prevNavItem();
      return false;
    });
    KeyboardJS.on("right", function() {
      nextNavItem();
      return false;
    });
    KeyboardJS.on("esc, escape", function() {
      resetTheme();
      return false;
    });
    KeyboardJS.on("1", function() {
      $(".house:first-child a").click();
      return false;
    });
    KeyboardJS.on("2", function() {
      $(".house:nth-child(2) a").click();
      return false;
    });
    KeyboardJS.on("3", function() {
      $(".house:nth-child(3) a").click();
      return false;
    });
    KeyboardJS.on("4", function() {
      $(".house:nth-child(4) a").click();
      return false;
    });
    KeyboardJS.on("5", function() {
      $(".house:nth-child(5) a").click();
      return false;
    });
    KeyboardJS.on("6", function() {
      $(".house:nth-child(6) a").click();
      return false;
    });
    KeyboardJS.on("7", function() {
      $(".house:nth-child(7) a").click();
      return false;
    });
    KeyboardJS.on("8", function() {
      $(".house:nth-child(8) a").click();
      return false;
    });
    KeyboardJS.on("9", function() {
      $(".house:nth-child(9) a").click();
      return false;
    });
    return routeURLHash();
  });

}).call(this);
