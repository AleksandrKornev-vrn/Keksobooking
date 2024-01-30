(function () {
  var offerTypeMap = {
    flat: "Квартира",
    bungalow: "Бунгало",
    house: "Дом",
    palace: "Дворец",
    hotel: "Отель",
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
      if (!featuresElements[i].className.includes(features[i])) {
        popupFeaturesElement.removeChild(featuresElements[i]);
      }
    }
  };

  var changeThePicture = function (element, way) {
    element.addEventListener("mouseover", function (evt) {
      var fragmentOne = way.slice(0, 26);
      var fragmentTwo = way.slice(31, 35);
      evt.target.src = fragmentOne + fragmentTwo;
    });
    element.addEventListener("mouseout", function (evt) {
      evt.target.src = way;
    });
  };

  var fillThePicturesBlock = function (object, element) {
    var photos = object.offer.photos;
    var popupPicturesElement = element.querySelector(".popup__pictures");
    for (var i = 0; i < photos.length; i++) {
      var pictureElement = popupPicturesElement
        .querySelector("li")
        .cloneNode(true);
      pictureElement.querySelector("img").src = photos[i];
      changeThePicture(pictureElement, photos[i]);
      popupPicturesElement.appendChild(pictureElement);
    }
    popupPicturesElement.removeChild(popupPicturesElement.children[0]);
  };

  window.mapCard = {
    onMapCardEscPress: function (evt) {
      if (evt.keyCode === 27) {
        mapCard.closeMapCard();
      }
    },
    openMapCard: function (object) {
      var mapCardElement = page.templateElement
        .querySelector(".map__card")
        .cloneNode(true);
      mapCardElement.querySelector(".popup__avatar").src = object.author.avatar;
      mapCardElement.querySelector(".popup__title").textContent =
        object.offer.title;
      mapCardElement.querySelector(".popup__text--address").textContent =
        object.offer.address +
        ", " +
        object.location.lat +
        "/" +
        object.location.lng;
      mapCardElement.querySelector(".popup__text--price").textContent =
        object.offer.price + " ₽" + "/ночь";
      mapCardElement.querySelector(".popup__type").textContent =
        offerTypeMap[object.offer.type];
      mapCardElement.querySelector(".popup__text--capacity").textContent =
        fillTheCapacityBlock(object);
      mapCardElement.querySelector(".popup__text--time").textContent =
        "Заезд после " +
        object.offer.checkin +
        ", выезд до " +
        object.offer.checkout;
      mapCardElement.querySelector(".popup__description").textContent =
        object.offer.description;
      fillTheFeaturesBlock(object, mapCardElement);
      fillThePicturesBlock(object, mapCardElement);
      page.mapElement.insertBefore(
        mapCardElement,
        page.mapFiltersContainerElement
      );
      var popupCloseElement = page.mapElement.querySelector(".popup__close");
      popupCloseElement.addEventListener("click", function () {
        mapCard.closeMapCard();
      });
      popupCloseElement.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 13) {
          mapCard.closeMapCard();
        }
      });
      document.addEventListener("keydown", mapCard.onMapCardEscPress);
    },
    closeMapCard: function () {
      var mapCardElement = page.mapElement.querySelector(".map__card");
      if (mapCardElement !== null) {
        page.mapElement.removeChild(mapCardElement);
        document.removeEventListener("keydown", mapCard.onMapCardEscPress);
      }
    },
  };
})();
