"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pibo = exports.fetchUserData = exports.sumArray = exports.sqrt1 = exports.sort = exports.palindrom = exports.len = void 0;
// ex1
function len(str) {
    return str.length;
}
exports.len = len;
// ex2
function palindrom(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
exports.palindrom = palindrom;
//ex3
function sort(numbers) {
    return numbers.sort();
}
exports.sort = sort;
// ex4
function sqrt1(num) {
    return Math.sqrt(num);
}
exports.sqrt1 = sqrt1;
// ex5
function sumArray(arr, num = 0) {
    if (arr.length === 0)
        return num;
    const n = arr.pop();
    if (n !== undefined)
        return sumArray(arr, n + num);
}
exports.sumArray = sumArray;
console.log(sumArray([1, 2, 3, 4, 5]));
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`https://jsonplaceholder.typicode.com/users/${5}`)
            .then(a => a.json())
            .then(a => a);
    });
}
exports.fetchUserData = fetchUserData;
// ex7 
function pibo(arr) {
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            return "is not pib";
        }
    }
    return arr[arr.length - 1] + arr[arr.length - 2];
}
exports.pibo = pibo;
console.log(pibo([1, 1, 2, 3, 5]));
