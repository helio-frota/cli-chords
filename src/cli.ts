#!/usr/bin/env node

import yargs from 'yargs';
import Client from './client';
import Report from './report';

const argv = yargs.options({
  artist: {
    type: 'string',
    required: true,
  },
}).argv;

const client = new Client();
const report = new Report();

client.search(argv.artist)
  .then((response) => {
    response.data.forEach((r:any) => {
      client.fetchSong(r.id)
        .then((response) => {
          report.show(r.title, response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    });
  })
  .catch((e) => {
    console.error(e);
  });
