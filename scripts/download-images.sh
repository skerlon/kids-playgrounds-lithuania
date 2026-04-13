#!/usr/bin/env bash
# Download playground images from source articles
# Run this script from the project root directory
# Usage: bash scripts/download-images.sh

set -e

DEST="public/images"
mkdir -p "$DEST"

echo "Downloading playground images..."
echo "================================"

# We'll try to download Open Graph / preview images from each source page
# by fetching the page and extracting og:image meta tags

download_og_image() {
  local id="$1"
  local url="$2"
  local dest_file="$DEST/${id}.jpg"

  if [ -f "$dest_file" ]; then
    echo "  [SKIP] $id (already exists)"
    return
  fi

  echo "  [FETCH] $id from $url"

  # Fetch the page and extract og:image
  local og_image
  og_image=$(curl -sL -A "Mozilla/5.0" "$url" 2>/dev/null \
    | grep -oP 'property="og:image"\s+content="\K[^"]+' \
    | head -1)

  if [ -z "$og_image" ]; then
    # Try alternative pattern
    og_image=$(curl -sL -A "Mozilla/5.0" "$url" 2>/dev/null \
      | grep -oP 'content="\K[^"]+(?="\s+property="og:image")' \
      | head -1)
  fi

  if [ -n "$og_image" ]; then
    echo "    -> Found: $og_image"
    curl -sL -A "Mozilla/5.0" "$og_image" -o "$dest_file" 2>/dev/null
    if [ -s "$dest_file" ]; then
      echo "    -> Saved: $dest_file ($(du -h "$dest_file" | cut -f1))"
    else
      echo "    -> Download failed, removing empty file"
      rm -f "$dest_file"
    fi
  else
    echo "    -> No og:image found, trying direct page images..."

    # Try to find first large image on the page
    local img_url
    img_url=$(curl -sL -A "Mozilla/5.0" "$url" 2>/dev/null \
      | grep -oP '<img[^>]+src="\K[^"]+' \
      | grep -iE '\.(jpg|jpeg|png|webp)' \
      | grep -v -iE '(logo|icon|avatar|gravatar|pixel|1x1|badge)' \
      | head -1)

    if [ -n "$img_url" ]; then
      # Handle relative URLs
      if [[ "$img_url" != http* ]]; then
        local base_url
        base_url=$(echo "$url" | grep -oP 'https?://[^/]+')
        img_url="${base_url}${img_url}"
      fi
      echo "    -> Found img: $img_url"
      curl -sL -A "Mozilla/5.0" "$img_url" -o "$dest_file" 2>/dev/null
      if [ -s "$dest_file" ]; then
        echo "    -> Saved: $dest_file ($(du -h "$dest_file" | cut -f1))"
      else
        echo "    -> Download failed"
        rm -f "$dest_file"
      fi
    else
      echo "    -> No suitable image found"
    fi
  fi
}

# 1. Vilnius - Šv. Florijono skveras
download_og_image "vilnius-florijono-skveras" \
  "https://kelionessuvaikais.lt/florijono-sveras-vilniuje/"

# 2. Kaunas - Kovo 11-osios parkas
download_og_image "kaunas-kovo-11-parkas" \
  "https://kelionessuvaikais.lt/kovo-11-osios-parkas-kaune-nauja-ispudingiausia-zaidimu-aikstele-lietuvoje/"

# 3. Širvintos - Žaidimų aikštelė miesto centre
download_og_image "sirvintos-miesto-centre" \
  "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/zaidimu-aikstele-sirvintu-miesto-centre/"

# 4. Jonava - Rimkų mikrorajonas
download_og_image "jonava-rimku-mikrorajonas" \
  "https://www.jonavosnaujienos.lt/simboliskai-atidarytas-naujasis-rimku-parkas/"

# 5. Palanga - Vaikų parkas
download_og_image "palanga-vaiku-parkas" \
  "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/"

# 6. Kaunas - Kalniečių parkas
download_og_image "kaunas-kalnieciu-parkas" \
  "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/"

# 7. Utena - Vyžuonos parkas
download_og_image "utena-vyzuonos-parkas" \
  "https://www.utena.lt/lt/aktualios-naujienos/4287-vyzuonos-parkas"

# 8. Zarasai - Zaraso ežero pakrantė
download_og_image "zarasai-zaraso-ezero-pakrante" \
  "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/"

# 9. Panevėžys - Kultūros ir poilsio parkas
download_og_image "panevezys-kulturos-parkas" \
  "https://www.panevezysnow.lt/irasas-52/lankytini-miesto-objektai/kulturos-ir-poilsio-parkas2/"

# 10. Biržai - Evangelikų reformatų bažnyčia
download_og_image "birzai-reformatu" \
  "https://www.etaplius.lt/naujiena/birzuose-salia-evangeliku-reformatu-baznycios-dash-nauja-vaiku-zaidimu-aikstele"

# 11. Visaginas - Žaidimų miestelis
download_og_image "visaginas-zaidimu-miestelis" \
  "https://www.visitvisaginas.lt/naujienos/praleisk-savaitgali-su-seima-visagine/"

# 12. Alytus - Jaunimo parkas
download_og_image "alytus-jaunimo-parkas" \
  "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/"

# 13. Klaipėda - Poilsio parkas
download_og_image "klaipeda-poilsio-parkas" \
  "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/klaipedos-poilsio-parkas/"

# 14. Vilnius - Perkūno skveras
download_og_image "vilnius-perkuno-skveras" \
  "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/perkuno-skveras-ir-zaidimu-aikstele/"

# 15. Nemenčinė - Pump track
download_og_image "nemencine-pump-track" \
  "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/nemencines-zaidimu-aikstele-ir-laisvalaikio-erdve/"

echo ""
echo "================================"
echo "Done! Check $DEST/ for downloaded images."
echo ""

# Summary
downloaded=$(find "$DEST" -name "*.jpg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | wc -l)
echo "Downloaded: $downloaded / 15 images"
echo ""
if [ "$downloaded" -lt 15 ]; then
  echo "For missing images, you can manually save photos from:"
  echo "  https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/"
  echo ""
  echo "Save each image as: public/images/<location-id>.jpg"
  echo "Location IDs:"
  for f in vilnius-florijono-skveras kaunas-kovo-11-parkas sirvintos-miesto-centre \
           jonava-rimku-mikrorajonas palanga-vaiku-parkas kaunas-kalnieciu-parkas \
           utena-vyzuonos-parkas zarasai-zaraso-ezero-pakrante panevezys-kulturos-parkas \
           birzai-reformatu visaginas-zaidimu-miestelis alytus-jaunimo-parkas \
           klaipeda-poilsio-parkas vilnius-perkuno-skveras nemencine-pump-track; do
    if [ ! -f "$DEST/${f}.jpg" ]; then
      echo "  - $f"
    fi
  done
fi
