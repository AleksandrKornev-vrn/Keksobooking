(function () {
  window.page = {
    mapElement: document.querySelector(".map"),
    mapPinsElement: document.querySelector(".map__pins"),
    mapPinMainElement: document.querySelector(".map__pin--main"),
    mapFiltersContainerElement: document.querySelector(".map__filters-container"),
    noticeFormElement: document.querySelector(".notice__form"),
    noticeFormFieldsetsElements: document.querySelector(".notice__form").querySelectorAll("fieldset"),
    addressInputElement: document.querySelector("#address"),
    typeSelectElement: document.querySelector("#type"),
    typeSelectOptionsElements: document.querySelector("#type").querySelectorAll("option"),
    priceInputElement: document.querySelector("#price"),
    timeinSelectElement: document.querySelector("#timein"),
    timeinSelectOptionsElements: document.querySelector("#timein").querySelectorAll("option"),
    timeoutSelectElement: document.querySelector("#timeout"),
    timeoutSelectOptionsElements: document.querySelector("#timeout").querySelectorAll("option"),
    //
    roomNumberSelectElement: document.querySelector("#room_number"),
    roomNumberSelectOptionsElements: document.querySelector("#room_number").querySelectorAll("option"),
    capacitySelectElement: document.querySelector("#capacity"),
    capacitySelectOptionsElements: document.querySelector("#capacity").querySelectorAll("option"),
    //
    templateElement: document.querySelector("template").content,
    enableActiveState: function () {
      this.mapElement.classList.remove("map--faded");
      this.noticeFormElement.classList.remove("notice__form--disabled");
      this.noticeFormFieldsetsElements.forEach (function (item) {
        item.removeAttribute("disabled");
      });
    }
  };

  form.fillInTheAddressInput();

  page.mapPinMainElement.addEventListener ("mouseup", function () {
    page.enableActiveState();
    mapPins.addMapPinsToThePage();
    form.fillInTheAddressInput();
  });

  page.typeSelectElement.addEventListener ("change", form.onTypeSelectElementChange);

  page.timeinSelectElement.addEventListener ("change", form.onTimeSelectElementChange);

  page.timeoutSelectElement.addEventListener ("change", form.onTimeSelectElementChange);

  page.roomNumberSelectElement.addEventListener ("change", form.onRoomNumberSelectElementChange);

})();



