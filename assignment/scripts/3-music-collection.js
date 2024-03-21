console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// collection template:
//    collection = [ album, album, album, ... ];
//        
//      where album = { title: 'title', 
//                      artist: 'artist',
//                      yearPublished, 'numeric year',
//                      tracks: [ {trackName: 'trackname', duration: 'duration'},
//                                 trackName: 'trackname', duration: 'duration'},
//                                 trackName: 'trackname', duration: 'duration'},
//                                  ... ] };
//              


const myCollection = [];
let newAlbum = {};

// adds an album to a collection of albums
function addToCollection(collection, title, artist, yearPublished, tracks) {
  let album = {};
  let newTrack = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  if ((tracks) && (tracks.length > 0)) {
      album.tracks = tracks;
  }
  collection.push(album);

  return album;
}

// prints out one album
function printAlbum(album) {
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  if (album.tracks.length > 0) {
    let count = 1;
  for (let track of album.tracks) {
    console.log(`${count}. ${track.name}: ${track.duration}`);
    count++;
    }
  }
}

// prints out a whole collection of albums
function showCollection(collection) {
  console.log(`Printing collection:`);
  for (album of collection) {
    printAlbum(album);    
  }
}

// find a collection of albums by artist
function findByArtist(collection, findArtist) {
  let foundAlbums = [];
  for (let album of collection) {
    if (album.artist === findArtist) {
      foundAlbums.push(album);
    }
  }
  return foundAlbums;
}

// search on collection and array of search parameter objects
function search(collection, searchParameters) {
  let foundAlbums = [];
  let foundTrack = false;
  // if there is a trackName property in search, and it is defined and not blank
  if (searchParameters.hasOwnProperty("trackName") && 
     searchParameters.trackName != undefined &&
      searchParameters.trackName != '') {
    // then go through albums in collection and add albums with matching tracks
    for (let album of collection) {
      foundTrack = album.tracks.some( (element) => {
        if (searchParameters.trackName === element.name) {
          return true;
        } 
      }); 
      if (foundTrack) {
        foundAlbums.push(album);
      }
    }
  // if the search parms is NOT an empty object 
  //        (if you list all the keys/properties
  //          of the object searchParameters 
  //          and ya get something )  -AND-
  //        the artist and yearPublished properties exist -AND-
  //        the artist and yearPublished are not undefined  -AND-
  //        the artist and yearPublished are not blank
  //        --->  then return ALL matching albums from collection
  } else if ((Object.keys(searchParameters).length > 0) &&
              (searchParameters.hasOwnProperty("artist")) && 
              searchParameters.hasOwnProperty("yearPublished") &&
              searchParameters.artist != undefined &&
              searchParameters.yearPublished != undefined &&
              searchParameters.artist != '' &&
              searchParameters.yearPublished != '') {
    // use the artist and year and search 
      for (let album of collection) { 
        if (album.artist === searchParameters.artist &&
            album.yearPublished === searchParameters.yearPublished) {
          foundAlbums.push(album);
        }
      }
  // if empty or incomplete search criteria, return all albums
  } else {
    foundAlbums = collection;   
  }
  return foundAlbums;
} // end search

// function used to test search function
function testSearch(testCollection, testSearchArguments, testmsg) {
  subCollection = search(testCollection, testSearchArguments);
  console.log('-------testing search functionality------------');
  console.log(`       (${testmsg})`);
  console.log('Searched on:');
  console.log(`artist: ${findArtist}`);
  console.log(`year published: ${findYear}`);
  console.log(`track: ${findTrack}`);
  console.log(`...and found these albums:`);
  showCollection(subCollection);
} // end testSearch


//  TESTING SERIES
// populate myCollection with albums for testing ( 6 albums)
newAlbum = addToCollection(myCollection, 'Music to Code By', 'geekyBass', 2021,
                            [ {name: 'track1', duration: 10}, {name: 'track2', duration: 600}]);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);

newAlbum = addToCollection(myCollection, 'Tall Chair Group', 'Cheddar Biscuit', 2024,
[ {name: 'trying', duration: 50}, {name: 'to', duration: 130},
  {name: 'track1', duration: 40}, {name: 'down', duration: 70} ]);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);

newAlbum = addToCollection(myCollection, 'Falling Tray', 'hipHopHideaway', 2023,
[ {name: 'street', duration: 20}, {name: 'fire truck', duration: 30} ]);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);

newAlbum = addToCollection(myCollection, 'Clouds Suck', 'Squish Mouse', 2019,
[ {name: 'way', duration: 20}, {name: 'down', duration: 30},
  {name: 'riverside glow', duration: 10}, {name: 'bikearound', duration: 30},
  {name: 'curry man', duration: 20}, {name: 'sweet potato', duration: 300} ]);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);

newAlbum = addToCollection(myCollection, 'Lockdown', 'Bored Travelers', 2020,
[ {name: 'mealy', duration: 200}, {name: 'apples', duration: 310} ]);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);

newAlbum = addToCollection(myCollection, 'Hula Hoopla', 'Cheddar Biscuit', 2024,
[ {name: 'wonder', duration: 120} ]);
console.log('-----------------------------------------------');
console.log(`New album added:`); 
printAlbum(newAlbum);

console.log('-----------------------------------------------');
showCollection(myCollection);

// test findByArtist function
let findArtist = 'Cheddar Biscuit';
let subCollection = findByArtist(myCollection, findArtist);
console.log('-----------------------------------------------');
console.log(`Found these albums with artist ${findArtist}`);
showCollection(subCollection);



// test search function (with testSearch function lol) -several tests

// test search with artist & year
findArtist = 'Cheddar Biscuit';
let findYear = 2024
let searchArguments = { artist: findArtist, yearPublished: findYear };
let findTrack = undefined;
testSearch(myCollection, searchArguments, 
            'testing just artist and year, track undefined');

//test search with track, artist & year (should only search track)
findArtist = 'Cheddar Biscuit';
findYear = 2024;
findTrack = 'track1';
searchArguments = { artist: findArtist, yearPublished: findYear, trackName: findTrack};
testSearch(myCollection, searchArguments, 
  'testing artist, year and track valid, only should search on track');

//test search with track only , year and artist undefined
findArtist = undefined;
findYear = undefined;
findTrack = 'track1';
searchArguments = { artist: findArtist, yearPublished: findYear, trackName: findTrack };
testSearch(myCollection, searchArguments, 
  'testing artist and year undefined, track = track1, should only search on track');

//test search with no searchArguments, artist/year undefined track empty string
findArtist = undefined;
findYear = undefined;
findTrack = '';
searchArguments = { artist: findArtist, yearPublished: findYear, trackName: findTrack };
testSearch(myCollection, searchArguments, 
  'testing artist & year undefined, track empty string (incomplete criteria should show all albums)');

//test search with track only, no artist/year properties
findTrack = 'track1';
searchArguments = { trackName: findTrack };
testSearch(myCollection, searchArguments, 
  'testing just track object, track= track1');

//test search with empty search object
searchArguments = {};
testSearch(myCollection, searchArguments, 
  'testing empty search object (incomplete criteria should show all albums)');

//testing only artist , no year property, no track property
findArtist = 'Cheddar Biscuit';
searchArguments = { artist: findArtist};
testSearch(myCollection, searchArguments, 
  'testing only artist object exists (incomplete criteria should show all albums)');
  

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
