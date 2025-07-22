;
(function () {
    var a = 5;
    var b = a.toString();
    var e = new Boolean(a).valueOf(); //так как конструктор типа является объектом, надо брать значение
    var c = "Hello World!";
    var d = +c;
    var user = {
        name: "John Doe",
        email: "johndoe@example.com",
        login: "johndoe",
        password: "123456",
    };
})();
