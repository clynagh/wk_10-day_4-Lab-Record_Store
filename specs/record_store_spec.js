var assert = require("assert")
var RecordStore = require("../record_store.js")

describe("RecordStore", function(){

var highFidelity;

beforeEach( function(){
  highFidelity = new RecordStore("highFidelity", "Pittsburgh")
});

it("Does record store has name", function(){
  assert.strictEqual(highFidelity.name, "highFidelity")
})


})