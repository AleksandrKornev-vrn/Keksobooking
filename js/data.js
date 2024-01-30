(function () {
  window.data = {
    ads: [],
    housingType: "any",
    housingPrice: "any",
    housingRoom: "any",
    housingGuest: "any",
    loadData: function () {
      if (document.querySelector("#backend") !== null) {
        page.bodyElement.removeChild(document.querySelector("#backend"));
      }
      window.jsonCallback = function (dataBackend) {
        data.ads = dataBackend;
        page.data = dataBackend;
        data.ads.forEach(function (item) {
          if (item.offer.price < 10000) {
            item.offer.priceType = "low";
          } else if (item.offer.price > 50000) {
            item.offer.priceType = "high";
          } else {
            item.offer.priceType = "middle";
          }
        });
        mapPins.addMapPinsToThePage(data.ads);
        page.housingTypeSelectElement.addEventListener(
          "change",
          function (evt) {
            mapCard.closeMapCard();
            data.housingType = evt.target.value;
            setTimeout(function () {
              mapPins.updateMapPinsOnTheMap(
                window.sortData(data.ads),
                data.housingType,
                data.housingPrice,
                data.housingRoom,
                data.housingGuest
              );
            }, 500);
          }
        );
        page.housingPriseSelectElement.addEventListener(
          "change",
          function (evt) {
            mapCard.closeMapCard();
            data.housingPrice = evt.target.value;
            setTimeout(function () {
              mapPins.updateMapPinsOnTheMap(
                window.sortData(data.ads),
                data.housingType,
                data.housingPrice,
                data.housingRoom,
                data.housingGuest
              );
            }, 500);
          }
        );
        page.housingRoomsSelectElement.addEventListener(
          "change",
          function (evt) {
            mapCard.closeMapCard();
            data.housingRoom = +evt.target.value;
            setTimeout(function () {
              mapPins.updateMapPinsOnTheMap(
                window.sortData(data.ads),
                data.housingType,
                data.housingPrice,
                data.housingRoom,
                data.housingGuest
              );
            }, 500);
          }
        );
        page.housingGuestsSelectElement.addEventListener(
          "change",
          function (evt) {
            mapCard.closeMapCard();
            data.housingGuest = +evt.target.value;
            setTimeout(function () {
              mapPins.updateMapPinsOnTheMap(
                window.sortData(data.ads),
                data.housingType,
                data.housingPrice,
                data.housingRoom,
                data.housingGuest
              );
            }, 500);
          }
        );
      };
      var loader = document.createElement("script");
      loader.id = "backend";
      loader.src = "js/backend.js";
      page.bodyElement.appendChild(loader);
    },
  };

  window.sortData = function (arr) {
    var randomAds = [];
    for (var i = 0; i < arr.length; i++) {
      var randomNumber = Math.floor(Math.random() * (arr.length - i) + i);
      var randomAd = arr[randomNumber];
      arr[randomNumber] = arr[i];
      arr[i] = randomAd;
      randomAds.push(randomAd);
    }
    return randomAds;
  };
})();
