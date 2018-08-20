"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegexp = /^[0-9]+$/;

var ZipCodeValidator = function () {
    function ZipCodeValidator() {
        _classCallCheck(this, ZipCodeValidator);
    }

    _createClass(ZipCodeValidator, [{
        key: "isAcceptables",
        value: function isAcceptables(s) {
            return s.length === 5 && exports.numberRegexp.test(s);
        }
    }]);

    return ZipCodeValidator;
}();

exports.ZipCodeValidator = ZipCodeValidator;
//# sourceMappingURL=ZipCodeValidator.js.map