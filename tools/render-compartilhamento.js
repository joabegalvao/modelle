// Gera, a partir do logo (assets/img/logo-modelle-720.png), das fontes e das fotos do site:
//   assets/img/favicon-32.png, icon-192.png, apple-touch-icon.png   o letreiro sobre o marrom-café
//   assets/img/compartilhamento.jpg                                   1200x630 para WhatsApp e redes
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
const out = path.join(root, 'assets/img');
const mark = (width) => `<img src="file://${path.join(out, 'logo-modelle-720.png')}" style="width:${width}px;height:auto;display:block" alt="">`;

const fontFace = (family, file) => `@font-face { font-family: "${family}"; src: url("file://${path.join(root, 'assets/fonts', file)}") format("woff2"); font-weight: 300 700; }`;
const fonts = [fontFace('Prata', 'prata-normal-latin.woff2'), fontFace('Outfit', 'outfit-normal-latin.woff2')].join('\n');

const photo = fs.readdirSync(out).filter((f) => /^loja-vestido-floral-\d+\.jpg$/.test(f)).sort().pop();

const icon = (size, width) => ({
  w: size, h: size,
  html: `<div style="width:${size}px;height:${size}px;background:#2a241c;display:grid;place-items:center">${mark(width)}</div>`,
});

const pages = {
  favicon: { ...icon(32, 30), file: 'favicon-32.png' },
  icon192: { ...icon(192, 168), file: 'icon-192.png' },
  apple: { ...icon(180, 156), file: 'apple-touch-icon.png' },
  card: {
    w: 1200, h: 630, file: 'compartilhamento.jpg', jpeg: true,
    html: `<div style="width:1200px;height:630px;display:grid;grid-template-columns:620px 580px;background:#2a241c;color:#fffdf9;font-family:Outfit,sans-serif">
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 60px">
        ${mark(420)}
        <div style="margin-top:36px;font-family:Prata,serif;font-size:32px;line-height:1.3;color:#ecd8b1">Moda que valoriza você.</div>
        <div style="margin-top:20px;font-size:16px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:#c9bfae">Moda feminina em Maringá PR</div>
      </div>
      <img src="file://${path.join(out, photo)}" style="width:580px;height:630px;object-fit:cover;object-position:50% 20%;display:block" alt="">
    </div>`,
  },
};

(async () => {
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
  );
  const tmp = path.join(os.tmpdir(), 'modelle-render.html');
  for (const p of Object.values(pages)) {
    const page = await browser.newPage({ viewport: { width: p.w, height: p.h }, deviceScaleFactor: 1 });
    // a página é aberta por file:// para o Chromium aceitar as fontes e a foto locais
    fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>${fonts} body{margin:0;background:transparent}</style></head><body>${p.html}</body></html>`);
    await page.goto('file://' + tmp, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot(p.jpeg
      ? { path: path.join(out, p.file), type: 'jpeg', quality: 86 }
      : { path: path.join(out, p.file) });
    await page.close();
    console.log('assets/img/' + p.file);
  }
  fs.unlinkSync(tmp);
  await browser.close();
})();
