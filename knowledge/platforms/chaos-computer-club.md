# Chaos Computer Club (CCC) – `https://ccc.de`

URL: https://ccc.de

Source: `legacy-skills/chaos-computer-club/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Chaos Computer Club', 'CCC', 'Hackerethik', '37C3', 'Datenschleuder', or German hacker culture.

## Language

- **Primärsprache:** Deutsch (Hochdeutsch). Alle offiziellen Ankündigungen, Pressemitteilungen und Diskussionen auf `ccc.de` und den zugehörigen Mailinglisten erfolgen primär auf Deutsch. Englisch wird für international relevante technische Inhalte toleriert, aber die Reichweite ist geringer.
- **Mehrsprachige Strategie:** Wenn Ihr Projekt nicht auf Deutsch dokumentiert ist, übersetzen Sie die Kernbotschaft (Titel, Zusammenfassung, technische Details) ins Deutsche. Verwenden Sie englische Fachbegriffe (z. B. "Exploit", "Reverse Engineering") nur, wenn es keine etablierte deutsche Entsprechung gibt. Ein reiner englischer Post ohne deutsche Übersetzung wird von der Kerncommunity ignoriert.

## Good Fit

- Sicherheitsforschung und Exploit-Entwicklung: Projekte, die konkrete Sicherheitslücken aufdecken, Patch-Analysen liefern oder neue Angriffsvektoren demonstrieren (z. B. ein Tool zur Analyse von Firmware-Updates).
- Datenschutz- und Anonymisierungstools: Software, die Überwachung umgeht, Metadaten minimiert oder Verschlüsselung benutzerfreundlich macht (z. B. ein Fork von Tor, ein selbst gehosteter E-Mail-Proxy).
- Hardware-Hacking und Bastelprojekte: Open-Source-Hardware, SDR-Anwendungen, Reverse-Engineering von IoT-Geräten oder eigene Mikrocontroller-Platinen.
- Infrastruktur- und Netzwerkanalyse: Projekte zur Netzwerküberwachung, Traffic-Analyse oder zur Dezentralisierung von Diensten (z. B. ein eigener DNS-Resolver, ein Mesh-Netzwerk-Tool).
- Politisch motivierte Technologieprojekte: Projekte, die sich mit Überwachungsgesetzen, Digitaler Gewalt oder Zensurumgehung befassen und eine klare politische Haltung einnehmen (z. B. eine App zur Dokumentation von Polizeiwillkür).

## Poor Fit

- Sicherheitsforschung und Exploit-Entwicklung: Projekte, die konkrete Sicherheitslücken aufdecken, Patch-Analysen liefern oder neue Angriffsvektoren demonstrieren (z. B. ein Tool zur Analyse von Firmware-Updates).
- Datenschutz- und Anonymisierungstools: Software, die Überwachung umgeht, Metadaten minimiert oder Verschlüsselung benutzerfreundlich macht (z. B. ein Fork von Tor, ein selbst gehosteter E-Mail-Proxy).
- Hardware-Hacking und Bastelprojekte: Open-Source-Hardware, SDR-Anwendungen, Reverse-Engineering von IoT-Geräten oder eigene Mikrocontroller-Platinen.
- Infrastruktur- und Netzwerkanalyse: Projekte zur Netzwerküberwachung, Traffic-Analyse oder zur Dezentralisierung von Diensten (z. B. ein eigener DNS-Resolver, ein Mesh-Netzwerk-Tool).
- Politisch motivierte Technologieprojekte: Projekte, die sich mit Überwachungsgesetzen, Digitaler Gewalt oder Zensurumgehung befassen und eine klare politische Haltung einnehmen (z. B. eine App zur Dokumentation von Polizeiwillkür).

## Format And Style Notes

- Faktentreue vor Meinung: Jede Behauptung muss durch Quellen belegt sein (CVE, Paper, Git-Commit).
- Minimale Formatierung: Kein HTML-Spielereien, keine Emojis, keine bunten Überschriften. Der Inhalt zählt.
- Direkte Ansprache: Verwenden Sie "man" oder die passive Form. "Ich" ist nur für persönliche Erfahrungen akzeptabel.
- Kein Marketing-Sprech: Vermeiden Sie Wörter wie "revolutionär", "einzigartig", "bahnbrechend". Beschreiben Sie, was das Projekt *tut*.
- Präzise Code-Blöcke: Jeder Code-Block muss eine Sprache haben. Kein "```" ohne Angabe.
- Kontext vor Kürze: Ein Post darf ruhig lang sein, wenn er notwendige Hintergrundinformationen liefert. Aber jeder Satz muss relevant sein.
- Signatur und PGP: Auf Mailinglisten ist eine PGP-Signatur Standard. Auf `ccc.de`-News wird mit vollem Namen oder etabliertem Handle gezeichnet.
- Politische Einordnung: Technische Probleme haben oft eine politische Dimension. Diese darf benannt werden, aber sachlich.

## Tone

6.  **Kontext vor Kürze:** Ein Post darf ruhig lang sein, wenn er notwendige Hintergrundinformationen liefert. Aber jeder Satz muss relevant sein.
    *   *Gut:* "Der Angriff basiert auf CVE-2023-1234. Betroffen sind Kernel-Versionen 5.10 bis 6.1. Die PoC nutzt eine Heap-Overflow aus."
    *   *Schlecht:* "Hier ist ein PoC. Viel Spaß."

7.  **Signatur und PGP:** Auf Mailinglisten ist eine PGP-Signatur Standard. Auf `ccc.de`-News wird mit vollem Namen oder etabliertem Handle gezeichnet.
    *   *Gut:* "-- \nMax Mustermann (PGP: 0xDEADBEEF)"
    *   *Schlecht:* "-- \n~maxi98"

8.  **Politische Einordnung:** Technische Probleme haben oft eine politische Dimension. Diese darf benannt werden, aber sachlich.
    *   *Gut:* "Die neue Überwachungssoftware des BSI erzeugt Metadaten, die ohne richterlichen Beschluss gespeichert werden."
    *   *Schlecht:* "Die böse Regierung will uns alle überwachen!"

## Zusammenfassung des Tons

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
