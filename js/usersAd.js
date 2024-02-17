(function () {
  page.noticeFormElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var formData = new FormData(page.noticeFormElement);
    var getSourceAvatar = function () {
      if (formData.get("avatar").name !== "") {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          newAd.author.avatar = reader.result;
        });
        reader.readAsDataURL(formData.get("avatar"));
      }
    };
    getSourceAvatar();

    var newAd = {
      "author": {
        "avatar": "img/muffin.png",
      },
      "offer": {
        "title": formData.get("title"),
        "address": formData.get("address"),
        "price": +formData.get("price"),
        "type": formData.get("type"),
        "rooms": +formData.get("rooms"),
        "guests": +formData.get("capacity"),
        "checkin": formData.get("timein"),
        "checkout": formData.get("timeout"),
        "features": formData.getAll("features"),
        "description": formData.get("description"),
        "photos": ["img/photosOfHousing/hotel2small.jpg"]
      },
      "location": {
        "lat": Math.floor(Math.random() * 1200 + 1),
        "lng": Math.ceil(Math.random() * (630 - 130) + 130)
      }
    };

    data.userAds.push(newAd);
    newAd.author.avatar = "img/muffin.png";
    form.onFormReset();
    alert(
      "Информация о Вашем объявлении опубликована!"
    );
  });
})();