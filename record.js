Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.getDetails = function(){
  var details = "";
  details += this.artist + ", "
  details += this.title + ", "
  details += this.genre + ", "
  details += this.price
  console.log (details);
  return details
}










































module.exports = Record;