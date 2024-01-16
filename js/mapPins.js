(function () {
  var MAP_PIN_WIDTH = 46;
  var MAP_PIN_HEIGHT = 64;

  window.mapPins = {
    createMapPinElement: function (object) {
      var mapPinElement = page.templateElement.querySelector(".map__pin").cloneNode(true);
      var locationX = Math.floor(object.location.mapX + MAP_PIN_WIDTH / 2);
      var locationY = Math.floor(object.location.mapY + MAP_PIN_HEIGHT);
      mapPinElement.style = "left: " + locationX + "px; " + "top: " + locationY + "px;";
      mapPinElement.querySelector("img").src = object.author.avatar;
      mapPinElement.querySelector("img").alt = object.offer.title;
      mapPinElement.addEventListener("click", function () {
        var mapCardElement = page.mapElement.querySelector(".map__card");
        if (mapCardElement !== null) {
          window.mapCard.closeMapCard();
        }
        window.mapCard.openMapCard(object);
      });
      mapPinElement.addEventListener("keydown", function (evt) {
        var mapCardElement = page.mapElement.querySelector(".map__card");
        if (mapCardElement !== null) {
          window.mapCard.closeMapCard();
        } else if (evt.keyCode === 13) {
          window.mapCard.openMapCard(object);
        }
      });
      return mapPinElement;
    },
    addMapPinsToThePage: function () {
      var ads = window.data();
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < ads.length; i++) {
        fragment.appendChild(this.createMapPinElement(ads[i]));
      }
      page.mapPinsElement.appendChild(fragment);
    },
  };
})();
