(function () {
  var MAP_PIN_WIDTH = 46;
  var MAP_PIN_HEIGHT = 64;



  window.mapPins = {
    createMapPinElement: function (object) {
      var mapPinElement = page.templateElement
        .querySelector(".map__pin")
        .cloneNode(true);
      var locationX = Math.floor(object.location.lat + MAP_PIN_WIDTH / 2);
      var locationY = Math.floor(object.location.lng + MAP_PIN_HEIGHT);
      mapPinElement.style =
        "left: " + locationX + "px; " + "top: " + locationY + "px;";
      mapPinElement.querySelector("img").src = object.author.avatar;
      mapPinElement.querySelector("img").alt = object.offer.title;
      mapPinElement.addEventListener("click", function () {
        var mapCardElement = page.mapElement.querySelector(".map__card");
        if (mapCardElement !== null) {
          mapCard.closeMapCard();
        }
        mapCard.openMapCard(object);
      });
      mapPinElement.addEventListener("keydown", function (evt) {
        var mapCardElement = page.mapElement.querySelector(".map__card");
        if (mapCardElement !== null) {
          mapCard.closeMapCard();
        } else if (evt.keyCode === 13) {
          mapCard.openMapCard(object);
        }
      });
      return mapPinElement;
    },
    addMapPinsToThePage: function () {
      if (document.querySelector("#backend") !== null) {
        page.bodyElement.removeChild(document.querySelector("#backend"));
      };
      mapPins.removeMapPinsToThePage();
      window.jsonCallback = function (data) {
        var fragment = document.createDocumentFragment();
        data.forEach (function (item, index) {
          if (index < 5) {
            fragment.appendChild(mapPins.createMapPinElement(item));
          }
        });
        page.mapPinsElement.appendChild(fragment);

        //

      };
      var loader = document.createElement("script");
      loader.id = "backend";
      loader.src = "js/backend.js";
      page.bodyElement.appendChild(loader);
    },
    removeMapPinsToThePage: function () {
      var mapPinElements = page.mapPinsElement.querySelectorAll(".map__pin");
      if (mapPinElements.length > 1) {
        mapPinElements.forEach (function (item, index) {
          if (index > 0) {
            page.mapPinsElement.removeChild(item);
          }
        })
      };
    }
  };
})();
