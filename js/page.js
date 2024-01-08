(function () {
  window.page = {
    mapElement: document.querySelector(".map"),
    mapPinsElement: document.querySelector(".map__pins"),
    mapPinMainElement: document.querySelector(".map__pin--main"),
    mapFiltersContainerElement: document.querySelector(".map__filters-container"),
    templateElement: document.querySelector("template").content
  };

  page.mapPinMainElement.addEventListener ("click", function () {
    page.mapElement.classList.remove("map--faded");
    window.mapPins.addMapPinsToThePage();
  });
})();



