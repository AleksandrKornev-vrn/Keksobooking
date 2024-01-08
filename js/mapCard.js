(function () {
  var offerTypeMap = {
    flat: "Квартира",
    bungalo: "Бунгало",
    house: "Дом",
    palace: "Дворец",
  };

  var fillTheCapacityBlock = function (object) {
    var textRooms;
    var textGuests;
    if (object.offer.rooms === 1) {
      textRooms = object.offer.rooms + " комната для ";
    } else if (object.offer.rooms > 1 && object.offer.rooms < 5) {
      textRooms = object.offer.rooms + " комнаты для ";
    } else {
      textRooms = object.offer.rooms + " комнат для ";
    }
    if (object.offer.guests === 1) {
      textGuests = object.offer.guests + " гостя";
    } else {
      textGuests = object.offer.guests + " гостей";
    }
    return textRooms + textGuests;
  };

  var fillTheFeaturesBlock = function (object, element) {
    var popupFeaturesElement = element.querySelector(".popup__features");
    var featuresElements = element.querySelectorAll(".feature");
    var features = object.offer.features;
    for (var i = 0; i < featuresElements.length; i++) {
      if (featuresElements[i].className.indexOf(features[i]) === -1) {
        popupFeaturesElement.removeChild(featuresElements[i]);
      }
    }
  };

  window.mapCard = {
    addMapCardToThePage: function (object) {
      var mapCardElement = page.templateElement.querySelector(".map__card").cloneNode(true);
      mapCardElement.querySelector(".popup__title").textContent = object.offer.title;
      mapCardElement.querySelector(".popup__text--address").textContent = object.offer.address + ", " + object.location.mapX + "/" + object.location.mapY;
      mapCardElement.querySelector(".popup__text--price").textContent = object.offer.price + " ₽" + "/ночь";
      mapCardElement.querySelector(".popup__type").textContent = offerTypeMap[object.offer.type];
      mapCardElement.querySelector(".popup__text--capacity").textContent = fillTheCapacityBlock(object);
      mapCardElement.querySelector(".popup__text--time").textContent = "Заезд после " + object.offer.checkin +
      ", выезд до " + object.offer.checkout;
      fillTheFeaturesBlock(object, mapCardElement);
      
      page.mapElement.insertBefore(mapCardElement, page.mapFiltersContainerElement);
    },
  };

  /*
29.На основе первого по порядку элемента из сгенерированного массива и шаблона .map__card создайте DOM-элемент объявления, заполните его данными из объекта и вставьте полученный DOM-элемент в блок .map перед блоком.map__filters-container:
o В блок .popup__description выведите описание объекта недвижимости offer.description.
o В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как src соответствующего изображения.
Замените src у аватарки пользователя — изображения, которое записано в .popup__avatar — на значения поля author.avatar отрисовываемого объекта.*/
})();
