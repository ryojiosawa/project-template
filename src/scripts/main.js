/**
 * Created by rosawa on 7/15/14.
 */
function Person(name) {
    this.name = name;
}
Person.prototype.say = function() {
    console.log("Hi " + this.name);
};

var john = new Person("John");
john.say();