# Good Rooms Guest House

Sito web statico della guest house di Milano (Via Giuseppe Mussi 7, quartiere Sempione).

## Struttura

- `index.html` — pagina unica (hero, camere, galleria, servizi, dove siamo, recensioni, contatto)
- `css/style.css` — stili responsive (mobile first)
- `js/main.js` — menu mobile, lightbox foto, IT/EN, link WhatsApp con messaggio precompilato
- `img/` — foto (vedi sotto)
- `scarica-immagini.sh` — scarica le foto dall'anteprima originale

## Immagini

Le foto non sono incluse nel repo. Per scaricarle:

```bash
bash scarica-immagini.sh
```

oppure copia in `img/` i file con questi nomi: `camera-parquet`, `matrimoniale`, `letti-singoli`, `camera-doppia`, `scrivania`, `camera-bagno`, `bagno-doccia`, `lavabo`, `bagno-ampio`, `te-caffe` (formato `.webp`) e `og.jpg` (1200×630).

## Anteprima in locale

```bash
python3 -m http.server 8000
```

poi apri <http://localhost:8000>.

## Note

- Il numero WhatsApp e il link Booking sono in `js/main.js` (`WA_NUMBER`, `BOOKING_URL`).
- Foto, voti e recensioni provengono dall'annuncio su Booking.com: verifica di averne i diritti d'uso prima di pubblicare.
