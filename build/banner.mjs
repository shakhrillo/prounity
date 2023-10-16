import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkgJson = path.join(__dirname, '../package.json');
const pkg = JSON.parse(await fs.readFile(pkgJson, 'utf8'));

const year = new Date().getFullYear();

function getBanner(pluginFilename) {
  return `/*!
  * ProUnity${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${
    pkg.homepage
  })
  * Copyright 2021-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/shakhrillo/prounity/blob/main/LICENSE)
  */`;
}

export default getBanner;
