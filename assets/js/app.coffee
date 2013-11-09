$(document).ready ->
  hideHouses = ->
    $(".houses").removeClass "active"

  updateActivatorText = (text) ->
    if text
      $(".house_activator").text "house: " + text
    else
      $(".house_activator").text "choose a house"

  updateURLHash = (text) ->
    if text
      window.location.hash = text
    else
      history.pushState "", document.title, window.location.pathname

  updateTheme = (house) ->
    if house
      $("body").removeClass().addClass house
      $(".clear").css "display", "inline-block"
    else
      $("body").removeClass()
      $(".clear").hide()


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

  $(".house_activator").click ->
    $(".houses").toggleClass "active"
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

    # if ( house === "clear" ) {
    #   house = false;
    # }
    routeURLHash house
    false

  routeURLHash()
