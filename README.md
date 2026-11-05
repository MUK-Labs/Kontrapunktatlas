# [Kontrapunktatlas](https://muk-labs.github.io/Kontrapunktatlas/)

Ein deutschsprachiger Fragenatlas für den Unterricht in Spezieskontrapunkt, Fuge und Generalbass. Ausgangspunkt ist Adrián Artachos MUK-Handout *Woche 1*. Eine Frage führt zu den entsprechenden Aussagen im modalen und tonalen Satz, zu Artachos Hindemith-Vergleich und zu einzeln belegten Lehrbuchpositionen und zu den Notenbildern der betreffenden Ausgaben.

## Lokal öffnen und auf GitHub Pages veröffentlichen

Das Repository herunterladen und `index.html` im Browser öffnen. Quellenverzeichnis, Suche, Filter, Handout und alle eingebetteten Notenbilder funktionieren auch offline. Bei einem historischen Ausschnitt führt **Originalseite öffnen** zum Digitalisat. **Notenbeispiel im Buch öffnen (PDF)** führt online zur Seite mit dem nummerierten Beispiel.

GitHub Pages veröffentlicht die Dateien aus der Wurzel dieses Repositorys. Der Atlas läuft ohne Build-Schritt oder Datenbankdienst.

## Quellen für den Unterricht auswählen und teilen

Im [Quellenverzeichnis](https://muk-labs.github.io/Kontrapunktatlas/quellen.html) ist zunächst jedes Werk angehakt. Für einen Vergleich **Alle abwählen**, die gewünschten Werke anhaken und **Mit dieser Auswahl zum Atlas** wählen. Das Verzeichnis zeigt die Fragen, zu denen mindestens eine gewählte Quelle beiträgt. Beim Öffnen einer Frage erscheinen deren ausgewählte Beiträge und zugehörige Notenbeispiele. Für Artachos Speziestabellen und seinen Hindemith-Vergleich gibt es das gemeinsame Kästchen **Unterrichtshandout**.

Das Menü **Quellen anordnen** bietet drei Ansichten: **Nach Quellenart** erhält die bisherige Gruppierung, **Nach Autor (A–Z)** ordnet alle Quellen nach dem Nachnamen der zuerst genannten Person, und **Nach erster Fassung** zeigt die datierten Werke von der ältesten zur neuesten. Gemeinsam verfasste Werke bleiben ein Eintrag. Die gewählten Kästchen bleiben beim Wechsel der Ansicht erhalten.

Für die Chronologie zählt **die erste Fassung des Werks**, unabhängig von einer späteren Auflage, einem Nachdruck oder einer Übersetzung. So steht Piston unter **1947**, Salzer–Schachter unter **1969** und Jeppesen unter **1930**, dem Jahr des dänischen Originals. Jede Quellenkarte unterscheidet **Erste Fassung** und **Verwendete Ausgabe**. Titel, Seitenbelege und Notenbilder beziehen sich weiterhin auf die tatsächlich konsultierte Ausgabe. Bereits veröffentlichte Werkkennungen wie `jeppesen1964` bleiben stabil, damit geteilte Links weiter funktionieren. Zwei konsultierte Übersetzungen desselben Werks behalten ihre eigenen Karten und Punkte, teilen aber dessen ursprüngliches Datum.

Bei zunächst handschriftlich überlieferten Werken oder Unterrichtsskripten ist die früheste belegte Fassung ausdrücklich als **Handschrift** oder **Unterrichtsfassung** bezeichnet. Vorbereitende Notizen und Entwürfe werden von einer eigenständig überlieferten Fassung des erschlossenen Werks unterschieden. Eine wahrscheinliche Datierung bleibt als solche erkennbar. Ein Copyrightjahr oder die früheste nachgewiesene Onlinefassung wird ebenfalls eigens gekennzeichnet und nicht ohne weiteren Beleg zur gesicherten Erstveröffentlichung erklärt. Ungeklärte Erstfassungen stehen am Ende; die Software ersetzt ein fehlendes Datum nicht durch das Jahr der verwendeten Ausgabe. In der chronologischen Ansicht und nach einem Sprung von der Zeitleiste öffnen sich die Erläuterungen samt **Datierungsbelegen**.

Am Ende des Quellenverzeichnisses zeigt **Quellen im Zeitverlauf** ausschließlich die aktuell ausgewählten Werke. Die Punkte, der Datumsbereich und die gesonderte Liste undatierter Quellen reagieren sofort auf einzelne Kästchen sowie **Alle auswählen** und **Alle abwählen**. Bei leerer Auswahl erscheint ein Hinweis. Jeder Punkt steht für eine gewählte Quelle mit belegter erster Fassung. Eine Datierungsspanne erscheint als gestrichelte Strecke mit dem Punkt am Beginn; ihre vollständige, gegebenenfalls qualifizierte Angabe bleibt im Tooltip und im Eintrag sichtbar. Nahe oder gleiche Jahre werden übereinander angeordnet, damit jedes Werk erreichbar bleibt.

Beim Überfahren oder Tastaturfokus erscheinen Autor, Datum der ersten Fassung, Jahr der verwendeten Ausgabe und Werktitel. Klicken, Antippen, Eingabe- oder Leertaste führen zur entsprechenden Quellenkarte, heben sie hervor und zeigen ihre Datierungsangaben. **Zur Zeitleiste ↓** bringt den Fokus zum Ausgangspunkt zurück. Die Quellenauswahl, die Anordnung und das bisherige Rücksprungziel bleiben erhalten; auch Vor- und Zurücknavigieren im Browser aktualisiert die Zeitleiste. Wird eine markierte Quelle abgewählt, entfällt ihre Markierung. Kleine Auswahlen passen auf schmale Bildschirme. Größere Auswahlen lassen sich innerhalb der Zeitleiste seitlich verschieben; der erste Ausschnitt beginnt dort bei den jüngeren Quellen, ohne die übrige Seite zu verbreitern.

Die Anordnung wird in der Adresse des Quellenverzeichnisses gespeichert: [alphabetische Ansicht](https://muk-labs.github.io/Kontrapunktatlas/quellen.html?sortierung=autor) und [chronologische Ansicht](https://muk-labs.github.io/Kontrapunktatlas/quellen.html?sortierung=jahr). Diese Links lassen sich mit `quellen` und einer bereits gewählten Frage oder einem Vergleich kombinieren. Beim Neuladen bleibt die Ansicht erhalten. Die Rückkehr zum Atlas oder zu **Unterschiede** übernimmt die Quellenauswahl und das bisherige Ziel; die Anordnung gilt allein für das Quellenverzeichnis.

**Link kopieren** teilt die aktuelle Frage, die Quellenauswahl und eine gegebenenfalls gewählte Spezies. Ein Link ohne den Parameter `quellen` öffnet den vollständigen Atlas. Weitere Fragen übernehmen die Auswahl. Sie bleibt beim Neuladen erhalten und gilt für alle, die den Link öffnen.

| Beispiel | Was sich öffnet |
| --- | --- |
| [Drei gegen eins bei Kennan und Prout](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kennan1999,prout1890#frage=drei-gegen-eins) | Zwei Antworten mit ihren Notenbeispielen und dem redaktionellen Vergleich der Spezieszuordnung. |
| [Vierte Spezies mit Artacho und Fux](https://muk-labs.github.io/Kontrapunktatlas/?quellen=artacho-handout,fux1725#frage=bindung-s4&spezies=4) | Die Tabellenzeile für S4 und Fux’ Behandlung der Bindung. |

Die Werkkennungen stehen im Quellenverzeichnis. Im URL-Parameter `?quellen=` trennt ein Komma die IDs. `?quellen=none` bezeichnet eine leere Auswahl. Auch frühere Links wie `#frage=sprungfolge&spezies=4` funktionieren weiterhin. Beim lokalen Öffnen kopiert **Link kopieren** für eine eingeschränkte Auswahl die Adresse der veröffentlichten Fassung. Sind alle Quellen gewählt, steht lokal weiterhin **Sprungmarke kopieren** bereit.

**Fragen nach Autor oder Lehransatz**, Themenbereich, Suche, **Mit Notenbeispiel** und **Mit verknüpften Positionen** filtern das Verzeichnis innerhalb der gewählten Werke. In der Fragenansicht bleiben alle passenden ausgewählten Werke zum Vergleich nebeneinander sichtbar.

Drei Einstiege für den Unterricht

| Frage | Was sich am Notenbild vergleichen lässt |
| --- | --- |
| [Darf ich mit einer Quinte oder Oktave beginnen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=anfangsintervall) | Fux setzt den Kontrapunkt über und unter denselben Cantus. Bei Zarlino setzt die zweite Stimme verspätet ein. Prout eröffnet mit einer Dezime. |
| [Darf eine Dissonanz auf eine betonte Zeit fallen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=betonte-dissonanz) | Cherubini markiert den betonten Durchgang in seiner Lösung mit einem Stern. Prout greift dieselben Takte auf. |
| [Wie verlässt die Nota cambiata ihre Dissonanz?](https://muk-labs.github.io/Kontrapunktatlas/#frage=cambiata) | Cherubinis Korrektur und Bellermanns Palestrina-Beleg machen zwei verschiedene Bewertungen des Terzsprungs hör- und lesbar. |

## Zwischen unterschiedlichen Antworten wechseln

Unter **Andere Positionen** führen beschriftete Links direkt zu einer anderen Antwort auf dieselbe Frage. Die kurze Erläuterung nennt den Unterschied zwischen genau diesen beiden Belegen. Jede Verbindung erscheint an beiden Antworten; die Zielantwort wird hervorgehoben und erhält den Tastaturfokus. Die Fundstellen bleiben bei den jeweiligen Antworten sichtbar.

| Kennzeichnung | Bedeutung |
| --- | --- |
| **Widerspruch** | Unvereinbare Regeln für eine vergleichbare Aufgabe. Beispielsweise erlaubt Fux eine unmittelbare Tonwiederholung in seiner zweistimmigen ersten Spezies, während Noël-Gallon und Bitsch sie dort ausschließen. |
| **Nuance** | Eine Erlaubnis oder Einschränkung fällt unterschiedlich aus, etwa die Zahl zulässiger Unterbrechungen einer Synkopenübung. |
| **Anderer Kontext** | Stil, Aufgabe, Stimmenzahl oder Begriffsgebrauch unterscheiden sich. Die Erläuterung benennt den Unterschied, etwa Kennans und Prouts verschiedene Speziesnummer für Drei-gegen-eins. |

Die Einordnung stammt von der Redaktion und stützt sich auf die beiden zitierten Antworten. Eine solche Verbindung behauptet nicht, dass die Autoren unmittelbar aufeinander reagierten. Fehlende Verbindungen bedeuten keine festgestellte Übereinstimmung. Bereits vorhandene ausführlichere Vergleiche bleiben erhalten; bei Antworten mit verknüpften Positionen lassen sie sich zusätzlich aufklappen.

Die Markierung **↔** im Fragenverzeichnis zählt die verfügbaren Vergleichspaare. **Mit verknüpften Positionen** zeigt nur Fragen, bei denen beide Werke eines Vergleichs ausgewählt sind. Die Links verändern die Quellenauswahl nicht. Gehört die Zielantwort zu einer anderen Spezies, trägt der Link beispielsweise den Zusatz **S3 öffnen**. Beiträge ohne passende Spezieszuordnung öffnen **Alle**. Im Drei-gegen-eins führt so die Antwort von Kennan in S2 gezielt zu Prout in S3 und wieder zurück.

**Antwortlink** an einer Karte öffnet ihre dauerhafte Adresse. Anschließend übernimmt **Antwortlink kopieren** im Fragenkopf genau diese Antwort, die Spezies und die Quellenauswahl. Beim lokalen Öffnen mit allen Quellen heißt die Kopierfunktion weiterhin **Sprungmarke kopieren**. Beispiel: [Fux zur Tonwiederholung](https://muk-labs.github.io/Kontrapunktatlas/#frage=tonwiederholung&spezies=1&antwort=fux1725-1). Führt ein geteilter Link zu einer abgewählten Quelle, zeigt der Atlas einen Hinweis mit Zugang zur Quellenauswahl. Nach dem Auswählen bleibt die Zielantwort erhalten.

## Widersprüche und Nuancen als Verzeichnis

Die Seite [Unterschiede](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html) sammelt die belegten Vergleiche nach Frage. Zunächst sind **Widerspruch** und **Nuance** ausgewählt; **Anderer Kontext** lässt sich zusätzlich oder allein einblenden. Die Erläuterung des Unterschieds steht jeweils vor den beiden Autoren und ihren Fundstellen. **Beide Antworten lesen** öffnet die vollständigen deutschen Paraphrasen nebeneinander, auf kleinen Bildschirmen untereinander. **Antwort im Atlas** führt zur genauen Antwort einschließlich ihrer Notenbeispiele.

Suche, Themenbereich, beteiligter Autor und Spezies lassen sich kombinieren. Ein Autorenfilter trifft auf eine der beiden Positionen zu; die andere bleibt zum Vergleich sichtbar. Dasselbe gilt für die Spezies. So bleibt ein Vergleich zwischen Kennans S2 und Prouts S3 auffindbar, wenn S2 gewählt ist. Die Antwortlinks berücksichtigen die Zuordnung des jeweiligen Lehrwerks.

| Einstieg | Ansicht |
| --- | --- |
| [Prout und Salzer–Schachter: Widersprüche](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html?quellen=prout1890,salzer-schachter1989#art=contradiction) | Direkte Regelgegensätze innerhalb dieser Quellenauswahl. |
| [Nuancen erkunden](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#art=nuance) | Unterschiede in Erlaubnissen und Einschränkungen über alle Werke. |
| [Zwei Erklärungen der Quartvorbereitung](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html?quellen=green-jones2011,salzer-schachter1989#art=context&vergleich=bindung-s4~green-jones2011-2~salzer-schachter1989-2) | Der konkrete Vergleich von Green–Jones und Salzer–Schachter wird hervorgehoben; beide Antworten sind geöffnet. |

**Ansicht kopieren** teilt Quellen und Filter. Der **Vergleichslink** an einem Eintrag öffnet genau dieses Paar; anschließend kopiert **Vergleich kopieren** dessen Adresse. Eine Vergleichskennung enthält die Frage und beide Antwortkennungen, sodass verschiedene Aussagen derselben Autoren getrennt verlinkbar bleiben. Die Reihenfolge der Antworten in der Datendatei verändert diese Kennung nicht.

**Quellen wählen** öffnet die gemeinsame Werkauswahl. Beide Werke müssen ausgewählt sein, damit ihr Vergleich erscheint. Von dort führt **Mit dieser Auswahl zu den Unterschieden** zurück zu den bisherigen Filtern und zum gewählten Vergleich. **Filter zurücksetzen** behält die Quellenauswahl bei. Alle Funktionen stehen auch beim lokalen Öffnen der HTML-Dateien zur Verfügung; kopierte Links verweisen dann auf die veröffentlichte Adresse.

Das Verzeichnis liest dieselben `relations` aus `atlas-data.js` wie die einzelnen Fragen. Jeder geprüfte Vergleich erscheint einmal; neue Verbindungen stehen automatisch auf beiden Seiten bereit.

## Stilbezug und Aufgabenrahmen einer Antwort

Die Antwortkarten im Atlas und die beiden Positionen auf **Unterschiede** zeigen den **Stilbezug** einer geprüften Aussage als beschriftete Farbmarke. Daneben steht ihr **Aufgabenrahmen**, etwa *Strenger Stil*, *Freier Stil*, *Palestrina-orientierte Speziesübung*, *Schulfuge* oder *Repertoireanalyse*. Die Spezieszuordnung bleibt davon getrennt.

Die Markierung bezeichnet den Kontext der zitierten Aussage. Sie behauptet keine ausschließliche Gültigkeit einer Regel für eine Epoche. Das Erscheinungsjahr eines Buchs bestimmt den Stilbezug nicht. Auch innerhalb desselben Lehrwerks können verschiedene Markierungen oder Aufgabenrahmen vorkommen.

**Einordnung und Beleg** öffnet die genaue Fundstelle und eine kurze Begründung. Dabei wird unterschieden, ob die Einordnung aus der konkreten Passage, aus dem ausdrücklich erklärten Lehrbuchrahmen oder aus dem untersuchten Repertoire folgt. Jede Zuordnung wird an der einzelnen Antwort gespeichert; es gibt keine automatische Übertragung von einer Quelle auf alle ihre Beiträge.

| Kennzeichnung | Bedeutung |
| --- | --- |
| **Mittelalter**, **Renaissance**, **Barock**, **Klassik / Romantik**, **20./21. Jahrhundert** | Historischer oder stilistischer Bezug der konkreten Aussage. Bei einem belegten Vergleich können mehrere Bezüge erscheinen. Engere Angaben stehen im Aufgabenrahmen und in der Begründung. |
| **Stilübergreifend** | Die Quelle verfolgt hier ausdrücklich einen Ansatz über einzelne Stile hinaus. Das ist keine Behauptung über sämtliche Musik. |
| **Noch nicht eingeordnet** | Der historische Stilbezug ist noch nicht belegt oder redaktionell zugeordnet. Ein bereits gesicherter Aufgabenrahmen kann trotzdem angezeigt werden. Fehlende Einordnung bedeutet keine allgemeine Gültigkeit. |

Die erste Durchsicht erschließt insbesondere bereits belegte Kontextvergleiche und konkrete Repertoireanalysen. Weitere Antworten lassen sich schrittweise ergänzen. Die Farbmarken werden durch Text ergänzt und bleiben dadurch auch im Ausdruck verständlich.

| Beispiel | Was die zusätzliche Einordnung sichtbar macht |
| --- | --- |
| [Jeppesen und Menke zum Dezimtausch](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964,menke2017#frage=doppelter-kontrapunkt) | Palestrina-orientierter Lehrbuchrahmen und strenge Übung gegenüber barocker Satzlehre an Bachs Aufzeichnungen. |
| [Strenge und freie Vorausnahmen](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=vorausnahme-und-vorhalt) | Derselbe Barockbezug bei Neidhöfer und Schubert, aber ausdrücklich verschiedene Bedingungen im strengen und freien Stil. |
| [Jeppesen und Salzer–Schachter zur gemischten Spezies](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964,salzer-schachter1989#frage=dissonanzbehandlung) | Unterschiedliche Lehrziele innerhalb derselben Kombination aus zweiter und dritter Spezies. |

Die Farben des Stilbezugs ändern die redaktionellen Beziehungen **Widerspruch**, **Nuance** und **Anderer Kontext** nicht. Vergleichspartner und ihre Fundstellen bleiben nebeneinander sichtbar. In dieser ersten Ausbaustufe dienen die Markierungen der Einordnung; es gibt keinen zusätzlichen Stilfilter, der noch nicht eingeordnete Antworten ausblendet.

## Fuge im Unterricht

Über **Fuge · Thema und Antwort** auf der Startseite oder den Themenfilter **Fuge** erreicht man die Fugenfragen. Jede Frage lässt sich wie die Speziesfragen als eigener Link teilen. Die Autorenpositionen nennen die jeweilige Aufgabe und Ausgabe. Die zusätzlich ausgewiesenen Partiturbeobachtungen sind redaktionelle Lesehinweise zu Bachs Notentext.

| Frage | Vorschlag für den Unterricht |
| --- | --- |
| [Wann ist die Antwort real, wann tonal?](https://muk-labs.github.io/Kontrapunktatlas/#frage=fuge-reale-tonale-antwort) | In den Fugen BWV 846 und 847 aus dem ersten Teil des Wohltemperierten Klaviers jeweils die ersten vier Töne von Dux und Comes vergleichen. |
| [Wie viele Einsätze braucht die Exposition?](https://muk-labs.github.io/Kontrapunktatlas/#frage=fuge-exposition) | Eine zweistimmige Exposition nach Prout und nach Gédalge skizzieren. Die Zahl der Einsätze an beiden Modellen ablesen. |
| [Wo endet das Fugenthema?](https://muk-labs.github.io/Kontrapunktatlas/#frage=fuge-themenende) | Die Basslinie von BWV 872 einmal bis zur Grenze von Prout und einmal bis zur Grenze von Keller spielen. Beide Töne sind im Notenbild markiert. |
| [Was ist eine Engführung, und braucht jede Fuge eine?](https://muk-labs.github.io/Kontrapunktatlas/#frage=fuge-engfuehrung) | Die Überlappung in BWV 846 in Vierteln zählen. Anschließend Cherubinis Forderung mit Prouts ausdrücklichem Einwand vergleichen. |

Weitere Fragen behandeln die Antwortstufe, die Beantwortung eines Quintsprungs und eines modulierenden Themas, wechselnde Antworten, Kontrasubjekt, Gegenexposition, Codetta und Zwischenspiel.

## Welche Spezies meint die Antwort?

Bei Fragen mit Speziesbelegen stehen **Alle** und **S1–S5** über den Antworten. Die Nummer folgt der Einteilung des jeweiligen Lehrwerks. So zählt Kennan das Drei-gegen-eins zur zweiten, Prout zur dritten Spezies. Eine gewählte Spezies zeigt ihre belegten Aussagen und Notenbeispiele sowie, wo vorhanden und ausgewählt, die entsprechende Zeile in Artachos Handout. **Alle** zeigt zusätzlich Beiträge aus freiem Satz und Aussagen, für die keine bestimmte Spezies belegt ist.

Beim Beginn einer Übung lohnt es sich, zwei Dinge getrennt zu hören. Wann setzt die Gegenstimme ein? Welches Intervall bildet ihr erster klingender Ton mit dem Cantus? In der dritten Spezies gestattet Schubert eine halbe Anfangspause. Prout empfiehlt vor einer Viertel eine Viertelpause. Gallon und Bitsch schreiben sie vor. Wähle danach **S5**, um die Eröffnungsmöglichkeiten im Floridus derselben drei Lehrwerke zu vergleichen. [Anfang der Gegenstimme in der dritten Spezies](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gallon-bitsch1964,prout1890,schubert1999#frage=anfangsintervall&spezies=3)

Das Buchsymbol vor dem Werktitel kennzeichnet Lehrbücher und Traktate im Quellenverzeichnis und an den Belegen einer Frage. Das lokal gespeicherte Symbol *book* stammt aus Font Awesome Free 6.7.2 von Fonticons und steht unter CC BY 4.0. [Symbol](https://fontawesome.com/icons/book?f=classic&s=solid) · [Lizenz](https://creativecommons.org/licenses/by/4.0/)

Autorennamen mit verifiziertem Wikipedia-Artikel sind in den Fragen, Erläuterungen, Quellenangaben und Bildunterschriften verlinkt. Die Biografie öffnet sich in einem neuen Tab. Das gilt auch für Nachnamen und Formen wie „Cherubinis“ oder „Hindemiths“. Im Quellenverzeichnis öffnet der Name die Biografie; das Kästchen oder der übrige Titel wählt das Werk. Der Beleg zur Buchseite bleibt über **Fundstelle öffnen** erreichbar. Unter dem Autorenfilter erscheint für die gewählte Person zusätzlich ein Wikipedia-Link. Namen ohne verifizierte Biografie bleiben als Text stehen.

## Generalbass als Aussetzungsaufgabe mit Georg Friedrich Händel

Die Werkkennung `haendel-generalbass` erschließt **35 Beiträge zu 18 Fragen** aus Händels **24 Generalbassübungen**, herausgegeben und gesetzt von **Derek Remeš** als *Handel’s Thoroughbass Exercises*. Gelesen wurden alle 24 Übungen, einschließlich der drei längeren Schlussstücke. Der Lehrgang führt vom weitgehend unbezifferten Bass über Sexten, chromatische Veränderungen und einzelne Vorhaltswege zu kombinierten Zifferngruppen, figurierten Bässen und längeren Zusammenhängen. [Herausgeber und weitere Lehrmaterialien](https://www.derekremes.com/historical-music-theory) · [TUDOdata-Datensatz](https://doi.org/10.17877/TUDODATA-2025-MC0APUER) · [Verwendete PDF-Fassung](quellen/haendel-generalbass-remes.pdf)

Die chronologische Einordnung lautet **1725–1726 (handschriftliche Übungen)**. Terence Best datiert die Generalbass- und Fugenübungen auf diese Jahre und verweist auf HHA Supplement 1, S. 23–37 und 48–51. Amanda Babington beschreibt den Generalbasszyklus als **24 Bassstudien auf fünfzehn Seiten** und verweist dafür auf Manns Einleitung S. 22. Die Zuordnung dieser fünfzehnseitigen Folge zu HHA S. 23–37 ergibt sich aus beiden Angaben; die Datierung bezeichnet die handschriftliche Werkfassung. [Best, Vorwort, S. III, Anm. 2](https://www.barenreiter.co.uk/prefaces/9790006521920_Innenansicht.pdf#page=3) · [Babington, „Handel the Tutor“, S. 21](https://iaml-uk-irl.org/media/Brio_51_1_2014.pdf#page=25)

Die **verwendete Ausgabe** bleibt gesondert ausgewiesen: **Version 12. Juni 2018; TUDOdata 2025**. Maßgeblich ist die öffentliche **Hochformatfassung mit 13 PDF-Seiten**, veröffentlicht am 17. Juni 2025. Die bereitgestellte 25-seitige Datei wurde vollständig gelesen und mit dieser Ausgabe abgeglichen. Sie enthält zusätzliche Überschriften und einzelne abweichende Bezifferungen; auch die öffentliche Querformatfassung weist Varianten auf. Deshalb verwenden alle Fundstellen, Notenbeobachtungen und Ausschnitte durchgehend die Hochformatfassung. Die Angaben nennen Übung, Takt und Seite; die Links öffnen die entsprechende Seite einer unveränderten, unter CC BY 4.0 bereitgestellten PDF-Kopie im Atlas.

Die oberen Stimmen bleiben in dieser Arbeitsfassung zur Aussetzung offen. Alle neuen Antworten sind daher als **Partiturbeobachtung** gekennzeichnet und beschreiben die notierten Bassbewegungen, Figuren, Dauern, Bindungen, Pausen und Schlüsselwechsel. Mögliche Oberstimmenwege, vereinfachende Basslesarten und formale Deutungen werden als redaktionelle Aufgaben kenntlich gemacht. Der Geltungsbereich lautet Generalbassübung im barocken Satz; es wird keine Speziesnummer ergänzt. Erschlossen ist dieser Zyklus, nicht die gesamte Sammlung von Händels Kompositions- und Fugenübungen.

Zwei neue Fragen behandeln den **unbezifferten Bass** und den **Zusammenhang eines vollständigen Satzes**. Weitere Beiträge ergänzen vorhandene Fragen.

| Frage | Was sich am Notentext untersuchen lässt |
| --- | --- |
| [Was bedeutet eine unbezifferte Bassnote?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=haendel-generalbass#frage=generalbass-ohne-ziffer) | Den anfänglichen 5/3-Aufgabenrahmen von noch offenen Entscheidungen über Lage und Verdopplung unterscheiden. |
| [Wie lese ich die Bezifferung als Stimmenführung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=haendel-generalbass#frage=generalbass-bezifferung-stimmfuehrung&antwort=haendel-generalbass-o11) | In Übung 11, T. 12, einen möglichen absteigenden Stimmenweg trotz steigender Intervallzahl 5–6 verfolgen. |
| [Was ändert ein bewegter Bass am Vorhalt?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=haendel-generalbass,menke2017#frage=vorhalt-bewegte-begleitstimme&antwort=haendel-generalbass-m07) | Die Folge 9–6 in Übung 18 mit dem gleichzeitigen Basssprung lesen; Intervallzahl, Lage und melodischen Schritt auseinanderhalten. |
| [Wann wechselt der Zusammenklang über einem gehaltenen Bass?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=haendel-generalbass,kittel2019#frage=harmonischer-rhythmus&antwort=haendel-generalbass-l08) | Die Bindung zwischen T. 6 und 7 der Übung 23 von der neuen Zifferngruppe 6/4/2 unterscheiden. |
| [Wie trägt ein Orgelpunkt wechselnde Figuren?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=haendel-generalbass#frage=orgelpunkt-mehrstimmig&antwort=haendel-generalbass-l02) | In Übung 22 wiederholte Bassanschläge und den Wechsel mehrerer Ziffernpaare unabhängig voneinander verfolgen. |
| [Wie wird aus Generalbassfiguren ein zusammenhängender Satz?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=haendel-generalbass#frage=generalbass-stueckform) | Anfang und Ende der Übungen 22 und 24 anhand von Rückkehr, Registeränderung, Kadenz und Pause vergleichen. |

**19 einzeln geprüfte Vergleichspaare** verbinden die neuen Beobachtungen mit Kittel, Weber, Menke, Sechter, Benjamin, Salzer–Schachter und Daniel. Die Vergleichstexte unterscheiden die Information einer bezifferten Aufgabe von einer ausformulierten Regel oder ausgeführten Stimme. [Vergleichsverzeichnis für Georg Friedrich Händel](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Georg+Friedrich+H%C3%A4ndel&art=contradiction,nuance,context)

**16 Notenbilder** zeigen ausgewählte vollständige Systeme und größere Zusammenhänge. Sie sind Ausschnitte aus Remeš’ modernem Notensatz, keine Faksimiles der Handschrift. Die Basszeile aus Übung 21 lässt das leere obere System weg; dieser Zuschnitt ist in der Bildunterschrift ausgewiesen. Alle Bilder erhalten Alternativtext, Lesehinweis, genaue Fundstelle, Urheber- und Editionsangaben sowie den Nachweis **CC BY 4.0**. Die Notation bleibt unverändert. [Originaldatei bei TUDOdata](https://data.tu-dortmund.de/api/access/datafile/58540) · [Lizenz](https://creativecommons.org/licenses/by/4.0/)

## Generalbassvokabular mit Hans Peter Weber

Die Werkkennung `weber2018` erschließt **75 Beiträge zu 30 Fragen** aus Hans Peter Webers *Generalbass-Compendium. Eine Art Vokabular / a Kind of Vocabulary* (Basel: Schola Cantorum Basiliensis, 2018), der ersten synoptischen Ausgabe in Deutsch und Englisch, übersetzt von **Maria Raffaele**. Gesichtet wurden alle **100 PDF-Seiten** der bereitgestellten Textfassung: beide Vorworte, die Teile **Signaturen**, **Bassfiguren** und **Zur Terminologie**, der Anhang mit historischen Tabellen und Zirkeln sowie das Quellenverzeichnis. Die eingeschobene Druckseite **28a** ist berücksichtigt. [Veröffentlichung der FHNW](https://www.fhnw.ch/de/musik/aktuelles/news-storys/alle/generalbass-compendium) · [Verwendete PDF-Fassung](https://www.fhnw.ch/++api++/de/musik/aktuelles/news-storys/alle/generalbass-compendium/compendium_generalbass_nur_text_ohne_audio.pdf/@@inline-file/file) · [Ausgaben mit Klangbeispielen beim Herausgeber](https://www.forschung.schola-cantorum-basiliensis.ch/en/publikationen.html?pubId=b98d3fa5-102f-4414-945f-d56469de5097&title=Generalbass-Compendium+%2F+Compendium+of+the+basso+continuo&type=ao-publications&view=detail)

**2018 ist das Erscheinungsjahr der verwendeten zweisprachigen Ausgabe.** Seit 1997 war das Material bereits handschriftlich im Unterricht in Gebrauch; unter **1997 (Unterrichtsfassung)** wird es chronologisch eingeordnet. Das Vorwort bestimmt als Gegenstand das kontrapunktisch-harmonische Vokabular der **ersten Hälfte des 18. Jahrhunderts** und den Generalbass in der Komposition. Auf diesem ausdrücklich genannten Rahmen beruhen die Barockmarkierungen der Antworten. Die einzelnen Aufgabenrahmen unterscheiden unter anderem Bassmodelle, Dissonanzfiguren, Gehörbildung und historische Terminologie; die Beiträge erhalten keine Speziesnummer. Die Fundstellen nennen die gedruckten Seiten und öffnen jeweils die entsprechende deutsche PDF-Seite. Das bereitgestellte Exemplar und der öffentliche Download der FHNW sind bytegleich. ISBN: **978-3-9524701-1-4** (PDF), **978-3-9524701-0-7** (Druck).

Fünf neue Fragen ergänzen das Verzeichnis. Die weiteren Aussagen sind den vorhandenen Fragen zugeordnet.

| Frage | Was sich untersuchen lässt |
| --- | --- |
| [Wie wird ein schrittweise geführter Bass harmonisiert?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=weber2018#frage=generalbass-schrittgaenge) | Steigende und fallende Schritte, Terz- und Quartgänge sowie die davon abhängigen Signaturen. |
| [Wie beeinflussen Basssprünge die Bezifferung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=weber2018#frage=generalbass-bassspruenge) | Verschiedene Terz- und Kadenzsprünge im Verhältnis zur Tonleiterstufe und zur Fortsetzung. |
| [Wie wird eine chromatische Rückung im Generalbass beziffert?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=weber2018#frage=generalbass-rueckung) | Die Verschiebung verminderter Septakkorde, leitereigene und akzidentale Bassstufen sowie einfache und mehrfache Rückungen. |
| [Welche Stimmen bilden im Generalbass den kontrapunktischen Kern?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=weber2018#frage=generalbass-haupt-fuellstimmen) | Haupt- und Füllstimmen, Heinichens Nachschlagetabelle und ausdrücklich zugelassene Auslassungen. |
| [Wie lese ich historische Namen für Halbtöne und alterierte Intervalle?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=weber2018#frage=historische-intervallnamen) | Chromatischer und diatonischer Halbton, Leittonfunktion und Heinichens Begriff der Falsae. |

Bei den Dissonanzen bleiben die konkreten Bedingungen sichtbar: Die reine Quinte des aufsteigenden Quintsextklangs verlangt eine andere Behandlung als die verminderte Quinte über dem Leitton. Die **Septima in transitu** entsteht mit **7/4/3** aus gehaltenen Stimmen über einem bewegten Bass; der gewöhnliche Septakkord wird mit **7/5/3** ergänzt. Die Oktavregel wird als zusammenfassendes Modell mit verschiedenen Fassungen gelesen. Webers historische Zitate werden ausdrücklich Heinichen, Mattheson, Gasparini, Carl Philipp Emanuel Bach und den jeweils genannten Autoren zugeordnet.

**12 einzeln geprüfte Vergleiche** verbinden die neuen Antworten mit bestehenden Positionen. Sie erläutern konkrete Unterschiede der Aufgabe, der Benennung oder der verlangten Stimmenführung. Ein Einstieg ist der [Vergleich der Septimenfüllung mit Kittel](https://muk-labs.github.io/Kontrapunktatlas/?quellen=weber2018,kittel2019#frage=generalbass-septakkord-fuellstimmen&antwort=weber2018-open-septima-in-transitu). Weitere Verbindungen erscheinen im [Verzeichnis der Unterschiede mit Weber](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Hans+Peter+Weber&art=contradiction,nuance,context).

**10 vollständige Buchseiten** sind als vergrößerbare Notenbilder eingebettet. Sie bewahren den gedruckten Inhalt und die Anordnung unverändert; Bildunterschriften, Alternativtexte und Leseaufträge stehen gesondert. Der Nachweis bei jeder Seite nennt **© Schola Cantorum Basiliensis 2018** und die im Impressum erlaubte didaktische Verwendung. Die nummerierten Klangbeispiele gehören zum Angebot des Herausgebers; die hier erschlossene Textfassung enthält keine eingebetteten Audios.

## Generalbassgriffe und Stimmführung mit Johann Christian Kittel

Die Werkkennung `kittel2019` erschließt **31 Beiträge zu 19 Fragen** aus *Generalbass Schule*, herausgegeben und ins Englische übersetzt von **Derek Remeš**, *Zeitschrift der Gesellschaft für Musiktheorie* 16/2 (2019), S. 143–165. Gesichtet wurden alle 23 PDF-Seiten: die Einleitung, **sämtliche zehn Regeln und Notenbeispiele auf S. 143–164** sowie der Editions- und Lizenznachweis auf S. 165. Die Antworten behandeln die belegt unterschiedlichen Griffe, Begleitintervalle und Stimmenwege, außerdem Choralzwischenspiele und die Grenzen unvollständig ausgeschriebener Übungen. [Öffentliche Edition](https://www.gmth.de/zeitschrift/artikel/1013.aspx) · [PDF](https://storage.gmth.de/zgmth/pdf/1013) · [DOI](https://doi.org/10.31751/1013)

**2019 ist das Erscheinungsjahr dieser Edition.** Die zugrunde liegende Abschrift Johann Christian Heinrich Rincks von Kittels Unterrichtsmaterial datiert Remeš wahrscheinlich auf **1786–1789**, Rincks Unterrichtszeit bei Kittel. Die Handschrift ist unter **US-NH, LM 3911, ma21y11k652** nachgewiesen. Die hier verwendete Edition enthält die Handschriftenseiten **[1]–[48]**; die anschließenden **[49]–[257]** sind laut Schlussnotiz nicht abgedruckt und wurden für diese Ergänzung nicht erschlossen. Im Quellenverzeichnis und auf der Zeitleiste steht die erste überlieferte Fassung unter **1786–1789 (Handschrift, vermutlich)**. **2019 (Quellenedition)** bleibt die gesonderte Datierung der verwendeten Ausgabe. Die erste Onlineveröffentlichung erfolgte am 23. Dezember 2019, der letzte Aktualisierungsstand ist der 5. Januar 2020. Der [Begleitaufsatz](https://www.gmth.de/zeitschrift/artikel/997.aspx) erläutert Herkunft und Editionszeichen. Die bereitgestellte Datei und das öffentliche PDF sind bytegleich; **Druckseite 143 entspricht PDF-Seite 1**. Sämtliche Antworten öffnen die zugehörige PDF-Seite.

Die Erläuterungen unterscheiden **Quellentext, Notenbefund und Herausgeberkommentar**. So bleibt die Halbtonausnahme beim 6/5-Griff neben dem zunächst allgemein formulierten Bassaufstieg sichtbar. Die Ergänzungen zu 7, 7/4 und der zeitlichen Folge 7–6 werden getrennt behandelt. Hypothetische Aussetzungen der Edition gelten nicht als Kittels ausgeschriebene Oberstimmen. Beim unvollständig realisierten Allegretto wird Remeš’ offene Frage nach einer möglichen Beteiligung des Schülers Rinck ausdrücklich genannt. Die präzisen Aufgabenrahmen bezeichnen Generalbass-, Lagen- und Choralübungen; eine Speziesnummer oder historische Stilmarkierung wird daraus nicht automatisch abgeleitet.

| Frage | Was sich am Beleg untersuchen lässt |
| --- | --- |
| [Was unterscheidet die Bewegungsarten?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kittel2019#frage=bewegungsarten&antwort=kittel2019-open-drei-motus) | Drei historische Begriffe und der Unterschied zwischen Gleichbewegung und verbotenen Parallelfolgen. |
| [Wie verändert die Lage die Aussetzung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kittel2019,sechter1876#frage=generalbass-lagen&antwort=kittel2019-open-lage-und-fortschreitung) | Mehrere obere Anfangslagen über demselben Bass und die konkrete Gefahr verdeckter Quinten. |
| [Welche Stimme wird beim Sextgriff verdoppelt?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kittel2019#frage=generalbass-sextakkord&antwort=kittel2019-middle-sextverdopplung) | Der obere Ton und die Folge der Griffe entscheiden über die Verdopplung; rasche Sextenketten können auf drei Stimmen reduziert werden. |
| [Welche Begleitintervalle gehören zur Septime?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kittel2019#frage=generalbass-septakkord-fuellstimmen) | Die isolierte 7, die Gruppe 7/4 und die Folge 7–6 verlangen unterschiedliche Ergänzungen. |
| [Löst sich jede None abwärts auf?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kittel2019,sechter1876#frage=dissonanzaufloesung&antwort=kittel2019-late-02) | Kittels gebundene None und Sechters ausdrücklich als Durchgang bezeichnete None gehören zu verschiedenen Aufgaben. |
| [Wie verbindet ein Zwischenspiel Choralzeilen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=kittel2019#frage=choral-zwischenspiel&antwort=kittel2019-late-06) | Fermaten, bewegte Übergänge, Basspausen und gegebene Außenstimmen werden im notierten Beispiel verfolgt. |

**3 neue Fragen** behandeln die Bewegungsarten, die Begleitintervalle zur Septime und das Choralzwischenspiel. **5 neue Vergleichspaare** verbinden genau bezeichnete Antworten mit ihren jeweiligen Fundstellen. Das [Vergleichsverzeichnis für Johann Christian Kittel](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Johann+Christian+Kittel&art=contradiction,nuance,context) erläutert die unterschiedlichen Akzente oder Aufgabenrahmen. Alle bisherigen Inhalte bleiben erhalten.

**9 Notenbilder** zeigen die Bewegungsarten, Akkord- und Anfangslagen, allein stehende Vorzeichen, Sextenverdopplung, die Wege des 6/5-Griffs, Fundament-Noten, Nonenlagen, den Griff 7/4/2 und Choralzwischenspiele. Die Bilder stammen aus dem **modernen Notensatz der Edition**, © 2019 Derek Remeš, und stehen unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Zuschnitt, Überschriften und Anordnung sind redaktionell; die Noten bleiben unverändert. Die Edition selbst verwendet modernisierte Schlüssel und kennzeichnet ihre Ergänzungen. Jedes Bild erhält Quellenangabe, Alternativtext, eine Leseaufgabe und den Link zur vollständigen PDF-Seite.

## Strenge Übung und freie Fortführung mit Francis L. York

Die Werkkennung `york1907` erschließt **135 Beiträge zu 57 Fragen** aus *Counterpoint Simplified: A Text-Book in Simple Strict Counterpoint*. Gesichtet wurden das **Vorwort S. v–vi, die Einleitung S. 1–5, alle 16 Kapitel und der Anhang bis S. 149**, einschließlich der Cantus-firmus-Sammlung auf S. 129–131. Der Lehrgang führt von zwei Stimmen durch alle fünf Spezies zu drei, vier und mehr Stimmen, kombiniert verschiedene Bewegungsarten und öffnet am Ende den Übergang zum freien Satz. Die Antworten erschließen die belegten Regeln, Einschränkungen und kommentierten Modelle; sie ersetzen keine vollständige Wiedergabe sämtlicher Übungen.

Grundlage ist das Exemplar der **Cornell University Library** im [öffentlichen Digitalisat](https://archive.org/details/cu31924022379741). Das [Titelblatt](https://archive.org/download/cu31924022379741/cu31924022379741.pdf#page=5) nennt Francis L. York und Oliver Ditson Company, Boston. Das folgende Copyrightblatt trägt **MCMVII**; das Vorwort ist auf **20. Juli 1907** datiert. Eine nummerierte Auflage oder ein gesondertes Druckjahr ist nicht angegeben. Der [HathiTrust-Katalog](https://catalog.hathitrust.org/Record/001980801) verzeichnet **c1907**, viii und 149 Seiten. Deshalb steht die Quelle unter **1907 (Copyright)**. Die bereitgestellte Datei stimmt mit dem öffentlichen PDF in Umfang und Prüfsummen überein; gedruckte **S. 1 entspricht PDF-Seite 13**. Alle Fundstellen verlinken die passende PDF-Seite. Die [Autorennormform der Indiana University](https://iucat.iu.edu/iui/2295398) sichert die Personenidentität **Francis Lodowick York**; sein Name führt zum verifizierten [Biografieartikel](https://de.wikipedia.org/wiki/Francis_Lodowick_York).

York wählt für Anfänger ausdrücklich die engere Regel, obwohl er ihre späteren Ausnahmen kennt. Zugleich erklärt er, warum historische Modelle nicht immer seinen schulischen Vorgaben entsprechen. Die Antworten halten daher **strenge Übungsstufe, Stimmenzahl, freie Fortführung und benanntes Repertoire** auseinander. Gerade der Vergleich mit Spalding zeigt unterschiedliche Lernwege: York grenzt zunächst streng ein; Spalding entwickelt die Freiheit schrittweise innerhalb tonaler Praxis. Die Bezeichnung *modern* wird auch hier nicht automatisch als Stilmarkierung des 20./21. Jahrhunderts behandelt.

| Frage | Was sich am Beleg untersuchen lässt |
| --- | --- |
| [Was bestimmt den strengen Anfangsrahmen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907,spalding1904#frage=grundrahmen&antwort=york1907-open-strenger-lehrgang) | Yorks bewusste Beschränkung und Spaldings Weg zur freien tonalen Führung werden am jeweiligen Vorwort verglichen. |
| [Genügt eine Konsonanz zum Cantus?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907#frage=dissonanzen-s2&antwort=york1907-two-harmoniefremde-konsonanz) | Fig. 17 zeigt, warum ein Ton trotz Intervallkonsonanz zur Harmonie des Taktes fremd sein kann. |
| [Wie prüfe ich eine Synkope?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907#frage=harmonischer-rhythmus&antwort=york1907-two-synkope-harmoniekern) | Fig. 40 stellt erste, zweite und vierte Spezies über demselben harmonischen Grundriss gegenüber. |
| [Wie bleibt ein Orgelpunkt bestehen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907#frage=orgelpunkt-mehrstimmig&antwort=york1907-multi-orgelpunkt) | Der Schluss des Saunders-Modells macht den liegenden Bass und die fortschreitenden Oberstimmen sichtbar. |
| [Kann eine Dissonanz die nächste vorbereiten?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907,fux1725#frage=bindung-s4&antwort=york1907-free-16) | Die freie Vorbereitung in Fig. 92 wird von Fux’ konsonantem Beginn der Bindung unterschieden; Yorks Wiederanschläge bleiben im Bild erkennbar. |
| [Bleibt Note gegen Note bei Vierteln erste Spezies?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907#frage=spezies-und-notenwerte&antwort=york1907-free-22) | Yorks Beethoven-Analyse verfolgt veränderte Notenwerte, wechselnde Cantus-Lagen und zusätzliche Stimmen. |
| [Was verraten relative Solmisationssilben?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=york1907#frage=solmisationssilben&antwort=york1907-free-23) | Der Anhang unterscheidet die tonale Stellung eines Tons von seinem absoluten Tonbuchstaben. |

**5 neue Fragen** behandeln den melodischen Gesamtumfang, die sechste und siebte Mollstufe, den mehrstimmigen Orgelpunkt, Spezies bei veränderten Notenwerten und relative Solmisation. **19 neue Vergleichspaare** verbinden genau bezeichnete Antworten: 9 Nuancen, 10 Unterschiede des Kontexts. Das [Vergleichsverzeichnis für Francis L. York](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Francis+L.+York&art=contradiction,nuance,context) zeigt die Begründung und beide Fundstellen. Eine bloß ergänzende Aussage wird nicht als Meinungsunterschied markiert.

Die Speziesfilter folgen Yorks ausdrücklichen Zuordnungen. Insbesondere gehört **Drei-gegen-eins bei ihm zur zweiten Spezies**, auch wenn die Schreibaufgabe erst nach dem Vier-gegen-eins empfohlen wird. Freie Aufgaben erhalten nur dann eine Speziesnummer, wenn der Text oder seine Analyse sie nennt. **10 historische Notenbilder** zeigen implizierte Harmonie, changing notes, die Synkopenreduktion, Floridusrhythmen, den Bassbezug des Vorhalts, die tiefste bewegte Stimme, einen Orgelpunkt, dissonante Vorbereitung, Chromatik und die Beethoven-Analyse. Sie bewahren die gedruckte Notation und enthalten deutsche Erläuterungen, Alternativtexte, Leseaufgaben sowie Originalseitenlinks. Überschriften und Anordnung sind redaktionell. HathiTrust führt den Cornell-Bestand als frei einsehbar mit Rechtecode **pd**; der [Nachweis der identischen Commons-Datei](https://commons.wikimedia.org/wiki/File:Counterpoint_simplified_-_a_text-book_in_simple_strict_counterpoint_(IA_cu31924022379741).pdf) kennzeichnet ihn als gemeinfrei in den USA.

## Vom Vokalsatz zum Instrumentalsatz mit Walter R. Spalding

Die Werkkennung `spalding1904` erschließt **143 Beiträge zu 63 Fragen** aus *Tonal Counterpoint: Studies in Part-Writing*. Gesichtet wurden das **Vorwort S. v–viii und alle 13 Kapitel auf S. 1–258**: harmonische und melodische Grundlagen, die zweistimmigen Ordnungen, drei- und vierstimmiger Satz, doppelter bis vierfacher Kontrapunkt, Invention, Imitation sowie freie Klavier-, Streicher- und ergänzende Vokalaufgaben. Die Antworten wählen daraus genau belegte Aussagen und Modelle; sie kommentieren nicht jede einzelne Note oder Aufgabe.

Grundlage ist das Exemplar der **Faculty of Music, University of Toronto** im [öffentlichen Digitalisat](https://archive.org/details/tonalcounterpoin00spaluoft). Das [Titelblatt](https://archive.org/download/tonalcounterpoin00spaluoft/tonalcounterpoin00spaluoft.pdf#page=5) nennt Arthur P. Schmidt, Boston, Leipzig und New York, und **Copyright 1904**; eine Auflagen- oder Drucknummer ist nicht angegeben. Der [HathiTrust-Katalog](https://catalog.hathitrust.org/Record/001460577) führt das Werk als Boston: A. P. Schmidt, **c1904**, ix und 258 Seiten. Das Quellenverzeichnis zeigt deshalb **1904 (Copyright)**. Die Antworten und Abbildungen verlinken direkt auf die zugehörigen PDF-Seiten; die gedruckte S. 1 liegt auf PDF-Seite 15. Der Autorenlink führt zum verifizierten Wikipedia-Artikel über **Walter Raymond Spalding**.

Der Aufgabenrahmen verändert sich im Lehrgang. Spalding beginnt mit Vokalübungen, erweitert den Satz für Streicher und behandelt die eigene Klang- und Spielweise des Klaviers. Die Antworten benennen deshalb jeweils **Besetzung, Übungsstufe und musikalischen Zusammenhang**. Eine Regel für eine frühe Vokalaufgabe wird nicht ohne Beleg auf freie Streicher- oder Klaviermusik übertragen. Spaldings Wort *modern* begründet für sich keine Zuordnung zum Stil des 20./21. Jahrhunderts. Wo ein bestimmter Stilbezug nicht gesichert ist, bleibt er offen; der belegte Aufgabenrahmen wird trotzdem angezeigt.

| Frage | Was sich am Beleg untersuchen lässt |
| --- | --- |
| [Wie verändert die Besetzung die Aufgabe?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=spalding1904#frage=satzmedium&antwort=spalding1904-open-vokal-instrumental) | Der Lehrgang unterscheidet vokale Führung, Streicherlinien und pianistische Klanggestaltung. |
| [Muss der Leitton immer aufsteigen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=spalding1904#frage=leittonaufloesung&antwort=spalding1904-open-trugschluss-dur-moll) | Die verwandten Dur- und Mollmodelle auf S. 5 verlangen unterschiedliche Stimmführung und Verdopplung. |
| [Was gewinnt der Satz durch betonte Durchgänge?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=spalding1904#frage=betonte-dissonanz&antwort=spalding1904-two-betonter-durchgang) | Zwei Fassungen derselben Aufgabe auf S. 72 zeigen den Unterschied zwischen möglicher Harmonik und zusammenhängender Gegenstimme. |
| [Was wird beim Oktavtausch aus der Quinte?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=spalding1904#frage=doppelter-kontrapunkt&antwort=spalding1904-multi-oktavtausch-quinte) | Die Originaltafel auf S. 194 zeigt die Stimmen vor und nach dem Tausch, einschließlich Durchgangs- und Appoggiaturafällen. |
| [Braucht jede Invention denselben Formplan?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=spalding1904,motte1995#frage=invention-form&antwort=spalding1904-multi-invention-binaer) | Spaldings binäre Gesamtsicht und seine dreiteilige Tonartentendenz werden mit de la Mottes begrenzterem Schreibmodell verglichen. |
| [Wie verändert die Lage den Klavierklang?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=spalding1904#frage=klaviersatz-klanglage&antwort=spalding1904-free-08) | In den beiden Arpeggien auf S. 228 wird die tiefe Terz in die Dezimlage versetzt; Klang und Spielbarkeit gehören zusammen. |

**7 neue Fragen** behandeln Besetzung, offene Partitur und Schlüssel, Modulation in Übungen, Terzen- und Sextenfolgen, die Eigenständigkeit der Innenstimmen, vierfachen Kontrapunkt und die Lage im Klaviersatz. **15 neue Vergleichspaare** verbinden genau bezeichnete Antworten: 3 Nuancen, 12 Unterschiede des Kontexts. Das [Vergleichsverzeichnis für Walter R. Spalding](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Walter+R.+Spalding&art=contradiction,nuance,context) zeigt beide Fundstellen und die jeweilige Begründung. Übereinstimmungen erhalten keine künstliche Differenzmarkierung.

Die Speziesfilter folgen den **benannten Ordnungen**: Note gegen Note, zweite und dritte Ordnung, Synkopen und florider Satz. Drei-gegen-eins und Sechs-gegen-eins werden nicht allein aufgrund ihrer Notenzahl in die dritte Spezies eingeordnet. Die vierstimmigen Grundlagen des ersten Kapitels und die späteren freien Kompositionsaufgaben erhalten ebenfalls keine automatische Spezieszuordnung.

**8 historische Notenbilder** zeigen Dur/Moll-Stimmführung, den Quartsextakkord als Doppelvorhalt, betonte Durchgänge, figurierte Leittonverdopplung, Klangvollständigkeit, Oktavtausch, Klavierlage und begründete Durchgangsquinten. Alle Bilder bewahren die gedruckte Notation und enthalten Alternativtexte, deutsche Erläuterungen, Leseaufgaben und Originalseitenlinks. Überschriften und Anordnung sind redaktionell. Internet Archive weist den Toronto-Scan als **NOT_IN_COPYRIGHT (US)** aus.

## Generalbassaussetzungen mit Simon Sechter vergleichen

Die Werkkennung `sechter1876` erschließt **47 Beiträge zu 20 Fragen** aus Simon Sechters *Praktische Generalbass-Schule*, Op. 49. Gesichtet wurden die **Vorerinnerung S. 3 und alle 120 Übungen I–CXX auf S. 4–82**. Der Band besteht überwiegend aus Noten: Zu einem Bass stehen mehrere Aussetzungen, unterschiedliche Stimmenzahlen und häufig Bassvariationen. Die Beiträge wählen daraus konkrete, genau bezeichnete Stellen aus; nicht jede der 120 Übungen erhält einen eigenen Kommentar.

**Die verwendete Ausgabe ist von der Erstausgabe zu unterscheiden.** Der [Nachweis für den Farbscan IMSLP #422079](https://imslp.org/wiki/Praktische_Generalbass-Schule%2C_Op.49_%28Sechter%2C_Simon%29) nennt Leipzig, F. E. C. Leuckart (Constantin Sander), **o. J. [1876]**, Plattennummer **F.E.C.L. 2777**. Das Titelblatt trägt kein Jahr. Eine [Leuckart-Anzeige im Börsenblatt vom 25. Februar 1876, S. 706](https://digital.slub-dresden.de/data/kitodo/Brsfded_39946221X-18760225/Brsfded_39946221X-18760225_tif/jpegs/Brsfded_39946221X-18760225.pdf#page=6) belegt die neue Ausgabe unabhängig. Das Quellenverzeichnis zeigt deshalb für die verwendete Ausgabe **1876 (zugeordnet)** und erklärt, dass damit nicht jeder mögliche spätere Abzug datiert ist. Für Sortierung und Zeitleiste zählt die **Erstausgabe von 1830**. Die **Erstausgabe von 1830**, Wien, J. Czerny, in zwei Teilen, ist im [zeitgenössischen Hofmeister-Verzeichnis, S. 80](https://hofmeister-os.kdl.kcl.ac.uk/2008/content/monatshefte/1830_09/80.html) nachgewiesen.

Die deutschen Antworten unterscheiden zwischen **ausdrücklichen Anweisungen** und **redaktionellen Beobachtungen am Notentext**. Das Vorwort begründet unter anderem wechselnde Stimmenzahlen, schriftliches und vorgestelltes Transponieren, C-Schlüssel und Pedalgebrauch. Die Notenbeispiele zeigen konkrete Verteilungen und Stimmenwege. Eine einzelne Aussetzung wird dabei nicht zur allgemeinen Verdopplungs- oder Dissonanzregel erklärt. Sechters spätere theoretische Schriften werden diesem Übungsbuch nicht zugeschrieben.

| Frage oder Beispiel | Was sich daran untersuchen lässt |
| --- | --- |
| [Welche Bassvariation passt zu welcher Aussetzung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=sechter1876#frage=generalbass-bassvariation&antwort=sechter1876-early-bassvariation-passung) | Die ausdrücklich gedruckten Zuordnungen zu Übung II lesen und passende Oberstimmenfassungen auswählen. |
| [Welche Töne enthält ein Sextakkord?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=sechter1876#frage=generalbass-sextakkord&antwort=sechter1876-early-sextakkord-formeln) | Die Tabelle auf S. 13 nennt vollständige und unvollständige Besetzungen; Stimmenzahl und Zahl verschiedener Töne bleiben getrennte Fragen. |
| [Wie wird die Quartsextverbindung weitergeführt?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=sechter1876#frage=quartsext-dissonanz&antwort=sechter1876-middle-01) | In Übung IVL (46) 6/4–6/3 bei liegendem Bass von 6–6/4–6 über einem bewegten Bass unterscheiden. |
| [Welche Stimme löst eine mit 2 bezeichnete Verbindung auf?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=sechter1876,menke2017#frage=generalbass-bezifferung-stimmfuehrung&antwort=sechter1876-late-06) | Den gebundenen, absteigenden Bass in LXXVII (77) mit der zusammengesetzten Zifferngruppe über liegendem Bass in CV (105) vergleichen. |
| [Was verändert die ausdrücklich mit „Besser“ bezeichnete Fassung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=sechter1876#frage=dissonanzbehandlung&antwort=sechter1876-late-12) | Auf S. 77 tritt zu 4–3 die zusätzliche Bewegung 9–8. Sechters örtliche Wertung ist belegt; eine nicht gedruckte Begründung wird nicht ergänzt. |
| [Wie bestimmen Stimmeneinsätze die Lage?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=sechter1876#frage=generalbass-lagen&antwort=sechter1876-late-15) | In CXVIII (118) die knappe Bezeichnung ihrer Ausführung zuordnen und die nacheinander eintretenden Stimmen verfolgen. |

**Sechs neue Fragen** behandeln Lernfolge, Schlüssel, Orgelpedal, Bassvariation, Lage und zusammengesetzte Akkordnamen. **Vier neue Vergleichspaare** verbinden genaue Fundstellen: **eine Nuance** bei Försters und Sechters Transponieraufgaben sowie **drei Unterschiede des Kontexts** zu Förster und Türk bei der Stimmenzahl und zu Menke bei der Bedeutung der Ziffer 2. Das [Vergleichsverzeichnis für Simon Sechter](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Simon+Sechter&art=nuance,context) zeigt beide Antworten. Übereinstimmungen und bloß ergänzende Erklärungen werden nicht als Unterschiede gezählt.

Alle neuen Antworten nennen den belegten Aufgabenrahmen **Generalbassübung für das Orgelspiel**. Ihr historischer Stilbezug bleibt **noch nicht eingeordnet**; weder das Ausgabedatum noch Sechters Lebenszeit ersetzen einen Beleg für eine bestimmte Stilepoche. Eine Spezieszuordnung wird aus diesen Generalbassübungen ebenfalls nicht abgeleitet. Der geprüfte Autorenlink führt zu **Simon Sechter**.

**Sechs historische Notenausschnitte** zeigen Bassvarianten, Sextakkordverteilungen, zwei Quartsextfortführungen, die Bassauflösung 2–6, den Vergleich auf S. 77 und die Stimmeneinsätze auf S. 81. Sie enthalten Bildbeschreibungen, Leseaufgaben und genaue Fundstellen. Der gemeinfreie Notendruck stammt aus der **Bayerischen Staatsbibliothek via IMSLP #422079**; Überschriften und Anordnung der Ausschnitte sind redaktionell. Der vollständige Scan wird nicht mitveröffentlicht.

Die Fundstellen bewahren die ungewöhnliche römische Zählung des Drucks und ergänzen arabische Zahlen: etwa **IXL (41)**, **IVL (46)** und **IXC (91)**. Dabei wird jeweils die vorangestellte Zahlengruppe vom folgenden höheren Wert abgezogen. Diese systematische Schreibweise wird weder als Druckfehler behandelt noch stillschweigend modernisiert.

## Bachs Fugenstrukturen mit Zsolt Gárdonyi untersuchen

Die Werkkennung `gardonyi1996` erschließt **97 Beiträge zu 37 Fragen** aus Zsolt Gárdonyis *La struttura della fuga in Johann Sebastian Bach*. Grundlage ist die bereitgestellte italienische Übersetzung von **Antonio Giacometti**: das **Vorwort S. 8–10 und alle acht Kapitel S. 11–97**. Die deutschen Antworttexte sind redaktionelle Paraphrasen mit genauen Buchfundstellen. Sie verfolgen Themenbau, Beantwortung und Exposition, spätere Themenphasen und Zwischenspiele, mehrthemige und kanonische Fugen sowie fugierte Arbeit in Giguen, Präludien und Choralbearbeitungen.

**Die Ausgabe ist bibliografisch zugeordnet.** Der [Bibliothekskatalog des Konservatoriums Rovigo](https://opacnow.provincia.rovigo.it/it/now/conservatorio-rovigo/record/PUV0301964) verzeichnet die italienische Übersetzung bei Ricordi, Milano, für **1996** (ISBN 8875924708). Im Scan fehlen Titelblatt und Impressum; die genaue Druckausgabe des Exemplars ist deshalb nicht abschließend gesichert. Im Quellenverzeichnis steht für die verwendete Ausgabe **1996 (zugeordnet)** mit dieser Begründung, alphabetisch unter **Gárdonyi, Zsolt**. Die Chronologie folgt der deutschen Erstausgabe von **1980**; die überarbeitete deutsche Ausgabe von 1991 und die italienische Übersetzung von 1996 sind davon zu unterscheiden. Die Fundstellen folgen den gedruckten Seiten; ein PDF-Blatt enthält meist zwei Buchseiten.

Gárdonyi beschreibt beobachtete **Fugenstrukturen Bachs**. Seine ausdrückliche Warnung auf S. 19, Anm. 20, bleibt sichtbar: Die rückblickend gewonnenen Antworttypen sind keine unveränderlichen Kompositionsvorschriften. Auch Häufigkeiten, Tonartenpläne und formale Kategorien bleiben an das jeweils untersuchte Repertoire gebunden. Die Beiträge unterscheiden zwischen wiederkehrendem Kontrasubjekt und nachgewiesenem Lagentausch, zwischen drei thematischen Charakteren und exaktem dreifachem Kontrapunkt sowie zwischen einer unabhängigen Themenexposition und der schon vorausgesetzten Bekanntheit eines Themas im Zyklus.

Alle Antworten besitzen einen eigenen belegten **Stilbezug und Aufgabenrahmen**. Die konkreten Bach-Analysen stehen im Barockrahmen; die allgemeine Bestimmung des Kontrapunkts im Vorwort bleibt stilübergreifend, der historische Vergleich von Motette und Fuge nennt Renaissance und Barock. Die Beiträge behandeln keine Speziesaufgaben und erscheinen unter **Alle**.

| Frage oder Vergleich | Was sich daran untersuchen lässt |
| --- | --- |
| [Wann liegt eine Gegenexposition vor?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gardonyi1996,kennan1999#frage=fuge-gegenexposition&antwort=gardonyi1996-open-zusatzeinsatz) | Kennan bezeichnet eine Gruppe in WTK II H-Dur als partielle Gegenexposition. Gárdonyi verneint diese Einordnung ausdrücklich, weil die einzelnen Stimmen ihre Dux-/Comes-Rollen beibehalten. Der Widerspruch betrifft die analytische Definition derselben Passage. |
| [Wie verändert eine tonale Antwort den Themenkopf?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gardonyi1996#frage=fuge-reale-tonale-antwort&antwort=gardonyi1996-open-antwort-grundlagen) | Ein eigenes Viernotenmodell mit seiner genauen Quinttransposition und einer tonalen Variante vergleichen. Antwortintervall und Zeitpunkt der Modulation bleiben verschiedene Fragen. |
| [Welche Rolle spielt der Bass beim Oktavtausch?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gardonyi1996,gallon-bitsch1964#frage=doppelter-kontrapunkt&antwort=gardonyi1996-open-quarte-bass) | Eine Quarte über der tiefsten Stimme von derselben Quarte zwischen Oberstimmen unterscheiden. Der Tausch dieses Paars beweist noch keine beliebige Vertauschbarkeit des ganzen dreistimmigen Satzes. |
| [Müssen alle sechs Stimmordnungen erklingen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gardonyi1996#frage=dreifacher-kontrapunkt&antwort=gardonyi1996-open-dreifacher-kontrapunkt) | Die paarweise Vertauschbarkeit dreier Linien getrennt von der Zahl ihrer tatsächlich verwendeten Gesamtanordnungen prüfen. Zwei Kontrasubjekte allein belegen noch keinen dreifachen Kontrapunkt. |
| [Wie verbinden sich drei Themen zu einer Tripelfuge?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gardonyi1996#frage=fuge-tripelfuge&antwort=gardonyi1996-forms-08) | In BWV 552 die Synthese dreier thematischer Charaktere von einem genauen Lagentausch dreier unverändert erhaltener Linien unterscheiden. |
| [Wie richtet eine Choralmelodie die Fugentechnik ein?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=gardonyi1996#frage=choral-gegenstimme&antwort=gardonyi1996-forms-32) | In BWV 651 und 661 verfolgen, wie die Harmonie der Choralvorlage Einsatzhöhen, Varianten, Umkehrung und Engführung bestimmt. |

**14 neue Fragen** ergänzen Themenharmonik, Anfang und Ambitus, Gegen- und Spiegelfuge, dreifachen Kontrapunkt, Tonartenplan und Themenverwandlung, Tripel- und Quadrupelfuge, Permutationsfuge, kanonische Fuge, Fughetta und Fugato, Gigue und Choralfugentechnik. **26 neue Vergleichspaare** verbinden genaue Antworten: **1 Widerspruch, 4 Nuancen und 21 Unterschiede des Kontexts**. Das [Verzeichnis für Zsolt Gárdonyi](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Zsolt+G%C3%A1rdonyi&art=contradiction,nuance,context) führt zu beiden Fundstellen. Insbesondere die Unterschiede zur Schulfuge und zu streng angelegten Umkehrungsübungen bleiben als Unterschiede der Aufgabe erkennbar.

**Drei eigene Grafiken** erläutern tonale Antwort, Quarte und Bassfunktion sowie Gegenexposition gegenüber einem zusätzlichen Einsatz. Sie enthalten vollständige Bildbeschreibungen, Leseaufgaben und Quellenangaben. Die Notenmodelle sind neu erfunden; das Einsatzdiagramm ist ein Schema ohne behauptete Taktlängen. Bereits vorhandene gemeinfreie Bach-Ausschnitte ergänzen die C-Dur- und Es-Dur-Beispiele aus WTK I sowie die Themenvereinigung in WTK II gis-Moll. Der verifizierte Wikipedia-Verweis führt zu **Zsolt Gárdonyi**.

**Besondere Quellenentscheidungen:** Bei der *Kunst der Fuge* wird die im Buch verwendete Graeser-Zählung ausdrücklich benannt; die dort als XIX bezeichnete unvollendete Fuge erhält keine stillschweigend modernisierte Nummer. Die angenommene vierte Themenvereinigung bleibt als Gárdonyis Vermutung über eine nicht erhaltene Fortsetzung gekennzeichnet. Die Erschließung folgt dem vorhandenen Text bis zum Ende des achten Kapitels; das anschließende Register reicht bis S. 102. Private Buchseiten oder vollständige PDFs werden nicht mitveröffentlicht.

## Den spätbarocken Choralsatz mit Thomas Daniel untersuchen

Die Werkkennung `daniel2004` erschließt **82 Beiträge zu 43 Fragen** aus Thomas Daniels *Der Choralsatz bei Bach und seinen Zeitgenossen. Eine historische Satzlehre*. Grundlage ist der bereitgestellte Teilscan mit den **gedruckten S. 9–201**. Die Antworten paraphrasieren die vorhandenen Seiten und nennen ihre genauen Fundstellen. Sie behandeln Tonart und modale Melodieüberlieferung, historische Harmoniebegriffe, Stimmführung, Dissonanzfiguren und die verfügbaren Abschnitte zu Kadenz und Choralzeile.

**Die Ausgabe ist eine Arbeitszuordnung.** S. 10 nennt die zweite Auflage; der [Bibliotheksnachweis der SLUB Dresden](https://katalog.slub-dresden.de/id/0-377774707) verzeichnet die zweite, durchgesehene Auflage bei Dohr in Köln für **2004**. Im Scan fehlt das Impressum, sodass die genaue Druckausgabe des Exemplars nicht abschließend gesichert ist. Im Quellenverzeichnis steht deshalb bei der verwendeten Ausgabe **2004 (zugeordnet)** mit der Begründung. Alphabetisch wird das Werk unter **Daniel, Thomas** geführt; chronologisch zählt die **Erstveröffentlichung von 2000**.

Daniel setzt historische Satz-, Generalbass- und Kadenzlehre als Grundlage voraus und verwendet spätere Harmoniebegriffe ergänzend. Die Beiträge bewahren seine Unterscheidung zwischen einer gewöhnlichen Lehrregel, einer eng begrenzten Ausnahme und einem besonderen Repertoirefall. Aussagen über die Häufigkeit oder Echtheit von Bach-Sätzen bleiben als **Daniels Befund** erkennbar. Seine Kritik an anderen Büchern wird nicht als selbständig geprüfte Position dieser Bücher ausgegeben. Wo etwa de la Mottes *Harmonielehre* gemeint ist, wird daraus keine Verbindung zu einem Beleg aus dem im Atlas vertretenen *Kontrapunkt* konstruiert.

Alle Antworten besitzen einen eigenen belegten **Stilbezug und Aufgabenrahmen**. Im Mittelpunkt steht der vierstimmige spätbarocke Choralsatz; die Untersuchung der Monteverdi-Sequenzen erhält zusätzlich einen Renaissancebezug. Innerhalb des Barockrahmens bleiben Unterschiede zwischen Bach und Telemann sowie zwischen Choral, Generalbass, historischem Modell und Ornamentfigur ausdrücklich benannt. Die Beiträge sind keine Speziesaufgaben und erscheinen unter **Alle**.

| Frage oder Vergleich | Was sich daran untersuchen lässt |
| --- | --- |
| [Welche Stimmen dürfen gemischte Quinten bilden?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004,menke2017#frage=parallelen&antwort=daniel2004-v17) | Die aufsteigende Folge vermindert–rein im Oberstimmenpaar von einer Folge mit Bassbeteiligung unterscheiden. Menkes zitierte Formulierung und Daniels ausdrücklich weiter gefasste Bassgrenze bleiben genau getrennt. |
| [Was bedeuten 2 und 9 in der Generalbassbezifferung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004#frage=generalbass-bezifferung-stimmfuehrung&antwort=daniel2004-d08) | Zwei identische Nonen hören, deren Vorbereitung einmal die obere, einmal die untere Stimme zur Abwärtsauflösung verpflichtet. |
| [Muss beim Trugschluss die Terz verdoppelt werden?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004,menke2017#frage=trugschluss-klauseln&antwort=daniel2004-c23) | Daniels fallenden Leitton im Alt eines Dur-Trugschlusses mit der üblichen, von Menke erläuterten Klauselführung vergleichen. |
| [Ist ein phrygischer Schluss Tonika oder Dominante?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004#frage=phrygische-schlussdeutung) | Modale Finalis, Lage der Finalis im letzten Akkord und Ganz- oder Halbschlusswirkung auseinanderhalten. |
| [Muss ein Mollsatz mit Durterz enden?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004#frage=picardische-terz) | Daniels unterschiedliche Befunde für Bach und Telemann vergleichen, statt aus dem gemeinsamen Epochenbezug eine einheitliche Vorschrift abzuleiten. |
| [Kann ein Zeilenschluss eine Dissonanz weitertragen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004,salzer-schachter1989#frage=choral-fermate&antwort=daniel2004-c21) | Textlichen und rhythmischen Abschluss von der noch ausstehenden Stimmführungsauflösung am Anfang der nächsten Zeile unterscheiden. |
| [Wie erklärt sich ein Quartsextakkord?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=daniel2004#frage=quartsext-dissonanz) | Prüfen, ob die vorbereitete Oberstimme oder ein durchgehender Bass die dissonierende Bewegung trägt; außerdem Bachs und Telemanns Gebräuche vergleichen. |

**11 neue Fragen** ergänzen modalen Choralbezug, phrygische Schlussdeutung, Stimmumfang, Akkordvollständigkeit, Auflösungszeit, Quartsextakkord, Kadenzplanung, picardische Terz, Klauseldiminution, Klauselwechsel und Kadenzflucht. **38 neue Vergleichspaare** verbinden Daniel mit bereits belegten Antworten: **8 Nuancen und 30 Unterschiede des Kontexts**. Das [Verzeichnis für Thomas Daniel](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Thomas+Daniel&art=nuance,context) führt direkt zu beiden jeweiligen Antworten. Unterschiede von Stimmenzahl, Gattung, Notenwert oder Lehrziel werden nicht als unmittelbare Regelwidersprüche ausgegeben.

**Drei eigene Notengrafiken** zeigen gemischte Quinten mit wechselnder Bassfunktion, die fallende Altführung im Dur-Trugschluss und die unterschiedliche Auflösung desselben Nonenklangs. Es sind neu entworfene, beschriftete Leseübungen mit vollständigen Bildbeschreibungen und Buchfundstellen. Wikipedia-Verweise erschließen Thomas Daniel und den in seiner Diskussion genannten Walter Heimann; Heimanns Buch wird dadurch nicht zur selbständig ausgewerteten Atlasquelle.

**Grenzen des Materials:** Die vorhandenen S. 9–201 bilden einen zusammenhängenden Abschnitt; einige PDF-Aufnahmen wiederholen bereits vorhandene Seiten. Die Paginierung der Buchseiten ist daher maßgeblich. Der Scan bricht auf S. 201 ab, während ein neuer Abschnitt zur Disposition der Choralzeilen beginnt. Die fehlende Fortsetzung und die späteren Buchteile werden nicht erschlossen. Private Buchseiten oder vollständige PDFs werden nicht mitveröffentlicht.

## Mit Arnold Schönberg von den Spezies zum Komponieren

Die Werkkennung `schoenberg1970` erschließt **88 Beiträge zu 48 Fragen** aus *Preliminary Exercises in Counterpoint*, herausgegeben und mit einem Vorwort von Leonard Stein (erste Taschenbuchausgabe, New York: St. Martin’s Press, 1970, ISBN 0-312-63875-2). Das Werk erschien zuerst 1963. Die deutschen Antworttexte sind redaktionelle Paraphrasen der bereitgestellten englischen Ausgabe. Der [Katalogeintrag der verwendeten Taschenbuchausgabe](https://openlibrary.org/books/OL19042083M/Preliminary_exercises_in_counterpoint) dient als öffentlicher Werkbeleg. Im Quellenverzeichnis steht das Buch alphabetisch unter **Schönberg, Arnold** und chronologisch unter **1963**; als verwendete Ausgabe bleibt **1970** genannt.

Die Beiträge erschließen den zwei-, drei- und vierstimmigen Lehrgang: die fünf Spezies, Moll und Neutralisierung, Kadenzen ohne vorgegebenen Cantus, Regionen und Modulation, Imitation und Kanon sowie das Hinzufügen weiterer Stimmen. **84 Beiträge werden Schönberg und vier ausdrücklich Leonard Stein zugeschrieben.** Stein hat nach seinem Vorwort die Texte und Kommentare der letzten vier Kapitel ergänzt; bei den betreffenden Antworten steht deshalb **Herausgeberergänzung**. Eine darin ausdrücklich als Schönbergs eigene Erläuterung eingefügte Passage wird davon unterschieden. Verifizierte Wikipedia-Verweise erschließen beide Personen.

Schönbergs strenge Regeln haben einen **pädagogisch begrenzten Aufgabenrahmen**. § 7, S. 6, erklärt ausdrücklich, dass sie nicht der Nachahmung eines früheren Stils dienen; die Mollregel wird auf S. 62 zusätzlich von modaler Praxis und Bach abgegrenzt. Für diese zeitweiligen Dur-Moll-Übungen wird deshalb kein bestimmter historischer Stil behauptet. Jede Antwort nennt stattdessen ihre konkrete Aufgabe und den Beleg dafür. Der stilübergreifende Anspruch der Vorreden und die ausdrücklich auf homophone Musik nach 1750 bezogenen Entwurfsnotizen werden gesondert eingeordnet. Schönbergs Name und das Erscheinungsjahr lösen keine automatische Markierung als Musik des 20. Jahrhunderts aus. Die tatsächlichen Speziesbezüge sind einzeln erfasst; freie Anwendungen bleiben unter **Alle** erreichbar.

| Frage oder Vergleich | Was sich daran untersuchen lässt |
| --- | --- |
| [Woran orientiert sich eine zweistimmige Übung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970,jeppesen1964#frage=grundrahmen&antwort=schoenberg1970-r01) | Schönberg lehnt Palestrina als Unterrichtsgrundlage ausdrücklich ab, während Jeppesen ihn dafür auswählt. Beide verlangen mehr als eine äußerliche Stilkopie. |
| [Wie verlässt die Cambiata ihre Dissonanz?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970,salzer-schachter1989#frage=cambiata&antwort=schoenberg1970-e21&spezies=3) | In der eigenen Notengrafik führt der Terzsprung in eine zweite Dissonanz. Schönberg erlaubt dies innerhalb seiner Fünftonformel; Salzer und Schachter verlangen an dieser Stelle eine Konsonanz. |
| [Wann müssen natürliche Töne in Moll neutralisiert werden?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970#frage=moll-neutralisierung) | Den bedingten Abwärtsweg natürlicher Stufen von der unmittelbaren Aufwärtsverpflichtung ihrer erhöhten Formen unterscheiden. |
| [Wann ist eine neue Tonart erreicht, wann nur eine andere Region?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970#frage=tonart-und-region) | Eine etablierte Zwischenregion mit dem bloß flüchtigen Gebrauch ihrer charakteristischen Töne vergleichen. |
| [Welchen Akkordton darf ich verdoppeln?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970#frage=akkordton-verdopplung) | Schönbergs Ablehnung eines pauschalen Terzverdopplungsverbots an die Qualität der einzelnen Stimmen zurückbinden. |
| [Wie ergänze ich einen Satz um weitere Stimmen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970#frage=stimmen-ergaenzen) | Neue Ober-, Mittel- und Unterstimmen erproben und prüfen, wann die bisherige Kadenz angepasst werden muss. |
| [Kann ein homophon angelegter Satz kontrapunktisch sein?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schoenberg1970#frage=kontrapunkt-in-homophonie) | Schönbergs Entwurf für einen weiteren Band nennt belebte Begleitstimmen, motivische Kombinationen, Kanons und Fugati. Die Skizze bleibt als solche gekennzeichnet. |

**Fünf neue Fragen** behandeln Neutralisierung, Tonart und Region, Akkordtonverdopplung, Stimmenergänzung und Kontrapunkt innerhalb homophoner Musik. **61 neue Vergleichspaare** verbinden die Beiträge mit vorhandenen Antworten: **18 Widersprüche, 20 Nuancen und 23 Unterschiede des Kontexts**. Die Verzeichnisse für [Arnold Schönberg](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Arnold+Sch%C3%B6nberg&art=contradiction,nuance,context) und [Leonard Stein](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Leonard+Stein&art=contradiction,nuance,context) zeigen die jeweilige Zuschreibung. Weitere genaue Gegensätze betreffen Tonwiederholung, Stimmkreuzung, Anfangsintervalle, Vorhaltsarten und Unterbrechungen der vierten Spezies. Die Erläuterungen benennen jeweils die verglichenen Stimmenzahlen, Übungsstufen und Bedingungen.

Vier eigene Notengrafiken machen die neuen Begriffe hör- und lesbar: **Cambiata mit zwei Dissonanzen**, **unterbrochene Vorhaltsauflösung**, **Moll-Neutralisierung** und **genaue gegenüber rhythmisch gleicher, intervallisch veränderter Imitation**. Sie enthalten neu entworfene Motive und Ausschnitte mit ausgeschriebenen Bildbeschreibungen und konkreten Buchfundstellen. Die privaten Buchseiten werden nicht als Bildmaterial veröffentlicht.

**Grenzen des bereitgestellten Scans:** Die gedruckten **S. 110–111 und 180–181 fehlen**. Die Blätter 160–161 und 190–191 stehen zudem hinter später paginierten Blättern. Sämtliche Fundstellen folgen deshalb der **gedruckten Seitenzahl**, nicht der Reihenfolge im PDF; keine Aussage wird aus den fehlenden Seiten ergänzt. Die Anhänge enthalten unvollendete Vorreden und Entwurfsnotizen. Insbesondere der dort nur geplante weitere Lehrgang zu Fuge und mehrfachem Kontrapunkt wird nicht als ausgeführter Inhalt dieses Buchs behandelt.

## Musikalische Sprachen mit Diether de la Motte vergleichen

Die Werkkennung `motte1995` erschließt **97 Antworten zu 54 Fragen** aus *Contrapunto*, übersetzt von Miguel Ángel Centenero Gallego, 2. Auflage (Barcelona: Editorial Labor, 1995, ISBN 84-335-7863-4). Das deutsche Original *Kontrapunkt* erschien 1981. Grundlage ist das bereitgestellte vollständige Exemplar der spanischen Ausgabe; die deutschen Antworttexte sind redaktionelle Paraphrasen. Alle Fundstellen folgen deren **gedruckten Seiten**, einschließlich der römischen Seitenzahlen des Vorworts. Der [Bibliotheksnachweis der Universidad Nacional de Villa María](https://biblio.unvm.edu.ar/opac_css/index.php?lvl=notice_display&id=7494) bezeichnet die verwendete Ausgabe. Im Quellenverzeichnis wird sie alphabetisch unter **Motte, Diether de la** und chronologisch unter **1981**, dem Jahr des deutschen Originals, eingeordnet. **1995** bleibt das Jahr der verwendeten spanischen Ausgabe.

Die Beiträge erschließen alle zehn Buchkapitel: Pérotin, die Musik des 15. Jahrhunderts, Josquin, Palestrina, den Vergleich geistlicher und weltlicher Musik, Schütz, Bach, Haydn und Beethoven, romantische Satzweisen sowie verschiedene Techniken des 20. Jahrhunderts. De la Mottes eigene Unterrichtsentscheidung bleibt sichtbar: Er entwickelt unterschiedliche Zugänge zu Josquin, Bach und Neuer Musik und kritisiert eine für alle verbindliche Speziesfolge. Die Antworten erscheinen deshalb unter **Alle**. Ein Zahlenverhältnis wie Zwei-gegen-eins bezeichnet in diesen Beiträgen eine konkrete rhythmische Gestalt und wird nicht automatisch einer Spezies zugeordnet.

Jede neue Antwort besitzt einen eigenen belegten **Stilbezug und Aufgabenrahmen**. So bleiben bei Schütz *Stylus gravis* und *Stylus luxurians* unterscheidbar, bei Palestrina geistliche und weltliche Gattungen und innerhalb der Moderne einzelne Werke und Verfahren. Die Jahreszahl des Lehrbuchs bestimmt diese Einordnung nicht. Auch die im Vorwort ausdrücklich verbundenen Lehrbereiche erhalten eine eigene, stilübergreifende Markierung.

| Frage oder Vergleich | Was sich daran untersuchen lässt |
| --- | --- |
| [Woran orientiert sich eine zweistimmige Übung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995,jeppesen1964#frage=grundrahmen&antwort=motte1995-e13) | Jeppesens Wahl Palestrinas mit de la Mottes Frage vergleichen, wie repräsentativ dessen kurze zweistimmige Stellen für das Lernen selbstständiger Linien sind. |
| [Welche Dissonanzen sind auf unbetonter Zeit möglich?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995,fux1725#frage=unbetonte-dissonanz&antwort=motte1995-j11) | Drei Rhythmen desselben Durchgangs spielen; eine erlaubte Gestalt von einem häufigen Stilfall unterscheiden. |
| [In welche Richtung löst sich eine Dissonanz auf?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995#frage=dissonanzaufloesung&antwort=motte1995-r05) | In einer einstimmigen G7–C-Figur prüfen, ob der Auflösungston die gedachte obere Stimme in derselben Lage fortsetzt. |
| [Wie wird eine gregorianische Melodie zur Vorlage eines polyphonen Satzes?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995#frage=gregorianische-vorlage) | In Palestrinas *Missa Sanctorum meritis* zwischen übernommenen, umgeformten und ungenutzten Motiven unterscheiden. |
| [Braucht jede Invention denselben Formplan?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995#frage=invention-form) | Die gemeinsamen Merkmale der untersuchten Musik von einem möglichen Plan für die eigene Schreibaufgabe trennen. |
| [Entspricht jede notierte Stimme einer in sich verständlichen Melodie?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995#frage=stimme-und-satzstruktur) | An Beethoven und Brahms die einzelne Instrumentalpartie, motivische Gesamtstruktur und hörbare Linien unterscheiden. |
| [Wie lässt sich eine Zwölftonreihe auf mehrere Stimmen verteilen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995#frage=reihen-und-stimmen) | Einen auf mehrere Stimmen verteilten Reihendurchgang von gleichzeitig ablaufenden Reihenformen unterscheiden. |
| [Was leistet kanonische Nachahmung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=motte1995#frage=imitation-und-kanon&antwort=motte1995-l22) | Im eigenen Zeitschema dieselbe Tonfolge mit verschiedenen Dauern verfolgen und den wechselnden gemeinsamen Klang senkrecht ablesen. |

**8 neue Fragen** ergänzen den Atlas. Neben den oben verlinkten behandeln sie den Tritonus innerhalb eines Melodiebogens, die Erfindung einer Gegenstimme zum Choral, motivische Mehrstimmigkeit und das Verhältnis von Tonfolge und rhythmischer Gestalt.

**47 neue Vergleichspaare** verbinden de la Motte mit vorhandenen Autorenantworten: **17 Nuancen und 30 Unterschiede des Kontexts**. Unter [Unterschiede → Diether de la Motte](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Diether+de+la+Motte&art=nuance,context) sind beide Arten erreichbar. Die Notizen benennen die jeweilige Abweichung in Lehrziel, Häufigkeit, Erlaubnis, Hörweise oder Satzaufgabe. Ein Beispiel ist die unterschiedliche Empfehlung für das Erfinden einer Invention: Benjamin beginnt in der Oberstimme, de la Motte zunächst im Bass, um die Basstauglichkeit des Themas zu prüfen. Andere Vergleiche zeigen, weshalb ein mittelalterlicher Parallelklang, eine barocke Dissonanzfigur oder Lutosławskis unabhängige Ausführungstempi nicht nach demselben Aufgabenmodell bewertet werden.

Auch de la Mottes eigene Qualifikationen bleiben erhalten. Im Bach-Kapitel folgt auf die Einschränkung eines Vorhalts vor einer verdoppelten Terz ein ausdrücklich anerkanntes Gegenbeispiel aus dem ersten Duett der *Clavier-Übung III* (S. 269–273). Seine funktionale Bach-Analyse benennt ihre Grenzen (S. 261–262). Die Auswahl bewahrt solche Unterschiede zwischen Unterrichtsnorm und Werkbeobachtung. Die widersprüchlichen Angaben zu oberen und unteren Wechselnoten auf S. 157 und 159 bleiben bis zum Vergleich mit dem deutschen Original ungeklärt und werden nicht als gesicherte Häufigkeitsregel übernommen.

Die **drei neuen Abbildungen** sind eigene redaktionelle Modelle: zwei Notengrafiken und ein Zeitschema. Beschriftung und Bildnachweis nennen jeweils die untersuchte Idee und ihre Fundstelle. Das Zeitschema verwendet festgelegte Dauern zur Erklärung einer Überlagerung; die unabhängigen Ausführungstempi im gesonderten Lutosławski-Beitrag bleiben ein anderes Verfahren. **18 ergänzte Wikipedia-Biografien** erschließen de la Motte und neu erwähnte Komponisten und Herausgeber.

## Barocke Satzpraxis mit Johannes Menke erschließen

Die Werkkennung `menke2017` erschließt **68 Antworten zu 50 Fragen** aus *Kontrapunkt II: Die Musik des Barock* (1. Auflage, Laaber: Laaber-Verlag, 2017; *Grundlagen der Musik*, Bd. 3, ISBN 978-3-89007-826-7). Grundlage ist das bereitgestellte vollständige Exemplar. Die Fundstellen nennen seine gedruckten Seiten und gegebenenfalls die Beispielnummern. Der [Publikationsnachweis der FHNW](https://irf.fhnw.ch/entities/publication/d6fb93b6-3862-48ea-8a2e-1b2a4342042f) bestätigt genau diese Ausgabe; er führt zu den bibliografischen Angaben, nicht zu einer freigegebenen PDF-Buchseite.

Menke erweitert den Atlas um verschiedene Satzpraktiken zwischen etwa 1600 und 1750: Generalbass und Kadenzklauseln, konsonante und dissonante Sequenzen, Chromatik, mehrfachen Kontrapunkt, *contrapunti artificiosi*, theatralische Dissonanzbehandlung, Fuge, Variation, Tanz, Trio, Monodie und große Ensembles. Die Beiträge lassen diese Aufgaben und Besetzungen sichtbar. Sie werden keiner bestimmten Spezies zugeordnet und erscheinen unter **Alle**.

| Frage | Was sich am Text oder Notenmodell untersuchen lässt |
| --- | --- |
| [Welche Stimme lenkt eine Kadenz zum Trugschluss um?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=menke2017#frage=trugschluss-klauseln) | Identische Sopran- und Tenorklauseln über den Bassgängen 5–1 und 5–6 vergleichen; beim Trugschluss wird die Terz verdoppelt. |
| [Was ändert sich beim Lagentausch?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=menke2017,jeppesen1964#frage=doppelter-kontrapunkt&antwort=menke2017-81) | Parallele Terzen in Oktav- und Dezimvertauschung prüfen; Menkes barocke Synkopationen mit Jeppesens strenger Übung vergleichen. |
| [In welche Richtung löst sich eine Dissonanz auf?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=menke2017#frage=dissonanzaufloesung&antwort=menke2017-87) | Subsumtio und Superjectio singen: Der dissonante Gegenschritt springt einmal aufwärts, einmal abwärts zum Zielton. |
| [Was gewinnt ein Kontrapunkt durch eine selbst auferlegte Beschränkung?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=menke2017#frage=obligo-kontrapunkt) | Schritt-, Sprung- und Rhythmusvorgaben als Gestaltungsentscheidungen erproben; im Repertoire den Wechsel der Konzepte verfolgen. |
| [Wie wird aus einem Generalbass eine Fuge?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=menke2017#frage=generalbass-fuge) | In Pasquinis Partimento die vorgegebene Anlage von den selbst zu ergänzenden Gegenstimmen und späteren Themeneinsätzen unterscheiden. |

**8 neue Fragen** behandeln außerdem die Information der Generalbassbezifferung, die Cadenza doppia, den chromatischen Lamentobass, die Romanesca und die Abhängigkeit der Fugenform von ihrer Aufgabe. **25 neue Vergleichspaare** verbinden Menke mit vorhandenen Antworten: 4 Nuancen und 21 Unterschiede des Kontexts. [Unterschiede mit Johannes Menke](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Johannes+Menke&art=nuance,context) zeigt beide Arten. Ein bloß anderes Repertoire wird nicht als unmittelbarer Regelwiderspruch eingeordnet. Innerhalb der Antwort zu bewegten Vorhaltspartnern bleibt auch Menkes ausdrückliche Beobachtung erhalten, dass die von Berardi eingeschränkte Auflösung 2–verminderte 5 in der Praxis über die genannten Gesangsgattungen hinaus vorkommt (S. 48).

Die drei neuen Notengrafiken sind eigene schematische Leseübungen. Bildunterschriften nennen das Verfahren und die genaue Fundstelle; Scans des bereitgestellten Buches werden nicht veröffentlicht. Verifizierte Wikipedia-Verweise ergänzen Johannes Menke sowie die neu erwähnten historischen Autoren und Komponisten. Die vorhandenen Antworten, Beispiele und Vergleichspaare bleiben erhalten.

## Palestrinas Vokalpolyphonie mit Knud Jeppesen lesen

Die Werkkennung `jeppesen1964` erschließt **55 Antworten zu 41 Fragen** aus *Kontrapunkt. Lehrbuch der klassischen Vokalpolyphonie*, übersetzt von Julie Schulz, 3. Auflage (Leipzig, VEB Breitkopf & Härtel, 1964). Die Fundstellen nennen die gedruckten Seiten dieser Ausgabe. Der [Verlagsnachweis](https://www.breitkopf.com/work/3447/kontrapunkt) führt zum heutigen Nachdruck des Werks; er ist kein Seitenlink zum verwendeten Exemplar.

Jeppesen behält die fünf Spezies bei, richtet ihre Regeln aber ausdrücklich an seiner Untersuchung des Palestrina-Stils aus. Die Beiträge verfolgen den Weg von der einzelnen Melodie über zwei- und mehrstimmige Übungen zu freier Vokalpolyphonie, Kanon, Motette, Messe und Vokalübungsfuge. Sechs neue Fragen betreffen das Gewicht melodischer Sprünge, obere und untere Wechselnoten, gleichzeitige Vierteldissonanzen, Textunterlegung, den Wechsel der Satzweise in einer Motette und die Umarbeitung einer mehrstimmigen Vorlage zur Messe.

| Frage | Aufgabe am Notenbild oder Text |
| --- | --- |
| [Hängt ein melodischer Sprung von Notenwert und Taktgewicht ab?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964#frage=sprung-und-taktgewicht) | Dieselbe Tonfolge in Halben und Vierteln spielen; die Halbe bleibt Zählzeit. |
| [Sind obere und untere Wechselnoten gleich verwendbar?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964#frage=obere-untere-wechselnote) | Die Richtung der Drehung ändern, danach den Rückkehrton zur Halben verlängern. |
| [Darf eine Dissonanz auf eine betonte Zeit fallen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964#frage=betonte-dissonanz) | Die Quarte auf dem dritten Viertel in der dritten Art mit dem absteigenden Durchgang nach einer Halben in der fünften Art vergleichen. |
| [Wie behandle ich Dissonanzen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964,salzer-schachter1989#frage=dissonanzbehandlung) | Dasselbe Modell mit Halben- und Viertelstimme nach Jeppesen und nach Salzer–Schachter prüfen. Die zweite Halbe erhält unterschiedliche Freiheiten. |
| [Muss eine Motette durchgehend imitieren?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=jeppesen1964#frage=motette-satzwechsel) | In *Dies sanctificatus* die wechselnden Satzweisen mit den Textabschnitten verbinden. |

**27 neue Vergleichspaare** verknüpfen Jeppesen mit den bereits erschlossenen Lehrwerken: elf Widersprüche, fünf Nuancen und elf Unterschiede des Kontexts. Unter [Unterschiede → Knud Jeppesen](https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html#autor=Knud+Jeppesen) sind die Widersprüche und Nuancen unmittelbar erreichbar; **Anderer Kontext** ergänzt die übrigen Paare. Dazu gehört die gemischte zweite und dritte Spezies: Salzer und Schachter erkennen die strengere Regel für eine Palestrina-Nachahmung ausdrücklich an, erweitern aber das Stilziel ihrer Übungen. Die Erläuterung macht diesen Unterschied sichtbar. Jeppesens Zurückweisung der von Fux zugelassenen dritten Vierteldissonanz ist dagegen als direkter Regelgegensatz erfasst.

Drei neue Notengrafiken sind eigene, eng begrenzte Vergleichsfiguren der Redaktion. Ein vierter Beispieleintrag verwendet die bereits vorhandene Salzer–Schachter-Leseübung mit einer zusätzlichen Frage zu Jeppesen. Bildunterschriften und Nachweise unterscheiden die eigenen Modelle von den Buchbelegen.

## Von den Spezies zur Komposition mit Salzer und Schachter

Die Werkkennung `salzer-schachter1989` erschließt *Counterpoint in Composition: The Study of Voice Leading* von Felix Salzer und Carl Schachter (New York, Columbia University Press, Morningside Edition mit neuem Vorwort, 1989; Erstausgabe 1969, ISBN 978-0-231-07039-3). Die 66 Beiträge zu 35 Fragen verbinden die Speziesübungen mit der Analyse komponierter Musik. Fünf Fragen und vier Notenbilder kommen hinzu. Die Fundstellen nennen die gedruckten Seiten und gegebenenfalls die Beispielnummer; das neue Vorwort wird Carl Schachter zugeschrieben. [Verlagsnachweis](https://cup.columbia.edu/book/counterpoint-in-composition/9780231070393/)

| Frage für den Unterricht | Arbeit am Notentext |
| --- | --- |
| [Wie kann eine dissonante Quarte einen Vorhalt vorbereiten?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=salzer-schachter1989,green-jones2011#frage=bindung-s4&spezies=4&antwort=salzer-schachter1989-2) | Den Bass halten und die obere Stimme von e nach d führen. Salzer und Schachter hören eine übergebundene Wechselnote; Green und Jones nennen die mildere Vorbereitung „consonant fourth“. |
| [Wie kann ein Akkord weiterwirken, während andere Klänge erklingen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=salzer-schachter1989#frage=akkordprolongation) | Im eigenen G-Dur-Modell die beiden unteren Wechselnoten singen und Akkordnamen von Stimmführungsfunktion unterscheiden. |
| [Dürfen drei Viertelpositionen hintereinander dissonieren?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=salzer-schachter1989#frage=dissonanzbehandlung&antwort=salzer-schachter1989-2) | In der Kombination aus zweiter und dritter Spezies auf jedem Viertel alle Stimmenpaare prüfen. Die Durchgänge greifen ineinander. |
| [Beendet jede Fermate im Choral einen musikalischen Gedanken?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=salzer-schachter1989#frage=choral-fermate) | Die Textzeilengrenze von der harmonischen Richtung unterscheiden: Ein Klang unter der Fermate kann in die folgende Phrase weiterdrängen. |
| [Behält ein Motiv bei der Imitation dieselbe Funktion?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=salzer-schachter1989#frage=imitation-funktionswechsel) | Bei Ockeghem verfolgen, wie ein neuer Bass und zusätzliche Stimmen die Funktion eines wiederkehrenden Tons verändern. |

31 zusätzliche Antwortverbindungen erschließen Unterschiede gegenüber den bereits bearbeiteten Lehrwerken. Ein unmittelbarer Regelgegensatz betrifft beispielsweise den betonten Durchgang in der zweiten Spezies: Prout lässt ihn unter bestimmten Bedingungen zu, Salzer und Schachter verlangen eine konsonante erste Halbe. Andere Verbindungen betreffen verschiedene Aufgaben oder Deutungen. Die Erlaubnis einer Figur und ihre theoretische Erklärung werden dabei getrennt beurteilt.

Weitere neue Fragen behandeln den Wechsel zwischen Vierteln und Halben im Floridus sowie chromatische Oktavteilung ohne vorausgesetztes diatonisches Gerüst. Die Speziesfilter folgen der jeweils belegten Aufgabe; ausdrücklich kombinierte Spezies erscheinen unter ihren beteiligten Nummern. Analysen aus dem Repertoire und das als optionale Zusatzübung behandelte Drei-gegen-eins erhalten keine nachträglich vergebene Speziesnummer.

Die Notenbilder bestehen aus drei eigenen Unterrichtsmodellen und einer transponierten, verkürzten Lesehilfe zum Verfahren von Bsp. 4-46. Sie erläutern Akkordfunktion, ineinandergreifende Dissonanzen, die Quartvorbereitung und den Unterschied zwischen gebundenem und neu angeschlagenem Vorhalt. Alle vier sind offline verfügbar. Ihre Bildnachweise unterscheiden die redaktionelle Darstellung vom Notentext des Buchs.

## Barocken Kontrapunkt mit Neidhöfer und Schubert lesen

Die Werkkennung `neidhoefer-schubert2023` erschließt *Baroque Counterpoint: Revised and Expanded Edition* von Christoph Neidhöfer und Peter Schubert (Albany, State University of New York Press, 2023, ISBN 978-1-4384-9325-1). Die 48 Beiträge zu 37 Fragen folgen den gedruckten Seiten dieser überarbeiteten Ausgabe. Sieben Fragen und sechs Notenbilder kommen hinzu; zwei vorhandene Bach-Ausschnitte werden ebenfalls verwendet. [Verlagsnachweis](https://sunypress.edu/Books/B/Baroque-Counterpoint)

| Frage für den Unterricht | Arbeit am Notentext |
| --- | --- |
| [Kann ein konsonanter Zweiklang einen Vorhalt enthalten?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=konsonanz) | Das fis in T. 5 von Bachs Fis-Dur-Fuge BWV 882 mit der vollständigeren Harmonie in T. 9 vergleichen. |
| [Kann die notierte Eins schwach sein?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=betonte-dissonanz) | T. 2–3 der Sinfonia Nr. 13 als drei Viertelschläge zählen und das c auf der notierten Eins von T. 3 einordnen. |
| [Was sagt eine tonale Antwort über die wirkliche Tonart aus?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=fuge-reale-tonale-antwort) | In Grauns *Christus hat uns ein Vorbild gelassen* die Einsatzstufen mit der jeweils klingenden Harmonie vergleichen. |
| [Wie erfinde ich Thema und Kontrasubjekt gemeinsam?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=fugenthema-und-kontrasubjekt-erfinden) | Im eigenen Notenbeispiel Grundtöne und Terzen verteilen, verzieren und anschließend die Stimmenlage tauschen. |
| [Warum lässt sich dieselbe Fuge zwei- oder dreiteilig hören?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=fuge-formanalyse) | Bei BWV 847 Tonartabschnitte, wiederkehrende Motive und den Registerverlauf als verschiedene Gliederungskriterien prüfen. |
| [Warum wird die vierte Bassstufe aufwärts anders harmonisiert als abwärts?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=neidhoefer-schubert2023#frage=generalbass-oktavregel) | Die Bassfolgen 3–4–5 und 5–4–3 mit ihren jeweiligen Harmonien spielen. |

Weitere neue Fragen behandeln das diatonische Gerüst einer chromatischen Antwort, die Länge eines Sequenzmodells, Scheineinsätze und die Spiegelumkehr eines ganzen Stimmenpaars. Die Vergleiche benennen die jeweilige Aufgabe und den historischen Zusammenhang. So betreffen erlaubte Quinten im notierten Fundamentalbass einen Zwischenschritt der Harmonieplanung. Die Regeln des ausgearbeiteten Satzes bleiben gesondert zu prüfen.

„Strenger“ und „freier“ Stil bezeichnen hier die Lernstufen des barocken Lehrgangs. Die Beiträge erscheinen daher unter **Alle**, ohne nachträgliche Zuordnung zu einer nummerierten Spezies. Die Einträge zur Dissonanz unterscheiden klingenden Abstand, harmonische Funktion und metrische Stellung. Beim Formvergleich werden Ratz und Czaczkes ausdrücklich nach der Darstellung von Neidhöfer und Schubert wiedergegeben.

Die sechs neuen Abbildungen bestehen aus vier Ausschnitten historischer Drucke von Bach und Graun sowie zwei eigens komponierten Leseübungen. Sie illustrieren Hemiola, implizite Vorhaltsfunktion, Formmitte, tonale Antwort, scheinpolyphone Vorhaltsauflösung und die gemeinsame Erfindung zweier Stimmen. Die Herkunft und gegebenenfalls der redaktionelle Charakter stehen bei jedem Bild. Die moderne Buchausgabe wird nicht als PDF oder Bildausschnitt veröffentlicht.

## Mit Green und Jones vom Choral zur mehrstimmigen Musik

Die Werkkennung `green-jones2011` erschließt *The Principles and Practice of Modal Counterpoint* von Douglass M. Green und Evan Jones (Routledge, 2011, ISBN 978-0-415-98865-0). Die 42 Beiträge zu 31 Fragen verbinden Speziesaufgaben mit Choral, mittelalterlicher Mehrstimmigkeit, Renaissancepolyphonie und dem Übergang zur Tonalität. Sieben Fragen und neun Notenbilder kommen hinzu. Die Fundstellen folgen den gedruckten Seiten der vorliegenden Ausgabe. [Verlagsnachweis](https://www.routledge.com/The-Principles-and-Practice-of-Modal-Counterpoint/Green-Jones/p/book/9780415988650)

| Frage für den Unterricht | Was sich vergleichen lässt |
| --- | --- |
| [Muss die vierte Spezies mit einer Pause beginnen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=green-jones2011,gallon-bitsch1964#frage=anfangsintervall&spezies=4) | Green und Jones zeigen einen Beginn auf der Eins, damit der zweite Ton gebunden werden kann. Das eigene Notenbeispiel stellt beide Anfänge gegenüber. |
| [Dürfen Quinten auf schweren Zeiten wiederkehren?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=green-jones2011#frage=parallelen&spezies=2) | Im Zweistimmensatz prüfen die Autoren Fux’ Quintenfolge. Im Dreistimmensatz erlauben sie bestimmte Folgen unter drei ausdrücklich genannten Bedingungen. |
| [Wie kann ein abwärts aufgelöster Vorhalt zur Dezime werden?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=green-jones2011#frage=vorhalt-bewegte-begleitstimme) | Dieselbe Oberstimme mit liegendem und mit bewegtem Bass spielen: Aus 9–8 wird 9–10. |
| [Was bewirken zwei Leittöne in einer Ars-nova-Kadenz?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=green-jones2011#frage=doppelleitton-kadenz) | In Machauts Kadenz auf c die parallelen Quinten des steigenden Stimmenpaars gegen den fallenden Tenor hören. |
| [Wie lässt sich ein Stimmenpaar imitieren?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=green-jones2011#frage=imitation-stimmenpaare) | Im Beginn von Lassus’ *Resonet in laudibus* beide Linien und ihren Einsatzabstand beim Wechsel zum zweiten Paar verfolgen. |

Der Lehrgang behandelt die erste, zweite und vierte Spezies ausdrücklich. Die späteren Kapitel zum frei geführten modalen Vokalsatz erhalten deshalb keine nachträgliche Zuordnung zu S3 oder S5. Historische Beobachtungen erscheinen unter **Alle**. Unterschiede zwischen zwei und drei Stimmen sowie zwischen einer Schreibaufgabe und einem historischen Satz stehen jeweils im Beleg. Auch die als „consonant fourth“ beschriebene Vorbereitung eines Vorhalts ist an die genannten Bedingungen des mehrstimmigen Satzes gebunden.

Die Abbildungen umfassen Ausschnitte gemeinfreier Drucke von Fux, Lassus, Palestrina und des *Graduale Romanum* von 1908, eine gekennzeichnete Reduktion der Machaut-Kadenz und drei eigene Leseübungen. Der Ausschnitt aus *Alle psallite cum luya* verwendet Monique Rios Notensatz unter CC BY 4.0; Urheberschaft, Bearbeitung und Lizenz stehen beim Bild. Die vollständige moderne Buchausgabe wird nicht mitveröffentlicht.

## Tonalen Kontrapunkt mit Thomas Benjamin lesen

Die Werkkennung `benjamin1986` erschließt *Counterpoint in the Style of J. S. Bach* (New York, Schirmer Books, 1986, ISBN 0-02-870280-8). Benjamin erläutert in seinen Hinweisen für Lehrende (S. xi–xii), weshalb seine Übungen von Bachs Instrumentalsätzen ausgehen. Die Quellenbelege verbinden die Aufgaben mit den bei ihm analysierten Takten. [Bibliotheksnachweis](https://openlibrary.org/books/OL2537553M/Counterpoint_in_the_style_of_J.S._Bach)

| Frage für den Unterricht | Arbeit am Notentext |
| --- | --- |
| [Wie viele Stimmen höre ich in einer Cellostimme?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=benjamin1986#frage=linie-scheinpolyphonie) | In der Bourrée I aus BWV 1009 erst die obere, dann die untere Linie mitsingen. Benjamin hält auch eine Lesart mit einer Mittelstimme für möglich. |
| [Wie wird ein Motiv zur Episode?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=benjamin1986#frage=invention-episode) | In T. 3 der C-Dur-Invention BWV 772 die Umkehrung im Diskant gegen die vergrößerten Anfangstöne im Bass spielen. |
| [Wie kehrt die Tonika am Fugenschluss zurück?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=benjamin1986#frage=fuge-schlussrueckkehr) | In der c-Moll-Fuge BWV 847 den Schlussabschnitt mit der ersten Einsatzgruppe vergleichen. |

## Modalen Kontrapunkt mit Peter Schubert lesen

Die Werkkennung `schubert1999` erschließt 21 Fragen zu *Modal Counterpoint, Renaissance Style*, Oxford University Press, 1999 (ISBN 0-19-510912-0). Seiten und Beispielnummern folgen der ersten Auflage. Schubert trennt die Regeln einer bestimmten Aufgabe von den Freiheiten, die er in historischen Sätzen findet. Die Einträge nennen daher die Spezies oder das besprochene Stück. [Bibliotheksnachweis zur Ausgabe](https://search.worldcat.org/title/Modal-counterpoint-Renaissance-style/oclc/39162285)

| Frage für den Unterricht | Arbeit am Notentext |
| --- | --- |
| [Was bleibt bei einer Motivwiederholung gleich?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schubert1999,zarlino1558#frage=motiv-ueber-cantus) | Die beiden Zarlino-Ausschnitte spielen. Das lange d wird beim zweiten Mal am Taktstrich gebunden. Hat sich damit etwas am klingenden Satz geändert? |
| [Wo darf die Cambiata stehen?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schubert1999,rothgeb1995-s3#frage=cambiata) | Tigrinis fünf Töne über dem Bass singen. Dann die Figur um zwei Viertel verschieben und bei beiden Autoren prüfen, ob diese Platzierung zur Übung passt. |
| [Wie weicht eine Kadenz aus?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schubert1999#frage=kadenzausweichung) | Dieselbe Oberstimme zweimal singen. Der letzte Bassschritt entscheidet, ob die Stimmen eine Oktave oder eine Sexte erreichen. |
| [Was kehrt im dreistimmigen Kanon wieder?](https://muk-labs.github.io/Kontrapunktatlas/?quellen=schubert1999#frage=kanon-stimmtausch) | In Palestrinas *Benedictus* Tenor und Bass der Takte 3–4 markieren. Beide Linien in den Takten 5–6 im Alt und im Bass wiederfinden. |

Sieben Notenbilder stehen offline zur Verfügung. Drei sind Ausschnitte historischer Drucke von Tigrini, Morley und Palestrina. Zwei geben kurze historische Passagen in neuer Notation wieder. Die beiden übrigen sind eigens für den Atlas geschriebene Übungen zur unteren Wechselnote und zur Kadenzflucht.

## Von der Zweistimmigkeit zur Fuge mit Kent Kennan

Der Autorenfilter **Kent Kennan** erschließt 22 Fragen. Die Seiten- und Beispielnummern beziehen sich auf *Counterpoint: Based on Eighteenth-Century Practice*, 4. Auflage, Prentice Hall, 1999 (ISBN 0-13-080746-X). Kennans Beobachtungen lassen sich an Bachs Notentext und an zwei eigens notierten Satzübungen überprüfen. [Bibliotheksnachweis der vierten Auflage](https://iucat.iu.edu/iub/4609610)

| Frage | Aufgabe am Notenbild |
| --- | --- |
| [Wie schreibe ich drei Töne gegen einen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=drei-gegen-eins) | Die Dreiergruppe spielen. Kennan behandelt sie als zweite Spezies. Prout zählt sie zur dritten und zeigt dieselbe Oberstimme mit zwei verschiedenen Bassfortsetzungen. |
| [Wann wird die Begleitstimme einer Invention zum Gegenmotiv?](https://muk-labs.github.io/Kontrapunktatlas/#frage=invention-gegenmotiv) | Die Sechzehntel aus der Unterstimme von BWV 776 in der Oberstimme wiederfinden. |
| [Muss der zweite Einsatz einer Invention in der Dominanttonart stehen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=invention-einsatzplan) | Die vier Motiveinsätze am Anfang von BWV 772 zählen. Nach den ersten beiden beginnt das Motiv auf g. In welcher Tonart bleibt die Passage? |
| [Wann ist eine Fuge mit zwei Themen eine Doppelfuge?](https://muk-labs.github.io/Kontrapunktatlas/#frage=fuge-doppelfuge) | In BWV 887 das erste Thema in Takt 1, das zweite in Takt 61 und beide zusammen in Takt 97 lesen. |
| [Wie kehrt ein Kanon in einer anderen Tonart wieder?](https://muk-labs.github.io/Kontrapunktatlas/#frage=kanon-spiralkanon) | Beim *Canon a 2 per tonos* die Anfänge der drei Durchgänge auf c, d und e vergleichen und die Folge am Klavier fortsetzen. [Einspielung der Nederlandse Bachvereniging](https://www.bachvereniging.nl/en/bwv/bwv-1079-8) |

Die Notenbeispiele sind offline verfügbar. Die Bildnachweise unterscheiden Ausschnitte historischer Drucke, neu notierte Bach-Passagen und Unterrichtsbeispiele der Redaktion. Die Grafik zu BWV 772 enthält eine bearbeitete Mutopia-Ausgabe von jeff covey und steht unter derselben Lizenz. [Quelle und Editionsangaben](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=40) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

## Linearen Kontrapunkt mit Ernst Kurth hören

Im Autorenfilter **Ernst Kurth** führen zwölf Fragen zu den *Grundlagen des linearen Kontrapunkts* (Bern, Max Drechsel, 1917). Zu hören ist zum Beispiel, wie in einer einzigen Violinlinie ein Bass fortwirkt oder wie ein melodischer Höhepunkt erst nach dem schweren Taktteil erreicht wird. Alle Seitenzahlen beziehen sich auf den Druck von 1917. [Digitalisat der Erstausgabe](https://s9.imslp.org/files/imglnks/usimg/9/97/IMSLP563567-PMLP907935-Kurth_-_Grundlagen_des_linearen_Kontrapunkts_%28JBIG2%29.pdf)

| Frage | Aufgabe am Notenbild |
| --- | --- |
| [Wie höre ich mehrere Stimmen in einer einzigen Melodie?](https://muk-labs.github.io/Kontrapunktatlas/#frage=linie-scheinpolyphonie) | In Bachs C-Dur-Fuge für Violine zuerst alle Töne, dann nur die von Kurth markierten Spitzentöne singen (Nr. 153). |
| [Wie kann ein Orgelpunkt in einer einstimmigen Linie weiterklingen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=linie-orgelpunkt) | In der g-Moll-Fuge die Rückkehr zum tiefen g und zum d in der Mittellage verfolgen (Nr. 169). |
| [Wie spinnt Bach eine melodische Bewegung weiter?](https://muk-labs.github.io/Kontrapunktatlas/#frage=melodische-fortspinnung) | In Takt 23 der a-Moll-Invention BWV 784 jeweils den letzten Ton der ersten drei Sechzehntelgruppen spielen und den Weg der Oberstimme hören. |
| [Warum können dieselben Klaviertasten zwei Auflösungen nahelegen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=harmonik-enharmonische-spannung) | Kurths Tonfolgen auf S. 69 spielen. Beim ersten Mal steigt die Mittelstimme von e nach f, beim zweiten Mal fällt der Bass von c nach h. |

Bei der [Beurteilung einer fertigen Übung](https://muk-labs.github.io/Kontrapunktatlas/#frage=beurteilung) steht Kurths Kritik an Cherubinis vierstimmigem Lehrbeispiel neben Cherubinis eigener sechster Regel. Die Fußnote auf S. 112 öffnet Kurths Beispiel. Der eingebettete Ausschnitt aus Cherubinis Nr. 118 zeigt eine weitere Lösung aus dem Lehrbuch.

## Generalbass bei Emanuel Aloys Förster

Der Themenfilter **Generalbass** führt zu fünf eigenen Fragen. Unter **Fragen nach Autor oder Lehransatz → Emanuel Aloys Förster** erscheinen zusätzlich seine Beispiele zu Melodieführung, Harmonik, harmonischem Rhythmus, Chromatik, Dissonanzauflösung und Quintparallelen.

| Frage | Aufgabe am Instrument |
| --- | --- |
| [Was unterscheidet die Generalbassziffer von der Bassstufe?](https://muk-labs.github.io/Kontrapunktatlas/#frage=generalbass-ziffern-stufen) | In Nr. 8 über dem Basston d die verlangte Sexte spielen und denselben Basston in a-Moll als vierte Stufe singen. |
| [Welchen Ton darf ich beim Sextakkord verdoppeln?](https://muk-labs.github.io/Kontrapunktatlas/#frage=generalbass-sextakkord) | In Nr. 8, Takt 7, die erhöhte Sexte bestimmen. Anschließend in Nr. 26 prüfen, welche Verdopplung eine Quintfolge vermeidet. |
| [Muss ich immer vierstimmig aussetzen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=generalbass-stimmenzahl) | Försters erste Basszeile als Kompositionsübung und als Orgelbegleitung spielen. Türk bezieht dazu die Besetzungsstärke und Dynamik ein. |
| [Wann braucht der „zweydeutige“ Septimenakkord eine Vorbereitung?](https://muk-labs.github.io/Kontrapunktatlas/#frage=generalbass-zweideutiger-septakkord) | Die Septime auf der zweiten Mollstufe mit demselben Klang auf der siebten Durstufe vergleichen. Försters Einwand gegen Vogler und Knecht und sein eigenes Kriterium in § 69 stehen bei der Frage. |
| [Wie transponiere ich einen Generalbass am Instrument?](https://muk-labs.github.io/Kontrapunktatlas/#frage=generalbass-transponieren) | Einen kurzen bezifferten Bass in C-Dur realisieren und ohne ausgeschriebene Mittelstimmen nach Es-Dur versetzen. |

Grundlage ist die erste Abteilung der *Practischen Beyspiele*, Wien, Artaria, 1818. Sie setzt die um **1804–1805** erschienene *Anleitung zum Generalbass* fort. Die Fundstellen nennen Seite und Beispiel im historischen Druck sowie gegebenenfalls die Seitenzählung in Derek Remeš’ Studienausgabe, Bd. 1.1, Stand 5. Januar 2021. Der öffentlich zugängliche Band bei TU Dortmund enthält eine spätere Revision. Die fünf historischen Notenausschnitte im Atlas stammen aus dem Artaria-Druck. Die Transponierübung ist eigens für den Atlas notiert. [Artaria-Digitalisat](https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf) · [Studienausgabe von Derek Remeš](https://doi.org/10.17877/TUDODATA-2025-MBUKJOWZ)

## Noël-Gallon und Marcel Bitsch im Atlas

Im Quellenfilter sind beide unter **Noël-Gallon und Marcel Bitsch** zusammengefasst. Die Fundstellen beziehen sich auf den *Traité de contrepoint* (Paris, Durand, © 1964, D. & F. 13955). Die Regeltexte nennen Paragraph und gedruckte Seite. Die Beispiele aus Teil II öffnen die passende Seite im Kapitel-PDF. „C.F.“ an einem System bezeichnet die gegebene Stimme. Die Namen der einzelnen Aussetzenden folgen dem gedruckten Autorenregister auf S. 129. [Kapitelübersicht und Digitalisate](https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/index.html) · [Index des exemples](https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/indexEg.pdf)

| Frage | Was sich vergleichen lässt |
| --- | --- |
| [Dürfen zwei Gegenstimmen dieselbe Spezies führen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=speziesmischung) | Prout setzt zwei Halbenstimmen unter das Thema. Danielle Sevrette und Manfred Kelkel verteilen im vierstimmigen *grand mélange* Halbe, Viertel und Synkopen unterschiedlich. |
| [Wie lange muss ich einen Vorhalt vorbereiten?](https://muk-labs.github.io/Kontrapunktatlas/#frage=dauer-der-vorhaltsvorbereitung) | Prout vergleicht die Dauern vor und nach dem Taktstrich. Noël-Gallon und Bitsch nennen eine Halbe als Mindestwert. Zwei eigens notierte Fassungen machen den Unterschied in der Vorbereitung hörbar. |
| [Wie verändere ich ein Motiv im Kanon?](https://muk-labs.github.io/Kontrapunktatlas/#frage=kanon-verfahren) | In Nr. 151a–d zeigt Alphonse Autran dieselbe Aufgabe in vier Gestalten. Vergleiche seine Umkehrung und seinen Krebs mit der Veränderung der Notenwerte bei Bitsch und in Pistons Bach-Analyse. |
| [Wie arbeiten die Bässe eines Doppelchors zusammen?](https://muk-labs.github.io/Kontrapunktatlas/#frage=doppelchor-basslinien) | In den Aussetzungen von Noël-Gallon und René Saorgin geben zwei Basslinien die Wechsel der Chöre vor. Zarlino erklärt die Selbstständigkeit der Chöre aus der venezianischen Aufführungspraxis. |

Der Suchbegriff **Sevrette** führt beispielsweise zu ihrer Aussetzung Nr. 93. **Leseübung der Redaktion** kennzeichnet ein neu entworfenes Beispiel. **Lesehilfe zum Buchbeispiel** bezeichnet die Analyse einer bestimmten Aussetzung. Beide sind in der lokalen Fassung enthalten.

## Walter Piston im Atlas

Im Filter **Fragen nach Autor oder Lehransatz** führt **Walter Piston** zu den passenden Fragen. Die Seiten und Beispielnummern beziehen sich auf *Counterpoint*, London, Victor Gollancz, sechster Druck 1970. Das Buch erschien zuerst 1947 bei W. W. Norton in New York. Der Bibliothekslink weist die britische Ausgabe nach. [Katalog der britischen Ausgabe](https://ci.nii.ac.jp/ncid/BA86907493?l=en)

Pistons Ausgangspunkt ist das tonale Repertoire. Bei jeder Position steht, ob er eine Übung anleitet oder eine Komposition untersucht. **Redaktioneller Vergleich** kennzeichnet die Einordnung gegenüber den anderen Quellen. Bei der [Cambiata](https://muk-labs.github.io/Kontrapunktatlas/#frage=cambiata) bezeichnet dasselbe Wort zwei verschiedene Bewegungsfiguren. Bei den [verdeckten Quinten und Oktaven](https://muk-labs.github.io/Kontrapunktatlas/#frage=verdeckte-parallelen) geht es um die Reichweite eines Verbots.

Vier zusätzliche Fragen führen von der Analyse zur eigenen Übung.

| Frage | Aufgabe am Notenbild |
| --- | --- |
| [Wann wechselt die Harmonie unter einer bewegten Melodie?](https://muk-labs.github.io/Kontrapunktatlas/#frage=harmonischer-rhythmus) | Bei Schumann Taktanfang, Melodieakzent und Harmoniewechsel getrennt verfolgen. |
| [Woran höre ich rhythmische Selbstständigkeit?](https://muk-labs.github.io/Kontrapunktatlas/#frage=rhythmische-selbststaendigkeit) | Bachs Themenkopf in zwei Zeitmaßen klopfen und mit Gédalges rhythmischer Ergänzung vergleichen. |
| [Wann wird Imitation zum Kanon?](https://muk-labs.github.io/Kontrapunktatlas/#frage=imitation-und-kanon) | Im Oktavkanon verfolgen, wie lange sich die zweite Stimme aus der ersten ableiten lässt. |
| [Was ändert sich beim Lagentausch?](https://muk-labs.github.io/Kontrapunktatlas/#frage=doppelter-kontrapunkt) | In BWV 885 die Gegenstimme zuerst unter, dann über dem Thema aufsuchen. |

Die eingebetteten Noten stammen aus eigenständig nachgewiesenen, gemeinfreien Ausgaben von Bach, Beethoven und Schumann. Die Bildtexte unterscheiden die von Piston besprochene Stelle von ergänzend ausgewählten Takten desselben Werks. Unter jedem Notenbild führt ein Link zur verwendeten Ausgabe.

## Quellen und Bearbeitung

Die ursprünglichen 24 Tabellenzeilen stehen vollständig in **atlas-data.js**. Jede enthält fünf modale und fünf tonale Zellen, in der Reihenfolge S1 bis S5. Die zugrunde liegenden Seiten sind im dreiseitigen PDF-Ausschnitt als S. 6 und 8 paginiert. Die 17 Zeilen auf S. 9 bilden einen eigenen Vergleich. „Hindemith“ bezeichnet dort Artachos Zusammenfassung. Die Zeilen wurden thematisch zugeordnet und bleiben über ihren Originaltitel auffindbar.

Die Redaktion hat die Fragenüberschriften formuliert. Die Spezieszellen und die Kommentare des Lehrmodellvergleichs bewahren den Wortlaut des Handouts. „Gleich“ erscheint mit ausgeschriebenem Bezug und einem Hinweis auf den Originaleintrag. Die Lehrbuchpositionen sind deutsche Paraphrasen mit Fundstelle und Geltungsbereich. Die Bildunterschriften schlagen vor, welche Stimmen, Zählzeiten oder Intervallfolgen man vergleichen kann. NCT steht für *non-chord tone*, einen harmoniefremden Ton.

### Notenausgaben und Bildnachweise

Die historischen Notenbilder sind Ausschnitte der jeweils genannten Drucke. Unter jedem Bild stehen die Herkunft und ein Link zur vollständigen Scan-Seite. Die gedruckte Seitenzahl und die Blattnummer im PDF-Viewer können voneinander abweichen.

| Autor | Ausgabe und Digitalisat |
| --- | --- |
| Gioseffo Zarlino | *Le istitutioni harmoniche*, Venedig 1558. Gemeinfreie Scans der [Library of Congress, Music Division](https://www.loc.gov/item/11027718/). Die Kapitelbelege führen zur [Transkription der Universität Utrecht](https://tmiweb.science.uu.nl/text/transcription/zarins58.html). |
| Johann Joseph Fux | *Gradus ad Parnassum*, Wien 1725. [Wienbibliothek im Rathaus, B-61291, Public Domain Mark 1.0](https://www.digital.wienbibliothek.at/wbrobv/content/titleinfo/4118035). |
| Georg Friedrich Händel / Derek Remeš | *Handel’s Thoroughbass Exercises*, hg. und gesetzt von Derek Remeš, Hochformatfassung, Version 12. Juni 2018; [TUDOdata 2025](https://doi.org/10.17877/TUDODATA-2025-MC0APUER), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Die [PDF-Kopie](quellen/haendel-generalbass-remes.pdf) entspricht unverändert der öffentlichen Datei `Handel-Exercises-Portrait - Full Score.pdf`; die 16 WebP-Bilder sind gekennzeichnete Ausschnitte daraus, mit unveränderter Notation und redaktionellen Erläuterungen. |
| Luigi Cherubini | *Cours de contrepoint et de fugue*, [deutsch-französischer Druck](https://commons.wikimedia.org/wiki/File:Cours_de_contrepoint_et_de_fugue_(IA_imslp-de-contrepoint-et-de-fugue-cherubini-luigi).pdf), und *A Treatise on Counterpoint and Fugue*, übersetzt von Mary Cowden Clarke, herausgegeben von Josiah Pittman, [Novello-Ausgabe, Harvard-Exemplar](https://commons.wikimedia.org/wiki/File:A_treatise_on_counterpoint_%26_fugue_(IA_atreatiseoncoun00pittgoog).pdf). Gemeinfreie Drucke. |
| Ebenezer Prout | *Counterpoint: Strict and Free*, 3. Auflage, London, Augener, Vorwort 1890. [Gemeinfreies Cornell-Exemplar](https://commons.wikimedia.org/wiki/File:Counterpoint-_strict_and_free_(IA_cu31924021789650).pdf). |
| Heinrich Bellermann | *Der Contrapunkt*, 4. Auflage, Berlin 1901. [Sibley Music Library, University of Rochester, gemeinfrei](https://urresearch.rochester.edu/institutionalPublicationPublicView.action?institutionalItemId=21800). |
| Percy Goetschius | *Exercises in Elementary Counterpoint*, G. Schirmer, 5. Auflage, Copyright 1910. [Gemeinfreies Cornell-Exemplar](https://commons.wikimedia.org/wiki/File:Exercises_in_elementary_counterpoint_(IA_cu31924021751098).pdf). |

Für die Fugenfragen kommen folgende Ausgaben und Analysen hinzu.

| Autor | Werk und Quelle |
| --- | --- |
| Johann Sebastian Bach | *Das Wohltemperirte Clavier*, Bach-Gesellschaft, Bd. 14, hg. Franz Kroll (Leipzig, 1866). Gemeinfreie Notenausschnitte aus [Teil I](https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf) und [Teil II](https://s9.imslp.org/files/imglnks/usimg/4/4b/IMSLP173660-PMLP05899-2.pdf). |
| Luigi Cherubini | Der Fugenteil der oben aufgeführten Novello-Ausgabe enthält die gedruckten Vergleichsbeispiele zu Antwort und Engführung. |
| Ebenezer Prout | *Fugue* (London, Augener, 9. Druck, Vorwort 1891), [Digitalisat der UNC Music Library](https://commons.wikimedia.org/wiki/File:Fugue_(IA_fugueprout).pdf). Dazu die von Louis B. Prout herausgegebene [*Analysis of J. S. Bach’s Forty-Eight Fugues*](https://waltercosand.com/CosandScores/Composers%20L-P/Composers_P/Prout%2C%20Ebenezer/Prout-Analysis_of_Bach%27s_48_Fugues.pdf) (London, 1910). |
| André Gédalge | *Traité de la fugue. De la fugue d’école* (Paris, Enoch, 1901). [Gemeinfreies Exemplar der Sibley Music Library](https://urresearch.rochester.edu/institutionalPublicationPublicView.action?institutionalItemId=22662). |
| Hermann Keller | *Das Wohltemperierte Klavier von Johann Sebastian Bach. Werk und Wiedergabe* (Kassel, 1965), S. 130. [Analyse von BWV 872](https://www.hermann-keller.org/assets/downloads/547e2aeb/bwv872.pdf#page=3). |

Für Hindemith führen die gesonderten Werkbelege zum Schott-Inhaltsverzeichnis des Übungsbuchs und zum Einlegeblatt des theoretischen Bandes. Die modernen Lehrtexte von John Rothgeb, Kris Shaffer und Mark Gotham sind bei der jeweiligen Frage verlinkt.

## Eine Frage oder Autorenposition ergänzen

`atlas-data.js` ist die einzige zu pflegende Inhaltsdatei. Die vorhandenen Objekte sind Beispiele. Eine Frage erhält eine dauerhafte `id` für Links, eine Frage als `title`, einen `group`-Wert und Suchwörter in `tags`. Vorhandene Kennungen sollten auch nach einer Umbenennung erhalten bleiben.

| Feld | Inhalt |
| --- | --- |
| `species` | Optional. Die beiden Handout-Zeilen mit dem gemeinsamen Originaltitel und je fünf Zelltexten in `modal` und `tonal`. |
| `comparisons` | Eine Liste der passenden Zeilen auf S. 9 mit `label`, `modal`, `tonal`, `hindemith` und `comment`. Für eine neue Frage zunächst eine leere Liste einsetzen. |
| `authors` | Optional. Für jede belegte Position ein Objekt mit einer dauerhaften `id`, der Werk-ID in `source`, den Feldern `name`, `work`, `locator`, `text` und optionaler `url`. In `locator` stehen der genaue Fundort und der Geltungsbereich, etwa „zweistimmig, erste Spezies“. |
| `authors[].id` | Innerhalb der Frage eindeutige Antwortkennung, etwa `prout1890-1`. Bestehende IDs bleiben beim Umstellen, Korrigieren oder Ergänzen der Antworten unverändert. Neue Antworten erhalten neue, unbenutzte Kennungen. |
| `authors[].speciesScope` | Klassifikation dieser konkreten Aussage nach der zitierten Quelle. `[2]` oder `[2,3]` nennt die belegten Spezies. Bei unterschiedlichen Regeln getrennte Beiträge anlegen. `[]` kennzeichnet ausdrücklich speziesunabhängige Aussagen. Ohne Feld bleibt die Zuordnung offen. |
| `authors[].context` | Optionale, einzeln belegte Einordnung von Stilbezug und Aufgabenrahmen. `styles` enthält registrierte Stilkennungen, `reach` unterscheidet konkreten, ausdrücklich stilübergreifenden und noch nicht eingeordneten Stilbezug; `frame` benennt die Aufgabe. `evidence` enthält Grundlage, Fundstelle und Begründung. |
| `authors[].comparison` und `comparisonSources` | Für einen redaktionellen Vergleich die zusätzlich benötigten Werk-IDs in `comparisonSources` angeben. Bei einem Kommentar allein zur gewählten Quelle genügt `[]`. |
| `authors[].catalogue` | Optional. `true` kennzeichnet die Quellen-URL als Bibliotheksnachweis. Die Seite und das Beispiel stehen im Feld `locator`. |
| `authors[].kind` | Optional. `partitur` kennzeichnet eine redaktionelle Beobachtung im Notentext eines Komponisten. |
| `authors[].examples` | Optional. Liste der Kennungen aus dem zentralen Bildverzeichnis `ATLAS.examples`. So kann derselbe Ausschnitt mehrere Fragen belegen. |
| `relations` | Optionale Liste paarweiser Vergleiche innerhalb dieser Frage. `from` und `to` nennen zwei Antwort-IDs, `type` ist `contradiction`, `nuance` oder `context`, `note` erläutert den Unterschied. Jedes Paar nur einmal eintragen; beide Richtungen entstehen automatisch. |
| `reading` und `readingSources` | Optionaler Lesehinweis. `readingSources` enthält die dafür nötigen Werk-IDs. Eine quellenunabhängige Höraufgabe erhält `[]`. |
| `related` | Optional. Liste der Kennungen verwandter Fragen. |

Für eine Kontexteinordnung `styles`, `reach`, `frame` und `evidence` vollständig angeben. Die registrierten Stilkennungen sind `medieval`, `renaissance`, `baroque`, `classical-romantic` und `modern`. `reach: "specific"` braucht mindestens einen belegten Stilbezug, ohne damit eine ausschließliche Gültigkeit zu behaupten. `reach: "cross-style"` bezeichnet einen ausdrücklich stilübergreifenden Ansatz; die Liste `styles` kann leer bleiben oder belegte Bezugstraditionen nennen. `reach: "unclassified"` mit `styles: []` hält einen bereits gesicherten Aufgabenrahmen fest, während der Stilbezug noch offenbleibt.

`evidence.basis` ist `passage` für die konkrete Passage, `book` für den erklärten Lehrbuchrahmen oder `repertoire` für die redaktionelle Zuordnung anhand des untersuchten Repertoires. `evidence.locator` nennt die dafür maßgeblichen Seiten; `evidence.note` erklärt kurz, was die Zuordnung trägt. Bei einer Einordnung aus dem Buchrahmen sowohl dessen Fundstelle als auch die konkrete Passage berücksichtigen. Eine neue Ausgabe, ein neuer Autor oder ein leeres `speciesScope` rechtfertigen für sich keine Stilzuordnung. Ohne ausreichenden Beleg das Feld weglassen oder nur den belegten Aufgabenrahmen mit `reach: "unclassified"` festhalten.

```json
"context": {
  "styles": ["baroque"],
  "reach": "specific",
  "frame": "Freier Stil",
  "evidence": {
    "basis": "passage",
    "locator": "Kap. 14, S. 320–321, Bsp. 14.10",
    "note": "Neidhöfer und Schubert unterscheiden die Vorausnahme im freien Stil ausdrücklich vom strengen Stil und erläutern sie an Bachs Fuge BWV 890."
  }
}
```

Für eine neue Verbindung beide Belege mit ihrem Geltungsbereich prüfen. Die Erläuterung muss allein aus den beiden Antworten hervorgehen und in beiden Leserichtungen verständlich bleiben. Unterschiedliche Notenbeispiele oder zusätzliche Einzelheiten allein begründen keinen Widerspruch. Unterschiede zwischen Spezies, Stimmenzahlen oder Stilen ausdrücklich benennen. `from` und `to` identifizieren die konkreten Antworten verschiedener Autoren, nicht nur deren Namen oder Werke. So bleiben auch mehrere Beiträge desselben Lehrwerks zur selben Frage unterscheidbar.

```json
"relations": [
  {
    "from": "fux1725-1",
    "to": "gallon-bitsch1964-1",
    "type": "contradiction",
    "note": "Fux billigt das zweimal angeschlagene a in der Gegenstimme seiner zweistimmigen ersten Spezies. Noël-Gallon und Bitsch schließen genau diese unmittelbare Wiederholung für die zweistimmige Besetzung aus."
  }
]
```

Für ein neues Notenbild die Datei in `quellen/noten/` ablegen. Unter `ATLAS.examples` eine dauerhafte Kennung anlegen, beispielsweise `fux-cambiata`. Jeder Bilddatensatz enthält den relativen Pfad `image`, den Titel `title`, einen Alternativtext `alt`, den Lesehinweis `caption`, den Bildnachweis mit Rechten `credit` und den Link zur Originalseite `url`. Bei einem verlinkten Buchbeispiel tritt `kind: "buchbeispiel"` an die Stelle von `image` und `alt`. Die URL führt zum Notentext. Lokale Abbildungen zu einer Lehrbuchregel erhalten `kind: "leseuebung"`, redaktionelle Lesehilfen zu einer bestimmten Buchseite `kind: "leseanalyse"`. Für eine eigene Leseübung kann `catalogue: true` die URL als Bibliotheksnachweis zum zitierten Lehrwerk kennzeichnen. In der passenden Autorenposition genügt dann `"examples": ["fux-cambiata"]`.

Für ein weiteres Lehrbuch zuerst in `ATLAS.sources` einen Eintrag mit `id`, `name`, `title`, `group` und `url` anlegen. Eine kurze Kennung aus Kleinbuchstaben, Ziffern und Bindestrichen verwenden, etwa `kennan1999`. Bei mehreren Werken desselben Jahres ergänzt ein Titel- oder Bandkürzel die Kennung. Veröffentlichte IDs bleiben beim Korrigieren einer bibliografischen Angabe erhalten. Die Positionen unter `authors` verweisen über `source` auf dieselbe ID. So erscheint das Werk automatisch im Quellenverzeichnis. Für neue Themen ein Fragenobjekt mit einer neuen Kennung anlegen. Eine Frage mit leerer Vergleichsliste und ohne Beleg wird als offen angezeigt. „Verboten“ und „nicht relevant“ sind fachliche Aussagen und werden nur dort eingetragen, wo die Quelle sie tatsächlich macht.

Für die Quellenanordnung ergänzt `sortAuthor` einen expliziten Schlüssel mit dem Nachnamen zuerst, beispielsweise `Neidhöfer, Christoph; Schubert, Peter`. Die Reihenfolge der Mitautoren folgt der Quellenangabe. Die Datierung trennt zwei Ebenen:

- `editionYear`, optional `editionLabel` und `editionNote`, beschreiben die **verwendete Ausgabe**. Ein unbekanntes Druckjahr bleibt `null`; eine qualifizierte Zuordnung wie `2004 (zugeordnet)` bleibt erhalten.
- `firstVersion` beschreibt die **erste Fassung des Werks**: `year` (Ganzzahl oder `null`), optional `endYear` für eine Spanne, `label` für die angezeigte Datierung, `kind`, eine deutsche Erläuterung `note` und `evidence` mit überprüften `{ label, url }`-Nachweisen. `kind` ist `publication` (Erstausgabe), `manuscript`, `teaching`, `copyright`, `documented` (früheste belegte Fassung) oder `undated`. Die Qualifikation gehört bei nicht sicher publizierten Erstfassungen auch in `label`.

Sortierung und Zeitleiste lesen ausschließlich `firstVersion`. Bei einer Spanne dient `year` als untere und `endYear` als obere Grenze; der Punkt steht an der unteren Grenze und die gestrichelte Strecke reicht bis zur oberen. Ein fehlendes Erstfassungsjahr wird weder aus der Ausgabe noch aus Werkkennungen, Titeln, Autorenbiografien oder URLs abgeleitet. Die früheren Felder `publicationYear`, `publicationLabel` und `publicationNote` wurden ohne Verlust ihrer Editionsangaben in die eindeutigen `edition…`-Felder überführt. Vorhandene Titel, Kennungen und Seitenbelege bleiben erhalten. Eine Erstausgabe in anderer Sprache oder unter anderem Titel ist in `note` zu erläutern; eigenständige Fortsetzungsbände behalten ihr eigenes Datum.

Die Wikipedia-Ziele stehen ebenfalls in `atlas-data.js`, unter `ATLAS.people`. Pro Person gibt es `name`, `aliases` (etwa den Nachnamen) und `wikipedia` mit einer geprüften Biografie-URL. Ohne verifizierten Artikel bleibt `wikipedia: null`; insbesondere wird Peter Schubert nicht mit Franz Schubert verwechselt. Vollständige Namen haben Vorrang vor Nachnamen, damit etwa Louis B. Prout sein eigenes Ziel behält. `exclude` nimmt feste Begriffe wie „Bach-Gesellschaft“ von der Verlinkung aus. Neue Nennungen in den Texten erhalten ihren Link automatisch; HTML-Markup in den Daten ist nicht nötig. Deutschsprachige Artikel sind bevorzugt, bei Bedarf führt der Link zu einer anderen Sprachfassung. Die Zuordnung liegt lokal und erfordert beim Öffnen oder Filtern des Atlas keine Netzwerkabfrage. Fragenlinks und Bedienelemente behalten ihre eigene Funktion.

Mit `node --test tests/*.test.cjs` lassen sich Werkkennungen, Quellenverweise, bibliografische Sortierschlüssel, teilbare Fragen- und Antwortlinks, Spezies- und Kontextzuordnungen, gültige und beidseitige Vergleichspaare sowie die Auflösung von Autorennamen prüfen. Die zusätzlichen DOM-Integrationstests für die Zeitleiste nutzen `jsdom`, sofern es über die normale Node-Modulauflösung verfügbar ist; andernfalls werden sie ausdrücklich als übersprungen gemeldet. Das Modul ist ausschließlich eine Entwicklungshilfe, keine Abhängigkeit des Atlas.

## Redaktionelle Beiträge

Leserinnen und Leser können zu einer Frage **Ergänzung oder Korrektur vorschlagen** öffnen, ihre Formulierung mit Werk, Ausgabe und Fundstelle eintragen und einen GitHub-Issue-Entwurf öffnen. Die endgültige Übermittlung erfolgt auf GitHub. Für Beiträge ohne Konto kann man den Text kopieren und selbst an die Redaktion weitergeben. Die Redaktion prüft Fundstelle und Geltungsbereich und übernimmt angenommene Vorschläge in die Datendatei.

## Dateien

- `index.html` und `atlas.css` enthalten Seitenstruktur und Gestaltung.
- `atlas.js` stellt Suche, Filter und verlinkbare Fragenansichten bereit.
- `quellen.html` und `quellen.js` enthalten das Quellenverzeichnis mit der Werkauswahl.
- `source-order.js` ordnet das Quellenverzeichnis nach Quellenart, Autor oder belegter erster Fassung und liest dessen Ansichtsparameter.
- `source-timeline.js` zeichnet die datierte Zeitleiste und verbindet ihre Punkte mit den Quellenkarten.
- `unterschiede.html` und `unterschiede.js` zeigen das filterbare Verzeichnis der paarweisen Unterschiede.
- `disagreements-model.js` bildet eindeutige Vergleichskennungen und liest die Filter aus der Adresse.
- `source-selection.js` liest und schreibt die gemeinsamen URL-Parameter für Quellen.
- `author-links.js` verlinkt registrierte Personennamen in der angezeigten Ansicht.
- `answer-relations.js` löst paarweise Vergleiche auf und berücksichtigt Quellen sowie die Spezies des Linkziels.
- `answer-context.js` prüft die Kontextangaben und stellt Stilbezug, Aufgabenrahmen und Begründung auf beiden Vergleichsseiten dar.
- `atlas-data.js` enthält Fragen, Antworten und Quellen.
- `quellen/noten/` enthält die im Atlas verwendeten Notenbilder.
- `quellen/handout.pdf` enthält die drei Originalseiten des Unterrichtshandouts.

## [ToDo](https://trello.com/c/QGWcdcLt/123-counterpoint)
