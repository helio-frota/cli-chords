'use strict';

const querystring = require('querystring');
const roi = require('roi');

class Client {

  artist (name) {
    console.log(`\x1b[35mSearching for: ${name} ...\x1b[39m`);
    name = querystring.escape(name);
    name = '"' + name + '"';
    const options = {endpoint: `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${name}`};
    return roi.get(options);
  }

  song (id) {
    const options = {endpoint: `http://www.songsterr.com/a/ra/player/song/${id}.json`};
    return roi.get(options);
  }

  print (songTitle, song) {
    if (song.usedChords.length > 0) {
      console.log(`\x1b[33m${songTitle}\x1b[39m`);
      console.log(`\x1b[32m----------------------------------------\x1b[39m`);
      song.usedChords.forEach(c => {
        process.stdout.write(`\x1b[32m|\x1b[39m ${c} `);
      });
      console.log();
      console.log(`\x1b[32m----------------------------------------\x1b[39m`);
    }
  }

}

module.exports = Client;

