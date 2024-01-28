(function () {
  window.data = {
    ads: [],
    filterAds: [],
    loadData: function () {
      if (document.querySelector("#backend") !== null) {
        page.bodyElement.removeChild(document.querySelector("#backend"));
      };
      window.jsonCallback = function (data) {
        data.ads = data;
        filterAds = ads;
        data.ads.forEach (function (item) {
          if (item.offer.price < 10000) {
            item.offer.priceType = "low";
          } else if (item.offer.price > 50000) {
            item.offer.priceType = "high";
          } else {item.offer.priceType = "middle";}
        });  
        mapPins.addMapPinsToThePage();
        page.housingTypeSelectElement.addEventListener ("change",  function (evt) {
          housingType = evt.target.value;
          mapPins.updateMapPinsOnTheMap();
        });
        page.housingPriseSelectElement.addEventListener ("change",  function (evt) {
          housingPrice = evt.target.value;
          mapPins.updateMapPinsOnTheMap();
        });
        page.housingRoomsSelectElement.addEventListener ("change",  function (evt) {
          housingRoom = +evt.target.value;
          mapPins.updateMapPinsOnTheMap();
        });
        page.housingGuestsSelectElement.addEventListener ("change",  function (evt) {
          housingGuest = +evt.target.value;
          mapPins.updateMapPinsOnTheMap();
        });
      };
      var loader = document.createElement("script");
      loader.id = "backend";
      loader.src = "js/backend.js";
      page.bodyElement.appendChild(loader);
    },
  }
})();