(function () {
  var MAP_PIN_MAIN_WIDTH = 62;
  var MAP_PIN_MAIN_HEIGHT = 84;

  var priseMap = {
    bungalo: "0",
    flat: "1000",
    house: "5000",
    palace: "10000",
  };

  window.form = {
    fillInTheDefaultAddressInput: function () {
      page.addressInputElement.value =
        "Tōkyō-to, Chiyoda-ku, Ichibanchō, " +
        Math.floor(
          page.mapPinMainStartCoords.mapPinMainOffSetLeft +
            MAP_PIN_MAIN_WIDTH / 2
        ) +
        "/" +
        Math.floor(
          page.mapPinMainStartCoords.mapPinMainOffSetTop +
            MAP_PIN_MAIN_HEIGHT / 2
        );
    },
    fillInTheAddressInput: function () {
      page.addressInputElement.value =
        "Tōkyō-to, Chiyoda-ku, Ichibanchō, " +
        Math.floor(page.mapPinMainElement.offsetLeft + MAP_PIN_MAIN_WIDTH / 2) +
        "/" +
        Math.floor(page.mapPinMainElement.offsetTop + MAP_PIN_MAIN_HEIGHT);
    },
    onTypeSelectElementChange: function (evt) {
      page.typeSelectOptionsElements.forEach(function (item) {
        if (item.value === evt.target.value) {
          page.priceInputElement.min = priseMap[evt.target.value];
          page.priceInputElement.placeholder = priseMap[evt.target.value];
        }
      });
    },
    onTimeSelectElementChange: function (evt) {
      for (var i = 0; i < page.timeinSelectOptionsElements.length; i++) {
        if (page.timeinSelectOptionsElements[i].value === evt.target.value) {
          page.timeoutSelectOptionsElements[i].selected = true;
        }
        if (page.timeoutSelectOptionsElements[i].value === evt.target.value) {
          page.timeinSelectOptionsElements[i].selected = true;
        }
      }
    },

    onRoomNumberSelectElementChange: function (evt) {
      page.capacitySelectOptionsElements[0].selected = true;
      for (var j=1; j<page.capacitySelectOptionsElements.length; j++) {
        page.capacitySelectOptionsElements[j].disabled = true;
      };

      for (var i=0; i<page.capacitySelectOptionsElements.length; i++) {
        if (evt.target.value !== page.capacitySelectOptionsElements[i].value && evt.target.value > page.capacitySelectOptionsElements[i].value) {
          page.capacitySelectOptionsElements[i].disabled = false;
          page.capacitySelectOptionsElements[page.capacitySelectOptionsElements.length-1].disabled = true;
        }
        if (evt.target.value === page.capacitySelectOptionsElements[i].value) {
          page.capacitySelectOptionsElements[i].selected = true;
          page.capacitySelectOptionsElements[i].disabled = false;
        }
        if (evt.target.value === "100") {
          page.capacitySelectOptionsElements[0].disabled = true;
        }
      }
    },

    onFormReset: function () {
      var mapCardElement = page.mapElement.querySelector(".map__card");
      if (mapCardElement !== null) {
        mapCard.closeMapCard();
      };
      page.mapPinMainImgElement.draggable = false;
      mapPins.removeMapPinsToThePage();
      form.fillInTheDefaultAddressInput();
      page.turnActiveState();
      page.mapPinMainElement.style.left = page.mapPinMainStartCoords.mapPinMainOffSetLeft + "px";
      page.mapPinMainElement.style.top = page.mapPinMainStartCoords.mapPinMainOffSetTop + "px";
      page.noticeFormElement.querySelector("#title").value = "";
      page.typeSelectOptionsElements[0].selected = true;
      page.priceInputElement.value = "";
      page.timeinSelectOptionsElements[0].selected = true;
      page.timeoutSelectOptionsElements[0].selected = true;
      page.roomNumberSelectOptionsElements[0].selected = true;
      page.capacitySelectOptionsElements[0].selected = true;
      page.descriptionElement.value = "";
    },
  };
})();
