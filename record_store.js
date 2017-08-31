RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];


}

RecordStore.prototype.addRecord = function(record){
  this.inventory.push( record );
}

RecordStore.prototype.getInventory = function(){
  var inventoryString = ""
  this.inventory.forEach(function( record ){
    inventoryString += record.getDetails() + "\n";
  });
  return inventoryString;
}


module.exports = RecordStore;