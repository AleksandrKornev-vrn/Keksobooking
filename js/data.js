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
      window.jsonCallback = function (data) {
        data.ads = data;
        page.data = data;
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
        page.housingTypeSelectElement.addEventListener("change", function (evt) {
          window.sortData(data.ads);
          data.housingType = evt.target.value;
          mapPins.updateMapPinsOnTheMap(
              data.ads,
              data.housingType,
              data.housingPrice,
              data.housingRoom,
              data.housingGuest
            );
          }
        );
        page.housingPriseSelectElement.addEventListener("change", function (evt) {
            data.housingPrice = evt.target.value;
            mapPins.updateMapPinsOnTheMap(
              data.ads,
              data.housingType,
              data.housingPrice,
              data.housingRoom,
              data.housingGuest
            );
          }
        );
        page.housingRoomsSelectElement.addEventListener("change", function (evt) {
            data.housingRoom = +evt.target.value;
            mapPins.updateMapPinsOnTheMap(
              data.ads,
              data.housingType,
              data.housingPrice,
              data.housingRoom,
              data.housingGuest
            );
          }
        );
        page.housingGuestsSelectElement.addEventListener("change", function (evt) {
            data.housingGuest = +evt.target.value;
            mapPins.updateMapPinsOnTheMap(
              data.ads,
              data.housingType,
              data.housingPrice,
              data.housingRoom,
              data.housingGuest
            );
          }
        );
      };
      var loader = document.createElement("script");
      loader.id = "backend";
      loader.src = "js/backend.js";
      page.bodyElement.appendChild(loader);
    }
  };
  
  window.sortData = function (array) {
    var arrayOfRandomAds = [];
    for (var i = 0; i < array.length; i++) {
      var randomNumber = Math.floor(Math.random() * (array.length - i) + i);
      var randomAd = array[randomNumber];
      array[randomNumber] = array[i];
      array[i] = randomAd;
      arrayOfRandomAds.push(randomAd);
    }
    data.ads = arrayOfRandomAds;
    page.data = arrayOfRandomAds;
  };
})();
