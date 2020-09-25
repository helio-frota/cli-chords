import axios from "axios";
import querystring from "querystring";

const QUERY_BY_ARTIST =
  "http://www.songsterr.com/a/ra/songs/byartists.json?artists=";

export default class Client {
  async search(name: string): Promise<any> {
    console.log(`\x1b[35mSearching for: ${name} ...\x1b[39m`);
    name = querystring.escape(name);
    name = `${name}`;
    return await axios.get(`http://www.songsterr.com/a/ra/songs/byartists.json?artists=ramones`);
  }

  async fetchSong(id: number): Promise<any> {
    return await axios.get(`http://www.songsterr.com/a/ra/player/song/${id}.json`);
  }
}

module.exports = Client;
