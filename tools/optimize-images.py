#!/usr/bin/env python3
"""Gera as imagens otimizadas da landing page a partir dos arquivos originais.

Uso (na raiz do projeto):
    python3 tools/optimize-images.py

Requer Pillow (pip install pillow) e a pasta materiais-de-origem/. Os
originais nunca são alterados. Para trocar uma foto, substitua o arquivo de
origem ou edite a lista PHOTOS e rode o script novamente.

O logo recebido tem só 150 px e fundo dourado; a página usa o letreiro
vetorizado em tools/logo/letreiro.svg. Os ícones e a imagem de
compartilhamento saem de:
    node tools/render-compartilhamento.js
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "materiais-de-origem"
SRC = SOURCES / "fotos"
OUT = ROOT / "assets" / "img"

# Nada é ampliado: a maior versão gerada é a do recorte original.
WIDTHS = (360, 540)

# nome de saída -> (arquivo em materiais-de-origem/fotos, área usada)
# A área é (esquerda, topo, direita, base) em pixels do original. As capturas
# trazem uma borda irregular de 2 a 3 px, que fica de fora.
PHOTOS = {
    "loja-vestido-floral": ("Screenshot 2026-09-30 143807.png", (3, 3, 709, 888)),
    "vestido-longo-estampado": ("Screenshot 2026-09-30 143817.png", (3, 3, 709, 891)),
    "vestido-renda-rosa": ("Screenshot 2026-09-30 143829.png", (3, 3, 707, 890)),
    "conjunto-trico": ("Screenshot 2026-09-30 143848.png", (3, 3, 885, 888)),
    "vestido-verde": ("Screenshot 2026-09-30 143901.png", (3, 3, 892, 890)),
    "top-e-jeans": ("Screenshot 2026-09-30 143913.png", (3, 3, 886, 888)),
    "regatas-estampadas": ("Screenshot 2026-09-30 143930.png", (3, 3, 884, 883)),
    "bolsas-palha-par": ("Screenshot 2026-09-30 143755.png", (3, 3, 891, 889)),
    "bolsa-palha-argola": ("Screenshot 2026-09-30 144434.png", (3, 3, 784, 889)),
    "bolsas-palha-trio": ("Screenshot 2026-09-30 144444.png", (3, 3, 839, 887)),
}


def resize_to_width(im: Image.Image, width: int) -> Image.Image:
    if im.width <= width:
        return im.copy()
    height = round(im.height * width / im.width)
    return im.resize((width, height), Image.LANCZOS)


def save_set(im: Image.Image, name: str) -> None:
    for width in WIDTHS:
        if width < im.width:
            resize_to_width(im, width).save(
                OUT / f"{name}-{width}.webp", "WEBP", quality=82, method=6
            )
    im.save(OUT / f"{name}-{im.width}.webp", "WEBP", quality=82, method=6)
    # fallback JPEG para navegadores sem WebP
    im.save(OUT / f"{name}-{im.width}.jpg", "JPEG", quality=84, optimize=True, progressive=True)
    print(f"{name}: {im.width}x{im.height}")


def build_photos() -> None:
    for name, (source, area) in PHOTOS.items():
        save_set(Image.open(SRC / source).convert("RGB").crop(area), name)


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    build_photos()
    total = sum(f.stat().st_size for f in OUT.iterdir())
    print(f"{len(list(OUT.iterdir()))} arquivos, {total / 1024:.0f} KB no total")
