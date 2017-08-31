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

it("Should have a title", function(){
  assert.strictEqual(diamondDogs.title, "Diamond Dogs")
})

it("Should have a genre", function(){
  assert.strictEqual(diamondDogs.genre, "Rock")
})

it("Should have a title", function(){
  assert.strictEqual(diamondDogs.price, 20.00)
})







})