var str1 = "文字列のテスト1";
// エラー
var str2 = "文字列のテスト2";
var str3 = "文字列のテスト3";
// エラー
str3 = 1;
var list = [1, 2, 3];
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 1 /* Green */;
var obj = {
    name: "tgfjt"
};
/**
 * [hello]
 * @return {void}
 */
function hello() {
    alert("hello");
}
var hello2 = function () {
    alert("hello");
};
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
greeter({
    firstname: "ho",
    lastname: "ge"
});
var func;
func = function (word) {
    return "Hi, " + word;
};
var Sample = (function () {
    function Sample() {
    }
    // arrow関数では、this は 受け継がれる。
    Sample.prototype.helloA = function () {
        var _this = this;
        return function () { return "Hello, " + _this.name; };
    };
    // 普通にやると、globalになるはず
    Sample.prototype.helloB = function () {
        return function () {
            return "Hello, " + this.name;
        };
    };
    return Sample;
})();
// var foo: {
//  (name: string): string;
// };
// foo = function(name: string): string {
//  return "Hello, " + x;
// };
// foo("TypeScript");
var foo;
foo = function (x, y) {
    if (typeof x === "number") {
        console.log("number", x);
    }
    else {
        console.log("not number", x);
    }
};
foo(123);
foo("TypeScript");
var objF = {
    name: 'yoho',
    greet: function (word) {
        return "Hi! " + word;
    }
};
