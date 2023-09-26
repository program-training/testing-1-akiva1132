import { len } from "./ex1";
import { palindrom } from "./ex1";
import { sort } from "./ex1";
import { sqrt1 } from "./ex1";
import {sumArray} from "./ex1";
import { fetchUserData } from "./ex1";
import { pibo } from "./ex1";
describe("len", () => {
    test("len", () => {
        expect(len("akiva1")).toBe(6);
    });
});

describe("pali", () => {
    test("true", () => {
        expect(palindrom("111222111")).toBe(true);
    });
});

describe("sort", () => {
    test("sort", () => {
        expect(sort([1])).toEqual([ 1 ]);
    });
});
describe("sort", () => {
    test("sort", () => {
        expect(sort([1])).toEqual([ 1 ]);
    });
});
describe("sqrt1", () => {
    test("sqrt1", () => {
        expect(sqrt1(4)).toBe(2);
    });
});
describe("sumArray", () => {
    test("sumArray", () => {
        expect(sumArray([4, 1])).toBe(5);
        expect(sumArray([4, 10])).toBeGreaterThan(9);
    });
});
describe("fetchUserData", () => {
    test("fetchUserData", async () => {
        let result = await fetchUserData()
        expect(result).toEqual(
            {
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
              }
        );
    });
});

describe("pibo", () => {
    test("pibo", () => {
        expect(pibo([1, 1, 2, 3, 5])).toBe(8);
        expect(pibo([1, 1, 2, 3, 4])).toBe("is not pib");
    });
});