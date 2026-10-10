import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import sharp from 'sharp';
import ffmpeg from 'ffmpeg-static';

const media = path.resolve('public/media');
await fs.mkdir(media, { recursive: true });
for (const name of ['paint', 'interior', 'wash', 'garage', 'atelier']) {
  const source = path.resolve(`assets/originals/${name}.png`);
  assert((await fs.stat(source)).size > 0, `Missing original ${name}`);
  for (const width of [640, 1200, 1800]) await sharp(source).resize(width, Math.round(width * (name === 'garage' ? 9 / 16 : 2 / 3)), { fit: 'cover' }).webp({ quality: 83 }).toFile(path.join(media, `${name}-${width}.webp`));
}
// shortcut: filme com câmera sobre fotografias conceituais; substituir por filmagem real quando disponível.
const output = path.join(media, 'hero.mp4');
const frames = 192;
const motion = `scale=1920:1080,zoompan=z='1.04+0.025*sin(on/${frames}*2*PI)':x='iw/2-iw/zoom/2+12*sin(on/${frames}*2*PI)':y='ih/2-ih/zoom/2':d=${frames}:s=1280x720:fps=24`;
const result = spawnSync(ffmpeg, ['-y','-i',path.resolve('assets/originals/garage.png'),'-vf',motion,'-frames:v',String(frames),'-an','-c:v','libx264','-preset','slow','-crf','24','-pix_fmt','yuv420p','-movflags','+faststart',output], { encoding:'utf8' });
if (result.status !== 0) throw new Error(result.stderr);
assert((await fs.stat(output)).size > 1000);
console.log('Responsive photographs and 8-second seamless hero film prepared.');



