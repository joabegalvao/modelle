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

Vitrine de boutique: cabeçalho escuro com o letreiro branco do logo, fundo
creme (o brilho do primeiro logo), textos em marrom-café,
dourado só em detalhes finos (traços, moldura da foto do hero, estrelas,
destaques dos títulos) e uma seção escura para as bolsas, onde o dourado das
peças aparece melhor. Os looks ficam em duas fileiras de três fotos, "Para o
dia a dia" e "Para ocasiões especiais", que são as duas frases da própria
loja. Sem gradientes na interface (o único degradê é o do próprio logo), sem
efeitos de vidro, sem emojis como ícones.

## Seções da página

| Ordem | Seção | Âncora | Conteúdo |
| --- | --- | --- | --- |
| 1 | Cabeçalho | | Escuro, com o logo branco, navegação e CTA dourado de WhatsApp. Fixo no topo |
| 2 | Hero | `#inicio` | "Moda que valoriza você", dois botões, nota 5 no Google e foto da loja |
| 3 | Looks | `#looks` | Duas fileiras de três fotos: dia a dia e ocasiões especiais, com botão e link para o Instagram |
| 4 | Bolsas e acessórios | `#bolsas` | Seção escura com três fotos de bolsas de palha |
| 5 | Avaliações | `#avaliacoes` | Nota 5, faixa com as quatro palavras das avaliações e dois depoimentos |
| 6 | Como comprar | `#como-comprar` | Três passos: escolher, mandar a foto pelo WhatsApp, provar na loja |
| 7 | Onde fica | `#onde-fica` | Endereço, WhatsApp, Instagram e mapa |
| 8 | Chamada final | | "Seu próximo look está na Av. Mandacaru", WhatsApp e Instagram |
| 9 | Rodapé | | Logo, endereço, contato e redes |

Componente de apoio: botão flutuante de WhatsApp, no canto inferior direito,
em todas as telas.

## Estrutura de arquivos

```
index.html                       conteúdo e SEO
assets/css/styles.css            estilos (tokens de cor e tipografia no topo)
assets/js/main.js                menu e revelação na rolagem
assets/img/                      imagens otimizadas (geradas pelos scripts)
assets/fonts/                    Prata e Outfit (arquivos locais)
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

O título tem duas linhas ("Moda que / valoriza você."), e o tamanho da letra é
calculado para a segunda caber na coluna em qualquer tela. Se o texto mudar,
confira a quebra em 320 px e em 900 px de largura. A regra está em
`.hero__title`, no `styles.css`.

### Cache do navegador

Os arquivos de estilo e script são chamados com versão: `styles.css?v=1` e
`main.js?v=1`. Ao alterar um deles, aumente o número no `index.html` para que
os visitantes recebam a versão nova.

## Identidade visual

| Token | Cor | Origem |
| --- | --- | --- |
| `--gold` | `#C3AA6D` | dourado do logo: traços, estrelas, botão da seção escura |
| `--gold-200` | `#ECD8B1` | dourado claro do logo: destaques sobre o escuro |
| `--cream` | `#FDF7EB` | brilho do logo: fundo claro principal |
| `--gold-700` | `#7D652C` | dourado escurecido: destaques dos títulos e rótulos sobre fundo claro |
| `--sand`, `--white`, `--line` | `#F4ECDC`, `#FFFDF9`, `#E6DCC8` | fundos claros e linhas |
| `--espresso`, `--espresso-700` | `#2A241C`, `#3B3225` | marrom-café: cabeçalho, seção "Bolsas", chamada final, rodapé, botões e textos |
| `--ink-soft`, `--mist` | `#625A4C`, `#C9BFAE` | textos secundários sobre claro e sobre escuro |
| `--whatsapp` | `#25D366` | verde oficial do WhatsApp, usado só no botão flutuante |

O dourado puro não tem contraste para texto sobre fundo claro; por isso existe
a versão escurecida. O único degradê da página é o do próprio logo.

Tipografia: Prata (títulos) e Outfit (textos, peso leve). Prata não tem
itálico; o destaque dos títulos é feito só pela cor.

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

Executados em 30/09/2026, em Chromium automatizado (Playwright).

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

## Créditos e licenças

- Logo, fotos e avaliações: fornecidos pelo cliente.
- Ícones: criados para este projeto. Ícone do WhatsApp: Simple Icons (CC0).
- Prata e Outfit: SIL Open Font License 1.1, obtidas do Google Fonts e
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
