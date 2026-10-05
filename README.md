# Modelle | Landing page

Página única, estática, em HTML, CSS e JavaScript puro. Não há etapa de build
nem dependências de execução: basta servir a pasta.

## Como visualizar

```bash
# na raiz do projeto
python3 -m http.server 4186
# abra http://localhost:4186
```

Qualquer servidor estático funciona (Nginx, Apache, Netlify, Vercel, Hostinger).
Publique `index.html` e a pasta `assets/`. A pasta `tools/` não precisa ir para
o servidor.

### Materiais de origem

Os arquivos enviados pelo cliente ficam reunidos na pasta
`materiais-de-origem/`, que não faz parte do repositório: ela existe só na
pasta local do projeto e é ignorada pelo git. As imagens que o site usa já
estão prontas em `assets/img`.

```
materiais-de-origem/
  logo/          modelle-transparente.png (2146 x 733, letreiro branco com relevo, fundo transparente; usado)
                 Modelle Logo.jpg (150 x 150, quadrado dourado; primeira versão recebida, não usado)
  fotos/         dez capturas de tela do Instagram da loja
```

Não foram recebidas fotos de perfil das avaliações; a página usa a inicial de
cada nome em um círculo.

Só é preciso ter os originais para rodar `tools/optimize-images.py`, ou seja,
para trocar ou reprocessar uma foto.

## Repositório

| Item | Valor |
| --- | --- |
| Endereço | `git@github.com:joabegalvao/modelle.git` |
| Página | https://github.com/joabegalvao/modelle |
| Visibilidade | pública (conferida em 30/09/2026) |
| Branch | `main` |

O repositório guarda só o que o site precisa para funcionar e ser mantido:
`index.html`, `assets/`, `tools/`, `README.md` e `.gitignore`.

```bash
git clone git@github.com:joabegalvao/modelle.git
```

Um clone novo abre e publica o site normalmente. Só não roda o script de
imagens, que depende da pasta `materiais-de-origem/`.

## Dados do cliente

Recebidos em 30/09/2026.

| Dado | Valor |
| --- | --- |
| Nome | Modelle (no Google: Modelle Modas) |
| Segmento | Loja de roupas e moda feminina |
| Produtos | Roupas, bolsas e acessórios |
| Frases do Instagram | "Moda que valoriza você" e "Looks para o dia a dia e ocasiões especiais" |
| Público | Mulheres que se preocupam com a beleza |
| Objetivo | Landing page com qualidade premium, para divulgar a marca |
| WhatsApp | (44) 98803-9237 |
| Telefone fixo | não informado |
| Instagram | https://www.instagram.com/modelle.mandacaru/ |
| Endereço | Av. Mandacaru, 200, Zona 06, Maringá |
| Nota | 5 no Google |

### Conferido no Google

Em 30/09/2026, o Google Maps mostrava o perfil "Modelle Modas" na Av.
Mandacaru, 200, Jardim Monte Belo, Maringá, CEP 87080-000, com **nota 5,0 e 4
avaliações**. A nota confere com o briefing, e a página a cita ("Nota 5 no
Google"), sem o número de avaliações. O bairro na página é "Zona 06", como no
briefing (o Google mostra "Jardim Monte Belo" para o mesmo endereço). O mapa
incorporado é carregado pelo nome da loja. O CEP não aparece na página.

O endereço é o mesmo da Nanda Bella Beauty Clinic, outro projeto desta série.

### Avaliações como foram recebidas

- **Rauan Santos:** Excelente loja em Maringá, ambiente agradável, bom preço,
  e atendimento nota 10.
- **Viviane Leslie:** Ótimo atendimento, e os melhores preços e variedades

Na página, os textos estão como vieram; só o ponto final foi acrescentado na
segunda. A faixa "Ambiente, Preço, Atendimento, Variedade" resume as palavras
dessas duas avaliações e diz isso no texto de apoio.

## Estratégia

| Definição | Decisão |
| --- | --- |
| Proposta de valor | Roupas, bolsas e acessórios para o dia a dia e para ocasiões especiais, escolhidos para valorizar quem veste |
| Principal objeção | "Vou até lá e não tem o meu tamanho, ou não tem nada para a ocasião que eu preciso" |
| Conversão prioritária | WhatsApp: mandar a foto da peça e saber tamanhos e disponibilidade antes de ir |
| Ação secundária | Visitar a loja na Av. Mandacaru, 200 |
| Ação de apoio | Seguir o Instagram @modelle.mandacaru |

## Direção visual

**Versão 2 (05/10/2026): lookbook.** A Modelle e a Nanda Bella Beauty Clinic
são vizinhas de loja (mesmo endereço) e as duas páginas tinham o mesmo
registro: fundo creme, serifa com segunda linha em itálico, foto à direita no
hero. O cliente pediu que fossem inconfundíveis, e a Modelle foi refeita.

Agora: preto e branco com tipografia grotesca pesada em caixa alta (Syne 800),
rosé como acento (a cor que mais aparece nas peças da loja), uma **arara de
looks** no hero (um varão preto com as fotos "penduradas", que desliza na
horizontal), seções alternando branco, rosé e preto, dois blocos "Dia a dia" e
"Ocasiões especiais" com foto de meia largura, nota 5,0 em corpo gigante e
passos com números grandes. Cantos retos, botões em pílula, sem degradês, sem
efeitos de vidro, sem emojis como ícones. O letreiro branco em relevo do logo
continua sobre o preto do cabeçalho e do rodapé.

A versão 1 (vitrine de boutique em creme, dourado e café, Prata + Outfit) está
no histórico do git, no commit anterior a esta mudança.

## Seções da página

| Ordem | Seção | Âncora | Conteúdo |
| --- | --- | --- | --- |
| 1 | Cabeçalho | | Preto, fixo, com o letreiro branco, navegação em caixa alta e botão branco de WhatsApp |
| 2 | Hero | `#inicio` | "Seu próximo look já está na arara", texto de apoio, botão preto, nota 5 no Google e a arara com cinco looks e um cartão para o Instagram |
| 3 | Looks | `#looks` | Fundo rosé; dois blocos de meia largura: "Para o dia a dia" (branco, vestido verde) e "Para ocasiões especiais" (preto, vestido longo), cada um com lista de peças e link |
| 4 | Bolsas e acessórios | `#bolsas` | Seção preta com três fotos de bolsas de palha em alturas alternadas |
| 5 | Avaliações | `#avaliacoes` | "5,0" gigante, estrelas e os dois depoimentos em corpo grande |
| 6 | Como comprar | `#como-comprar` | Fundo rosé; três passos com números grandes |
| 7 | Onde fica | `#onde-fica` | Endereço, WhatsApp, Instagram e mapa |
| 8 | Fecho | | "Mande a foto. A peça fica separada.", WhatsApp e Instagram |
| 9 | Rodapé | | Logo, endereço, contato e redes |

Componente de apoio: botão flutuante de WhatsApp, no canto inferior direito,
em todas as telas.

## Estrutura de arquivos

```
index.html                       conteúdo e SEO
assets/css/styles.css            estilos (tokens de cor e tipografia no topo)
assets/js/main.js                menu e revelação na rolagem
assets/img/                      imagens otimizadas (geradas pelos scripts)
assets/fonts/                    Syne e Figtree (arquivos locais)
tools/optimize-images.py         gera as fotos e o logo de assets/img a partir dos originais
tools/render-compartilhamento.js gera os ícones e a imagem de compartilhamento pelo Chromium
materiais-de-origem/             arquivos do cliente (só na pasta local, fora do git)
```

## Imagens recebidas e como foram usadas

As dez imagens são capturas de tela de publicações do Instagram. Todas foram
usadas. **Nenhuma foto é ampliada**, e um teste automático confere que nenhuma
aparece na página acima do tamanho real.

| Arquivo | Conteúdo | Tamanho | Onde aparece |
| --- | --- | --- | --- |
| `Screenshot ... 143807.png` | Mulher com vestido floral rosa, dentro da loja, com o letreiro Modelle | 706 x 885 | hero e imagem de compartilhamento |
| `Screenshot ... 143913.png` | Top verde e jeans | 883 x 885 | Looks, dia a dia |
| `Screenshot ... 143901.png` | Vestido verde ao lado de um limoeiro | 889 x 887 | Looks, dia a dia |
| `Screenshot ... 143930.png` | Regatas estampadas sobre o chão | 881 x 880 | Looks, dia a dia |
| `Screenshot ... 143817.png` | Vestido longo branco estampado | 706 x 888 | Looks, ocasiões especiais |
| `Screenshot ... 143829.png` | Vestido midi rosa de renda | 704 x 887 | Looks, ocasiões especiais |
| `Screenshot ... 143848.png` | Conjunto de tricô caramelo, em Veneza | 882 x 885 | Looks, ocasiões especiais |
| `Screenshot ... 144434.png` | Bolsa de palha com argola dourada | 781 x 886 | Bolsas |
| `Screenshot ... 143755.png` | Duas bolsas de palha | 888 x 886 | Bolsas |
| `Screenshot ... 144444.png` | Três bolsas de palha | 836 x 884 | Bolsas |

Observações:

- Só a foto da loja (hero) mostra a Modelle de fato. As demais parecem fotos
  de catálogo dos fornecedores (modelos em estúdio e em Veneza; bolsas em
  fundo neutro). A página diz que são "peças publicadas pela loja no
  Instagram" e não afirma que os cenários são da loja. Vale confirmar o
  direito de uso (veja Pendências).
- As regatas trazem estampas com nomes de outras marcas. A página não cita
  nenhuma marca em texto.
- As legendas ("Top e jeans", "Vestido verde"...) descrevem a peça, sem nome
  de produto, cor oficial ou preço.

### Logo

Foram recebidas duas versões. A primeira, JPG de 150 x 150 px com o nome em
letra cursiva branca sobre um quadrado dourado, serviu para definir a paleta.
A segunda, enviada durante o projeto com o pedido de usá-la, é um PNG de
2146 x 733 px, só o letreiro branco com relevo cinza, sobre fundo
transparente. É a que está na página.

Como o letreiro é branco, o cabeçalho passou a ser escuro (marrom-café, como
o rodapé), com o menu em tom claro e o botão de WhatsApp dourado. O script
recorta a margem vazia e gera as larguras de 720 e 360 px; o cabeçalho mostra
o logo com 44 px de altura no desktop (40 no celular, 34 em telas de até
359 px), o rodapé com 58 px. Os ícones do site e a imagem de compartilhamento
colocam o letreiro sobre o marrom-café.

Antes do PNG, a página teve uma versão com o quadrado dourado do JPG e outra
com o letreiro vetorizado por código. As duas foram removidas.

## Como atualizar o conteúdo

| O que mudar | Onde |
| --- | --- |
| Textos e endereço | `index.html` (seções comentadas) |
| Número e mensagem do WhatsApp | `index.html`: procure por `wa.me/` (8 ocorrências). O texto vem depois de `?text=`, com espaços escritos como `%20` e acentos codificados |
| Mapa | `index.html`: procure por `google.com/maps` (4 ocorrências, uma delas no `<iframe>`) |
| Cores e fontes | `assets/css/styles.css`, bloco `:root` |
| Looks (fotos e legendas) | `index.html`, blocos `looks__group`. Cada fileira tem três `<figure class="look">` |
| Bolsas | `index.html`, bloco `bags__photos` |
| Faixa de palavras e avaliações | `index.html`, seção "AVALIAÇÕES". Nota: bloco JSON-LD no `<head>` |
| Passos da compra | `index.html`, lista `steps` |
| Fotos | substitua o original, ajuste a lista `PHOTOS` de `tools/optimize-images.py` e rode o script |

Mensagens de WhatsApp, conforme o ponto da página:

| Onde | Mensagem |
| --- | --- |
| Cabeçalho, hero, "Onde fica", chamada final, rodapé e botão flutuante | Olá! Vi o site da Modelle e quero saber mais sobre as peças. |
| Seção "Looks" | ... quero saber sobre um look. |
| Seção "Bolsas e acessórios" | ... quero saber sobre as bolsas. |

Para gerar as imagens (requer Pillow e a pasta `materiais-de-origem/`):

```bash
python3 tools/optimize-images.py        # fotos e logo
node tools/render-compartilhamento.js   # ícones e imagem de compartilhamento (requer Node e Playwright)
```

Se o Playwright não estiver instalado no projeto, informe os caminhos pelas
variáveis `PLAYWRIGHT_MODULE` e `CHROMIUM_PATH`.

Se a proporção de uma foto mudar, atualize `width` e `height` da tag `<img>`
correspondente no `index.html`, para não haver salto de layout.

### Título do hero

O título tem duas linhas no desktop ("Seu próximo look / já está na arara.")
e três ou quatro no celular. O tamanho máximo (4,1rem) é o que faz "SEU
PRÓXIMO LOOK" caber em 1144 px na Syne 800. Se o texto mudar, meça de novo:
confira a quebra em 320, 768 e 1440 px. A regra está em `.hero__title`.

### Cache do navegador

Os arquivos de estilo e script são chamados com versão: `styles.css?v=2` e
`main.js?v=2`. Ao alterar um deles, aumente o número no `index.html` para que
os visitantes recebam a versão nova.

## Identidade visual

| Token | Cor | Uso |
| --- | --- | --- |
| `--ink` | `#141214` | preto quase puro: cabeçalho, seção "Bolsas", bloco "Ocasiões", fecho, rodapé, botões e títulos |
| `--white`, `--paper` | `#FFFFFF`, `#F7F5F4` | fundos claros |
| `--blush` | `#F6E3DE` | rosé claro: fundo das seções "Looks" e "Como comprar" e do cartão do Instagram |
| `--rose` | `#B23A5E` | rosé escuro: destaques dos títulos, números, rótulos e estrelas sobre fundo claro (contraste AA) |
| `--rose-light` | `#F0A9B8` | rosé claro: destaques sobre o preto |
| `--ink-soft`, `--mist` | `#5C5659`, `#BDB6B9` | textos secundários sobre claro e sobre escuro |
| `--line`, `--blush-deep`, `--ink-line` | `#E2DCDB`, `#ECC9C1`, `#2C282B` | linhas |
| `--whatsapp` | `#25D366` | verde oficial do WhatsApp, só no botão flutuante |

Tipografia: **Syne** (títulos, rótulos, botões; pesos 600 a 800) e
**Figtree** (textos). A Syne 800 em caixa alta ocupa cerca de 1,07em por
letra, por isso os títulos têm tamanhos máximos calculados para caber na
coluna: 4,1rem no hero, 3rem nas seções, 3,1rem no fecho. Fontes locais em
`assets/fonts`, subconjunto latino.

## Decisões de conteúdo

- Só foram usados dados fornecidos: nome, produtos, frases da loja, endereço,
  WhatsApp, Instagram, nota 5, fotos e avaliações. Não há preços, marcas,
  tamanhos, prazos, entrega ou promessas inventadas.
- "Moda que valoriza você" e "looks para o dia a dia e ocasiões especiais"
  são as frases do Instagram da loja e organizam o hero e a seção "Looks".
- A divisão das fotos entre "dia a dia" e "ocasiões especiais" foi feita pela
  aparência das peças. A loja pode trocar de fileira.
- "Bolsas de mão em palha com fecho e argola dourados" descreve o que as três
  fotos mostram. A página diz que "elas aparecem nas publicações da loja" e
  pede para perguntar o que está disponível.
- Os três passos de compra terminam em "prove na loja": a página não fala de
  entrega, envio ou compra online, porque isso não foi informado.
- "Confirme o horário de atendimento pelo WhatsApp antes de vir" está na
  página porque o horário não foi informado.
- Não há telefone fixo na página porque não foi informado.
- O mapa é um mapa do Google incorporado, carregado pelo nome da loja. Ele só
  carrega quando o visitante chega perto da seção.
- Não há formulário, porque não existe destino de envio definido.
- A foto do hero não tem legenda.
- O ícone do botão flutuante é escuro sobre o verde, e não branco, para manter
  contraste suficiente.

## Testes realizados

Executados em 30/09/2026 e repetidos em 05/10/2026 na versão 2 (41 verificações aprovadas: sem rolagem horizontal de 320 a 1920 px, título do hero em 2 linhas no desktop, contraste AA, menu no celular, teclado, sem JS, movimento reduzido, carga inicial abaixo de 700 KB, nenhuma imagem ampliada), em Chromium automatizado (Playwright).

- Revisão visual das capturas de tela: página inteira em 390 e 1440 px e
  primeira tela em 320, 768 e 1024 px.
- Sem rolagem horizontal e com o título do hero em duas linhas nos tamanhos
  320, 360, 390, 480, 600, 768, 900, 1024, 1200, 1440 e 1920 px.
- Sem erros de console e sem imagens quebradas.
- 41 verificações automáticas aprovadas: menu no celular (toque, Esc, toque
  fora, foco), âncoras, botão flutuante de WhatsApp (posição, nome acessível,
  sem cobrir o texto do rodapé), fotos sem ampliação acima do tamanho real,
  mapa com título e carregamento adiado, revelação na rolagem, link de pular
  para o conteúdo, foco visível, destino e atributos de todos os links, três
  mensagens de WhatsApp, hierarquia de títulos e atributos das imagens, sem
  travessões, emojis ou textos de exemplo.
- O mapa foi aberto no teste e mostrou o marcador "Modelle Modas" na Av.
  Mandacaru, 200.
- Página utilizável sem JavaScript.
- Animações desligadas quando o sistema pede movimento reduzido.
- Contraste AA em todos os textos.
- Carga inicial no celular abaixo de 700 KB, medida em tela de densidade 3x,
  sem saltos de layout (CLS 0). Página inteira: 601 KB, sem contar o mapa.
- O mapa do Google é baixado só quando o visitante chega à seção "Onde fica".

Não testado: Safari, Firefox e aparelhos físicos. Dos links externos, foi
conferido apenas o endereço, não o conteúdo de destino. Também não foi
verificado se o número responde no WhatsApp.

## Histórico de ajustes

| Ajuste | Arquivos |
| --- | --- |
| Versão inicial da página | todos |
| Logo sem o fundo dourado: letreiro vetorizado no cabeçalho, rodapé, ícones e imagem de compartilhamento | `index.html`, `styles.css`, `tools/`, `assets/img` |
| Logo em PNG transparente recebido: substitui o letreiro vetorizado; cabeçalho escuro | `index.html`, `styles.css`, `tools/`, `assets/img` |
| **Versão 2 (05/10/2026)**: redesenho completo para diferenciar da Nanda Bella, vizinha de loja. Lookbook preto e branco com rosé, Syne + Figtree, arara de looks no hero, nova imagem de compartilhamento e ícones. Textos e dados mantidos; "Moda que valoriza você" fica no texto de apoio e no rodapé | `index.html`, `styles.css`, `assets/fonts`, `tools/render-compartilhamento.js`, `assets/img` |

## Créditos e licenças

- Logo, fotos e avaliações: fornecidos pelo cliente.
- Ícones: criados para este projeto. Ícone do WhatsApp: Simple Icons (CC0).
- Syne e Figtree: SIL Open Font License 1.1, obtidas do Google Fonts e
  hospedadas localmente.
- Mapa: Google Maps, incorporado.

## Pendências que dependem do cliente

- Logo em vetor (SVG, AI ou PDF), se existir. O PNG recebido é bom para o
  site; o vetor serviria para impressos.
- **Direito de uso das fotos de catálogo.** Nove das dez fotos parecem
  imagens dos fornecedores. Vale confirmar se a loja pode usá-las no site.
- **Fotos da loja** (fachada, interior, provadores, vitrine) e das peças na
  arara. Hoje só a foto do hero mostra a loja.
- Horário de funcionamento e formas de pagamento.
- Se a loja entrega ou envia peças, e para onde; a página hoje só fala em
  provar na loja.
- Faixa de preço ou "a partir de", se quiserem publicar.
- Marcas vendidas, se quiserem citar.
- Mais avaliações, com autorização de uso do nome; fotos de perfil, se
  quiserem.
- Domínio de publicação, para completar `og:image` com URL absoluta e adicionar
  `link rel="canonical"`.
