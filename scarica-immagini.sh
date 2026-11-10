#!/usr/bin/env bash
# Scarica le foto dell'anteprima originale nella cartella img/.
# Uso (dalla radice del repo):  bash scarica-immagini.sh
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p img
BASE="https://sicreaweb.it/anteprime/good-rooms-guest-house"
for f in camera-parquet matrimoniale letti-singoli camera-doppia scrivania camera-bagno bagno-doccia lavabo bagno-ampio te-caffe; do
  echo "→ $f.webp"
  curl -fsSL -o "img/$f.webp" "$BASE/img/$f.webp"
done
echo "→ og.jpg"
curl -fsSL -o img/og.jpg "$BASE/og.jpg"
echo "Fatto: $(ls img | wc -l) file in img/"
