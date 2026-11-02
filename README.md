# [Kontrapunktatlas](https://muk-labs.github.io/Kontrapunktatlas/)

Ein deutschsprachiger Fragenatlas für den Unterricht im zweistimmigen Kontrapunkt, ausgehend von Adrián Artachos MUK-Handout *Woche 1*. Eine Frage führt zu den entsprechenden Aussagen im modalen und tonalen Satz, zu Artachos Hindemith-Vergleich und zu einzeln belegten Lehrbuchpositionen und zu den Notenbildern der betreffenden Ausgaben.

## Lokal öffnen und auf GitHub Pages veröffentlichen

Das Repository herunterladen und `index.html` im Browser öffnen. Suche, Filter, Handout und alle eingebetteten Notenbilder funktionieren auch offline. Zur vollständigen Ausgabe führt bei jedem Ausschnitt **Originalseite öffnen**.

GitHub Pages veröffentlicht die Dateien aus der Wurzel dieses Repositorys. Der Atlas läuft ohne Build-Schritt oder Datenbankdienst.

## Die Auswahl für den Unterricht teilen

Eine Frage im Verzeichnis auswählen, gegebenenfalls auf eine Spezies einschränken und **Link kopieren** verwenden. An die veröffentlichte Adresse wird beispielsweise `#frage=sprungfolge&spezies=4` angehängt. Lokal kopiert der Atlas nur die Sprungmarke. Die Quellenwahl im Verzeichnis schränkt die Fragenliste ein. Beim Öffnen einer Frage bleiben die anderen Perspektiven zum Vergleich sichtbar. **Mit Notenbeispiel** beschränkt die Liste auf illustrierte Fragen. Zusammen mit einem Autorennamen findet der Filter die Fragen mit einem Notenbild dieses Autors.

Drei Einstiege für den Unterricht

| Frage | Was sich am Notenbild vergleichen lässt |
| --- | --- |
| [Darf ich mit einer Quinte oder Oktave beginnen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=anfangsintervall) | Fux setzt den Kontrapunkt über und unter denselben Cantus. Bei Zarlino setzt die zweite Stimme verspätet ein. Prout eröffnet mit einer Dezime. |
| [Darf eine Dissonanz auf eine betonte Zeit fallen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=betonte-dissonanz) | Cherubini markiert den betonten Durchgang in seiner Lösung mit einem Stern. Prout greift dieselben Takte auf. |
| [Wie verlässt die Nota cambiata ihre Dissonanz?](https://muk-labs.github.io/Kontrapunktatlas/#frage=cambiata) | Cherubinis Korrektur und Bellermanns Palestrina-Beleg machen zwei verschiedene Bewertungen des Terzsprungs hör- und lesbar. |

## Quellen und Bearbeitung

Die ursprünglichen 24 Tabellenzeilen stehen vollständig in **atlas-data.js**. Jede enthält fünf modale und fünf tonale Zellen, in der Reihenfolge S1 bis S5. Die zugrunde liegenden Seiten sind im dreiseitigen PDF-Ausschnitt als S. 6 und 8 paginiert. Die 17 Zeilen auf S. 9 bilden einen eigenen Vergleich. „Hindemith“ bezeichnet dort Artachos Zusammenfassung. Die Zeilen wurden thematisch zugeordnet und bleiben über ihren Originaltitel auffindbar.

Die Redaktion hat die Fragenüberschriften formuliert. Die Spezieszellen und die Kommentare des Lehrmodellvergleichs bewahren den Wortlaut des Handouts. „Gleich“ erscheint mit ausgeschriebenem Bezug und einem Hinweis auf den Originaleintrag. Die Lehrbuchpositionen sind deutsche Paraphrasen mit Fundstelle und Geltungsbereich. Die Bildunterschriften schlagen vor, welche Stimmen, Zählzeiten oder Intervallfolgen man vergleichen kann. NCT steht für *non-chord tone*, einen harmoniefremden Ton.

### Notenausgaben und Bildnachweise

Die Bilder sind Ausschnitte der historischen Drucke. Unter jedem Bild stehen die Herkunft und ein Link zur vollständigen Scan-Seite. Die gedruckte Seitenzahl und die Blattnummer im PDF-Viewer können voneinander abweichen.

| Autor | Ausgabe und Digitalisat |
| --- | --- |
| Gioseffo Zarlino | *Le istitutioni harmoniche*, Venedig 1558. Gemeinfreie Scans der [Library of Congress, Music Division](https://www.loc.gov/item/11027718/). Die Kapitelbelege führen zur [Transkription der Universität Utrecht](https://tmiweb.science.uu.nl/text/transcription/zarins58.html). |
| Johann Joseph Fux | *Gradus ad Parnassum*, Wien 1725. [Wienbibliothek im Rathaus, B-61291, Public Domain Mark 1.0](https://www.digital.wienbibliothek.at/wbrobv/content/titleinfo/4118035). |
| Luigi Cherubini | *Cours de contrepoint et de fugue*, [deutsch-französischer Druck](https://commons.wikimedia.org/wiki/File:Cours_de_contrepoint_et_de_fugue_(IA_imslp-de-contrepoint-et-de-fugue-cherubini-luigi).pdf), und *A Treatise on Counterpoint and Fugue*, übersetzt von Mary Cowden Clarke, herausgegeben von Josiah Pittman, [Novello-Ausgabe, Harvard-Exemplar](https://commons.wikimedia.org/wiki/File:A_treatise_on_counterpoint_%26_fugue_(IA_atreatiseoncoun00pittgoog).pdf). Gemeinfreie Drucke. |
| Ebenezer Prout | *Counterpoint: Strict and Free*, 3. Auflage, London, Augener, Vorwort 1890. [Gemeinfreies Cornell-Exemplar](https://commons.wikimedia.org/wiki/File:Counterpoint-_strict_and_free_(IA_cu31924021789650).pdf). |
| Heinrich Bellermann | *Der Contrapunkt*, 4. Auflage, Berlin 1901. [Sibley Music Library, University of Rochester, gemeinfrei](https://urresearch.rochester.edu/institutionalPublicationPublicView.action?institutionalItemId=21800). |
| Percy Goetschius | *Exercises in Elementary Counterpoint*, G. Schirmer, 5. Auflage, Copyright 1910. [Gemeinfreies Cornell-Exemplar](https://commons.wikimedia.org/wiki/File:Exercises_in_elementary_counterpoint_(IA_cu31924021751098).pdf). |

Für Hindemith führen die gesonderten Werkbelege zum Schott-Inhaltsverzeichnis des Übungsbuchs und zum Einlegeblatt des theoretischen Bandes. Die modernen Lehrtexte von John Rothgeb, Kris Shaffer und Mark Gotham sind bei der jeweiligen Frage verlinkt.

## Eine Frage oder Autorenposition ergänzen

`atlas-data.js` ist die einzige zu pflegende Inhaltsdatei. Die vorhandenen Objekte sind Beispiele. Eine Frage erhält eine dauerhafte `id` für Links, eine Frage als `title`, einen `group`-Wert und Suchwörter in `tags`. Vorhandene Kennungen sollten auch nach einer Umbenennung erhalten bleiben.

| Feld | Inhalt |
| --- | --- |
| `species` | Optional. Die beiden Handout-Zeilen mit dem gemeinsamen Originaltitel und je fünf Zelltexten in `modal` und `tonal`. |
| `comparisons` | Eine Liste der passenden Zeilen auf S. 9 mit `label`, `modal`, `tonal`, `hindemith` und `comment`. Für eine neue Frage zunächst eine leere Liste einsetzen. |
| `authors` | Optional. Für jede belegte Position ein Objekt mit `name`, `work`, `locator`, `text` und optionaler `url`. In `locator` stehen der genaue Fundort und der Geltungsbereich, etwa „zweistimmig, erste Spezies“. |
| `authors[].examples` | Optional. Liste der Kennungen aus dem zentralen Bildverzeichnis `ATLAS.examples`. So kann derselbe Ausschnitt mehrere Fragen belegen. |
| `reading` | Optional. Kurzer redaktioneller Hinweis auf einen hör- oder lesbaren Unterschied zwischen den Quellen. |
| `related` | Optional. Liste der Kennungen verwandter Fragen. |

Für ein neues Notenbild die Datei in `quellen/noten/` ablegen. Unter `ATLAS.examples` eine dauerhafte Kennung anlegen, beispielsweise `fux-cambiata`. Jeder Bilddatensatz enthält den relativen Pfad `image`, den Titel `title`, einen Alternativtext `alt`, den Lesehinweis `caption`, den Bildnachweis mit Rechten `credit` und den Link zur Originalseite `url`. In der passenden Autorenposition genügt dann `"examples": ["fux-cambiata"]`.

Für ein weiteres Lehrbuch die betreffende Frage suchen, unter `authors` einen Eintrag hinzufügen und nach dem Speichern die Seite neu laden. Die Quelle erscheint automatisch im Filter. Für neue Themen ein Fragenobjekt mit einer neuen Kennung anlegen. Eine Frage mit leerer Vergleichsliste und ohne Beleg wird als offen angezeigt. „Verboten“ und „nicht relevant“ sind fachliche Aussagen und werden nur dort eingetragen, wo die Quelle sie tatsächlich macht.

## Redaktionelle Beiträge

Leserinnen und Leser können zu einer Frage **Ergänzung oder Korrektur vorschlagen** öffnen, ihre Formulierung mit Werk, Ausgabe und Fundstelle eintragen und einen GitHub-Issue-Entwurf öffnen. Die endgültige Übermittlung erfolgt auf GitHub. Für Beiträge ohne Konto kann man den Text kopieren und selbst an die Redaktion weitergeben. Die Redaktion prüft Fundstelle und Geltungsbereich und übernimmt angenommene Vorschläge in die Datendatei.

## Dateien

- `index.html` und `atlas.css` enthalten Seitenstruktur und Gestaltung.
- `atlas.js` stellt Suche, Filter und verlinkbare Ansichten bereit.
- `atlas-data.js` enthält Fragen, Antworten und Quellen.
- `quellen/noten/` enthält die im Atlas verwendeten Notenbilder.
- `quellen/handout.pdf` enthält die drei Originalseiten des Unterrichtshandouts.

## [ToDo](https://trello.com/c/QGWcdcLt/123-counterpoint)
