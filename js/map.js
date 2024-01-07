(function () {
  var mapElement = document.querySelector(".map");

  var mapPinsElement = mapElement.querySelector(".map__pins");

  var mapPinMainElement = mapPinsElement.querySelector(".map__pin--main");

  mapPinMainElement.addEventListener ("click", function () {
    mapElement.classList.remove("map--faded");
    window.mapPins.addMapPinsToThePage();
  });

  
})();
