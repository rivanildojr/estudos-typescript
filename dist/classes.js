"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old");
    };
    Object.defineProperty(UserAccount.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAccount.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.logCharDetails = function () {
        console.log("The Player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at level " + this.level);
    };
    return CharAccount;
}(UserAccount));
// const rivas = new UserAccount("Rivas", 30);
// console.log(rivas);
// console.log(rivas.name);
// rivas.logDetails()
// console.log(rivas.getName);
// rivas.setName = "RivasJr";
// console.log(rivas.getName);
var junior = new CharAccount("Junior", 23, "jr", 20);
console.log(junior);
console.log(junior.name);
console.log(junior.level);
junior.logDetails();
junior.logCharDetails();
