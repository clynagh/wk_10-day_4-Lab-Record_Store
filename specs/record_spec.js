var assert = require("assert")
var arrayTasks = require("../record.js")



describe("Record", function(){

  var diamondDogs;

  beforeEach( function(){
    diamondDogs = new Record("David Bowie", "Diamond Dogs", "Rock", 20.00)
  });

it("Should have an artist", function(){
  assert.strictEqual(diamondDogs.artist, "David Bowie")
})







})