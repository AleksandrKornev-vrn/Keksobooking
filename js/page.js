(function () {
  window.page = {
    bodyElement: document.querySelector("body"),
    mapElement: document.querySelector(".map"),

    mapPinsElement: document.querySelector(".map__pins"),
    mapPinMainElement: document.querySelector(".map__pin--main"),
    mapPinMainImgElement: document.querySelector(".map__pin--main").children[0],

    mapFiltersContainerElement: document.querySelector(
      ".map__filters-container"
    ),
    mapFiltersInputElements: document
      .querySelector(".map__filters-container")
      .querySelectorAll("input"),
    housingTypeSelectElement: document.querySelector("#housing-type"),
    housingTypeSelectOptionsElements: document
      .querySelector("#housing-type")
      .querySelectorAll("option"),
    housingPriseSelectElement: document.querySelector("#housing-price"),
    housingPriseSelectOptionsElements: document
      .querySelector("#housing-price")
      .querySelectorAll("option"),
    housingRoomsSelectElement: document.querySelector("#housing-rooms"),
    housingRoomsSelectOptionsElements: document
      .querySelector("#housing-rooms")
      .querySelectorAll("option"),
    housingGuestsSelectElement: document.querySelector("#housing-guests"),
    housingGuestsSelectOptionsElements: document
      .querySelector("#housing-guests")
      .querySelectorAll("option"),

    noticeFormElement: document.querySelector(".notice__form"),
    noticeFormFieldsetsElements: document
      .querySelector(".notice__form")
      .querySelectorAll("fieldset"),
    avatarInputElement: document.querySelector("#avatar"),
    noticeFormPreviewImageElement: document
      .querySelector(".notice__preview")
      .querySelector("img"),
    imagesInputElement: document.querySelector("#images"),
    formPhotoUploadElement: document
      .querySelector(".form__photo-container")
      .querySelector(".upload"),
    addressInputElement: document.querySelector("#address"),
    typeSelectElement: document.querySelector("#type"),
    typeSelectOptionsElements: document
      .querySelector("#type")
      .querySelectorAll("option"),
    priceInputElement: document.querySelector("#price"),
    timeinSelectElement: document.querySelector("#timein"),
    timeinSelectOptionsElements: document
      .querySelector("#timein")
      .querySelectorAll("option"),
    timeoutSelectElement: document.querySelector("#timeout"),
    timeoutSelectOptionsElements: document
      .querySelector("#timeout")
      .querySelectorAll("option"),
    roomNumberSelectElement: document.querySelector("#room_number"),
    roomNumberSelectOptionsElements: document
      .querySelector("#room_number")
      .querySelectorAll("option"),
    capacitySelectElement: document.querySelector("#capacity"),
    capacitySelectOptionsElements: document
      .querySelector("#capacity")
      .querySelectorAll("option"),
    noticeFormFeaturesInputElements: document
      .querySelector(".notice__form")
      .querySelector(".features")
      .querySelectorAll("input"),
    descriptionElement: document.querySelector("#description"),
    formResetElement: document.querySelector(".form__reset"),

    templateElement: document.querySelector("template").content,

    mapPinMainStartCoords: {
      mapPinMainOffSetLeft:
        document.querySelector(".map__pin--main").offsetLeft,
      mapPinMainOffSetTop: document.querySelector(".map__pin--main").offsetTop,
    },

    enableActiveState: function () {
      this.mapElement.classList.remove("map--faded");
      this.noticeFormElement.classList.remove("notice__form--disabled");
      this.noticeFormFieldsetsElements.forEach(function (item) {
        item.removeAttribute("disabled");
      });
    },

    turnActiveState: function () {
      this.mapElement.classList.add("map--faded");
      this.noticeFormElement.classList.add("notice__form--disabled");
      this.noticeFormFieldsetsElements.forEach(function (item) {
        item.disabled = true;
      });
    },

    resetCheckedFeatures: function () {
      page.mapFiltersInputElements.forEach(function (item) {
        if (item.checked === true) {
          item.checked = false;
        }
      });
      page.noticeFormFeaturesInputElements.forEach(function (item) {
        if (item.checked === true) {
          item.checked = false;
        }
      });
    },

    data: [],
  };

  form.fillInTheDefaultAddressInput();

  page.mapPinMainElement.addEventListener("mouseup", function () {
    if (!page.mapPinMainImgElement.draggable) {
      page.mapPinMainImgElement.draggable = true;
      page.enableActiveState();
      data.loadData();
      form.fillInTheAddressInput();
    } else {
      mapCard.closeMapCard();
      data.housingType = "any";
      data.housingPrice = "any";
      data.housingRoom = "any";
      data.housingGuest = "any";
      data.housingFeatures = [];
      page.housingTypeSelectOptionsElements[0].selected = true;
      page.housingPriseSelectOptionsElements[0].selected = true;
      page.housingRoomsSelectOptionsElements[0].selected = true;
      page.housingGuestsSelectOptionsElements[0].selected = true;
      page.resetCheckedFeatures();
      mapPins.numberMapPins = 5;
      mapPins.addMapPinsToThePage(window.sortData(page.data));
      form.fillInTheAddressInput();
    }
  });

  page.mapPinMainElement.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      var newLocation = {
        x: page.mapPinMainElement.offsetLeft - shift.x,
        y: page.mapPinMainElement.offsetTop - shift.y,
      };

      var limits = {
        top: 130,
        right: page.mapElement.clientWidth,
        bottom: 630,
        left: page.mapElement.clientLeft,
      };

      if (newLocation.x > limits.right) {
        newLocation.x = limits.right;
      } else if (newLocation.x < limits.left) {
        newLocation.x = limits.left;
      }

      if (newLocation.y > limits.bottom) {
        newLocation.y = limits.bottom;
      } else if (newLocation.y < limits.top) {
        newLocation.y = limits.top;
      }

      page.mapPinMainElement.style.left = newLocation.x + "px";
      page.mapPinMainElement.style.top = newLocation.y + "px";
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener("mouseup", onMouseUp);
  });

  page.avatarInputElement.addEventListener(
    "change",
    form.onInputTypeFileChange
  );

  page.imagesInputElement.addEventListener(
    "change",
    form.onInputTypeFileChange
  );

  page.typeSelectElement.addEventListener(
    "change",
    form.onTypeSelectElementChange
  );

  page.timeinSelectElement.addEventListener(
    "change",
    form.onTimeSelectElementChange
  );

  page.timeoutSelectElement.addEventListener(
    "change",
    form.onTimeSelectElementChange
  );

  page.roomNumberSelectElement.addEventListener(
    "change",
    form.onRoomNumberSelectElementChange
  );

  page.formResetElement.addEventListener("click", function () {
    form.onFormReset();
  });

  page.formResetElement.addEventListener("keydown", function (evt) {
    if (evt.keycode === 13) {
      form.onFormReset();
    }
  });
})();