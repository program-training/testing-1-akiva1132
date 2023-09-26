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
const ex1_1 = require("./ex1");
const ex1_2 = require("./ex1");
const ex1_3 = require("./ex1");
const ex1_4 = require("./ex1");
const ex1_5 = require("./ex1");
const ex1_6 = require("./ex1");
const ex1_7 = require("./ex1");
describe("len", () => {
    test("len", () => {
        expect((0, ex1_1.len)("akiva1")).toBe(6);
    });
});
describe("pali", () => {
    test("true", () => {
        expect((0, ex1_2.palindrom)("111222111")).toBe(true);
    });
});
describe("sort", () => {
    test("sort", () => {
        expect((0, ex1_3.sort)([1])).toEqual([1]);
    });
});
describe("sort", () => {
    test("sort", () => {
        expect((0, ex1_3.sort)([1])).toEqual([1]);
    });
});
describe("sqrt1", () => {
    test("sqrt1", () => {
        expect((0, ex1_4.sqrt1)(4)).toBe(2);
    });
});
describe("sumArray", () => {
    test("sumArray", () => {
        expect((0, ex1_5.sumArray)([4, 1])).toBe(5);
        expect((0, ex1_5.sumArray)([4, 10])).toBeGreaterThan(9);
    });
});
describe("fetchUserData", () => {
    test("fetchUserData", () => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield (0, ex1_6.fetchUserData)();
        expect(result).toEqual({
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: { lat: '-31.8129', lng: '62.5342' }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        });
    }));
});
describe("pibo", () => {
    test("pibo", () => {
        expect((0, ex1_7.pibo)([1, 1, 2, 3, 5])).toBe(8);
        expect((0, ex1_7.pibo)([1, 1, 2, 3, 4])).toBe("is not pib");
    });
});
