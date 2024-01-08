(function () {
  var MAP_PIN_WIDTH = 65;

  var MAP_PIN_HEIGHT = 65;

  window.mapPins = {
    createMapPinElement : function (object) {
      var mapPinElement = page.templateElement.querySelector(".map__pin").cloneNode(true);
      var locationX = Math.floor(object.location.mapX + MAP_PIN_WIDTH / 2);
      var locationY = Math.floor(object.location.mapY + MAP_PIN_HEIGHT);
      mapPinElement.style =
        "left: " + locationX + "px; " + "top: " + locationY + "px;";
      mapPinElement.querySelector("img").src = object.author.avatar;
      mapPinElement.querySelector("img").alt = object.offer.title;
      mapPinElement.addEventListener("click", function () {
        window.mapCard.addMapCardToThePage(object);
      });
      return mapPinElement;
    },
    addMapPinsToThePage : function () {
      var ads = window.data();
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < ads.length; i++) {
        fragment.appendChild(this.createMapPinElement(ads[i]));
      }
      page.mapPinsElement.appendChild(fragment);
    }
  };
})();