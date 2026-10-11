const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const marketing = process.env.SOLYX_MARKETING || '/Users/joseph/Developer/Solyx/Marketing/AppStore/2026-10-11-refresh';
const captures = process.env.SOLYX_CAPTURES || '/Users/joseph/Developer/solyx-screenshots/public/screenshots/solyx';
const images = [
  [path.join(captures, '01-habit-list.png'), 'habits', 660],
  [path.join(marketing, 'sources/iphone/03-galaxy-close.png'), 'galaxy-overview', 660],
  [path.join(captures, '04-archive.png'), 'archive', 660],
  [path.join(captures, '02-mission-control.png'), 'mission-control', 660],
  [path.join(root, 'assets/galaxy.png'), 'galaxy-fallback', 1100],
];

(async () => {
  for (const [source, name, width] of images) {
    const destination = path.join(root, 'assets', `${name}-20261011.webp`);
    const info = await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 88, effort: 6 }).toFile(destination);
    console.log(`${name}: ${info.width}x${info.height}, ${info.size} bytes`);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
