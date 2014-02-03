
$(document).ready ->
  runCountdown = ->
    airDate = new Date(Date.UTC(2014, 3, 6, 23, 0, 0))
    $("#countdown").countdown
      until: airDate
      format: 'ODHMS'
      tickInterval: 1
      layout: $(".countdown_layout").html()
  runCountdown()

  updateHouseQuote = (house) ->
    houses =
      targaryen:  "Fire and Blood"
      baratheon:  "Ours is the Fury"
      tully:      "Family Duty Honor"
      lannister:  "Hear Me Roar"
      tyrell:     "Growing Strong"
      stark:      "Winter is Coming"
      arryn:      "As High As Honor"
      martell:    "Unbowed Unbent Unbroken"
      greyjoy:    "We Do Not Sow"

  updateNav = (house) ->
    if house
      $(".selector").addClass "active"
    else
      $(".selector").removeClass "active"

  hideHouses = ->
    $(".houses").removeClass "active"

  googleClickTrack = (category, action) ->
    console.log category, action
    # no actual analytics yet
    _gaq.push ["_trackEvent", category, action]
  activateHouse = (house) ->
    $(".house").removeClass("active")
    $("a[data-house='" + house + "']").parent().addClass("active")

  updateNavText = (text) ->
    if text
      $(".nav_text").text "house " + text
    else
      $(".nav_text").text "Select your house:"

  updateLocalStorage = (house) ->
    if house
      localStorage.setItem "house", house
    else
      localStorage.removeItem "house"

  updateURLHash = (text) ->
    if text
      window.location.hash = text
    else
      history.pushState "", document.title, window.location.pathname

  updateTheme = (house) ->
    if house
      updateLocalStorage(house)
      $("meta[name=title]").attr "content", house
      $("body").removeClass().addClass house
      $(".clear").css "display", "inline-block"
      updateNav house
      googleClickTrack("house", house)
    else
      updateLocalStorage()
      $("body").removeClass()
      $(".clear").hide()
      updateNav false
      googleClickTrack("house", "Default")

  prevNavItem = ->
    $('.house.active').prev('.house').children('a').click()

  nextNavItem = ->
    $('.house.active').next('.house').children('a').click()

  # check url hash on page load
  routeURLHash = (house) ->
    unless house
      house = window.location.hash.substring(1) || localStorage.getItem("house")
    hideHouses()
    activateHouse house
    updateNavText house
    updateURLHash house
    updateTheme house
    false

  resetTheme = ->
    $(".houses").removeClass "active"
    updateNavText false
    updateURLHash false
    updateTheme false

  $(".nav_text").click ->
    $(".houses").toggleClass "active"
    false


  $(".clear").click ->
    resetTheme()
    false

  $(".house a").click (event) ->
    event.preventDefault()
    house = $(this).data("house").toLowerCase()
    routeURLHash house
    false

  $(".nav.left").click (event) ->
    event.preventDefault()
    prevNavItem()
    false

  $(".nav.right").click (event) ->
    event.preventDefault()
    nextNavItem()
    false

  Mousetrap.bind "left", (e) ->
    e.preventDefault
    prevNavItem()
    false

  Mousetrap.bind "right", (e) ->
    e.preventDefault
    nextNavItem()
    false

  Mousetrap.bind "esc", (e) ->
    e.preventDefault
    resetTheme()
    false

  # Number keys assigned to each house

  Mousetrap.bind "1", (e) ->
    e.preventDefault
    $(".house:first-child a").click()
    false

  Mousetrap.bind "2", (e) ->
    e.preventDefault
    $(".house:nth-child(2) a").click()
    false

  Mousetrap.bind "3", (e) ->
    e.preventDefault
    $(".house:nth-child(3) a").click()
    false

  Mousetrap.bind "4", (e) ->
    e.preventDefault
    $(".house:nth-child(4) a").click()
    false


  Mousetrap.bind "5", (e) ->
    e.preventDefault
    $(".house:nth-child(5) a").click()
    false


  Mousetrap.bind "6", (e) ->
    e.preventDefault
    $(".house:nth-child(6) a").click()
    false


  Mousetrap.bind "7", (e) ->
    e.preventDefault
    $(".house:nth-child(7) a").click()
    false


  Mousetrap.bind "8", (e) ->
    e.preventDefault
    $(".house:nth-child(8) a").click()
    false


  Mousetrap.bind "9", (e) ->
    e.preventDefault
    $(".house:nth-child(9) a").click()
    false


  Mousetrap.bind "h", (e) ->
    e.preventDefault
    $(".nav_text").click()
    false

  routeURLHash()