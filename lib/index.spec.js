"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("sum", () => {
    it("sums two numbers", () => {
        expect(index_1.sum(1, 2)).toEqual(3);
    });
});
