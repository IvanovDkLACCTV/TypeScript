var USer = /** @class */ (function () {
    function USer() {
    }
    Object.defineProperty(USer.prototype, "login", {
        get: function () {
            return "no_Login";
        },
        // getLogin(l: string){
        //     this.login = 'user' + l
        // }
        set: function (l) {
            this._login = 'user-' + l;
        },
        enumerable: false,
        configurable: true
    });
    return USer;
}());
// @ts-ignore
var user = new USer();
user.login = "MyLogin";
console.log(user.login);
