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

RecordStore.prototype.sellRecord = function( title ){
  for ( var index = 0 ; index < this.inventory.length; index++ ){
    if ( this.inventory[index].title === title ){
      var record = this.inventory.splice(index,1)
    }
  }
  this.balance += record[0].price;
  return record[0];
}






module.exports = RecordStore;