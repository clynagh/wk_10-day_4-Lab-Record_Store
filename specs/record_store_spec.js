var assert = require("assert")
var RecordStore = require("../record_store.js")
var Record = require("../record.js")

describe("RecordStore", function(){

var highFidelity;
var diamondDogs;
var greenRiver;


beforeEach( function(){
  highFidelity = new RecordStore("highFidelity", "Pittsburgh")
  diamondDogs = new Record("David Bowie", "Diamond Dogs", "Rock", 20.00)
  greenRiver = new Record("Creedance Clearwater Revival", "Green River", "Folk", 24.00)
});

it("Does record store has name", function(){
  assert.strictEqual(highFidelity.name, "highFidelity")
})

it("Does record store has a city", function(){
  assert.strictEqual(highFidelity.city, "Pittsburgh")
})

it("Does record store have an empty inventory on create", function(){
  assert.strictEqual(highFidelity.inventory.length, 0)
})

it("Should be able to add record to inventory", function(){
  highFidelity.addRecord(diamondDogs);
  assert.strictEqual(highFidelity.inventory.length, 1)
})

it("Does record store have a zero balance on create", function(){
  assert.strictEqual(highFidelity.balance, 0)
})

it("Should be able to return getDetails for all records in inventory", function(){
  highFidelity.addRecord(diamondDogs);
  highFidelity.addRecord(greenRiver);
  var inventoryString = diamondDogs.getDetails() + "\n" + greenRiver.getDetails() + "\n"
  assert.strictEqual(highFidelity.getInventory(), inventoryString)
})

})