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
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
}

function showCollection(collection) {
  console.log(`Printing collection:`);
  for (album of collection) {
    printAlbum(album);
  }
}

let newAlbum = {};
newAlbum = addToCollection(myCollection, 'Music to Code By', 'geekyBass', 2021);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Tall Chair Group', 'Cheddar Biscuit', 1990);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Falling Tray', 'hipHopHideaway', 2023);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Clouds Suck', 'Squish Mouse', 2019);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Lockdown', 'Bored Travelers', 2020);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);
newAlbum = addToCollection(myCollection, 'Hula Hoopla', 'Cheddar Biscuit', 2024);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);
console.log('-----------------------------------------------');

showCollection(myCollection);

function findByArtist(collection, findArtist) {
  let foundAlbums = [];
  for (let album of collection) {
    if (album.artist === findArtist) {
      foundAlbums.push(album);
    }
  }
  return foundAlbums;
}

let findArtist = 'Cheddar Biscuit';
let subCollection = findByArtist(myCollection, findArtist);
console.log('-----------------------------------------------');
console.log(`Found these albums with artist ${findArtist}`);
showCollection(subCollection);


function search(collection, searchParameters) {
  let foundAlbums = [];
  for (let album of collection) {
    if (album.artist === searchParameters.artist &&
        album.yearPublished === searchParameters.yearPublished) {
          foundAlbums.push(album);
        }
  }
  return foundAlbums;
}

findArtist = 'Cheddar Biscuit';
let findYear = 2024
let searchArguments = { artist: findArtist, yearPublished: findYear };
subCollection = search(myCollection, searchArguments);
console.log('-----------------------------------------------');
console.log(`Found these albums with the criteria Artist: ${searchArguments.artist} and year published: ${searchArguments.yearPublished}`);
showCollection(subCollection);




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
