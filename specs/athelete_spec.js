var assert = require("assert");
var Athlete = require("../athlete");
var WaterBottle = require("../water_bottle");

describe("Athlete", function() {

  var athlete;

  beforeEach(function() {
    athlete = new Athlete();
  });

  it("athlete should have a hydration attribute that starts at 100", function() {
    assert.strictEqual(athlete.hydration, 100);
  });

  it("athlete should have a distance covered attribute starts at 0", function() {
    assert.strictEqual(athlete.distance, 0);
  });

  it("athlete should be able to run: increasing distance, decreasing hydration", function() {
    athlete.run(10);
    assert.strictEqual(athlete.distance, 10);
    assert.strictEqual(athlete.hydration, 90);
  });

  it("athlete should not move when running dehydrated: hydration at 0", function() {
    assert.strictEqual(athlete.run(120), "sorry, no can run.");
  });
});