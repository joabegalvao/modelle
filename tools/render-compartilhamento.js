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

const fontFace = (family, file) => `@font-face { font-family: "${family}"; src: url("file://${path.join(root, 'assets/fonts', file)}") format("woff2"); font-weight: 300 900; }`;
const fonts = [fontFace('Syne', 'syne-normal-latin.woff2'), fontFace('Figtree', 'figtree-normal-latin.woff2')].join('\n');


const icon = (size, width) => ({
  w: size, h: size,
  html: `<div style="width:${size}px;height:${size}px;background:#141214;display:grid;place-items:center">${mark(width)}</div>`,
});

const pages = {
  favicon: { ...icon(32, 30), file: 'favicon-32.png' },
  icon192: { ...icon(192, 168), file: 'icon-192.png' },
  apple: { ...icon(180, 156), file: 'apple-touch-icon.png' },
  card: {
    w: 1200, h: 630, file: 'compartilhamento.jpg', jpeg: true,
    html: `<div style="width:1200px;height:630px;display:grid;grid-template-columns:640px 560px;background:#141214;color:#fff;font-family:Figtree,sans-serif;overflow:hidden">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 64px">
        ${mark(240)}
        <div style="margin-top:40px;font-family:Syne,sans-serif;font-weight:800;font-size:42px;line-height:.98;letter-spacing:-.02em;text-transform:uppercase">Seu próximo look<br><span style="color:#f0a9b8">já está na arara.</span></div>
        <div style="margin-top:24px;font-size:19px;line-height:1.4;color:#bdb6b9">Roupas, bolsas e acessórios em Maringá.<br>Av. Mandacaru, 200. Mande a foto pelo WhatsApp.</div>
        <div style="margin-top:26px;display:flex;align-items:center;gap:10px;font-family:Syne,sans-serif;font-weight:700;font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:#f0a9b8"><span style="display:inline-block;width:28px;height:3px;background:#f0a9b8"></span> Nota 5 no Google</div>
      </div>
      <div style="position:relative;display:flex;gap:16px;align-items:flex-start;padding:0 48px 0 0">
        <div style="position:absolute;left:-16px;right:0;top:56px;height:6px;background:#fff;border-radius:3px"></div>
        <img src="file://${path.join(out, 'loja-vestido-floral-706.jpg')}" style="width:248px;height:480px;object-fit:cover;object-position:50% 20%;margin-top:92px;display:block" alt="">
        <img src="file://${path.join(out, 'vestido-renda-rosa-704.jpg')}" style="width:248px;height:480px;object-fit:cover;object-position:50% 20%;margin-top:92px;display:block" alt="">
      </div>
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
