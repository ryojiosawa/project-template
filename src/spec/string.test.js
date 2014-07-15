/**
 * Created by rosawa on 7/3/14.
 */
describe('Test various string methods', function () {

    it("substring", function () {
        var s = "Mozilla";
        s.substring(0, 3).should.be.equal("Moz");
        s.substring(0).should.be.equal("Mozilla");
        s.substring(2, 3).should.be.equal("z");
        s.substring(2, 2).should.be.equal("");
        s.substring(2, 0).should.be.equal("Mo");
    });

    it("substr", function () {
        var s = "Mozilla";
        s.substr(0, 3).should.be.equal("Moz");
        s.substr(0).should.be.equal("Mozilla");
        s.substr(2, 3).should.be.equal("zil");
        s.substr(2, 2).should.be.equal("zi");
        s.substr(2, 0).should.be.equal("");
    });

    it("split", function () {
        var url = "https://login.salesforce.com";
        url.split(".").should.eql(["https://login", "salesforce", "com"]);
        url.split(".", 1).should.eql(["https://login"]);
    });

    it("slice", function () {
        var url = "salesforce.com";
        url.slice(2).should.be.equal("lesforce.com");
        url.slice(0, -2).should.be.equal("salesforce.c");
    });

});