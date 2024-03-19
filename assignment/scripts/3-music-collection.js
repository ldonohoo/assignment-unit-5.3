console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

function printAlbum(album) {
  console.log('-----------------------------------------------');
  console.log(`New album added:`); 
  console.log('Album Title:', album.title);
  console.log('Album Artist:', album.artist);
  console.log('Album Year Published:', album.yearPublished);
}

let newAlbum = {};
newAlbum = addToCollection(myCollection, 'Music to Code By', 'geekyBass', 2021);
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Chedar Biscuit', 'Tall Chair Group', 1990);
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Falling Tray', 'hipHopHideaway', 2023);
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Clouds Suck', 'Squish Mouse', 2019);
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Lockdown', 'Bored Travelers', 2020);
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Mellow Donuts', 'Shef', 2024);
printAlbum(newAlbum);
console.log('-----------------------------------------------');
console.log(`My collection: ${myCollection}`);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
