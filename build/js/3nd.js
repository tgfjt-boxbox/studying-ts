var panda;
(function (panda) {
    panda.hello = function () {
        return "hello";
    };
})(panda || (panda = {}));
var Singleton = (function () {
    function Singleton(name) {
        this.name = name;
        this.score = 0;
        if (Singleton._instance) {
            return Singleton._instance;
        }
        Singleton._instance = this;
    }
    Singleton.getInstance = function (name) {
        if (Singleton._instance === null) {
            Singleton._instance = new Singleton(name);
        }
        return Singleton._instance;
    };
    Singleton.prototype.setScore = function (value) {
        this.score = value;
    };
    Singleton.prototype.getScore = function () {
        return this.score;
    };
    Singleton.prototype.getName = function () {
        return this.name;
    };
    Singleton._instance = null;
    return Singleton;
})();
var santa = Singleton.getInstance("Santa");
var claus = Singleton.getInstance("Claus");
console.log(santa === claus);
var message = "str";
message = true;
