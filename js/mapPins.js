(function () {
  var MAP_PIN_WIDTH = 46;

  var MAP_PIN_HEIGHT = 64;

  window.mapPins = {
    numberMapPins: 5,
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
        mapCard.closeMapCard();
        mapCard.openMapCard(object);
      });
      mapPinElement.addEventListener("keydown", function (evt) {
        mapCard.closeMapCard();
        if (evt.keyCode === 13) {
          mapCard.openMapCard(object);
        }
      });
      return mapPinElement;
    },

    addMapPinsToThePage: function (array) {
      mapPins.removeMapPinsToThePage();
      var fragment = document.createDocumentFragment();
      array.forEach(function (item, index) {
        if (index < mapPins.numberMapPins) {
          fragment.appendChild(mapPins.createMapPinElement(item));
        }
      });
      page.mapPinsElement.appendChild(fragment);
    },

    updateMapPinsOnTheMap: function (array, type, price, room, guest, features) {
      var filterArray = array;
      var getRank = function (ad) {
        var rank = 0;
        if (ad.offer.type === type) {
          rank += 1;
          filterArray = filterArray.filter(function (item) {
            return item.offer.type === type;
          });
        }
        if (ad.offer.priceType === price) {
          rank += 1;
          filterArray = filterArray.filter(function (item) {
            return item.offer.priceType === price;
          });
        }
        if (ad.offer.rooms === room) {
          rank += 1;
          filterArray = filterArray.filter(function (item) {
            return item.offer.rooms === room;
          });
        }
        if (ad.offer.guests === guest) {
          rank += 1;
          filterArray = filterArray.filter(function (item) {
            return item.offer.guests === guest;
          });
        }
        features.forEach (function (el) {
          if (ad.offer.features.includes (el)) {
            rank += 1;
            filterArray = filterArray.filter(function (item) {
              return item.offer.features.includes (el);
            });
          }
        })
        return rank;
      };
      array.sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        return rankDiff;
      });
      mapPins.numberMapPins = filterArray.length;
      if (mapPins.numberMapPins <= 5 && mapPins.numberMapPins > 0) {
        mapPins.addMapPinsToThePage(array);
      } else if (mapPins.numberMapPins > 5) {
        mapPins.numberMapPins = 5;
        mapPins.addMapPinsToThePage(array);
      } else if (mapPins.numberMapPins === 0) {
        mapPins.removeMapPinsToThePage();
        alert("Нет объявлений с заданными параметрами!");
      }
    },

    removeMapPinsToThePage: function () {
      var mapPinElements = page.mapPinsElement.querySelectorAll(".map__pin");
      if (mapPinElements.length > 1) {
        mapPinElements.forEach(function (item, index) {
          if (index > 0) {
            page.mapPinsElement.removeChild(item);
          }
        });
      }
    },
  };
})();
