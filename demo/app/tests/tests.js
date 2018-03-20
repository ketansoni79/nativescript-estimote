var Estimote = require("nativescript-estimote").Estimote;
var estimote = new Estimote();

describe("greet function", function() {
    it("exists", function() {
        expect(estimote.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(estimote.greet()).toEqual("Hello, NS");
    });
});