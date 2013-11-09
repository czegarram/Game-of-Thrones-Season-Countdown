$(document).ready ->
  updateNav = (house) ->
    if house
      $(".selector").addClass "active"
    else
      $(".selector").removeClass "active"

  hideHouses = ->
    $(".houses").removeClass "active"

  updateActivatorText = (text) ->
    if text
      $(".nav_text").text "house " + text
    else
      $(".nav_text").text "select your house:"

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
      updateActivatorText house
      updateURLHash house
      updateTheme house
      false
    else
      hash = window.location.hash.substring(1)
      updateActivatorText hash
      updateTheme hash
      false

  $(".nav_text").click ->
    $(".houses").toggleClass "active"
    if $(".houses").hasClass("active")
      $(".nav_text").text "hide houses"
    else
      $(".nav_text").text "select your house:"
    false

  $(".clear").click ->
    $(".houses").removeClass "active"
    updateActivatorText false
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