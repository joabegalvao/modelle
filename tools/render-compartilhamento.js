// Gera assets/img/compartilhamento.jpg (1200x630, para WhatsApp e redes):
// o logo (150 px, tamanho natural), o nome e a frase da marca à esquerda, e a foto da loja à direita.
//
// Uso (na raiz do projeto, depois de python3 tools/optimize-images.py):
//   node tools/render-compartilhamento.js
//
// Requer Node e Playwright com Chromium. Se o Playwright não estiver instalado
// neste projeto, informe os caminhos pelas variáveis de ambiente
// PLAYWRIGHT_MODULE (pasta node_modules/playwright) e CHROMIUM_PATH.
const path = require('path');
const fs = require('fs');
const os = require('os');

const playwrightModule = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = require(playwrightModule);

const root = path.resolve(__dirname, '..');
const img = (name) => 'file://' + path.join(root, 'assets/img', name);
const fontFace = (family, file, style) => `@font-face { font-family: "${family}"; src: url("file://${path.join(root, 'assets/fonts', file)}") format("woff2"); font-style: ${style}; font-weight: 400 800; }`;

const photo = fs.readdirSync(path.join(root, 'assets/img')).filter((f) => /^loja-vestido-floral-\d+\.jpg$/.test(f)).sort().pop();

const card = `<!doctype html><html><head><meta charset="utf-8"><style>
${fontFace('Prata', 'prata-normal-latin.woff2', 'normal')}
${fontFace('Outfit', 'outfit-normal-latin.woff2', 'normal')}
body { margin: 0; width: 1200px; height: 630px; display: grid; grid-template-columns: 620px 580px; background: #fdf7eb; color: #2a241c; font-family: Outfit, sans-serif; }
.left { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 0 60px; }
.logo { width: 150px; height: 150px; border-radius: 6px; }
.name { margin-top: 30px; font-family: Prata, serif; font-size: 64px; line-height: 1; }
.tag { margin-top: 22px; font-family: Prata, serif; font-size: 30px; line-height: 1.3; color: #7d652c; }
.sub { margin-top: 20px; font-size: 16px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #625a4c; }
.photo { width: 580px; height: 630px; object-fit: cover; object-position: 50% 20%; display: block; }
</style></head><body>
<div class="left">
  <img class="logo" src="${img('logo-modelle-150.png')}" alt="">
  <div class="name">Modelle</div>
  <div class="tag">Moda que valoriza você.</div>
  <div class="sub">Moda feminina em Maringá PR</div>
</div>
<img class="photo" src="${img(photo)}" alt="">
</body></html>`;

(async () => {
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
  );
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  // a página é aberta por file:// para o Chromium aceitar as fontes e as imagens locais
  const tmp = path.join(os.tmpdir(), 'modelle-compartilhamento.html');
  fs.writeFileSync(tmp, card);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  fs.unlinkSync(tmp);
  await page.screenshot({ path: path.join(root, 'assets/img/compartilhamento.jpg'), type: 'jpeg', quality: 86 });
  await browser.close();
  console.log('assets/img/compartilhamento.jpg');
})();
