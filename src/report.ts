export default class Report {
  show(title: string, song: any): void {
    if (song.usedChords.length > 0) {
      console.log(`\x1b[33m${title}\x1b[39m`);
      console.log(`\x1b[32m----------------------------------------\x1b[39m`);
      song.usedChords.forEach((c:any) => {
        process.stdout.write(`\x1b[32m|\x1b[39m ${c} `);
      });
      console.log();
      console.log(`\x1b[32m----------------------------------------\x1b[39m`);
    }
  }
}
