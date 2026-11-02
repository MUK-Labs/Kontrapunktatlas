# [Kontrapunktatlas](https://muk-labs.github.io/Kontrapunktatlas/)

Ein deutschsprachiger Fragenatlas für den Unterricht im zweistimmigen Kontrapunkt, ausgehend von Adrián Artachos MUK-Handout *Woche 1*. Eine Frage führt zu den entsprechenden Aussagen im modalen und tonalen Satz, zu Artachos Hindemith-Vergleich und zu einzeln belegten Lehrbuchpositionen.

## Lokal öffnen und auf GitHub Pages veröffentlichen

Nach dem Entpacken `index.html` im Browser öffnen. Suche, Filter, Fragen und Handout funktionieren auch offline. Externe Lehrbuchquellen und das Einreichen über GitHub benötigen eine Internetverbindung.

Für [AdrianArtacho/Counterpoint](https://github.com/AdrianArtacho/Counterpoint) die Dateien dieses Ordners einschließlich `quellen/` in die Wurzel des gewünschten Veröffentlichungszweigs übernehmen. Im Repository unter **Settings → Pages → Deploy from a branch** den Zweig (z. B. `main`) und **/(root)** wählen. Der Atlas benötigt weder einen Build-Schritt noch einen Datenbankdienst. Die Dateien verwenden relative Pfade und funktionieren im Unterverzeichnis der Projektseite. [GitHub-Dokumentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Die Auswahl für den Unterricht teilen

Eine Frage im Verzeichnis auswählen, gegebenenfalls auf eine Spezies einschränken und **Link kopieren** verwenden. An die veröffentlichte Adresse wird beispielsweise `#frage=sprungfolge&spezies=4` angehängt. Lokal kopiert der Atlas nur die Sprungmarke. Die Quellenwahl im Verzeichnis schränkt die Fragenliste ein. Beim Öffnen einer Frage bleiben die anderen Perspektiven zum Vergleich sichtbar.

## Quellen und Bearbeitung

Die ursprünglichen 24 Tabellenzeilen stehen vollständig in **atlas-data.js**. Jede enthält fünf modale und fünf tonale Zellen, in der Reihenfolge S1 bis S5. Die zugrunde liegenden Seiten sind im dreiseitigen PDF-Ausschnitt als S. 6 und 8 paginiert. Die 17 Zeilen auf S. 9 bilden einen eigenen Vergleich. „Hindemith“ bezeichnet dort Artachos Zusammenfassung. Die Zeilen wurden thematisch zugeordnet und bleiben über ihren Originaltitel auffindbar.

Die Redaktion hat die Fragenüberschriften formuliert. Die Spezieszellen und die Kommentare des Lehrmodellvergleichs bewahren den Wortlaut des Handouts. „Gleich“ erscheint mit ausgeschriebenem Bezug und einem Hinweis auf den Originaleintrag. Aussagen aus Werken von Fux, Goetschius und Rothgeb sind deutsche Paraphrasen mit Fundstellen und dem jeweiligen Geltungsbereich. NCT steht für *non-chord tone*, einen harmoniefremden Ton.

## Eine Frage oder Autorenposition ergänzen

`atlas-data.js` ist die einzige zu pflegende Inhaltsdatei. Die vorhandenen Objekte sind Beispiele. Eine Frage erhält eine dauerhafte `id` für Links, eine Frage als `title`, einen `group`-Wert und Suchwörter in `tags`. Vorhandene Kennungen sollten auch nach einer Umbenennung erhalten bleiben.

| Feld | Inhalt |
| --- | --- |
| `species` | Optional. Die beiden Handout-Zeilen mit dem gemeinsamen Originaltitel und je fünf Zelltexten in `modal` und `tonal`. |
| `comparisons` | Eine Liste der passenden Zeilen auf S. 9 mit `label`, `modal`, `tonal`, `hindemith` und `comment`. Für eine neue Frage zunächst eine leere Liste einsetzen. |
| `authors` | Optional. Für jede belegte Position ein Objekt mit `name`, `work`, `locator`, `text` und optionaler `url`. In `locator` stehen der genaue Fundort und der Geltungsbereich, etwa „zweistimmig, erste Spezies“. |
| `related` | Optional. Liste der Kennungen verwandter Fragen. |

Für ein weiteres Lehrbuch die betreffende Frage suchen, unter `authors` einen Eintrag hinzufügen und nach dem Speichern die Seite neu laden. Die Quelle erscheint automatisch im Filter. Für neue Themen ein Fragenobjekt mit einer neuen Kennung anlegen. Eine Frage mit leerer Vergleichsliste und ohne Beleg wird als offen angezeigt. „Verboten“ und „nicht relevant“ sind fachliche Aussagen und werden nur dort eingetragen, wo die Quelle sie tatsächlich macht.

## Redaktionelle Beiträge

Leserinnen und Leser können zu einer Frage **Ergänzung oder Korrektur vorschlagen** öffnen, ihre Formulierung mit Werk, Ausgabe und Fundstelle eintragen und einen GitHub-Issue-Entwurf öffnen. Die endgültige Übermittlung erfolgt auf GitHub. Für Beiträge ohne Konto kann man den Text kopieren und selbst an die Redaktion weitergeben. Die Redaktion prüft Fundstelle und Geltungsbereich und übernimmt angenommene Vorschläge in die Datendatei.

## Dateien

- `index.html` und `atlas.css` enthalten Seitenstruktur und Gestaltung.
- `atlas.js` stellt Suche, Filter und verlinkbare Ansichten bereit.
- `atlas-data.js` enthält Fragen, Antworten und Quellen.
- `quellen/handout.pdf` enthält die drei Originalseiten des Unterrichtshandouts.

## [ToDo](https://trello.com/c/QGWcdcLt/123-counterpoint)
