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
const fonts = [fontFace('Prata', 'prata-normal-latin.woff2'), fontFace('Outfit', 'outfit-normal-latin.woff2')].join('\n');


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
    html: `<div style="width:1200px;height:630px;display:grid;grid-template-columns:600px 600px;background:#fdf7eb;color:#2a241c;font-family:Outfit,sans-serif;overflow:hidden">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 64px;background:#2a241c;color:#fffdf9">
        ${mark(250)}
        <div style="margin-top:40px;font-family:Prata,serif;font-size:50px;line-height:1.1">Moda que<br><span style="color:#ecd8b1">valoriza você.</span></div>
        <div style="margin-top:24px;font-size:19px;font-weight:300;line-height:1.45;color:#c9bfae">Roupas, bolsas e acessórios para o dia a dia<br>e ocasiões especiais. Av. Mandacaru, 200, Maringá.</div>
        <div style="margin-top:26px;display:flex;align-items:center;gap:12px;font-size:13px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:#ecd8b1"><span style="display:inline-block;width:22px;height:1px;background:#c3aa6d"></span> Nota 5 no Google</div>
      </div>
      <div style="display:flex;gap:20px;align-items:center;justify-content:center;padding:0 40px">
        <div style="position:relative;padding:8px;border:1px solid #c3aa6d"><img src="file://${path.join(out, 'loja-vestido-floral-706.jpg')}" style="width:232px;height:380px;object-fit:cover;object-position:50% 15%;display:block" alt=""></div>
        <div style="position:relative;padding:8px;border:1px solid #c3aa6d;margin-top:-40px"><img src="file://${path.join(out, 'vestido-renda-rosa-704.jpg')}" style="width:232px;height:420px;object-fit:cover;object-position:50% 15%;display:block" alt=""></div>
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
