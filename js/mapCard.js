(function () {

  
  window.mapCard = {
    addMapCardToThePage : function (object) {
      console.log (object.location.mapX)
    }
  };

  /*
29.На основе первого по порядку элемента из сгенерированного массива и шаблона .map__card создайте DOM-элемент объявления, заполните его данными из объекта и вставьте полученный DOM-элемент в блок .map перед блоком.map__filters-container:
o Выведите заголовок объявления offer.title в заголовок .popup__title.
o Выведите адрес offer.address в блок .popup__text--address.
o Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}}₽/ночь. Например, 5200₽/ночь.
o В блок .popup__type выведите тип жилья offer.type: Квартира для flat, Бунгало для bungalo, Дом для house, Дворец для palace.
o Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacityстрокой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, 2 комнаты для 3 гостей.
o Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, заезд после 14:00, выезд до 12:00.
o В список .popup__features выведите все доступные удобства в объявлении.
o В блок .popup__description выведите описание объекта недвижимости offer.description.
o В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как src соответствующего изображения.
Замените src у аватарки пользователя — изображения, которое записано в .popup__avatar — на значения поля author.avatar отрисовываемого объекта.*/
})();