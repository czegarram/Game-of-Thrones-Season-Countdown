$(document).ready ->
  updateNav = (house) ->
    if house
      $(".selector").addClass "active"
    else
      $(".selector").removeClass "active"

  hideHouses = ->
    $(".houses").removeClass "active"

  activateHouse = (house) ->
    $(".house").removeClass("active")
    $("a[data-house='" + house + "']").parent().addClass("active")

  updateNavText = (text) ->
    if text
      $(".nav_text").text "house " + text
    else
      $(".nav_text").text "Select your house:"

  updateURLHash = (text) ->
    if text
      window.location.hash = text
    else
      history.pushState "", document.title, window.location.pathname

  updateTheme = (house) ->
    if house
      $("body").removeClass().addClass house
      $(".clear").css "display", "inline-block"
      updateNav house
    else
      $("body").removeClass()
      $(".clear").hide()
      updateNav false


  # check url hash on page load
  routeURLHash = (house) ->
    if house
      hideHouses()
      activateHouse house
      updateNavText house
      updateURLHash house
      updateTheme house
      false
    else
      hash = window.location.hash.substring(1)
      updateNavText hash
      updateTheme hash
      false

  $(".nav_text").click ->
    $(".houses").toggleClass "active"
    false

  $(".clear").click ->
    $(".houses").removeClass "active"
    updateNavText false
    updateURLHash false
    updateTheme false
    false

  $(".house a").click (event) ->
    event.preventDefault()
    house = $(this).data("house").toLowerCase()
    routeURLHash house
    false

  routeURLHash()

# KeyboardJS.on "left, h", ->
#   alert "asdf"
#   prevNavItem()
#   false

# KeyboardJS.on "right, ;", ->
#   nextNavItem()
#   false