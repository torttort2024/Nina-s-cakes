emailjs.init("Qnu3GvhQohGYBldEK");

function send() {

    if (document.getElementById("forma").checkValidity() == false) {
        document.getElementById("forma").reportValidity();
        return;
    }

    var date = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        zakaz: document.getElementById("zakaz").value
    };

  emailjs.send("service_ml72cpr", "template_6avwvsk", data)
        .then(function (raspuns) {
            alert("Заказ отправлен");
            form.reset(); // Очистка формы ПОСЛЕ успешной отправки
        }, function (error) {
            alert("Ошибка при отправке: " + JSON.stringify(error));
        });

}
