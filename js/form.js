(function () {
  var MAP_PIN_MAIN_WIDTH = 62;
  var MAP_PIN_MAIN_HEIGHT = 84;

  var priseMap = {
    "bungalo": "0",
    "flat": "1000",
    "house": "5000",
    "palace": "10000",
  };

  window.form = {
    fillInTheAddressInput: function () {
      page.addressInputElement.value =
        Math.floor(page.mapPinMainElement.offsetLeft + MAP_PIN_MAIN_WIDTH / 2) +
        ", " +
        Math.floor(page.mapPinMainElement.offsetTop + MAP_PIN_MAIN_HEIGHT);
    },
    onTypeSelectElementChange: function (evt) {
      page.typeSelectOptionsElements.forEach (function (item) {
        if (item.value === evt.target.value) {
          page.priceInputElement.min = priseMap[evt.target.value];
          page.priceInputElement.placeholder = priseMap[evt.target.value];
        }
      })
    },
    onTimeSelectElementChange: function (evt) {
      for (var i = 0; i < page.timeinSelectOptionsElements.length; i++) {
        if (page.timeinSelectOptionsElements[i].value === evt.target.value) {
          page.timeoutSelectOptionsElements[i].selected = true;
        }
        if (page.timeoutSelectOptionsElements[i].value === evt.target.value) {
          page.timeinSelectOptionsElements[i].selected = true;
        }
      };
    },
    onRoomNumberSelectElementChange: function (evt) {
      switch (evt.target.value) {
        case "1":
          page.capacitySelectOptionsElements[0].selected = true;
          page.capacitySelectOptionsElements[0].disabled = false;
          page.capacitySelectOptionsElements[1].disabled = true;
          page.capacitySelectOptionsElements[2].disabled = true;
          page.capacitySelectOptionsElements[3].disabled = true;
          break;
        case "2":
          page.capacitySelectOptionsElements[1].selected = true;
          page.capacitySelectOptionsElements[0].disabled = false;
          page.capacitySelectOptionsElements[1].disabled = false;
          page.capacitySelectOptionsElements[2].disabled = true;
          page.capacitySelectOptionsElements[3].disabled = true;
          break;
        case "3":
          page.capacitySelectOptionsElements[2].selected = true;
          page.capacitySelectOptionsElements[0].disabled = false;
          page.capacitySelectOptionsElements[1].disabled = false;
          page.capacitySelectOptionsElements[2].disabled = false;
          page.capacitySelectOptionsElements[3].disabled = true;
          break;
        case "100":
          page.capacitySelectOptionsElements[3].selected = true;
          page.capacitySelectOptionsElements[0].disabled = true;
          page.capacitySelectOptionsElements[1].disabled = true;
          page.capacitySelectOptionsElements[2].disabled = true;
          page.capacitySelectOptionsElements[3].disabled = false;
          break;
        default:
          throw new Error(
            "Выбрано не верное значение"
          );
      }
    },
  };
})();