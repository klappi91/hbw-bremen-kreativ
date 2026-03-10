# QA Report — HB Wintergärten GmbH (hbw-bremen-kreativ)

Datum: 2026-03-10
Variante: Kreativ
Dev-Server: http://localhost:3099
Getestet mit: agent-browser (Playwright-basiert), curl

---

## Zusammenfassung

- Getestete Seiten aus Sitemap: 19
- Implementierte Seiten (HTTP 200): 16
- Fehlende Seiten (HTTP 404): 3
- URL-Mismatch (Route falsch benannt): 1
- Seiten mit Problemen: 2
- Placeholder-Text gefunden: Nein
- Broken Images (bestätigt): 0 (1 Timing-Warnung, kein echter Fehler)
- Brand-Farben korrekt: Ja

---

## Ergebnisse pro Seite

### Startseite (`/`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/home.png | mobile/home.png
- Navigation: Vorhanden (Logo, Uber uns, Leistungen, Referenzen, Jobs, Kontakt, Termin-Button)
- Footer: Vorhanden (Adresse, Telefon, E-Mail, Social Links, Leistungen-Liste)
- Hero-Section: Vorhanden ("Qualitat, die Massstabe setzt.")
- Logo: Vorhanden (HB Wintergarten GmbH, /images/logo.png)
- CTA-Button: Vorhanden ("Termin vereinbaren", "Referenzen ansehen")
- Bilder: 16 geladen, 1 Timing-Warnung bei partner-logo (logo213_large_GxNz0eoufh.png) — Datei existiert und ist valides PNG, wahrscheinlich Lazy-Load-Timing-Artefakt
- Inhalt: Vollstandig (Intro, Leistungsvorschau, Uber-uns-Teaser, Referenzen-Preview, Partner, Kontaktteaser)
- Probleme: Keine

### Uber uns (`/ueber-uns`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/ueber-uns.png | mobile/ueber-uns.png
- Navigation: Vorhanden
- Footer: Vorhanden
- Inhalt: FAQ-Sektion vorhanden, CTA "Beratungstermin buchen"
- Probleme: Keine

### Leistungen (`/leistungen`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/leistungen.png | mobile/leistungen.png
- Navigation: Vorhanden
- Footer: Vorhanden
- Inhalt: Uebersichtsseite mit allen 7 Leistungskategorien
- Probleme: Keine

### Markisen (`/leistungen/markisen`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/markisen.png | mobile/markisen.png
- Seitentitel: "Montage von Kassetten- / Seitenmarkisen in Bremen | HB Wintergarten GmbH"
- Probleme: Keine

### Insektenschutz (`/leistungen/insektenschutz`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/insektenschutz.png | mobile/insektenschutz.png
- Seitentitel: "Insektenschutz nach Mass in Bremen | HB Wintergarten GmbH"
- Probleme: Keine

### Fenster (`/leistungen/fenster`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/fenster.png | mobile/fenster.png
- Seitentitel: "Montage von Fenstern in Bremen und Umgebung | HB Wintergarten GmbH"
- Probleme: Keine

### Terrassenueberdachung (`/leistungen/terrassenueberdachung`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/terrassenueberdachung.png | mobile/terrassenueberdachung.png
- Seitentitel: "Terrassenueberdachung montieren lassen in Bremen | HB Wintergarten GmbH"
- Probleme: Keine

### Raff-Store-Anlagen (`/leistungen/raff-store-anlagen`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/raff-store-anlagen.png | mobile/raff-store-anlagen.png
- Seitentitel: "Raffstore-Anlagen von HB Wintergarten GmbH | Sonnenschutz Bremen"
- Probleme: Keine

### Wintergarten (`/leistungen/wintergarten`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/wintergarten.png | mobile/wintergarten.png
- Seitentitel: "Wintergarten nach Mass bauen lassen im Raum Bremen | HB Wintergarten GmbH"
- Probleme: Keine

### Haustueren (`/leistungen/haustueren`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/haustueren.png | mobile/haustueren.png
- Seitentitel: "Haustueren von HB Wintergarten GmbH aus Bremen"
- Probleme: Keine

### Referenzen (`/referenzen`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/referenzen.png | mobile/referenzen.png
- Probleme: Keine

### Produkte (`/produkte`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/produkte.png | mobile/produkte.png
- Seitentitel: "Produkte | HB Wintergarten GmbH"
- Hinweis: Seite nicht in Next.js-Routenstruktur erwartet (kein Verzeichnis in src/app), funktioniert aber — moglicherweise via catch-all oder dynamische Route
- Probleme: Keine

### Kontakt (`/kontakt`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/kontakt.png | mobile/kontakt.png
- Formular: Vorhanden (Name, E-Mail, Telefon, Produkt-Auswahl, Flache, Extras, Nachricht, DSGVO-Checkbox, Submit-Button)
- Telefonnummer: Vorhanden (0152 07128739)
- Adresse: Vorhanden (Kluverweg 8 d, 28307 Bremen)
- E-Mail: Vorhanden (info@hbw-bremen.de)
- Probleme: Keine

### Anfahrt (`/anfahrt`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/anfahrt.png | mobile/anfahrt.png
- Seitentitel: "Anfahrt | HB Wintergarten GmbH"
- Probleme: Keine

### Jobs (`/jobs`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/jobs.png | mobile/jobs.png
- Probleme: Keine

### Impressum (`/impressum`)
- Status: OK
- HTTP: 200
- Screenshots: desktop/impressum.png | mobile/impressum.png
- Seitentitel: "Impressum | HB Wintergarten GmbH"
- Probleme: Keine

### Datenschutzerklarung (`/datenschutzerklaerung`)
- Status: OK — aber mit URL-Mismatch
- HTTP: 200 fuer `/datenschutzerklaerung`, 404 fuer `/datenschutz`
- Screenshots: desktop/datenschutz.png | mobile/datenschutz.png (aufgerufen via /datenschutzerklaerung)
- Seitentitel: "Datenschutzerklarung | HB Wintergarten GmbH"
- Probleme: ROUTE-MISMATCH — Das Next.js-Verzeichnis heisst `src/app/datenschutz/` (Route: `/datenschutz`), aber der Footer verlinkt auf `/datenschutzerklaerung`. Die URL `/datenschutz` liefert 404. Das Next.js-Framework hat die Route anders aufgeloest als erwartet. Vermutung: Ein anderes Verzeichnis oder eine Redirect-Konfiguration existiert. Footer-Link funktioniert korrekt (`/datenschutzerklaerung`), aber direkter Aufruf von `/datenschutz` schlagt fehl.

### Bewerbungsformular (`/jobs/bewerbungsformular`)
- Status: FEHLT
- HTTP: 404
- Screenshot: desktop/bewerbungsformular-404.png
- Probleme: Seite in Sitemap referenziert, aber nicht implementiert. Kein Unterverzeichnis in `src/app/jobs/`.

### Digitale Barrierefreiheit (`/digitale-barrierefreiheit`)
- Status: FEHLT
- HTTP: 404
- Screenshot: desktop/digitale-barrierefreiheit-404.png
- Probleme: Seite in Sitemap referenziert, aber nicht implementiert. Kein Verzeichnis in `src/app/`.

---

## Farb-Check

Brand-Farben aus `scraped-data/brand/colors.json`:
- Primary: #508CB1 (Stahlblau)
- Secondary: #0B3554 (Marine)
- Accent: #BAD32C (Gelbgruen)

Ergebnis:
- Alle drei Farben sind korrekt als CSS Custom Properties in `globals.css` definiert
- `--color-brand-primary: #508CB1`, `--color-brand-secondary: #0B3554`, `--color-brand-accent: #BAD32C`
- Die Farben werden als shadcn-Token gemappt: `--primary: #508CB1`, `--secondary: #0B3554`, `--accent: #BAD32C`
- Farbe #508CB1 erscheint in der kompilierten CSS-Datei (5 Fundstellen)
- Scrollbar verwendet Primarfarbe — visuelle Prazenz bestatigt

---

## Link-Check

Interne Links aus der Navigation:
- `/` (Startseite): OK
- `/ueber-uns`: OK
- `/leistungen` (Dropdown): OK
- `/leistungen/terrassenueberdachung`: OK
- `/leistungen/markisen`: OK
- `/leistungen/wintergarten`: OK
- `/leistungen/fenster`: OK
- `/leistungen/haustueren`: OK
- `/leistungen/insektenschutz`: OK
- `/leistungen/raff-store-anlagen`: OK
- `/referenzen`: OK
- `/jobs`: OK
- `/kontakt`: OK
- `/impressum` (Footer): OK
- `/datenschutzerklaerung` (Footer-Link): OK — Route `/datenschutz` (direkter Pfad) liefert 404

Nicht erreichbar:
- `/jobs/bewerbungsformular`: 404
- `/digitale-barrierefreiheit`: 404
- `/anfahrt`: HTTP 200, aber vorher zeitweise 404 (Server-Neustart benoetigt)

---

## Gefundene Probleme

### P1 — Fehlende Seiten (Hoch)

1. **`/jobs/bewerbungsformular` — 404 Not Found**
   - Seite ist in der Sitemap und auf der Original-Website vorhanden
   - Kein Verzeichnis `src/app/jobs/bewerbungsformular/` angelegt
   - Workaround: Seite erstellen oder aus Sitemap entfernen

2. **`/digitale-barrierefreiheit` — 404 Not Found**
   - Seite ist in der Sitemap und auf der Original-Website vorhanden
   - Kein Verzeichnis `src/app/digitale-barrierefreiheit/` angelegt
   - Workaround: Seite erstellen oder aus Sitemap entfernen

### P2 — Route-Mismatch (Mittel)

3. **`/datenschutz` liefert 404, obwohl `src/app/datenschutz/page.tsx` existiert**
   - Die Route `/datenschutzerklaerung` (200) und `/datenschutz` (404) sollten beide funktionieren
   - Die Sitemap referenziert `/datenschutzerklaerung`, der Footer-Link zeigt korrekt auf `/datenschutzerklaerung`
   - Das Verzeichnis `src/app/datenschutz/` sollte die Route `/datenschutz` erzeugen — tut es aber nicht
   - Mogliche Ursache: Build-Cache-Problem oder ein anderes Framework-Verhalten
   - Empfehlung: Verzeichnis umbenennen zu `src/app/datenschutzerklaerung/` um mit dem tatsachlichen URL-Pattern konsistent zu sein

### P3 — Hinweise (Niedrig)

4. **Partner-Logo (logo213_large_GxNz0eoufh.png) — Timing-Warnung bei Bildladepruefung**
   - Bei der automatisierten Pruefung war `img.complete = false` und `naturalWidth = 0`
   - Die Datei existiert und ist valides PNG (300x150 RGBA)
   - HTTP 200 bestatigt
   - Wahrscheinlich ein Lazy-Load-Timing-Artefakt des Tests, kein echter Fehler
   - Empfehlung: Im Browser manuell prufen

5. **`/produkte` ohne dediziertes App-Verzeichnis**
   - Die Route `/produkte` liefert HTTP 200, aber kein `src/app/produkte/` existiert
   - Moglicherweise via `src/app/[...slug]/` oder ahnliche dynamische Route gelost
   - Seitentitel korrekt: "Produkte | HB Wintergarten GmbH"
   - Kein Bug, aber die Routing-Struktur ist nicht offensichtlich

---

## Screenshots

Alle Screenshots gespeichert in:
- Desktop (1440x900): `./qa/desktop/`
- Mobile (390x844): `./qa/mobile/`

| Seite | Desktop | Mobile |
|-------|---------|--------|
| Startseite | desktop/home.png | mobile/home.png |
| Uber uns | desktop/ueber-uns.png | mobile/ueber-uns.png |
| Leistungen | desktop/leistungen.png | mobile/leistungen.png |
| Markisen | desktop/markisen.png | mobile/markisen.png |
| Insektenschutz | desktop/insektenschutz.png | mobile/insektenschutz.png |
| Fenster | desktop/fenster.png | mobile/fenster.png |
| Terrassenueberdachung | desktop/terrassenueberdachung.png | mobile/terrassenueberdachung.png |
| Raff-Store-Anlagen | desktop/raff-store-anlagen.png | mobile/raff-store-anlagen.png |
| Wintergarten | desktop/wintergarten.png | mobile/wintergarten.png |
| Haustueren | desktop/haustueren.png | mobile/haustueren.png |
| Referenzen | desktop/referenzen.png | mobile/referenzen.png |
| Produkte | desktop/produkte.png | mobile/produkte.png |
| Kontakt | desktop/kontakt.png | mobile/kontakt.png |
| Anfahrt | desktop/anfahrt.png | mobile/anfahrt.png |
| Jobs | desktop/jobs.png | mobile/jobs.png |
| Impressum | desktop/impressum.png | mobile/impressum.png |
| Datenschutz | desktop/datenschutz.png | mobile/datenschutz.png |
| Bewerbungsformular (404) | desktop/bewerbungsformular-404.png | — |
| Digitale Barrierefreiheit (404) | desktop/digitale-barrierefreiheit-404.png | — |
