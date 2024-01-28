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
      mapPins.removeMapPinsToThePage();
      var fragment = document.createDocumentFragment();
        ads.forEach (function (item, index) {
          if (index < numberMapPins) {
            fragment.appendChild(mapPins.createMapPinElement(item));
          }
        });
        page.mapPinsElement.appendChild(fragment);
    },

    updateMapPinsOnTheMap: function () {
      var getRank = function (ad) {
        var rank = 0;
        if (ad.offer.type === housingType) {
          rank += 1;
          filterAds = filterAds.filter (function (item) {
            return item.offer.type === housingType;
          });
        }
        if (ad.offer.priceType === housingPrice) {
          rank += 1;
          filterAds = filterAds.filter (function (item) {
            return item.offer.priceType === housingPrice;
          });
        }
        if (ad.offer.rooms === housingRoom) {
          rank += 1;
          filterAds = filterAds.filter (function (item) {
            return item.offer.rooms === housingRoom;
          });
        }
        if (ad.offer.guests === housingGuest) {
          rank += 1;
          filterAds = filterAds.filter (function (item) {
            return item.offer.guests === housingGuest;
          });
        }
        return rank; 
      };
      ads.sort (function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        return rankDiff;
      });
      numberMapPins = filterAds.length;
      if (numberMapPins <= 5) {
        mapPins.addMapPinsToThePage();
      }
      if (numberMapPins > 5) {
        numberMapPins = 5;
        mapPins.addMapPinsToThePage();
      }
      if (numberMapPins === 0) {
        alert ("Нет объявлений с заданными параметрами!");
      }
      filterAds = ads;
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
