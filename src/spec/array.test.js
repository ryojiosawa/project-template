/**
 * Created by rosawa on 7/3/14.
 */
describe('Test various Array methods', function () {

    it('shift', function () {
        var countries = ["USA", "Japan", "Canada", "France"];
        var shifted = countries.shift();
        shifted.should.be.equal("USA");
        countries.should.eql(["Japan", "Canada", "France"]);
        shifted = countries.shift();
        shifted.should.be.equal("Japan");
        countries.should.eql(["Canada", "France"]);
    });

    // unshift adds one or more elements to the beginning of an array
    it("unshift", function () {
        var countries = ["Japan", "Canada", "France"];
        countries.unshift("USA").should.be.equal(4);
        countries.should.eql(["USA", "Japan", "Canada", "France"]);
        countries.unshift("Germany", "UK").should.be.equal(6);
        countries.should.eql(["Germany", "UK", "USA", "Japan", "Canada", "France"]);
    });

    it("join", function () {
        var a = ["Japan", "is", "awesome"];
        a.join(" ").should.eql("Japan is awesome");
    });

    it("slice", function () {
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        fruits.slice(1, 3).should.eql(["Orange", "Lemon"]);
        var mini_fruits = fruits.slice(1, 3);
        mini_fruits[0].should.exactly(fruits[1]);
    });

    // splice changes the content of an array, adding new elements while removing old ements
    it("splice", function () {
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        fruits.splice(2, 0, "Melon");
        fruits.should.eql(["Banana", "Orange", "Melon", "Lemon", "Apple", "Mango"]);
        fruits.splice(3, 1);
        fruits.should.eql(["Banana", "Orange", "Melon", "Apple", "Mango"]);
        fruits.splice(2, 2);
        fruits.should.eql(["Banana", "Orange", "Mango"]);
    });

    it("map", function () {
        var numbers = [1, 2, 3, 4];
        numbers.map(function (number) {
            return number += 1;
        }).should.eql([2, 3, 4, 5]);
    });

    it("filter", function () {
        var names = ["Smith", "Osawa", "Smith", "Osawa"];
        names.filter(function (element) {
            return element === "Osawa"; // predicate
        }).should.eql(["Osawa", "Osawa"]);
    });

    it("every", function () {
        var random = ["string", true, 1];
        random.every(function (element) {
            return typeof element === "number";
        }).should.be.false;

        var dates = [new Date(), new Date(), new Date()];
        dates.every(function (element) {
            return element instanceof Date;
        }).should.be.true;
    });

    it("reduce", function () {
        var numbers = [1, 2, 3, 4, 5];
        var sum = numbers.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        }).should.be.equal(15);
    });

    it("reduceRight", function () {
        var countries = ["USA", "Japan", "Canada"];
        countries.reduceRight(function (previousValue, currentValue) {
            return previousValue + " " + currentValue;
        }).should.be.equal("Canada Japan USA");
    });

    it("reverse array", function () {
        var s = "Salesforce is an awesome company",
            a = s.split(" "),
            res = [];

        a.forEach(function (element) {
            return res.unshift(element);
        });
        res.should.eql(["company", "awesome", "an", "is", "Salesforce"]);
    });
});