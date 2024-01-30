(function () {
  var sortDataR = function (array) {
    var arrayOfRandomAds = [];
    console.log(arrayOfRandomAds);
    for (var i = 0; i < array.length; i++) {
      var randomNumber = Math.floor(Math.random() * (array.length - i) + i);
      var randomAd = array[randomNumber];
      console.log(randomAd);
      array[randomNumber] = array[i];
      array[i] = randomAd;
      arrayOfRandomAds.push(randomAd);
    };
    console.log(arrayOfRandomAds);
    return arrayOfRandomAds;
  };


  var numbers = [1, 2, 3, 4, 5];

  console.log(sortDataR(numbers));
  //console.log(sortDataR(numbers));
  //console.log(sortDataR(numbers));

  /*window.data = function () {
    var NUMBER_OF_ADS = 8;

    var ads = [];

    var possibleTitles = [
      "Большая уютная квартира",
      "Маленькая неуютная квартира",
      "Огромный прекрасный дворец",
      "Маленький ужасный дворец",
      "Красивый гостевой домик",
      "Некрасивый негостеприимный домик",
      "Уютное бунгало далеко от моря",
      "Неуютное бунгало по колено в воде",
    ];

    var possibleTypes = ["palace", "flat", "house", "bungalo"];

    var possibleCheckin = ["12:00", "13:00", "14:00"];

    var possibleCheckout = ["12:00", "13:00", "14:00"];

    var possibleFeatures = [
      "wifi",
      "dishwasher",
      "parking",
      "washer",
      "elevator",
      "conditioner",
    ];

    var possiblePhotos = [
      "img/photosOfHousing/hotel0small.jpg",
      "img/photosOfHousing/hotel1small.jpg",
      "img/photosOfHousing/hotel2small.jpg",
    ];

    var createAvatar = function (adNumber) {
      return "img/avatars/user0" + adNumber + ".png";
    };

    var createTitle = function (adNumber) {
      return possibleTitles[adNumber - 1];
    };

    var createFeatures = function (array) {
      var randomNumberOfFeatures = Math.ceil(Math.random() * array.length);
      return array.slice(0, randomNumberOfFeatures);
    };

    var createPhotos = function (array) {
      var arrayOfRandomPhotos = [];
      for (var i = 0; i < array.length; i++) {
        var randomNumber = Math.floor(Math.random() * (array.length - i) + i);
        var randomPhoto = array[randomNumber];
        array[randomNumber] = array[i];
        array[i] = randomPhoto;
        arrayOfRandomPhotos.push(randomPhoto);
      }
      return arrayOfRandomPhotos;
    };

    var getRandomValue = function (array) {
      var randomNumber = Math.floor(Math.random() * array.length);
      return array[randomNumber];
    };

    var createAd = function (adNumber) {
      var ad = {
        author: {
          avatar: createAvatar(adNumber),
        },
        offer: {
          title: createTitle(adNumber),
          address: "Tōkyō-to, Chiyoda-ku, Ichibanchō",
          price: Math.ceil(Math.random() * (30000 - 1000) + 1000),
          type: getRandomValue(possibleTypes),
          rooms: Math.floor(Math.random() * 5 + 1),
          guests: Math.floor(Math.random() * 8 + 1),
          checkin: getRandomValue(possibleCheckin),
          checkout: getRandomValue(possibleCheckout),
          features: createFeatures(possibleFeatures),
          description: "Великолепное жильё в Токио. Подходит как туристам, так и бизнесменам. Жильё полностью укомплектовано и недавно отремонтировано!",
          photos: createPhotos(possiblePhotos),
        },
        location: {
          mapX: Math.floor(Math.random() * 1200 + 1),
          mapY: Math.ceil(Math.random() * (630 - 130) + 130),
        },
      };
      return ad;
    };

    for (var i = 1; i <= NUMBER_OF_ADS; i++) {
      ads.push(createAd(i));
    }
    return ads;
  };
*/})();