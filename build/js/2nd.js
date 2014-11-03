var Sample2 = (function () {
    function Sample2(name, age) {
        this.name = name;
        this.age = age;
    }
    Sample2.prototype.getName = function () {
        return this.name;
    };
    return Sample2;
})();
var mySample = new Sample2('hoge', 20);
mySample.getName();
// エラー
mySample.age;
var Fuga = (function () {
    function Fuga(str) {
        this.str = str;
    }
    Fuga.prototype.methodA = function () {
        return "I'm " + this.str;
    };
    return Fuga;
})();
var f = new Fuga("fuga!");
var sampleM1;
(function (sampleM1) {
    sampleM1.str = "string";
})(sampleM1 || (sampleM1 = {}));
var sampleM2;
(function (sampleM2) {
    var Hoge = (function () {
        function Hoge() {
        }
        Hoge.prototype.hello = function (word) {
            return "Hello, " + word;
        };
        return Hoge;
    })();
    sampleM2.Hoge = Hoge;
    var Fuga = (function () {
        function Fuga() {
        }
        return Fuga;
    })();
})(sampleM2 || (sampleM2 = {}));
var sampleC;
(function (sampleC) {
    var Piyo = sampleM2.Hoge;
    var FooBar = sampleM1.str;
    sampleC.str = new Piyo().hello(FooBar);
})(sampleC || (sampleC = {}));
