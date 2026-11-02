// Redaktion: Ein Eintrag pro Frage. Die fünf Werte jeder Reihe stehen für die Spezies I bis V.
const ATLAS = {
  "topics": [
    {
      "id": "sprungfolge",
      "title": "Dürfen zwei Sprünge in dieselbe Richtung gehen?",
      "group": "Melodieführung",
      "tags": [
        "Dreiklang",
        "Arpeggio",
        "Sprungkette",
        "gleichgerichtete",
        "Sprünge"
      ],
      "comparisons": [
        {
          "label": "Mehrere Sprünge in gleicher Richtung",
          "modal": "Vermeiden, besonders große",
          "tonal": "Nur erlaubt, wenn sie einen Dreiklang umreißen",
          "hindemith": "Nicht durch Dreiklang legitimiert, sondern durch Intervalllogik und resultierende Klangwirkung",
          "comment": "Tonal: Dreiklangskriterium; Hindemith: Intervallkriterium"
        }
      ],
      "species": {
        "label": "Mehrere Sprünge in gleicher Richtung",
        "modal": [
          "Vermeiden (besonders große)",
          "Vermeiden",
          "Vermeiden",
          "Vermeiden",
          "Lange Sprungketten vermeiden"
        ],
        "tonal": [
          "Nur erlaubt, wenn Dreiklang umrissen wird",
          "Nur erlaubt, wenn Dreiklang umrissen wird",
          "Nur erlaubt, wenn Dreiklang umrissen wird",
          "Generell vermeiden",
          "Dreiklangsprinzip gilt weiterhin"
        ]
      },
      "related": [
        "dreiklang",
        "sprungausgleich"
      ],
      "authors": [
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. II, §§ 11–15, S. 8–9, Bsp. 15–17 · einzelne Melodie in Dur",
          "text": "Bei mehreren Sprüngen in derselben Richtung fasst das Ohr die Töne nach Goetschius zu einem Akkord zusammen. Neben Dreiklängen können dies auch der Dominantsept- und der Dominantnonakkord sein. Wechselt die Richtung, beurteilt er die Sprünge einzeln.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=21",
          "examples": [
            "goetschius-15a-sprungfolge",
            "goetschius-16-sprungfolge"
          ]
        },
        {
          "name": "John Rothgeb",
          "work": "The Cantus Firmus (Music 103, 1998)",
          "locator": "Regeln 8 und 13 · Cantus firmus in Dur",
          "text": "Für seinen Cantus firmus vermeidet Rothgeb zwei gleichgerichtete Sprünge nach Möglichkeit. Drei aufeinanderfolgende Töne dürfen zusammen weder eine Septime noch eine größere Dissonanz umspannen.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Cantus_Firmus.html"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, § 28 C–D, S. 19 · mehrere aufeinanderfolgende Töne",
          "text": "Überbrücken drei Töne eine Septime oder None, muss eine der beiden Bewegungen ein Schritt sein. Bei der None zählt auch der Rhythmus. In Ganzen und Synkopen gilt sie als gut, in Halben als möglich. In Vierteln soll man sie möglichst meiden.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=2"
        }
      ],
      "reading": "Prüfe dieselben Töne einmal als Linie und einmal als Akkordbrechung. Goetschius kann mit seinem Akkordkriterium auch eine Sprungkette erklären, die über den Dreiklang des Handouts hinausgeht."
    },
    {
      "id": "anfangsintervall",
      "title": "Darf ich mit einer Quinte oder Oktave beginnen?",
      "group": "Beginn und Kadenz",
      "tags": [
        "Anfangsintervall",
        "Einsatz",
        "Einklang",
        "Prime",
        "Beginn",
        "cantus",
        "firmus",
        "oben",
        "unten"
      ],
      "comparisons": [],
      "related": [
        "kadenz",
        "einklang"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 46–49 · zweistimmig, erste Spezies",
          "text": "Über dem d des Cantus firmus billigt Aloysius den Anfang auf a, also mit der Oberquinte. Als Josephus unter demselben d mit g beginnt, ersetzt Aloysius die Unterquinte durch die Oktave. So macht der Bass den Modus des Cantus firmus bereits am Anfang hörbar.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118096",
          "examples": [
            "fux-anfang-oberstimme",
            "fux-anfang-unterstimme"
          ]
        },
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Beginning, Regel 1 · zweistimmig, erste Spezies",
          "text": "Über dem Cantus firmus stehen zu Beginn Einklang, reine Quinte und Oktave zur Wahl. Unter dem Cantus firmus lässt Rothgeb nur Einklang und Oktave zu.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        },
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 28, S. 173–174, viertes Beispiel · imitatorischer Einsatz",
          "text": "Für den gemeinsamen Beginn nennt Zarlino Einklang, Quinte oder Oktave und deren Erweiterungen. Er versteht das als Brauch mit Ausnahmen. Bei der Imitation unterscheidet er die Entfernung der Einsatztöne vom ersten Zusammenklang. Im vierten Beispiel liegen die Einsatztöne F und C eine Quarte auseinander. Beim Eintritt des C singt die erste Stimme bereits E. Der erste Zusammenklang ist also eine große Terz.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch328",
          "examples": [
            "zarlino-anfang"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. IV, § 123, S. 62 und §§ 140–141, S. 66–67 · zweistimmig, erste Spezies",
          "text": "Auch eine Terz darf eröffnen. Sie lässt Dur oder Moll erkennen. Prout verlangt zu Beginn die Tonika in Grundstellung, außer wenn die gegebene Stimme auf der Dominante einsetzt. In zwei Aussetzungen desselben Themas demonstriert er den Terzbeginn.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=66",
          "examples": [
            "prout-beginn"
          ]
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. IV, § 47, S. 20, Bsp. 41 · vollständige zweistimmige Phrase",
          "text": "Für eine ganze Phrase empfiehlt Goetschius verschiedene Einsatzzeitpunkte, damit beide Linien selbstständiger wirken. Beim ersten Ton der Phrase kann also zunächst eine Stimme allein stehen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=32"
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Erste Gattung, S. 145–146 · zweistimmig, Lage des Cantus firmus",
          "text": "Bellermann bevorzugt Einklang oder Oktave. Steht der Cantus firmus unten, kann die Gegenstimme auch auf der Oberquinte beginnen. Unter einem oben liegenden Cantus firmus bleiben Einklang und Oktave.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=174"
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Regel I, Bsp. 9, S. 8 · zweistimmig, erste Spezies",
          "text": "Cherubini begrenzt den ersten Zusammenklang auf Quinte, Oktave oder Einklang. Für den Schluss lässt er Einklang und Oktave zu. Bei weiter Lage zählt die Duodezime als Quinte und die Doppeloktave als Oktave.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=12",
          "examples": [
            "cherubini-anfang"
          ]
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil II, Kap. I, S. 59, zu § 57 · zwei Stimmen, erste Spezies",
          "text": "Der Bass beginnt auf der Tonika. Oben kann die Tonika oder die Dominante stehen. In C-Dur sind so c–c und c–g möglich, jeweils auch in anderer Oktavlage. Der Schluss verlangt in beiden Stimmen die Tonika.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=1",
          "comparison": "Prout lässt im zweistimmigen Note-gegen-Note-Satz auch die Terz als Anfang zu. Noël-Gallon und Bitsch beschränken dieselbe Aufgabe auf die erste und fünfte Stufe über dem Grundton.",
          "examples": [
            "gallon-bitsch-nr-1-2"
          ]
        }
      ],
      "reading": "Liegt der Cantus oben oder unten? Beginnen die Stimmen zusammen? Bei Fux entscheidet die Lage der Gegenstimme über die Anfangsquinte. Zarlino trennt bei der Imitation das Einsatzintervall vom ersten Zusammenklang. Prout hört am Anfangsterzklang bereits das Tongeschlecht."
    },
    {
      "id": "leittonaufloesung",
      "title": "Muss der Leitton immer zur Tonika aufsteigen?",
      "group": "Beginn und Kadenz",
      "tags": [
        "Auflösung",
        "Leiteton",
        "Leittonauflösung",
        "Kadenz",
        "Tonika",
        "Skalenstufe"
      ],
      "comparisons": [],
      "related": [
        "sprung-zum-leitton",
        "kadenz-oberstimme"
      ],
      "authors": [
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. I, §§ 6–9, S. 5–6, Bsp. 7–9 · einzelne Melodie in Dur",
          "text": "Die siebte Stufe strebt aufwärts. In C-Dur lässt Goetschius außer h–c auch den Terzsprung h–d zu. Nach einem c kann das h dagegen Teil der absteigenden Linie c–h–a–g sein.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=18",
          "examples": [
            "goetschius-09-leitton"
          ]
        },
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Ending, Regel 7 · zweistimmig, erste Spezies, Kadenz",
          "text": "Endet der Cantus firmus mit der zweiten und ersten Stufe, führt Rothgeb die Gegenstimme über die siebte zur ersten Stufe. Das beschreibt die beiden letzten Töne der Übung.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 51–52, Bsp. 73–74 · aufwärts aufgelöster Vorhalt",
          "text": "Piston erörtert den übergebundenen Leitton als Fall, in dem die Aufwärtsauflösung besonders naheliegt. Dasselbe gilt für chromatisch erhöhte Töne. Bei anderen Vorhaltstönen betrachtet er die Aufwärtsauflösung als Ausnahme.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, § 30, S. 20 · Akkordtöne und melodische Zusatztöne",
          "text": "Ist der Leitton ein Akkordton, hat er keine vorgeschriebene Fortsetzung. Er kann die Tonika also auch verfehlen. Seine Rolle in einer bestimmten Schlussformel ist davon zu unterscheiden. Für Durchgang, Wechselnote und Vorhalt verlangen die Autoren dagegen schrittweise Stimmführung.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=3"
        }
      ]
    },
    {
      "id": "konsonanz",
      "title": "Wann müssen die Stimmen konsonant zusammenklingen?",
      "group": "Dissonanz",
      "tags": [
        "Konsonanz",
        "Metrum",
        "Taktanfang",
        "vertikale",
        "Intervalle"
      ],
      "comparisons": [
        {
          "label": "Konsonanz auf betonten Zeiten",
          "modal": "S1: nur Konsonanzen; S2/S3: Konsonanz auf schweren Zeiten; S4: Dissonanz nur als vorbereitete Suspension",
          "tonal": "Gleiche Grundregel; in späteren Stufen etwas breiteres NCT-Vokabular",
          "hindemith": "Konsonanz/Dissonanz wird nach Intervallrang bewertet, nicht primär nach Zählzeit",
          "comment": "Beat-Logik zentral in Spezies, weniger zentral bei Hindemith"
        }
      ],
      "species": {
        "label": "Sind alle Intervalle konsonant?",
        "modal": [
          "Ja (nur Konsonanzen erlaubt)",
          "Nur auf betonten Zählzeiten",
          "Nur auf Taktanfängen",
          "Dissonanz auf betonter Zeit nur als vorbereitete Suspension",
          "Gemischt, aber Spezieslogik gilt"
        ],
        "tonal": [
          "Ja",
          "Nur auf betonten Zählzeiten",
          "Nur auf Taktanfängen",
          "Suspension erlaubt Dissonanz",
          "Gemischt, aber Spezieslogik gilt"
        ]
      },
      "related": [
        "betonte-dissonanz",
        "unbetonte-dissonanz"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Regeln 3–4 · erste Spezies, zwei Stimmen",
          "text": "Die reine Quarte zählt im zweistimmigen Zusammenklang als Dissonanz. Unter den erlaubten Intervallen bevorzugt Rothgeb im Verlauf die unvollkommenen Konsonanzen wegen ihrer Beweglichkeit.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber I, Caput postremum, S. 41, und Liber II, Exercitium I, Lectio I, S. 45–46 · erste Spezies",
          "text": "Note gegen Note erklingen ausschließlich Konsonanzen. Einklang, reine Quinte und Oktave gelten als vollkommen, Terzen und Sexten als unvollkommen. Im Inneren der zweistimmigen Übung wünscht Fux mehr unvollkommene als vollkommene Konsonanzen, damit der Satz klanglich ausgefüllt bleibt.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118094"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. IV, §§ 36–40, S. 16–17 und Kap. VI, §§ 51–55, S. 24–25 · zwei gleich rhythmisierte Stimmen",
          "text": "Die erste Übungsstufe verwendet Terzen, Sexten und Oktaven samt ihren Erweiterungen bzw. dem Einklang. Später erlaubt Goetschius auch den vertikalen Tritonus zwischen der vierten und siebten Stufe des Dominantseptakkords.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=37",
          "examples": [
            "goetschius-45-tritonus"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. VII, S. 124–125 · Quarte in zwei und drei Stimmen",
          "text": "Die reine Quarte über dem Bass behandelt Piston als Dissonanz. Zwischen zwei Oberstimmen kann dieselbe Quarte konsonant wirken. Spiele zum Vergleich zuerst e–a und füge darunter ein c hinzu. Der Abstand der beiden oberen Töne bleibt gleich.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, § 54, S. 30 · Quarte und verminderte Quinte im mehrstimmigen Satz",
          "text": "Eine reine oder übermäßige Quarte und eine verminderte Quinte können zwischen zwei Oberstimmen aus Akkordtönen bestehen. Über dem Bass entstehen sie im Regelfall durch melodische Zusatztöne. Für die verminderte Quinte gibt es ab vier Stimmen eine Ausnahme im vorletzten Takt, wenn der Leitton im Bass durch einen Vorhalt verzögert wird.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=8"
        }
      ]
    },
    {
      "id": "melodische-intervalle",
      "title": "Welche Intervalle darf eine Stimme springen?",
      "group": "Melodieführung",
      "tags": [
        "Tritonus",
        "Septime",
        "Sexte",
        "Oktave"
      ],
      "comparisons": [
        {
          "label": "Melodische Tritonus- oder Septimensprünge",
          "modal": "Verboten",
          "tonal": "Verboten",
          "hindemith": "Nicht als pauschales Spezies-Tabu formuliert, aber klanglich stark zu prüfen",
          "comment": "Hindemith kennt keine klassische ‚Verbotsliste‘ im Speziessinn"
        }
      ],
      "species": {
        "label": "Erlaubte melodische Intervalle",
        "modal": [
          "Sekunde bis Sexte; reine Oktave; kein Tritonus oder Septimensprung",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Sekunde bis Sexte; reine Oktave; kein Tritonus oder Septimensprung",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ]
      },
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Cantus Firmus (Music 103, 1998)",
          "locator": "Regeln 6–8 · Cantus firmus in Dur",
          "text": "Die reine Quarte ist als melodischer Sprung möglich. Dissonante Sprünge und Sprünge über die Oktave schließt Rothgeb aus.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Cantus_Firmus.html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 51–53, und Lectio II, S. 59–60 · gesungener Zweistimmensatz",
          "text": "Aloysius beanstandet den melodischen Tritonus und den Sprung einer großen Sexte mit Blick auf die Singbarkeit. Eine kleine Sexte oder eine Oktave nennt er später ausdrücklich als Ausweg, wenn die Stimmen in der zweiten Spezies so nahe liegen, dass Gegenbewegung schwer fällt.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118102"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. II, §§ 17–20, S. 20–21 · Melodieführung im strengen Satz",
          "text": "Die verminderte Quarte, Quinte und Septime dürfen gesprungen werden, wenn die Stimme danach in den übersprungenen Raum zurückkehrt. Auch eine aufsteigende kleine Septime ist möglich. Sie führt vom Dominantgrundton zur vierten Stufe, die anschließend einen Schritt fällt.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=25",
          "examples": [
            "prout-septimensprung"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Kap. VIII, S. 108–110 · Melodie im strengen Vokalsatz und Repertoirevergleich",
          "text": "In Bellermanns Tabelle sind kleine Sexte und Oktave nur aufwärts zugelassen. Die große Sexte fehlt unter den erlaubten Sprüngen. Bei Palestrina zeigt er dennoch einen Tenor, der nach einer Kadenz mit einer großen Sexte einen neuen Abschnitt eröffnet.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=137",
          "examples": [
            "bellermann-109-sexte"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. I, S. 14 und 19, Bsp. 1 · instrumentale Melodie",
          "text": "Im Adagio von Beethovens Quartett op. 18 Nr. 1 zählt Piston fünf Sprünge in einer sonst überwiegend schrittweisen Phrase. Dazu gehört die fallende verminderte Septime b–cis. Sein Beispiel stammt aus dem Streichquartett und zeigt den Spielraum einer Instrumentalstimme.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-beethoven-op18-1-adagio"
          ],
          "comparison": "Rothgebs Verbot dissonanter Sprünge gilt dem selbst geschriebenen Cantus firmus. Die Beethoven-Stelle zeigt, welche andere Aufgabe eine instrumentale Phrase dem Intervall stellen kann."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, §§ 25, 27, S. 18–19 · einfacher strenger Kontrapunkt",
          "text": "Bis zur kleinen Sexte sind große, kleine und reine Intervalle erlaubt, darüber die reine Oktave. In Achteln muss die Stimme schrittweise gehen. Erst ab sechs Stimmen kommt die große Sexte als seltener Sprung hinzu.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=1"
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Nr. 2, Anmerkung S. 1 und Varianten a/b auf S. 2 (Remeš 2021, S. 2)",
          "text": "An einem verminderten Dreiklang zeigt Förster, wie eine einzige Stimme über die Qualität des Anschlusses entscheidet. In der verworfenen Fassung (b) steigt g nach ais, eine übermäßige Sekunde. In (a) geht das g bei derselben Bassfolge nach fis.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=4",
          "examples": [
            "foerster-vermindert"
          ]
        }
      ],
      "related": [
        "generalbass-sextakkord"
      ]
    },
    {
      "id": "sprungausgleich",
      "title": "Wie führe ich die Melodie nach einem großen Sprung weiter?",
      "group": "Melodieführung",
      "tags": [
        "Terz",
        "Gegenbewegung",
        "Ausgleich"
      ],
      "comparisons": [
        {
          "label": "Großer melodischer Sprung (> Terz)",
          "modal": "Durch Schritt in Gegenbewegung ausgleichen",
          "tonal": "Durch Schritt in Gegenbewegung ausgleichen (oft explizit formuliert)",
          "hindemith": "Kein fixes „Ausgleichsgebot“, aber melodische Kohärenz + Intervallwirkung entscheidend",
          "comment": "Hier zeigt sich Unterschied: Regel vs. Bewertung nach Wirkung"
        }
      ],
      "species": {
        "label": "Nach Sprung größer als Terz",
        "modal": [
          "Durch Schritt in Gegenbewegung ausgleichen",
          "Durch Schritt in Gegenbewegung ausgleichen",
          "Schnell ausgleichen; Sprungketten vermeiden",
          "Sprünge selten; sorgfältig in Konsonanz auflösen",
          "Sprung durch Schrittbewegung kompensieren"
        ],
        "tonal": [
          "Durch Schritt in Gegenbewegung ausgleichen",
          "Durch Schritt in Gegenbewegung ausgleichen",
          "Durch Schritt in Gegenbewegung ausgleichen",
          "Durch Suspensionslogik eingeschränkt",
          "Gleiches Prinzip"
        ]
      },
      "related": [
        "sprungfolge",
        "dreiklang"
      ],
      "authors": [
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (G. Schirmer, 1910)",
          "locator": "Kap. II, §§ 16–17, S. 9–10 · einzelne Melodie",
          "text": "Nach einem Sprung über eine Terz kehrt die Melodie in der Regel um. Bleibt die Harmonie gleich, darf sie in derselben Richtung weitergehen.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/c/c7/IMSLP454481-PMLP738672-G-Exercises_in_elementary_counterpoint.pdf"
        },
        {
          "name": "John Rothgeb",
          "work": "The Cantus Firmus (Music 103, 1998)",
          "locator": "Regel 14 · Cantus firmus in Dur",
          "text": "Folgt auf einen Sprung ein Schritt, bevorzugt Rothgeb den Richtungswechsel. Je größer der Sprung, desto stärker die Präferenz.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Cantus_Firmus.html"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. II, § 22, S. 22 · Melodieführung im strengen Satz",
          "text": "Einen Sprung über eine Sexte hinaus soll die Stimme sowohl vor als auch nach dem Sprung in Gegenrichtung umgeben. Bei einer Sexte hält Prout denselben Richtungswechsel oft für ratsam. Seine Schwelle liegt damit höher als im Handout.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=26",
          "examples": [
            "prout-sprungausgleich"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. I, S. 19–20, Bsp. 13–16 · instrumentale Melodie",
          "text": "Nach Septim- und Oktavsprüngen beobachtet Piston fast immer eine Umkehr der Richtung. In Beispiel 14 umrahmt Corelli einen aufsteigenden Oktavsprung durch absteigende Schritte. Beispiel 16 aus Bruckners Vierter Symphonie führt Piston ausdrücklich als Ausnahme an.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, §§ 26, 28 D, S. 18–19 · Taktübergang und Oktavsprung",
          "text": "Vor einem Sprung über den Taktstrich soll die Stimme ihre Richtung wechseln, besonders bei Vierteln. Für Quarte und Quinte gibt es seltene Ausnahmen. Die Oktave soll möglichst von beiden Seiten durch Gegenbewegung ausgeglichen werden.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=1"
        }
      ]
    },
    {
      "id": "dreiklang",
      "title": "Welche Rolle spielt der Dreiklang bei melodischen Sprüngen?",
      "group": "Melodieführung",
      "tags": [
        "Dreiklangsumriss",
        "Arpeggio",
        "Brechung"
      ],
      "comparisons": [],
      "species": {
        "label": "Sprung mit Dreiklangsumriss",
        "modal": [
          "Kein zentrales Prinzip",
          "Nicht betont",
          "Nicht betont",
          "Nicht relevant",
          "Nicht leitend"
        ],
        "tonal": [
          "Erwünscht bei aufeinanderfolgenden Sprüngen",
          "Erwünscht",
          "Erwünscht",
          "Weniger relevant wegen Suspensionsstruktur",
          "Erwünscht in freierer Schreibweise"
        ]
      },
      "related": [
        "sprungfolge",
        "sprungausgleich"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VI, §§ 203–205, S. 86–87 · zweistimmig, dritte Spezies",
          "text": "Im Vier-gegen-eins können die drei Noten nach dem Taktbeginn Akkord- oder Durchgangstöne sein. Eine bloße Dreiklangsbrechung hält Prout meist für melodisch schwach. Er empfiehlt eine Mischung aus Akkordtönen und schrittweiser Verbindung.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=90"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. II, §§ 11–14, S. 8, Bsp. 12–15 · einzelne Melodie in Dur",
          "text": "Für weite Sprünge fragt Goetschius, ob beide Töne zu einem der in Bsp. 12 aufgeführten Akkorde gehören. Bei mehreren Sprüngen in derselben Richtung müssen alle Töne zu einem einzigen solchen Akkord passen. Dazu zählen auch der Dominantsept- und der Dominantnonakkord.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=20",
          "examples": [
            "goetschius-12-akkorde"
          ]
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, § 25, S. 18 · Sprünge in einer Einzelstimme",
          "text": "Ein auf- oder absteigendes Arpeggio soll aus der Gesangslinie ausscheiden. Die Notenzeile darunter zeigt, wie sich dieselben Akkordtöne durch eine andere Reihenfolge mit Richtungswechsel verbinden lassen. Diese gebrochene Form dulden die Autoren ausnahmsweise.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=1",
          "comparison": "Goetschius prüft, ob gleichgerichtete Sprünge einen Akkord umreißen können. Noël-Gallon und Bitsch beanstanden die gewöhnliche Arpeggiofigur gerade wegen ihrer melodischen Gestalt."
        }
      ]
    },
    {
      "id": "sprung-zum-leitton",
      "title": "Darf ich den Leitton anspringen?",
      "group": "Melodieführung",
      "tags": [
        "Leitton",
        "Leittonbehandlung",
        "Sprung",
        "Kadenz"
      ],
      "comparisons": [],
      "species": {
        "label": "Sprung zum Leitton",
        "modal": [
          "Meist vermeiden außer in Kadenzformel",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Erlaubt bei korrekter Auflösung",
          "Erlaubt bei korrekter Auflösung",
          "Erlaubt",
          "Erlaubt",
          "Erlaubt"
        ]
      },
      "related": [
        "leittonaufloesung",
        "kadenz-oberstimme"
      ],
      "authors": [
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. II, §§ 18–19, S. 10, Bsp. 19–20 · einzelne Melodie in Dur",
          "text": "Ein Abwärtssprung auf die siebte Stufe lässt sich durch die anschließende Aufwärtsauflösung ausgleichen. Führt ein weiter Sprung von unten zum Leitton, geraten Richtungswechsel und Auflösung in Konflikt. Goetschius gibt der Auflösung meist den Vorrang.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=22",
          "examples": [
            "goetschius-19-leittonsprung"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Kap. IX, S. 124–125 · siebte Stufe unmittelbar vor dem modalen Schluss",
          "text": "Den Aufwärtssprung auf die siebte Stufe vor dem Schluss verwirft Bellermann, besonders bei erhöhter Stufe. Von oben lässt er einen Terzsprung auf die siebte Stufe zu. Größere Sprünge sollen auch aus dieser Richtung unterbleiben.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=152"
        }
      ]
    },
    {
      "id": "unbetonte-dissonanz",
      "title": "Welche Dissonanzen sind auf unbetonter Zeit möglich?",
      "group": "Dissonanz",
      "tags": [
        "Durchgang",
        "Nebennote",
        "Ausweichnote",
        "leicht",
        "schwach"
      ],
      "comparisons": [],
      "species": {
        "label": "Dissonanz auf unbetonter Zeit",
        "modal": [
          "Nicht relevant",
          "Nur Durchgang",
          "Durchgang + Nebennote (je nach Schule)",
          "Nur Suspension",
          "Alle spezienüblichen Dissonanzen, aber kontrolliert"
        ],
        "tonal": [
          "Nicht relevant",
          "Durchgang + weitere NCTs (ohne gebundene)",
          "Durchgang, Nebennote, Ausweichnote möglich",
          "Suspension",
          "Breiteres NCT-Repertoire"
        ]
      },
      "related": [
        "betonte-dissonanz",
        "konsonanz"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Third Species of Counterpoint (Music 103, 1995)",
          "locator": "Regeln 4–6 · dritte Spezies, zwei Stimmen",
          "text": "Nach der ersten, konsonanten Viertelnote kommen Durchgänge und Wechselnoten infrage. Zwei eigens beschriebene Figuren erweitern den Vorrat um die doppelte Wechselnote und die Nota cambiata.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Third_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio II, S. 56 · zweite Spezies",
          "text": "Im Zweierschlag darf die leichtere Hälfte als Durchgang dissonieren. Dazu müssen beide Schritte zusammen eine Terz ausfüllen. Ein schrittweiser Weg vom Ausgangston weg und wieder zu ihm zurück erfüllt diese Bedingung nicht.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118105"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. VII, §§ 71–72, S. 32–33, Bsp. 59–60 · tonale Diminution zu zwei oder drei Noten je Schlag",
          "text": "Eine akkordfremde Nebennote geht gewöhnlich schrittweise weiter. Gehen obere und untere Nebennote unmittelbar ineinander über, lässt Goetschius den Terzsprung zu, sofern ihr gemeinsamer Bezugston folgt.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=45",
          "examples": [
            "goetschius-60-nebennoten"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Regel X, Bsp. 32, S. 12 · zweistimmig, zweite Spezies",
          "text": "Auf der zweiten Takthälfte darf eine Dissonanz erscheinen, wenn sie schrittweise zwischen zwei Konsonanzen hindurchführt. In Beispiel 32 stellt Cherubini dem Gerüstsatz dieselben Stimmen mit eingefügtem Durchgang gegenüber.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=16",
          "examples": [
            "cherubini-durchgang"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 55–56, Bsp. 80–81 · Verzierung einer melodischen Linie",
          "text": "Eine Wechselnote entfernt sich schrittweise vom Bezugston und kehrt zu ihm zurück. Bei einer Échappée geht die Linie schrittweise hinaus und springt zum Ziel. Beide Wege lassen sich am Rhythmus und an der Fortsetzung unterscheiden.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. V, §§ 66–67, S. 35 · Durchgänge und Wechselnoten",
          "text": "Auf dem leichten Schlag oder der leichten Unterteilung erlauben die Autoren steigende und fallende Durchgänge sowie reguläre obere und untere Wechselnoten. Treffen sie mit bewegten Tönen anderer Stimmen zusammen, bevorzugen die Autoren Gegenbewegung.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=3"
        }
      ]
    },
    {
      "id": "betonte-dissonanz",
      "title": "Darf eine Dissonanz auf eine betonte Zeit fallen?",
      "group": "Dissonanz",
      "tags": [
        "Synkope",
        "Vorhalt",
        "schwer",
        "stark",
        "Zählzeit"
      ],
      "comparisons": [],
      "species": {
        "label": "Dissonanz auf betonter Zeit",
        "modal": [
          "Verboten",
          "Verboten",
          "Verboten",
          "Nur als vorbereitete Suspension",
          "Nur vorbereitete Dissonanz"
        ],
        "tonal": [
          "Verboten",
          "Verboten (evtl. erweiterte Lehrmeinungen)",
          "Generell verboten",
          "Nur Suspension",
          "Kontrolliert, methodenabhängig"
        ]
      },
      "related": [
        "konsonanz",
        "unbetonte-dissonanz",
        "harmonischer-rhythmus"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio IV, S. 69–71 · vierte Spezies, Cantus firmus unten",
          "text": "In der vierten Spezies erreicht eine konsonant vorbereitete Oberstimme den schweren Taktteil durch Liegenbleiben. Wird sie dort zur Septime, löst sie sich abwärts in die Sexte auf. Zur selben Gruppe gehören bei Fux auch die Auflösungen 4–3 und 9–8.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118119",
          "examples": [
            "fux-vorhalt"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Regel X, S. 12 und Bsp. 48 mit Erläuterung, S. 15 · zweistimmig, zweite Spezies",
          "text": "Eine Konsonanz ist auf der schweren Takthälfte der Normalfall. In Beispiel 48 setzt Cherubini bewusst einen Durchgang auf die Eins. Mit dem Stern kennzeichnet er die Stelle, an der ihm eine flüssigere Melodie die Ausnahme rechtfertigt. Prout greift genau diese Stelle später in § 168 auf.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=21",
          "examples": [
            "cherubini-akzent"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. V, §§ 168–169, S. 75 und Kap. VI, § 203, S. 86 · zweistimmig, zweite und dritte Spezies",
          "text": "Prout gestattet in der zweiten Spezies ausnahmsweise einen betonten Durchgang, wenn dadurch die Linie besser wird. Der Akkordton folgt dann auf der zweiten Takthälfte. Im Vier-gegen-eins lehnt er dieselbe Ausnahme ausdrücklich ab.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=79",
          "examples": [
            "prout-betonter-durchgang"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Dritte Gattung, S. 161, zweites Notenbeispiel · vier Viertel gegen eine Ganze",
          "text": "Zunächst sollen das erste und das dritte Viertel konsonieren. Nach Übung dieser strengeren Form darf für einen flüssigen Verlauf auch das dritte Viertel eine Durchgangsdissonanz sein, sofern das zweite und das vierte konsonieren.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=189"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. VII, §§ 64–67, S. 30–31, Bsp. 54–56 · zweistimmige tonale Diminution",
          "text": "Der Akzent allein entscheidet bei Goetschius nicht, welches Gewicht eine Note hat. Auch auf dem betonten Teil des Schlags kann ein akkordfremder Ton stehen. In Bsp. 56 erscheinen Nebennoten auf dem Schlag und weichen dann dem tragenden Akkordton.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=42"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 46–49, Bsp. 62–69 · Appoggiatura und Durchgang",
          "text": "Eine Appoggiatura hat melodisches Gewicht. Ein Durchgang kann auf die Eins fallen und dennoch unbetont klingen. Piston prüft dafür die hörbare Phrasierung.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. V, § 66, S. 35 · Beispiele unter dem ersten Notensystem",
          "text": "Dauert dieselbe Harmonie zwei Takte, kann ein Durchgang oder eine Wechselnote auf der Eins des zweiten Takts stehen. In den beiden bezeichneten Beispielen darf ein Durchgang auf schwerer Zeit außerdem einen Vorhalt begleiten. Die beiden betreffenden Linien gehen schrittweise in Gegenbewegung.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=3"
        }
      ],
      "reading": "Finde zuerst den Stern in Cherubinis Beispiel 48. Vergleiche dieselben Takte bei Prout. Beide begründen den betonten Durchgang mit der Melodieführung. Fux zeigt unter derselben Frage einen anderen Fall, den vorbereiteten Vorhalt."
    },
    {
      "id": "sprung-in-dissonanz",
      "title": "Darf ich in eine Dissonanz springen?",
      "group": "Dissonanz",
      "tags": [
        "Einsprung",
        "Ausweichnote"
      ],
      "comparisons": [
        {
          "label": "Sprung in eine Dissonanz",
          "modal": "Unzulässig",
          "tonal": "Unzulässig (mit seltenen methodenabhängigen Ausnahmen)",
          "hindemith": "Dissonanz wird als Intervallspannung bewertet; melodische Führung bleibt entscheidend",
          "comment": "Spezies klarer: Dissonanz nur stufenweise"
        }
      ],
      "species": {
        "label": "Sprung in eine Dissonanz",
        "modal": [
          "Nicht relevant (keine Dissonanz)",
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten"
        ],
        "tonal": [
          "Nicht relevant",
          "Verboten außer evtl. Ausweichnote",
          "Verboten",
          "Verboten",
          "Kontrollierte Ausnahmen möglich"
        ]
      },
      "related": [
        "cambiata"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio II, S. 56 und Lectio III, S. 64–65 · zweite und dritte Spezies",
          "text": "In der zweiten Spezies verlangt ein angesprungener Ton auf der leichten Halben eine Konsonanz. Auch bei der später eingeführten Cambiata wird die Dissonanz schrittweise erreicht. Der besondere Terzsprung führt aus ihr heraus.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118105",
          "examples": [
            "fux-cambiata"
          ]
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. VII, §§ 71–72, S. 32–33, Bsp. 59–60 · tonale Diminution zu zwei oder drei Noten je Schlag",
          "text": "Goetschius unterscheidet nach der Akkordzugehörigkeit. In Beispiel 60 springt h nach d. Beide sind Nebennoten des folgenden c. Der Sprung erreicht also einen akkordfremden Ton. Ob ein Ton akkordfremd ist und welches Intervall er zur zweiten Stimme bildet, sind getrennte Fragen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=45",
          "examples": [
            "goetschius-60-nebennoten"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 46, Bsp. 62 · Appoggiatura im tonalen Repertoire",
          "text": "Die unvorbereitete Appoggiatura wird bei Piston häufig angesprungen. Sie löst sich im Halb- oder Ganztonschritt aufwärts oder abwärts.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, §§ 29–30, S. 20, und Kap. V, § 63 A, S. 33",
          "text": "Durchgang, Wechselnote und Vorhalt verlangen stufenweise Bewegung. Beim Vorhalt liegt der betreffende Ton bereits vor dem Harmoniewechsel. Für seine Vorbereitung schreiben die Autoren mindestens eine Halbe vor.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=1"
        }
      ]
    },
    {
      "id": "dissonanzaufloesung",
      "title": "In welche Richtung löst sich eine Dissonanz auf?",
      "group": "Dissonanz",
      "tags": [
        "Vorhalt",
        "Suspension",
        "Auflösung",
        "Schritt"
      ],
      "comparisons": [],
      "species": {
        "label": "Auflösungsrichtung der Dissonanz",
        "modal": [
          "Nicht relevant",
          "Stufenweise",
          "Stufenweise",
          "Abwärts im Schritt (Suspension)",
          "Stufenweise"
        ],
        "tonal": [
          "Nicht relevant",
          "Stufenweise",
          "Stufenweise",
          "Abwärts im Schritt",
          "Stufenweise"
        ]
      },
      "related": [
        "bindung-s4",
        "unterbrechung-s4",
        "cambiata",
        "generalbass-zweideutiger-septakkord"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio III, S. 64–65 · Cambiata der dritten Spezies",
          "text": "Die zweite Note der absteigenden Cambiata ist dissonant. Von dort springt die Stimme eine Terz abwärts in eine Konsonanz und kehrt dann schrittweise zurück. Der von Fux zugelassene Sprung betrifft also das Verlassen der Dissonanz.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118114",
          "examples": [
            "fux-cambiata"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VII, §§ 255–257, S. 103–104 · vierte Spezies, mit dreistimmigen Erläuterungen",
          "text": "Grundton, Terz und Quinte eines Akkords können jeweils durch einen Vorhalt von oben verzögert werden. Für die Gegenrichtung nennt Prout im strengen Satz genau einen Zielton. Der übergebundene Leitton darf von unten zur Tonika aufsteigen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=107",
          "examples": [
            "prout-vorhalt"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Fünfte Gattung, S. 182, oberes Notenbeispiel · verzierte Vorhaltsauflösung",
          "text": "Beim verzierten Vorhalt darf auf die Dissonanz zunächst ein Sprung in eine tiefere Konsonanz folgen. Der reguläre Auflösungston erklingt dann auf dem dritten Viertel. Bellermann empfiehlt, diese Verzierung nur selten einzusetzen.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=210",
          "examples": [
            "bellermann-182-aufloesung"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 52 und 58, Bsp. 74 und 86–88 · Richtung und Verzierung der Auflösung",
          "text": "Aufwärtsauflösungen sind für Piston besonders bei Leittönen und chromatisch erhöhten Tönen naheliegend. Der Auflösungston kann auch verzögert werden. In Beispiel 86 tritt zwischen h und das erwartete c ein d. Zur Untersuchung solcher Verzierungen empfiehlt er Bachs Italienisches Konzert, zweiter Satz.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-bach-bwv971-andante"
          ],
          "comparison": "Für Prouts strengen Satz ist bei der Aufwärtsauflösung nur die Tonika als Ziel vorgesehen. Piston nennt im tonalen Repertoire auch weitere, seltene Aufwärtsauflösungen."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. V, §§ 61–64, S. 33–34 · Auflösungsrichtung und Zeitpunkt",
          "text": "Der obere Vorhalt löst sich abwärts auf. Den aufwärts aufgelösten unteren Vorhalt gestatten die Autoren vor der Tonika in Moll oder wenn er mit dem Cantus firmus konsoniert. Im einfachen Kontrapunkt fällt die Auflösung auf den zweiten Schlag. Vorher darf ein anderer Akkordton erklingen. Die Auflösung darf vorweggenommen werden, wenn ihr Ton auch am regulären Platz erklingt.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=1"
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Nr. 19, T. 5, S. 9, Anmerkung S. 10 (Remeš 2021, S. 26)",
          "text": "In Nr. 19 erlaubt Förster ausdrücklich, die Dissonanz in Takt 5 aufwärts zu führen, weil ihm so die melodische Linie besser gefällt. Der Ton ist in einer Mittelstimme zu ergänzen. Remeš benennt ihn in seiner Ausgabe als des.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=12",
          "examples": [
            "foerster-aufwaerts"
          ],
          "comparison": "Prouts Aufwärtsauflösung zum Grundton betrifft einen von unten vorbereiteten Vorhalt im strengen Satz. Hier geht es um die Septime eines Akkords im Generalbass."
        }
      ],
      "reading": "Trenne zwei Fälle. Bei der Cambiata verlässt ein Sprung die Dissonanz. Beim Vorhalt ist die Frage, welche Stimme sich schrittweise wohin auflöst. Prouts Leittonvorhalt erlaubt hier einen Vergleich mit Rothgebs Abwärtsauflösung in der vierten Spezies."
    },
    {
      "id": "parallelen",
      "title": "Sind parallele Quinten und Oktaven erlaubt?",
      "group": "Stimmführung",
      "tags": [
        "Quintparallelen",
        "Oktavparallelen",
        "perfekte",
        "reine",
        "Konsonanz"
      ],
      "comparisons": [
        {
          "label": "Quint-/Oktavparallelen",
          "modal": "Verboten",
          "tonal": "Verboten",
          "hindemith": "Zu vermeiden im Sinne der Stimmunabhängigkeit, aber nicht als bloße Taburegel",
          "comment": "Unabhängigkeit bleibt Ziel in allen Systemen"
        }
      ],
      "species": {
        "label": "Parallele Quinten/Oktaven",
        "modal": [
          "Verboten",
          "Verboten (besonders auf betonten Zeiten)",
          "Verboten (besonders von Takt zu Takt)",
          "Verboten",
          "Verboten"
        ],
        "tonal": [
          "Verboten",
          "Verboten (besonders strukturell)",
          "Verboten",
          "Verboten",
          "Verboten"
        ]
      },
      "related": [
        "verdeckte-parallelen",
        "generalbass-sextakkord"
      ],
      "authors": [
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 29, S. 176 · gleichgerichtete Bewegung",
          "text": "Zarlino verwirft unmittelbar aufeinanderfolgende Einklänge, Oktaven oder Quinten, bei denen beide Stimmen in gleicher Richtung weitergehen. Die drei Gruppen im Druck führen solche verbotenen Folgen vor.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch329",
          "examples": [
            "zarlino-parallelen"
          ]
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio II, S. 57–58 · zwei gegen eins, betonte Taktteile",
          "text": "Eine zwischengeschobene Note verdeckt für Fux die Quinten oder Oktaven zweier aufeinanderfolgender schwerer Taktteile nicht schon deshalb, weil die beiden Intervalle zeitlich getrennt sind. Ein Terzsprung auf die leichte Halbe genügt im besprochenen Beispiel nicht. Einen dazwischentretenden Quartsprung lässt er im Oktavbeispiel dagegen gelten.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118107",
          "examples": [
            "fux-oktaven"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VI, § 222, S. 91 · zweistimmig, dritte Spezies",
          "text": "Im Vier-gegen-eins prüft Prout auch die ersten Noten benachbarter Takte auf Quint- und Oktavparallelen. Bei anderen Taktpositionen fragt er, ob beide Quinten bzw. Oktaven Randtöne der zugrunde liegenden Harmonie sind.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=95"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. IV, § 43, S. 18 und Kap. VII, §§ 73–74, S. 33–35, Bsp. 61 und 63 · gleichmäßiger und bewegter Satz",
          "text": "Zwei Oktaven hintereinander verdoppeln die Linie. Auch eine einzelne unbetonte Zwischennote beseitigt den Einwand nicht. In Bsp. 61 beurteilt Goetschius die Trennung durch einen betonten tragenden Ton günstiger.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=45"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 83–85, Bsp. 124–130, und Kap. VIII, S. 146–147, Bsp. 232–233 · zwei Stimmen und Quartett",
          "text": "Im Zweistimmensatz hört Piston parallele Oktaven als Verdopplung. In Haydns Quartett op. 17 Nr. 6 beobachtet er eine auffällige Folge von Quinten zwischen den Mittelstimmen. Die Quinten lösen Dissonanzen auf und treten gerade dadurch hervor.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, § 42, S. 24 · einfacher Kontrapunkt",
          "text": "Für zwei bis fünf Stimmen sind auch zwei reine Quinten oder Oktaven in Gegenbewegung verboten. Ab sechs Stimmen dulden die Autoren eine solche Gegenbewegung, sofern das Paar nicht beide Außenstimmen umfasst. Ab sieben gilt die Ausnahme für jedes Stimmenpaar. In dieser Übung bleiben gleichgerichtete Quint- und Oktavparallelen ausgeschlossen.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=2"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil II, Kap. XV, Nr. 154, T. 8 mit Anmerkung, S. 117 · vierstimmiger Kanon mit Augmentation",
          "text": "In Bitschs Kanon bilden Sopran und Alt zwei Quinten hintereinander. Die Autoren begründen diese Ausnahme mit der kanonischen Stimmführung. Die zweite Quinte entsteht durch das f im Alt, einen Durchgangston.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch15imit4.pdf#page=1",
          "examples": [
            "gallon-bitsch-nr-154"
          ]
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Nr. 26, T. 11, und Anmerkung, S. 14 (Remeš 2021, S. 37–38)",
          "text": "In Takt 11 verlangt Förster als vierte Stimme die Oktave des Basstons. Die Sexte über dem Bass ist bereits im Diskant vorhanden. Würde eine weitere Stimme sie im Oktavabstand verdoppeln, entstünden in der Fortsetzung zwei aufeinanderfolgende Quinten.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=16",
          "examples": [
            "foerster-nr26-t11"
          ]
        }
      ]
    },
    {
      "id": "verdeckte-parallelen",
      "title": "Wie behandle ich verdeckte Quinten und Oktaven?",
      "group": "Stimmführung",
      "tags": [
        "direkte",
        "Quinte",
        "Oktave",
        "Oberstimmensprung"
      ],
      "comparisons": [
        {
          "label": "Verdeckte (direkte) Quinten/Oktaven",
          "modal": "Zu vermeiden, besonders bei Oberstimmensprung",
          "tonal": "Zu vermeiden, besonders bei Oberstimmensprung",
          "hindemith": "Bewertung nach klanglicher Klarheit; kein pauschales Speziesverbot formuliert",
          "comment": "Hier ist Spezies expliziter normativ"
        }
      ],
      "species": {
        "label": "Verdeckte (direkte) Quinten/Oktaven",
        "modal": [
          "Vermeiden, besonders bei Oberstimmensprung",
          "Vermeiden",
          "Vermeiden",
          "Vermeiden",
          "Vermeiden"
        ],
        "tonal": [
          "Vermeiden, besonders bei Oberstimmensprung",
          "Vermeiden",
          "Vermeiden",
          "Vermeiden",
          "Vermeiden"
        ]
      },
      "related": [
        "parallelen"
      ],
      "authors": [
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 36, S. 184–185 · Fortschreitung zwischen verschiedenen vollkommenen Konsonanzen",
          "text": "Von der Oktave zur Quinte und umgekehrt gestattet Zarlino gleichgerichtete Bewegung, wenn eine Stimme springt und die andere einen Schritt macht. Im zweistimmigen Satz rät er zum sparsamen Gebrauch.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch336"
        },
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Regel 5 · erste Spezies, zwei Stimmen",
          "text": "Eine vollkommene Konsonanz erreicht man durch Gegen- oder Seitenbewegung. Für gleichgerichtete Bewegung sieht diese Aufgabe auch bei schrittweiser Oberstimme keine Ausnahme vor.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber I, Caput postremum, S. 42, und Liber II, Exercitium I, Lectio I, S. 48–50 · erste Spezies",
          "text": "Josephus gelangt von einer Terz in gerader Bewegung zu einer Quinte. Aloysius verwirft den Übergang und macht durch Ausfüllen des Sprungs die verborgene Quinte hörbar. Seine allgemeine Regel für den Schritt von einer unvollkommenen zu einer vollkommenen Konsonanz lässt Gegen- und Seitenbewegung zu.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118098"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. IV, § 119, S. 60 und Kap. V, § 178, S. 78 · zweistimmig, erste und zweite Spezies",
          "text": "Im Note-gegen-Note-Satz rät Prout dazu, verdeckte Quinten und Oktaven auch an der Kadenz zu meiden. In der zweiten Spezies darf die bewegte Stimme über ihren nächsten Harmonieton hinaus springen und in Gegenbewegung zu ihm zurückkehren.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=64"
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Zweite Gattung, S. 154–155, mittleres Notenbeispiel · verdeckte Quinten",
          "text": "Bei verdeckten Quinten kann eine geeignete Konsonanz auf der leichten Takthälfte die beanstandete Fortschreitung aufheben. Bellermann lässt die Lernenden die unmittelbar aufeinanderfolgenden Töne mit dem in halben Noten ausgeführten Satz vergleichen.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=183",
          "examples": [
            "bellermann-155-verdeckte"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 86–87, Bsp. 133–135 · Repertoireanalyse im zweistimmigen Satz",
          "text": "Für direkte Quinten und Oktaven bestreitet Piston eine allgemeingültige Verbotsregel. An zwei Bach-Fugen beurteilt er, wie stark die Rhythmen beider Stimmen das Zielintervall hervorheben.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "comparison": "Rothgeb schließt in seiner ersten Spezies jede gerade Bewegung in eine vollkommene Konsonanz aus. Piston bestreitet die Geltung dieses Verbots für das Komponieren allgemein. Dieselbe Fortschreitung erhält so in der Übung und im Repertoire verschiedene Bewertungen."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, § 44, S. 26 · Außenstimmen im einfachen Kontrapunkt",
          "text": "Zwischen Bass und Oberstimme verbieten die Autoren die direkte Quinte und Oktave im zweistimmigen Satz. Ab drei Stimmen darf die Oberstimme in der Schlusskadenz schrittweise in die direkte Oktave gehen. Ab sechs Stimmen ist bei schrittweiser Oberstimme auch die direkte Quinte oder Oktave auf I, IV und V zugelassen.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=4",
          "examples": [
            "gallon-bitsch-nr-152"
          ]
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=4",
          "locator": "Teil I, Kap. IV, § 45 mit Anm. 2, S. 26–27 · Stimmenpaare mit mindestens einer Mittelstimme",
          "text": "Ein Schritt in einer der beiden Stimmen erlaubt die direkte Quinte oder Oktave. Geht die tiefere Stimme den Schritt, soll man bis zu fünf Stimmen die direkte Quinte auf II, III oder VI und jede absteigende direkte Oktave möglichst meiden. Springen beide Stimmen, muss ein Ton des Zielintervalls schon zur vorigen Harmonie gehören. Ab sechs Stimmen entfällt diese Bedingung."
        }
      ]
    },
    {
      "id": "stimmkreuzung",
      "title": "Dürfen sich die Stimmen kreuzen?",
      "group": "Stimmführung",
      "tags": [
        "Stimmkreuzung",
        "Kreuzung"
      ],
      "comparisons": [
        {
          "label": "Stimmkreuzung",
          "modal": "Verboten",
          "tonal": "Verboten",
          "hindemith": "Zu vermeiden zur Wahrung der Stimmidentität",
          "comment": "Gemeinsamer Nenner: Stimmklarheit"
        }
      ],
      "species": {
        "label": "Stimmkreuzung",
        "modal": [
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten"
        ],
        "tonal": [
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten"
        ]
      },
      "related": [
        "stimmuebergreifen",
        "doppelter-kontrapunkt"
      ],
      "authors": [
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 32, S. 182 · Stimmtausch",
          "text": "Zarlino lässt beide Stimmen ihre Töne tauschen. Danach erklingt dasselbe Intervall auf denselben Tonhöhen, während jede Stimme die Lage gewechselt hat.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch332",
          "examples": [
            "zarlino-stimmtausch"
          ]
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 52, zweites Beispiel, Töne 4–7 · erste Spezies im F-Modus",
          "text": "Josephus führt den als Bass angelegten Kontrapunkt für vier Töne über den Cantus firmus. Damit vermeidet er eine längere Strecke in gerader Bewegung. Aloysius billigt die Kreuzung und achtet darauf, dass Josephus für diese Strecke die Intervalle vom nun tiefer klingenden Cantus firmus aus beurteilt.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118101",
          "examples": [
            "fux-stimmkreuzung"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. V, § 179, S. 78 und Kap. VI, § 227, S. 93 · zweistimmig, zweite und dritte Spezies",
          "text": "Im Zwei-gegen-eins dürfen die Stimmen auf der unbetonten Hälfte ausnahmsweise die Lage tauschen. Der nächste Harmonieton stellt die ursprüngliche Ordnung wieder her. Im Vier-gegen-eins kommt die zweite, dritte oder vierte Note dafür infrage.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=82",
          "examples": [
            "prout-kreuzung"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Erste Gattung, S. 147–148 · Kreuzung im Inneren und an der Kadenz",
          "text": "Im Satzinneren erlaubt Bellermann gelegentliche Stimmkreuzung ausdrücklich. An der Kadenz soll sie vermieden werden. Einen ungewöhnlichen Sprung des Cantus firmus bespricht er als seltenen Sonderfall.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=176",
          "examples": [
            "bellermann-148-kreuzung"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Regel III, Bsp. 10, S. 8 · zweistimmig, erste Spezies",
          "text": "Cherubini gestattet schon im Note-gegen-Note-Satz eine kurze Stimmkreuzung, wenn sie nötig ist oder eine sanglichere Linie ergibt. Die Stimmen müssen dabei konsonant bleiben. Er warnt davor, die gekreuzte Lage auszudehnen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=12",
          "examples": [
            "cherubini-kreuzung"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 81–82, Bsp. 122, und Kap. IX, S. 170, Bsp. 260 · zweistimmiger Satz und doppelter Kontrapunkt",
          "text": "Im freien Zweistimmensatz erlaubt Piston Kreuzungen, solange jede Linie in ihrem Register erkennbar bleibt. Für doppelten Kontrapunkt empfiehlt er sie nur selten. Eine Kreuzung kann die geplante Vertauschung an dieser Stelle verhindern.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "comparison": "Die Speziestabelle des Handouts schließt die Kreuzung aus. Fux billigt sie in einer konkreten Aussetzung, und Piston unterscheidet zwischen gewöhnlichem und vertauschbarem zweistimmigem Satz."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, §§ 50–51, S. 28–29 · einfacher Kontrapunkt",
          "text": "Kurze Kreuzungen zwischen Nachbarstimmen sind erst ab drei Stimmen zugelassen, zunächst nur im Inneren. Ab fünf Stimmen dürfen sich auch im Schlusstakt zwei Stimmen kreuzen. Gegen- und Seitenbewegung werden bevorzugt. Bei gerader Bewegung muss eine Stimme einen Schritt machen.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=6",
          "comparison": "Fux gestattet im zweistimmigen Note-gegen-Note-Beispiel eine Kreuzung über vier Töne. Im einfachen Kontrapunkt von Noël-Gallon und Bitsch beginnt diese Freiheit erst bei drei Stimmen."
        }
      ],
      "reading": "Im Handout steht für beide Speziesmodelle „Verboten“. Suche im Beispiel von Fux die Stelle, an der die Unterstimme über den Cantus steigt. Prüfe bei Prout zusätzlich, auf welche Zählzeit die Kreuzung fällt."
    },
    {
      "id": "stimmuebergreifen",
      "title": "Darf eine Stimme die vorige Lage der anderen übergreifen?",
      "group": "Stimmführung",
      "tags": [
        "Overlap",
        "Stimmübergreifen",
        "Überlappung"
      ],
      "comparisons": [
        {
          "label": "Stimmübergreifen (Overlap)",
          "modal": "Verboten",
          "tonal": "Verboten",
          "hindemith": "Zu vermeiden",
          "comment": "Kaum Unterschied"
        }
      ],
      "species": {
        "label": "Stimmübergreifen",
        "modal": [
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten"
        ],
        "tonal": [
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten",
          "Verboten"
        ]
      },
      "related": [
        "stimmkreuzung"
      ],
      "authors": [
        {
          "name": "Kris Shaffer",
          "work": "Composing a first-species counterpoint (Musicianship Resources, 2012)",
          "locator": "Independence of the lines · erste Spezies, zwei Stimmen",
          "text": "Vergleiche die neue Bassnote mit der letzten Oberstimmennote. Stand oben E4, soll unten im nächsten Takt kein F4 folgen. Die Stimmen können also übergreifen, auch wenn sie sich auf keiner Zählzeit kreuzen.",
          "url": "https://kshaffer.github.io/musicianshipResources/firstSpecies.html"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. II, § 31, S. 24 und Kap. V, § 178, S. 78 · allgemeine Regel und zweite Spezies",
          "text": "Prout beanstandet, wenn eine Stimme den zuletzt gehörten Ton der Nachbarstimme nach außen überschreitet. Im Zwei-gegen-eins kann ein Zwischenton die Fortschreitung verbessern. Der zweite Harmonieton wird dabei in Gegenbewegung erreicht.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=82",
          "examples": [
            "prout-uebergreifen"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 82, Bsp. 123 · Stimmen ohne Kreuzung",
          "text": "In Pistons Beispiel übersteigt das neue c der Unterstimme das vorige a der Oberstimme. Das Ohr kann so Töne verschiedener Stimmen verbinden.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        }
      ]
    },
    {
      "id": "stimmabstand",
      "title": "Wie weit dürfen die Stimmen auseinanderliegen?",
      "group": "Stimmführung",
      "tags": [
        "Tonsatz",
        "Ambitus",
        "Register",
        "Abstand"
      ],
      "comparisons": [],
      "species": {
        "label": "Stimmabstand (2 Stimmen)",
        "modal": [
          "Extreme Register vermeiden",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Extreme Register vermeiden",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ]
      },
      "authors": [
        {
          "name": "Kris Shaffer",
          "work": "Composing a first-species counterpoint (Musicianship Resources, 2012)",
          "locator": "Intervals and motion · erste Spezies, zwei Stimmen",
          "text": "Die Duodezime ist die äußerste Grenze. Wenn möglich bleiben die Stimmen innerhalb einer Oktave. Mehr als eine Dezime empfiehlt Shaffer nur kurzzeitig, für ein oder zwei Töne.",
          "url": "https://kshaffer.github.io/musicianshipResources/firstSpecies.html"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. I, §§ 12–14, S. 18–19 und Kap. IV, § 135, S. 65 · Stimmlage im zweistimmigen Satz",
          "text": "Prout beurteilt die tatsächliche Lage jeder Einzelstimme. Eine für Alt geschriebene Gegenstimme könnte dem Tonumfang nach auch im Tenor liegen. Er schreibt dafür trotzdem eine andere Linie, weil die ursprüngliche zu lange im hohen Tenorregister läge.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=69"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. V, § 50, S. 22–23, Bsp. 43c · zweistimmiger Satz in Moll",
          "text": "Im dritten Takt von Bsp. 43c wächst der Abstand vorübergehend auf mehr als zwei Oktaven. Goetschius verteidigt die Stelle ausdrücklich mit der melodischen Qualität der beiden Einzelstimmen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=35",
          "examples": [
            "goetschius-43c-abstand"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Erste Gattung, S. 146–148 · zwei benachbarte Singstimmen",
          "text": "Bellermann kombiniert für die Übung benachbarte Stimmlagen. Die Dezime ist der größte zugelassene Abstand und hat ihren Platz nur vorübergehend im Inneren des Satzes. Als Gründe nennt er die Intonation ohne Instrumente und die leere Klangwirkung bei weitem Abstand.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=175"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. VII, S. 132–134, Bsp. 218–221, und Kap. IX, S. 169–171 · Instrumentalsatz und Lagentausch",
          "text": "Beim dreistimmigen Instrumentalsatz beurteilt Piston den Abstand nach Besetzung, Register und Verlauf der Linien. Für einen geplanten Lagentausch mit nur einer Oktavversetzung setzt er eine konkrete Grenze. Ein größerer Abstand ließe die Stimmen in ihrer bisherigen Reihenfolge.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "comparison": "Bellermanns Dezimengrenze bezieht sich auf benachbarte Singstimmen. Pistons Oktavgrenze ergibt sich aus der verlangten Vertauschung. Die beiden Zahlen beantworten unterschiedliche Fragen."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, § 49, S. 28 · benachbarte Stimmen im einfachen Kontrapunkt",
          "text": "Am Taktanfang sollen Nachbarstimmen weniger als zwei Oktaven auseinanderliegen. Innerhalb des Taktes kann ihr Abstand kurz auf zwei Oktaven oder darüber anwachsen. Entscheidend ist damit auch, auf welchen Taktteil die weiteste Stelle fällt.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=6",
          "comparison": "Bellermann zieht für benachbarte Singstimmen schon bei der vorübergehenden Dezime die Grenze. Noël-Gallon und Bitsch gestatten denselben Stimmen einen größeren Abstand."
        }
      ],
      "reading": "Bellermann setzt für zwei benachbarte Singstimmen die Dezime als Grenze, Shaffer die Duodezime. Goetschius verteidigt in Beispiel 43c sogar einen Abstand von mehr als zwei Oktaven. Singe seine Linien einzeln und spiele dann den dritten Takt zweistimmig.",
      "related": [
        "doppelter-kontrapunkt",
        "doppelchor-basslinien"
      ]
    },
    {
      "id": "hoehepunkt",
      "title": "Wie setze ich den melodischen Höhepunkt?",
      "group": "Melodieführung",
      "tags": [
        "Klimax",
        "Höhepunkte"
      ],
      "comparisons": [],
      "species": {
        "label": "Höhepunktsetzung",
        "modal": [
          "Ein einzelner Höhepunkt; keine gleichzeitigen Klimaxe",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Ein einzelner Höhepunkt; darf tonale Zielspannung spiegeln",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ]
      },
      "related": [
        "cantus-firmus"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Cantus Firmus (Music 103, 1998)",
          "locator": "Regeln 10–11 · Cantus firmus in Dur",
          "text": "Der höchste Ton soll genau einmal auftreten. Die siebte Stufe darf diese Rolle im Cantus firmus nicht übernehmen.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Cantus_Firmus.html"
        },
        {
          "name": "Kris Shaffer",
          "work": "Composing a first-species counterpoint (Musicianship Resources, 2012)",
          "locator": "Independence of the lines · erste Spezies, zwei Stimmen",
          "text": "Beide Linien erhalten jeweils einen Höhepunkt. Liegen diese an verschiedenen Stellen, bleibt der Verlauf jeder Stimme leichter zu hören.",
          "url": "https://kshaffer.github.io/musicianshipResources/firstSpecies.html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 45 · Beobachtung am ersten Cantus firmus in D",
          "text": "Das a an siebter Stelle ist der einzige höchste Ton dieses Cantus firmus. Ihm geht ein Terzsprung vom f voraus. Danach sinkt die Linie in Schritten zum d zurück. An dieser Stelle gibt Fux das Beispiel, ohne daraus ein allgemeines Gebot für den Höhepunkt zu formulieren.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118094",
          "examples": [
            "fux-cantus-d"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. I, S. 13–16, Bsp. 1, 4 und 7 · Melodiekontur im Repertoire",
          "text": "In Beethovens Adagio hört Piston neben dem höchsten Ton b kleinere Gipfel auf f und g. Die Lage des Hauptgipfels ist beweglich. In Mendelssohns Quartett op. 80 erreicht die von ihm gewählte Phrase ihren höchsten Ton erst am Schluss.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-beethoven-op18-1-adagio"
          ]
        }
      ]
    },
    {
      "id": "chromatik",
      "title": "Wann darf ich einen Ton chromatisch verändern?",
      "group": "Melodieführung",
      "tags": [
        "Leittonerhöhung",
        "Chromatik",
        "Akzidens",
        "Vorzeichen"
      ],
      "comparisons": [
        {
          "label": "Chromatik",
          "modal": "Im Wesentlichen nur kadenzbedingt (erhöhte Leittonbildung)",
          "tonal": "Leittöne und Tendenztöne integraler Bestandteil",
          "hindemith": "Chromatik grundlegend; Diatonik kein alleiniger Ordnungsrahmen",
          "comment": "Starker Paradigmenwechsel"
        }
      ],
      "species": {
        "label": "Chromatische Veränderung",
        "modal": [
          "Begrenzt; Leitton nur kadenzbedingt erhöhen",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Tendenztöne systemimmanent",
          "Mehr Freiheit",
          "Mehr Freiheit",
          "Mehr Freiheit",
          "Freier, aber kontrolliert"
        ]
      },
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio III, S. 68–69 · dritte Spezies",
          "text": "Josephus begründet die b-Vorzeichen seiner Beispiele mit dem Vermeiden einer rauen mi-contra-fa-Beziehung. Aloysius billigt das und lässt aus vergleichbaren Gründen gelegentlich auch Erhöhungen zu. Für die Entscheidung verlangt er eine Prüfung der jeweiligen Stelle.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118118"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. V, § 186, S. 80–81 und Kap. VI, § 220, S. 90–91 · Moll, zweistimmig",
          "text": "Im Zwei-gegen-eins vermeidet Prout die übermäßige Sekunde der harmonischen Mollskala. Zwischen Dominante und Leitton dient die große sechste Stufe als Durchgang, zwischen kleiner Sexte und Tonika die kleine siebte. Für eine durchlaufende Viertelkette von der Dominante zur Tonika empfiehlt er aufwärts große Sexte und Leitton, abwärts kleine Septime und kleine Sexte.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=84"
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Kap. IX, S. 124–125 · aufwärts geführte Schlussstimme in den Modi",
          "text": "Liegt die siebte Stufe einen Ganzton unter der Finalis, erhöht Bellermann sie für den Aufwärtsschluss. Im Phrygischen behält er d–e und den Halbton e–f bei. Beim stufenweisen äolischen Aufstieg kann zusätzlich fis nötig werden, um f–gis zu vermeiden.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=152",
          "examples": [
            "bellermann-124-aeolisch"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 43–44 · chromatische Töne in der dur-moll-tonalen Melodie",
          "text": "Piston fragt nach der Funktion des veränderten Tons. Er kann zu einer Zwischendominante oder einem alterierten Akkord gehören, melodischer Nebenton sein oder aus der gleichnamigen Dur- beziehungsweise Molltonart stammen.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, §§ 27, 33–36, S. 19, 21–22 · melodisches Moll",
          "text": "Ein unmittelbarer chromatischer Schritt ist verboten. In a-Moll können fis im Aufstieg und g im Abstieg als Durchgänge oder Wechselnoten auftreten, ausnahmsweise auch als Akkordtöne im entsprechenden Stufengang. Zwischen zwei Formen derselben Stufe wünschen die Autoren in einer Stimme mindestens drei andere Töne.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=4"
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Nr. 11, T. 13–14, und Anmerkung, S. 6 (Remeš 2021, S. 14)",
          "text": "Das g zu Beginn von Takt 13 ist fünfte Bassstufe in c-Moll und zugleich vierte in d-Moll. Förster schreibt im Diskant h statt b. Im Aufstieg zum cis vermeidet das h die übermäßige Sekunde b–cis.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=8",
          "examples": [
            "foerster-nr11"
          ],
          "comparison": "Auch Prout verwendet im aufsteigenden Moll die große sechste Stufe vor dem Leitton. Försters Generalbass zeigt diesen Schritt an einer Stelle, an der sich zugleich die tonale Bedeutung des Basses ändert."
        }
      ],
      "related": [
        "generalbass-ziffern-stufen"
      ]
    },
    {
      "id": "dissonanzen-s2",
      "title": "Welche Dissonanztypen gehören zur zweiten Spezies?",
      "group": "Dissonanz",
      "tags": [
        "Sekundenspezies",
        "2:1",
        "NCT",
        "Durchgang",
        "Nebennote"
      ],
      "comparisons": [
        {
          "label": "Sekundenspezies: erlaubte Dissonanzen",
          "modal": "Meist nur Durchgang",
          "tonal": "Durchgang + evtl. Nebennote/Ausweichnote (ohne Bindung)",
          "hindemith": "Nicht an ‚2. Spezies‘ gebunden; Bewertung nach Intervallspannung",
          "comment": "Kein 1:1-Äquivalent"
        }
      ],
      "species": {
        "label": "Sekundenspezies: NCT-Beschränkung",
        "modal": [
          "Nur Durchgang",
          "Nur Durchgang",
          "Nicht relevant",
          "Nicht relevant",
          "Im floriden Kontext eingebettet"
        ],
        "tonal": [
          "Durchgang + weitere außer gebundene",
          "Durchgang + Nebennote + Ausweichnote",
          "Nicht relevant",
          "Nicht relevant",
          "Eingebettet"
        ]
      },
      "related": [
        "dissonanzbehandlung"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Second Species of Counterpoint (Music 103, 1993)",
          "locator": "Regeln 4–5 · zweite Spezies, zwei Stimmen",
          "text": "Die erste Halbe ist konsonant. Eine dissonante zweite Halbe muss schrittweise in derselben Richtung erreicht und verlassen werden. Damit scheidet hier auch die dissonante Wechselnote aus.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Second_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio II, S. 56 · zwei Halbe gegen eine Ganze",
          "text": "Die erste Halbe muss konsonieren. Auf der zweiten Halben darf eine Dissonanz stehen, wenn sie den Zwischenraum einer Terz schrittweise ausfüllt. Ein Sprung verlangt dort eine Konsonanz.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118105",
          "examples": [
            "fux-durchgang"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. V, §§ 163–166 und 171, S. 73–76 · zweistimmig, zweite Spezies",
          "text": "Auf der schwachen Hälfte erlaubt Prout Durchgänge und Wechselnoten. Eine Wechselnote kehrt zum Ausgangston zurück. Als seltene Sonderfigur in der Oberstimme beschreibt er den Schritt zur oberen Nebennote mit anschließendem Terzfall auf den nächsttieferen Harmonieton.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=78",
          "examples": [
            "prout-terzabgang"
          ]
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. VII, §§ 68–72, S. 31–33, Bsp. 58–60 · zwei Noten gegen eine in tonaler Übung",
          "text": "Goetschius lässt akkordfremde Töne als Durchgänge und Nebennoten zu. In einer besonderen Figur springen die beiden Nebennoten eines Akkordtons im Terzabstand ineinander. Der anschließende Akkordton löst beide auf.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=44"
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Zweite Gattung, S. 153–154 · zwei halbe Noten gegen eine ganze",
          "text": "Eine Dissonanz auf der zweiten Halben muss bei Bellermann in derselben Richtung schrittweise von Konsonanz zu Konsonanz führen. Er trennt diesen Durchgang von der Nebennote, die umkehrt oder abspringt. Für historische Nebennoten verweist er auf kürzere Notenwerte.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=181"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. V, § 66, S. 35 · Durchgang und Wechselnote",
          "text": "Die dissonante zweite Halbe kann stufenweise in derselben Richtung weitergehen oder als Wechselnote zum Ausgangston zurückkehren. Die allgemeine Regel lässt Wechselnoten von oben und von unten zu.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=3",
          "comparison": "Fux und Rothgeb verlangen für eine dissonante zweite Halbe den Durchgang in derselben Richtung. Die Wechselnote wäre in ihren entsprechenden Übungen ausgeschlossen.",
          "examples": [
            "gallon-bitsch-durchgang-nebennote",
            "gallon-bitsch-nr-7-9"
          ]
        }
      ],
      "reading": "Sing zuerst einen Durchgang und dann eine Wechselnote. Fux und Rothgeb verlangen beim dissonanten zweiten Ton die Fortsetzung in derselben Richtung. Prout lässt auch die Rückkehr zum Ausgangston zu."
    },
    {
      "id": "dissonanzfolgen-s3",
      "title": "Wann dürfen in der dritten Spezies Dissonanzen aufeinanderfolgen?",
      "group": "Dissonanz",
      "tags": [
        "4:1",
        "Dissonanzketten",
        "Dissonanzfolge"
      ],
      "comparisons": [],
      "species": {
        "label": "Dritte Spezies: aufeinanderfolgende Dissonanzen",
        "modal": [
          "Dissonanzketten vermeiden",
          "Vermeiden",
          "Längere Ketten vermeiden",
          "Nicht relevant",
          "Kontrolliert"
        ],
        "tonal": [
          "Übermäßige Ketten vermeiden",
          "Erlaubt, aber kontrolliert",
          "Erlaubt, aber kontrolliert",
          "Nicht relevant",
          "Kontrolliert"
        ]
      },
      "related": [
        "cambiata"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio III, S. 63–64 · vier Viertel gegen eine Ganze",
          "text": "Für fünf durchgehend steigende oder fallende Viertel, die über den Taktstrich führen, sind im Grundmodell das erste, dritte und fünfte konsonant. Fux zeigt daneben Figuren mit einer Dissonanz auf dem dritten Viertel, sofern das zweite und vierte konsonieren. Das ergibt in diesen Figuren jeweils eine einzelne Durchgangsdissonanz.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118113",
          "examples": [
            "fux-drittes-viertel"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VI, §§ 206 und 208–210, S. 87–88 · zweistimmig, vier gegen eins",
          "text": "Zwischen zwei Harmonietönen im Quartabstand können zwei Durchgangstöne in derselben Richtung folgen. Prout beschreibt daneben zwei Wechselnoten beiderseits eines Harmonietons. Sie stehen vorzugsweise auf dem zweiten und dritten Viertel und führen zurück zum dazwischenliegenden Ton.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=92",
          "examples": [
            "prout-wechselnoten"
          ]
        }
      ]
    },
    {
      "id": "bindung-s4",
      "title": "Wie funktioniert die Bindung in der vierten Spezies?",
      "group": "Dissonanz",
      "tags": [
        "Synkopen",
        "Vorhalt",
        "Suspension",
        "Überbindung",
        "Taktgrenze"
      ],
      "comparisons": [
        {
          "label": "Vierte Spezies: Suspensionskette",
          "modal": "Vorbereitung – Bindung – Dissonanz – stufenweise Abwärtsauflösung",
          "tonal": "Gleiche Grundstruktur, oft funktional gedeutet",
          "hindemith": "Suspension ist nur eine Möglichkeit unter mehreren; kein strukturelles Pflichtmodell",
          "comment": "Suspension bei Hindemith nicht systemtragend"
        }
      ],
      "species": {
        "label": "Vierte Spezies: Bindungsregel",
        "modal": [
          "Nicht relevant",
          "Nicht relevant",
          "Nicht relevant",
          "Bindung über Taktgrenze verpflichtend",
          "Bindungsdisziplin beibehalten"
        ],
        "tonal": [
          "Nicht relevant",
          "Nicht relevant",
          "Nicht relevant",
          "Bindung über Taktgrenze verpflichtend",
          "Bindungsdisziplin beibehalten"
        ]
      },
      "related": [
        "unterbrechung-s4",
        "dissonanzaufloesung",
        "dauer-der-vorhaltsvorbereitung"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Fourth Species of Counterpoint (Music 103, 1995)",
          "locator": "Regeln 4–6 · vierte Spezies, zwei Stimmen",
          "text": "Die zweite Halbe bereitet die Bindung konsonant vor. Entsteht über dem Taktstrich ein Vorhalt, löst sich die gebundene Stimme abwärts. Bleibt die Bindung konsonant, hat die Stimme andere melodische Möglichkeiten.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Fourth_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio IV, S. 69–70 · zwei gebundene Halbe",
          "text": "Die erste Halbe erklingt auf leichter Zeit als Konsonanz. Sie bleibt beim Wechsel des Cantus firmus liegen. Auch der neue Zusammenklang kann konsonant sein. Erst wenn er dissoniert, stellt sich die Frage nach seiner schrittweisen Auflösung.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118118",
          "examples": [
            "fux-konsonante-bindung"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VII, §§ 252–254, S. 103 · zweistimmig, vierte Spezies",
          "text": "Eine Bindung über die Taktgrenze kann einen gemeinsamen Akkordton festhalten. Zum Vorhalt wird sie, wenn der gehaltene Ton dem neuen Akkord fremd ist und schrittweise in einen seiner Töne weitergeht. Die Vorbereitung muss mindestens so lang dauern wie die angebundene Note.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=107"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 50–53, Bsp. 71–76 · Vorhalt im tonalen Repertoire",
          "text": "Der gehaltene Ton wird beim Harmoniewechsel akkordfremd. In Bachs Contrapunctus I bespricht Piston sogar ein c, das bereits als Durchgangston vorbereitet wird.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "comparison": "Fux und Rothgeb verlangen in der vierten Spezies eine konsonante Vorbereitung. Das von Piston beschriebene Bach-Beispiel führt über die Speziesaufgabe hinaus."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. V, §§ 61–64, S. 33–34 · Richtung und Auflösung",
          "text": "Den aus der Höhe kommenden Vorhalt behandeln die Autoren als Normalfall. Einen von unten aufgelösten Vorhalt lassen sie zur Tonika in Moll zu. Außerdem zeigen sie diesen Aufwärtsschritt bei einem zum Cantus firmus konsonanten Vorhalt. Die Bezeichnungen oben und unten meinen hier die Lage zum Auflösungston.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=1",
          "comparison": "Rothgeb verlangt für die dissonante Bindung in seiner zweistimmigen vierten Spezies die abwärts gerichtete Auflösung. Die Molltonika bildet bei Noël-Gallon und Bitsch einen ausdrücklichen Sonderfall.",
          "examples": [
            "gallon-bitsch-nr-15-16"
          ]
        }
      ]
    },
    {
      "id": "unterbrechung-s4",
      "title": "Wann darf ich eine Vorhaltskette unterbrechen?",
      "group": "Dissonanz",
      "tags": [
        "Suspensionskette",
        "Synkope",
        "vierte",
        "Spezies"
      ],
      "comparisons": [],
      "species": {
        "label": "Vierte Spezies: Unterbrechung der Suspensionskette",
        "modal": [
          "Nicht relevant",
          "Nicht relevant",
          "Nicht relevant",
          "Nur durch Konsonanz auf unbetonter Zeit",
          "Erlaubt, aber kontrolliert"
        ],
        "tonal": [
          "Nicht relevant",
          "Nicht relevant",
          "Nicht relevant",
          "Mit tonaler Begründung erlaubt",
          "Erlaubt"
        ]
      },
      "related": [
        "bindung-s4",
        "dissonanzaufloesung"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Fourth Species of Counterpoint (Music 103, 1995)",
          "locator": "Regel 8 · vierte Spezies, zwei Stimmen",
          "text": "Die Bindung darf ausfallen, wenn sie zu einer unzulässigen Auflösung oder Folge vollkommener Konsonanzen führen würde. Der neu angeschlagene Ton auf der Eins muss konsonant sein. Rothgeb beschränkt die Ausnahme auf ein bis zwei Stellen je Übung.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Fourth_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio IV, S. 74, erstes Beispiel · vierte Spezies",
          "text": "Fux verlangt Bindungen, wo sie möglich sind. Fehlt eine brauchbare Fortsetzung, füllen ungebundene Halbe die Lücke. Im fünften Takt von Josephus’ Beispiel wäre eine Bindung möglich. Aloysius akzeptiert hier trotzdem die Unterbrechung, weil sie die zuvor wiederholte Wendung variiert.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118123",
          "examples": [
            "fux-unterbrechung"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VII, §§ 261–263, S. 105 · zweistimmig, vierte Spezies, zwei gegen eins",
          "text": "Die Bindung soll nur ausfallen, wenn keine brauchbare Fortsetzung möglich ist. Dann trägt wie in der zweiten Spezies die erste Takthälfte den Harmonieton. Zwei ungebundene Takte hintereinander schließt Prout aus.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=109",
          "examples": [
            "prout-kette"
          ]
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. II, § 17, S. 15, und Teil II, Kap. I, S. 62 · vierte Spezies",
          "text": "In einer schwierigen Stelle erlauben die Autoren eine einzige Unterbrechung der Synkopen pro Übung. Wenn zwei Harmonien innerhalb desselben Takts die Bindung retten, ziehen sie diesen Harmoniewechsel vor.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=4",
          "comparison": "Rothgeb erlaubt bei unlösbaren Bindungen ein bis zwei Ausnahmen pro Übung. Die zahlenmäßige Grenze fällt hier enger aus.",
          "examples": [
            "gallon-bitsch-nr-15-16"
          ]
        }
      ],
      "reading": "Markiere zuerst, wo eine weitere Bindung überhaupt möglich wäre. Fux akzeptiert in einem solchen Fall die Unterbrechung zugunsten der melodischen Vielfalt. Bei Rothgeb und Prout ist sie an eine satztechnische Notwendigkeit gebunden."
    },
    {
      "id": "dichte-s5",
      "title": "Wie dicht dürfen Dissonanzen im floriden Satz stehen?",
      "group": "Dissonanz",
      "tags": [
        "Floridus",
        "floride",
        "fünfte",
        "Spezies",
        "Dissonanzdichte"
      ],
      "comparisons": [],
      "species": {
        "label": "Floride Spezies: Dissonanzdichte",
        "modal": [
          "Mäßig; keine Überladung",
          "Mäßig",
          "Mäßig",
          "Mäßig",
          "Nicht zu viele aufeinanderfolgende Dissonanzen"
        ],
        "tonal": [
          "Mäßig",
          "Etwas freier",
          "Freier",
          "Mäßig",
          "Freier, aber tonale Klarheit erforderlich"
        ]
      },
      "authors": [
        {
          "name": "Mark Gotham und Kris Shaffer",
          "work": "Fifth-Species Counterpoint (Open Music Theory)",
          "locator": "Embellishing Suspensions, Bsp. 1 · fünfte Spezies",
          "text": "Die Autoren verzieren eine Kette von 7–6-Vorhalten. Halte zum Vergleich auf der Eins jeden Vorhalt eine Halbe lang aus. Die darunterliegende Kette wird hörbar. Paarweise Achtel fallen hier auf das zweite oder vierte Viertel.",
          "url": "https://viva.pressbooks.pub/openmusictheory/chapter/fifth-species-counterpoint/"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio IV–V, S. 76–79 · zweistimmiger Contrapunctus floridus",
          "text": "Die fünfte Spezies verbindet die Verfahren der vorigen. Fux gibt hier keine Dissonanzzahl pro Takt vor. Er verlangt abwechslungsreiche Figuren und eine gut singbare Linie. Paare von Achteln dürfen gelegentlich auf dem zweiten oder vierten Viertel stehen.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118126",
          "examples": [
            "fux-floridus"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VIII, §§ 297–301, S. 116–118 · zweistimmig, fünfte Spezies, gerader Takt",
          "text": "Prout steuert die Dichte der Verzierungen über die Unterteilung. Er empfiehlt höchstens eine Achtelgruppe je Takt und zieht zwei Achtel meist vier vor. Ein einzelnes Achtelpaar teilt das zweite oder vierte Viertel. Die Achtel können dabei auch Akkordtöne sein.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=122",
          "examples": [
            "prout-achtel"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Fünfte Gattung, S. 182 und 185, Nr. 4 · Diminution im zweistimmigen Vokalsatz",
          "text": "Eine zahlenmäßige Dissonanzquote gibt Bellermann hier nicht an. Für die Verzierung begrenzt er aber den Bewegungsraum konkret. Zwei Achtel dürfen auf dem zweiten oder vierten Viertel erscheinen. In dieser kurzen Figur lässt er auch die Nebennote zu.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=213"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. II, § 21 C, S. 16 · Floridus",
          "text": "In einer Stimme dürfen höchstens vier Noten in einem Takt stehen. Achtel sitzen auf der leichten Unterteilung und werden sparsam verwendet. Sie gehen untereinander und zur nächsten Note schrittweise. Diese Höchstzahl begrenzt alle Töne zusammen und zählt damit auch die Konsonanzen.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch2rythm.pdf#page=2",
          "examples": [
            "gallon-bitsch-nr-19-20"
          ]
        }
      ],
      "related": [
        "speziesmischung"
      ]
    },
    {
      "id": "kadenz-oberstimme",
      "title": "Wie führt die Oberstimme zum Schlusston?",
      "group": "Beginn und Kadenz",
      "tags": [
        "Finalis",
        "Klausel",
        "Leitton",
        "Kadenz"
      ],
      "comparisons": [],
      "species": {
        "label": "Kadenz: Melodik Oberstimme",
        "modal": [
          "Stufenweise zur Finalis",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Leitton → Tonika typisch",
          "Leitton betont",
          "Leitton betont",
          "Leitton betont",
          "Leitton betont"
        ]
      },
      "related": [
        "leittonaufloesung",
        "sprung-zum-leitton",
        "kadenz",
        "kadenz-unterstimme"
      ],
      "authors": [
        {
          "name": "Kris Shaffer",
          "work": "Composing a first-species counterpoint (Musicianship Resources, 2012)",
          "locator": "Ending a first-species counterpoint · erste Spezies, zwei Stimmen",
          "text": "Schließt der Cantus mit 2–1, führt die Gegenstimme 7–1. Gibt der Cantus 7–1 vor, übernimmt die Gegenstimme 2–1. Welche Stimme steigt, hängt somit vom gegebenen Schluss ab.",
          "url": "https://kshaffer.github.io/musicianshipResources/firstSpecies.html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 46–48 · erste Spezies über dem D-Cantus",
          "text": "In der ersten D-Übung sinkt der Cantus firmus am Ende von e nach d. Die Oberstimme steigt von cis nach d. So öffnet sich die große Sexte der vorletzten Note in Gegenbewegung zur Oktave.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118096"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. IV, §§ 121–122, S. 61–62 · zweistimmig, erste Spezies, Thema unten",
          "text": "Fällt das Thema im Bass von der zweiten zur ersten Stufe, setzt Prout den Leitton darüber. Steigt der Bass dagegen vom Leitton zur Tonika, nimmt die Oberstimme die zweite Stufe und fällt zur Tonika. Beide Klauseln enden auf demselben Ton oder in der Oktave.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=65"
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Regel XVI, Bsp. 46, S. 14 · zweistimmig, zweite Spezies, Thema unten",
          "text": "Fällt das gegebene Thema im Bass von der zweiten zur ersten Stufe, empfiehlt Cherubini für den vorletzten Takt die Intervallfolge Quinte–große Sexte. Über d–c in C-Dur ergibt sich in der Oberstimme a–h–c.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=20",
          "examples": [
            "cherubini-kadenz"
          ]
        }
      ]
    },
    {
      "id": "kadenz-unterstimme",
      "title": "Wie führt die Unterstimme zum Schlusston?",
      "group": "Beginn und Kadenz",
      "tags": [
        "Bass",
        "Bassklausel",
        "Kadenz",
        "Gegenbewegung"
      ],
      "comparisons": [],
      "species": {
        "label": "Kadenz: Melodik Unterstimme",
        "modal": [
          "Bevorzugt Gegenbewegung",
          "Gleich",
          "Gleich",
          "Gleich",
          "Gleich"
        ],
        "tonal": [
          "Implizite funktionale Bassbewegung",
          "Implizite funktionale Bassbewegung",
          "Implizite funktionale Bassbewegung",
          "Implizite funktionale Bassbewegung",
          "Implizite funktionale Bassbewegung"
        ]
      },
      "related": [
        "kadenz",
        "kadenz-oberstimme"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Fourth Species of Counterpoint (Music 103, 1995)",
          "locator": "Regel 11 · vierte Spezies, Gegenstimme unten",
          "text": "Liegt die synkopierte Stimme unten, fordert Rothgeb im vorletzten Takt einen 2–3-Vorhalt. Der Bass geht dabei abwärts in den Leitton und schließt anschließend mit dem Schritt zur Tonika.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Fourth_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 46 und 48–49 · erste Spezies unter dem D-Cantus",
          "text": "Bleibt derselbe e–d-Schluss im oberen Cantus firmus, nimmt die frei geschriebene Unterstimme cis–d. Aus der kleinen Terz wird ein Einklang. Die Unterstimme übernimmt hier den aufsteigenden Halbtonschritt.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118097"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. IV, §§ 119–120, S. 60–61 · zweistimmig, erste Spezies, Thema oben",
          "text": "Fällt die gegebene Oberstimme von der zweiten zur ersten Stufe, bevorzugt Prout in der Unterstimme den Leittonschritt aus der ersten Umkehrung der Dominante. Er lässt auch den Sprung vom Dominantgrundton zu, wenn sich der Bass dabei gegen die Oberstimme bewegt.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=64",
          "examples": [
            "prout-schlussbass"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Erste Gattung, S. 147–148, letztes Notenbeispiel · Cantus firmus in der Oberstimme",
          "text": "Liegt der Cantus firmus oben, schließt Bellermann gewöhnlich im Einklang. Eine Unterstimme, die mit ihm von der Dezime in die Oktave schließt, erscheint in seinem Beispiel als ungünstige Lösung für die Übung.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=176"
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Regel XVI, Bsp. 47, S. 14 · zweistimmig, zweite Spezies, Thema oben",
          "text": "Liegt der absteigende Schluss des Themas oben, empfiehlt Cherubini im vorletzten Takt zuerst die Unterquinte und dann die Unterterz. Die Lage des Themas entscheidet also darüber, welche Intervallfolge er vor dem Schluss empfiehlt.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=20"
        }
      ]
    },
    {
      "id": "grundrahmen",
      "title": "Woran orientiert sich eine zweistimmige Übung?",
      "group": "Satzmodelle",
      "tags": [
        "Modal",
        "tonal",
        "Hindemith",
        "Grundlagen"
      ],
      "comparisons": [
        {
          "label": "Grundrahmen",
          "modal": "Speziesregeln + modaler Stil (vokale Linearität, strenge Dissonanzkontrolle)",
          "tonal": "Speziesregeln + tonale Tendenz- und Harmoniedenken",
          "hindemith": "Kein Speziesmodell; Intervallhierarchie + kontrollierte Spannungsentwicklung",
          "comment": "Hindemith ersetzt Spezies-Logik durch Intervall-Systematik"
        }
      ],
      "authors": [
        {
          "name": "Paul Hindemith",
          "work": "Unterweisung im Tonsatz II. Übungsbuch für den zweistimmigen Satz (Schott, ED 3601)",
          "locator": "Kapitelabfolge im Inhaltsverzeichnis der deutschen Ausgabe",
          "text": "Hindemith beginnt mit der Bildung einer einzelnen Melodie und führt dann die zweite Stimme ein. Über die Erweiterung der Melodik und die tonalen Zusammenhänge gelangt die Übungsreihe zur freien Zweistimmigkeit.",
          "url": "https://www.schott-music.com/de/unterweisung-im-tonsatz-no33622.html"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Vorwort, S. iii–v · Zweck des strengen Kontrapunkts",
          "text": "Prout richtet den strengen Satz ausdrücklich auf die Dur-Moll-Tonalität aus. Die Übung soll zugleich melodische Gewandtheit und ein Gefühl für Akkordfortschreitungen schulen. Darum lehrt er schon an zwei Stimmen, eine zugrunde liegende Harmonie zu hören.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=7",
          "examples": [
            "prout-zweiklang"
          ]
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 45 · erste zweistimmige Aufgabe, Cantus firmus allein",
          "text": "Fux gibt zunächst eine Melodie vor. Josephus sucht für jeden ihrer Töne einen Kontrapunktton und bestimmt die Intervalle und die Bewegungsrichtung von einem Tonpaar zum nächsten.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118094",
          "examples": [
            "fux-cantus-d"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Einleitung, S. 9–12, und Kap. V, S. 72–74 · tonaler Kontrapunkt im Repertoire",
          "text": "Piston geht von komponierten Stücken aus. Am zweistimmigen Satz prüft er, wie zwei Linien eine Harmonie tragen und dennoch in Kontur und rhythmischer Betonung unterscheidbar bleiben. Auch eine begleitende Basslinie kann diese Eigenständigkeit besitzen.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 1–5, S. 11–12, und §§ 10–15, S. 13–14 · Anlage der Übungen",
          "text": "Die Folge beginnt mit kurzen Vokallinien zu einem gegebenen Cantus. Die Lernenden arbeiten vom zwei- bis zum achtstimmigen Satz. In fünf bis acht Stimmen beschränkt sich der einfache Kontrapunkt auf Note gegen Note und den Floridus. Für den achtstimmigen Doppelchor folgt eine eigene Aufgabe.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch1Ppes.pdf#page=3"
        }
      ]
    },
    {
      "id": "dissonanzbehandlung",
      "title": "Nach welchen Kriterien wird eine Dissonanz beurteilt?",
      "group": "Dissonanz",
      "tags": [
        "Dissonanzbehandlung",
        "Intervallrang",
        "Spannungsverlauf"
      ],
      "comparisons": [
        {
          "label": "Dissonanzbehandlung allgemein",
          "modal": "Nur Durchgang (S2), Durchgang/Nachbar (S3 je nach Schule), Suspension (S4)",
          "tonal": "Breiteres NCT-Vokabular je nach Lehrbuch",
          "hindemith": "Dissonanz = Intervall niedrigerer Wertigkeit; kontrollierter Spannungsverlauf statt Spezies-Typologie",
          "comment": "Begrifflich völlig anders gerahmt"
        }
      ],
      "related": [
        "dissonanzen-s2"
      ],
      "authors": [
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 27, S. 172–173 · Komposition",
          "text": "Dissonanzen verbinden Konsonanzen und verändern, wie die nachfolgende Konsonanz gehört wird. Zarlino beschreibt den Genuss der Auflösung als Wirkung des vorausgehenden Gegensatzes.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch327"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio IV, S. 70–72 · gebundene Dissonanz",
          "text": "Fux erklärt den Vorhalt als Verzögerung einer Konsonanz. Er lässt die Bindungen in einem Beispiel gedanklich wegfallen. Was dann auf dem schweren Taktteil stünde, ist das Ziel der Auflösung. So kann man auch prüfen, ob die Verzögerungen bloß verbotene Oktavparallelen verdecken.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118119",
          "examples": [
            "fux-vorhalt"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 44–45, Bsp. 59–60 · harmonische und kontrapunktische Dissonanz",
          "text": "Eine Akkordseptime bleibt für Piston Akkordbestandteil, auch wenn sie sich schrittweise auflöst. Ein akkordfremder Ton kann dagegen den melodischen Charakter einer Phrase bestimmen.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        }
      ]
    },
    {
      "id": "kadenz",
      "title": "Was lässt einen Schluss als Kadenz wirken?",
      "group": "Beginn und Kadenz",
      "tags": [
        "Schlussbildung",
        "Klausel",
        "Finalis",
        "Leitton",
        "Tonika"
      ],
      "comparisons": [
        {
          "label": "Kadenzen",
          "modal": "Modaler Klauseltyp (Schrittbewegung, modale Finalis)",
          "tonal": "Leitton–Tonika-Denken implizit",
          "hindemith": "Schlussbildung nach Intervall- und Spannungslogik, nicht primär funktional",
          "comment": "Andere Schlusslogik"
        }
      ],
      "related": [
        "anfangsintervall",
        "kadenz-oberstimme",
        "kadenz-unterstimme"
      ],
      "authors": [
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 53, S. 221–222 · zweistimmige Klausel zum Einklang",
          "text": "Eine Kadenz gliedert für Zarlino auch den gesungenen Text. Bei der verzierten Einklangskadenz führt er die synkopierte Sekunde über die kleine Terz in den Einklang.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch353",
          "examples": [
            "zarlino-kadenz"
          ]
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio II, S. 56–57 · Schluss der zweiten Spezies",
          "text": "Für die zweistimmige Schlussform lässt Fux die Gegenstimme auf den beiden Halben vor dem Schluss über dem Cantus firmus Quinte und große Sexte bilden. Liegt die Gegenstimme unten, lauten die beiden Intervalle Quinte und kleine Terz. Beim Übertragen auf einen anderen Modus wird die Intervallqualität geprüft: Im Beispiel auf S. 60–61 ersetzt Josephus eine verminderte Quinte durch eine Sexte.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118106",
          "examples": [
            "fux-kadenz"
          ]
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. IV, § 47, S. 20, Bsp. 41 · vollständige zweistimmige Phrase",
          "text": "Beide Stimmen können auf dem Grundton in Oktavlage schließen. Goetschius nennt dies die übliche, aber ausdrücklich fakultative Schlussbildung.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=32"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil II, Kap. I, S. 59, zu § 57 · zwei Stimmen, erste Spezies in Dur und Moll",
          "text": "Im Schlusstakt treffen sich beide Stimmen auf der ersten Stufe, im Einklang oder in Oktavlage. Für den vorletzten Takt stehen V oder V⁶ sowie der Sextakkord der VII. Stufe zur Wahl. Bei der letzten Möglichkeit steht in C-Dur ein d im Bass, während die Oberstimme mit h zur Tonika führen kann.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=1"
        }
      ]
    },
    {
      "id": "harmonik",
      "title": "Welches Harmonieverständnis liegt dem Satz zugrunde?",
      "group": "Satzmodelle",
      "tags": [
        "Funktionsharmonik",
        "Terzenschichtung",
        "Hintergrundmodell"
      ],
      "comparisons": [
        {
          "label": "Harmonisches Hintergrundmodell",
          "modal": "Intervallische Vertikalität ohne Funktionsharmonik",
          "tonal": "Implizite Funktionsharmonik",
          "hindemith": "Akkord = Intervallsumme; keine Reduktion auf Terzenschichtung",
          "comment": "Hindemith explizit intervallzentriert"
        }
      ],
      "authors": [
        {
          "name": "Paul Hindemith",
          "work": "Unterweisung im Tonsatz I. Theoretischer Teil (Schott, ED 3600)",
          "locator": "Einlegeblatt · Tabelle zur Akkordbestimmung, erste Seite",
          "text": "Für die Akkordbestimmung trennt Hindemith zunächst Klänge ohne Tritonus von solchen mit Tritonus. Innerhalb der Gruppen unterscheidet er unter anderem nach Sekunden und Septimen sowie nach der Lage des Grundtons. Die Tafel verzeichnet auch unbestimmbare Akkorde.",
          "url": "https://schott-production.s3.eu-central-1.amazonaws.com/public_content/element/33620/dl/ED3600_Unterweisung_im_Tonsatz_Einleger.pdf#page=1"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. IV, §§ 112–115, S. 58–59 · zweistimmig, erste Spezies",
          "text": "Die tiefere Stimme bildet für Prout den Bass einer mitgedachten Harmonie. In C-Dur kann d–f zu einem d-Moll-Dreiklang in Grundstellung oder zu einem verminderten h-Dreiklang in erster Umkehrung gehören. Welche Deutung trägt, entscheidet die Fortschreitung.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=63",
          "examples": [
            "prout-zweiklang"
          ]
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Einleitung, S. 1–3, Bsp. 1–3 · Grundgedanke der Harmonielehre",
          "text": "Goetschius zeigt c, e und g zuerst als Akkord, dann nacheinander als Melodie. Im mehrstimmigen Satz geben die Akkorde den Linien Anhaltspunkte. Sein Beethoven-Beispiel lässt die Stimmen erst einzeln und dann im Zusammenhang lesen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=13"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 40–42, und Kap. V, S. 75–76 · harmonische Deutung einer Linie und eines Zweiklangs",
          "text": "Pistons römische Ziffer bezeichnet den Grundton der Harmonie. Dieser Ton kann in beiden Stimmen fehlen. Bei einer Terz kommen mehrere Grundtöne infrage. Eine hinzugefügte Begleitung kann deshalb die harmonische Deutung desselben Stimmenpaars verändern.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, §§ 58–60, S. 31–32 · einfacher Kontrapunkt",
          "text": "Ab drei Stimmen wird auf dem schweren Taktteil der vollständige Akkord angestrebt. Im dreistimmigen Satz dürfen im Inneren höchstens zwei unvollständige Akkorde stehen, nie unmittelbar nacheinander. Der vorletzte muss vollständig sein. Eine einzige vorübergehende Ausweichung in eine nahe Tonart ist zulässig.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=10"
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Nr. 1, T. 10–11, S. 1 (Remeš 2021, S. 1)",
          "text": "Im letzten Klang von Takt 10 gehört derselbe Basston f zu zwei Stufenzählungen. Er ist die vierte Stufe von C-Dur und die tiefe sechste Stufe von a-Moll. Beim folgenden h lauten die beiden Zahlen sieben und zwei. Försters Stufen zeigen, wie sich der Tonartbezug eines gespielten Basses verändert.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=3",
          "comparison": "Piston bezieht seine römische Ziffer auf den Grundton der Harmonie. Försters Zahl folgt dem gespielten Basston. Bei einem Sextakkord können die beiden Angaben deshalb verschiedene Töne bezeichnen."
        }
      ],
      "reading": "Prout deutet den Zweiklang als Ausschnitt eines möglichen Akkords. Hindemiths Bestimmungstafel ordnet vollständige Klänge unter anderem nach ihrem Tritonusgehalt. Prüfe bei jedem Beleg, welche Töne tatsächlich erklingen und welche ergänzt werden.",
      "related": [
        "harmonischer-rhythmus",
        "generalbass-ziffern-stufen"
      ]
    },
    {
      "id": "beurteilung",
      "title": "Wie beurteile ich eine fertige Übung?",
      "group": "Satzmodelle",
      "tags": [
        "Bewertung",
        "Korrektur",
        "Analyse",
        "Kriterien"
      ],
      "comparisons": [
        {
          "label": "Wie bewertet man eine Übung?",
          "modal": "Prüfe Spezieslegalität: Konsonanzen, Dissonanztypen, Parallelen, Sprungausgleich",
          "tonal": "Prüfe Spezieslegalität + tonale Plausibilität",
          "hindemith": "Prüfe Intervallrang, Spannungsverlauf (Fluktuation), Stimmklarheit",
          "comment": "Unterschiedliche Bewertungskriterien"
        }
      ],
      "authors": [
        {
          "name": "Kris Shaffer",
          "work": "Composing a first-species counterpoint (Musicianship Resources, 2012)",
          "locator": "Einleitung und Independence of the lines · erste Spezies, zwei Stimmen",
          "text": "Singe jede Linie einzeln und prüfe ihren Verlauf. Höre sie anschließend zusammen und achte auf die Intervalle und darauf, ob beide Stimmen erkennbar bleiben. Diese Hörprobe folgt Shaffers Unterscheidung zwischen melodischer Gestalt und Zusammenklang.",
          "url": "https://kshaffer.github.io/musicianshipResources/firstSpecies.html"
        },
        {
          "name": "Paul Hindemith",
          "work": "Unterweisung im Tonsatz I. Theoretischer Teil (Schott, ED 3600)",
          "locator": "Einlegeblatt · Analyse von Bachs dreistimmiger Invention in f-Moll, BWV 795, zweite Seite",
          "text": "An Bachs Invention verfolgt Hindemith die Stufengänge und markiert Zunahme und Höhepunkte der harmonischen Spannung. Die Tafel zeigt den Einsatz dieser Kriterien an einem dreistimmigen Werk. Ihr Gegenstand unterscheidet sich von der zweistimmigen Unterrichtsaufgabe.",
          "url": "https://schott-production.s3.eu-central-1.amazonaws.com/public_content/element/33620/dl/ED3600_Unterweisung_im_Tonsatz_Einleger.pdf#page=2"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 47–48 · Besprechung der ersten Lösung",
          "text": "Josephus nummeriert die Töne und schreibt die Intervalle zwischen die Systeme. So kann er bei jedem Fortschreiten sowohl die beiden Intervallarten als auch die Bewegung der Stimmen benennen. Seine Erklärung der letzten beiden Töne bezieht zusätzlich die Schlussregel ein.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118096",
          "examples": [
            "fux-anfang-oberstimme"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. IV, §§ 131, 133 und 146, S. 64, 68 · zweistimmig, erste Spezies",
          "text": "Prout lässt dasselbe Thema nacheinander in verschiedenen Stimmlagen und Besetzungen bearbeiten. Beim Vergleichen der Lösungen prüft man die melodischen Fortschreitungen, die hörbare Tonart und die Akkordfolge, die zwei Stimmen andeuten.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=68"
        },
        {
          "name": "Percy Goetschius",
          "work": "Exercises in Elementary Counterpoint (New York, G. Schirmer, 5. Aufl., © 1910)",
          "locator": "Kap. IV, §§ 44–46, S. 18–20, Bsp. 37–40 · zweistimmige Übung",
          "text": "Spiele oder singe den hinzugefügten Kontrapunkt allein. Goetschius zeigt, dass jede Vertikale konsonieren und die hinzugefügte Linie dennoch schlecht geführt sein kann. Vergleiche anschließend mehrere Lösungen zum selben gegebenen Satz.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=30"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. I, S. 23–24, Students’ Work · Ausführung der Melodieaufgaben",
          "text": "Piston prüft zuerst, ob die Musik die gestellte Aufgabe erfüllt. Die Lernenden wählen ein Instrument, dessen Klang und Umfang sie kennen, und legen Tempo und Dynamik fest. So lässt sich die entworfene Linie in der vorgesehenen Ausführung beurteilen.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Vorwort, S. 5, und Teil I, § 15, S. 14 · Ziel der Satzarbeit",
          "text": "Jede Stimme soll beweglich bleiben, sich von den anderen unterscheiden und Abwechslung bieten. Beim Hinzutreten weiterer Stimmen gelten bestimmte Erleichterungen. Ob eine davon an der konkreten Stelle greift, hängt davon ab, wie viele Stimmen dort bereits singen.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch1Ppes.pdf#page=4"
        }
      ],
      "related": [
        "rhythmische-selbststaendigkeit"
      ]
    },
    {
      "id": "cambiata",
      "title": "Wie verlässt die Nota cambiata ihre Dissonanz?",
      "group": "Dissonanz",
      "tags": [
        "Cambiata",
        "Wechselnote",
        "Terzsprung",
        "Figur",
        "vier gegen eins",
        "Palestrina"
      ],
      "comparisons": [],
      "related": [
        "dissonanzaufloesung",
        "sprung-in-dissonanz",
        "dissonanzfolgen-s3"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio III, S. 64–65 · Cambiata der dritten Spezies",
          "text": "Bei Fux führt ein Schritt von der Oktave in die Septime. Die Oberstimme überspringt die Sexte zunächst und holt sie erst nach der konsonanten Quinte nach. Singe die Folge 8–7–5–6 und dann eine Version mit lückenlosem Abstieg.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118114",
          "examples": [
            "fux-cambiata"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "Cours de contrepoint et de fugue / Theorie des Contrapunktes und der Fuge (Leipzig/Paris, deutsch-französische Ausgabe, um 1835)",
          "locator": "Dritte Gattung, S. 19, Bsp. 51–55 · vier Viertel gegen eine ganze Note",
          "text": "Cherubini dokumentiert, dass ältere Komponisten eine Dissonanz durch Terzsprung verlassen. Als Muster für den strengen Satz lehnt er diese Freiheit ab. Seine Gegenüberstellung ersetzt in der Oberstimme die Septime durch eine Sexte.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/0/03/Cours_de_contrepoint_et_de_fugue_%28IA_imslp-de-contrepoint-et-de-fugue-cherubini-luigi%29.pdf#page=20",
          "examples": [
            "cherubini-52-53-cambiata"
          ]
        },
        {
          "name": "Heinrich Bellermann",
          "work": "Der Contrapunkt (Berlin, Julius Springer, 4. Aufl., 1901)",
          "locator": "Dritte Gattung, S. 161–164 · zweistimmige Übung und vierstimmige Motette",
          "text": "Bei der Cambiata darf die Stimme aus der unbetonten Dissonanz eine Terz abwärts springen. Bellermann begründet die Figur mit der Sanglichkeit und widerspricht Cherubinis Ablehnung. Als Beleg aus dem Repertoire druckt er einen vierstimmigen Ausschnitt aus Palestrinas Motette ab.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=192",
          "examples": [
            "bellermann-164-palestrina"
          ]
        },
        {
          "name": "John Rothgeb",
          "work": "The Third Species of Counterpoint (Music 103, 1995)",
          "locator": "Regel 6 · dritte Spezies, zwei Stimmen",
          "text": "Die Figur beginnt auf dem ersten oder dritten Viertel. Ihr zweiter Ton ist eine schrittweise erreichte Dissonanz. Eine gleichgerichtete Terz führt zur Konsonanz, dann folgen zwei Schritte in Gegenrichtung. Auch der fünfte Ton muss konsonant sein.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Third_Species(2v).html"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. III, S. 55–58, Bsp. 81 und 86 · Terminologie der tonalen Verzierung",
          "text": "Pistons Grundform verziert einen Sekundschritt. Die rhythmisch leichte Zwischennote wird durch einen Terzsprung erreicht und schrittweise verlassen. Für die Figur mit Schritt hinein und Terzsprung zurück zum Ziel verwendet er den Namen Échappée.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "comparison": "Bei Fux und Rothgeb wird die Dissonanz schrittweise erreicht und im Terzsprung verlassen. Pistons Grundform kehrt die Reihenfolge um. Singe zum Vergleich h–d–c aus seinem Beispiel 86 und die mit 8–7–5 bezeichnete Stelle bei Fux."
        }
      ],
      "reading": "Singe Fux’ 8–7–5–6 und dann Cherubinis Variante 8–6–5–6. Nur ein Ton ändert sich. Prüfe an Bellermanns Palestrina-Beispiel, worauf er seinen Widerspruch zu Cherubini stützt."
    },
    {
      "id": "einklang",
      "title": "Wo darf im Verlauf ein Einklang stehen?",
      "group": "Stimmführung",
      "tags": [
        "Einklang",
        "Prime",
        "Unisono",
        "Stimmabstand"
      ],
      "comparisons": [],
      "related": [
        "anfangsintervall",
        "stimmkreuzung",
        "konsonanz"
      ],
      "authors": [
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 41, S. 194–195 · Gebrauch im Verlauf",
          "text": "Zarlino rät zu sparsamem Gebrauch. Er gestattet Einklänge, wenn die melodische Führung sie nahelegt, und empfiehlt dazwischen andere Konsonanzen.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#ch341"
        },
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Regel 6 · erste Spezies, zwei Stimmen",
          "text": "Der Einklang ist auf den ersten und den letzten Takt beschränkt.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 53–54 · erste Spezies, Zusammenklang",
          "text": "Im Inneren des Note-gegen-Note-Satzes schließt Aloysius den Einklang aus. Er zeigt, wie bei der schrittweisen Annäherung aus der Terz die beiden Stimmen in einem Ton aufgehen. Anfang und Ende der Übung nimmt er von dieser Regel aus.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118102",
          "examples": [
            "fux-einklang"
          ]
        },
        {
          "name": "John Rothgeb",
          "work": "The Second Species of Counterpoint (Music 103, 1993)",
          "locator": "Regel 7 · zweite Spezies, Inneres der Übung",
          "text": "In der Übung mit zwei Halben pro Takt lässt Rothgeb den Einklang im Taktinneren auf der leichten Halben zu.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Second_Species(2v).html"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 81–82, Bsp. 121–122 · Zweistimmigkeit im Repertoire",
          "text": "Kurze Einklänge im Inneren kommen häufig vor. Piston vermeidet besonders die schrittweise Annäherung an einen Liegeton. Das Verlassen des Einklangs im Schritt ist gebräuchlich.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "comparison": "Der Einklang im Inneren, den Fux für Note gegen Note ausschließt, gehört bei Piston zum Repertoire. Bei Rothgeb ändert sich seine Zulässigkeit bereits zwischen erster und zweiter Spezies."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. IV, § 53, S. 29–30 · metrische Lage und Stimmenzahl",
          "text": "Im zweistimmigen Satz darf ein Einklang im Inneren auf leichtem Taktteil stehen. Auf schwerem Taktteil ist er Anfang und Ende vorbehalten. Vierstimmig kann er aus melodischen Gründen zwischen den beiden Unterstimmen vorkommen, ab fünf Stimmen auch zwischen anderen Paaren. Gerades Eintreten in den Einklang bleibt verboten.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=7",
          "examples": [
            "gallon-bitsch-nr-93-94"
          ]
        }
      ]
    },
    {
      "id": "cantus-firmus",
      "title": "Wie schreibe ich einen Cantus firmus für die Übung?",
      "group": "Melodieführung",
      "tags": [
        "Cantus firmus",
        "c.f.",
        "Umfang",
        "Finalis",
        "Tonwiederholung"
      ],
      "comparisons": [],
      "related": [
        "hoehepunkt",
        "melodische-intervalle",
        "tonwiederholung",
        "doppelchor-basslinien",
        "speziesmischung"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The Cantus Firmus (Music 103, 1998)",
          "locator": "Regeln 1–5, 9 und 17 · Cantus firmus in Dur",
          "text": "Die einstimmige Übung beginnt und endet auf derselben Tonika in derselben Lage. Sie besteht aus gleich langen diatonischen Tönen und bleibt innerhalb einer Dezime. Rothgeb bevorzugt acht bis fünfzehn Töne.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Cantus_Firmus.html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 45 · erste zweistimmige Aufgabe, Cantus firmus allein",
          "text": "Fux lässt zwei Wege offen. Man kann die Ausgangsmelodie erfinden oder einem Choralbuch entnehmen. Die erste Aufgabe gibt die Linie bereits vor. Sie beginnt auf d, erreicht a und schließt mit e–d. Die Gegenstimme wird anschließend zu jedem ihrer Töne gesucht.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118094",
          "examples": [
            "fux-cantus-d"
          ]
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 3–4 und 14, S. 11 und 14 · gegebene Übungsmelodie",
          "text": "Die vorgegebene Melodie steht in langen, gleich großen Notenwerten. Dieselbe Aufgabe wird mit dem Cantus firmus in verschiedenen Stimmlagen bearbeitet. Beim Wechsel der Lage darf die Melodie transponiert werden. Für den Doppelchor treten zwei gegebene Basslinien an ihre Stelle.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch1Ppes.pdf#page=1",
          "examples": [
            "gallon-bitsch-nr-1-2"
          ]
        }
      ]
    },
    {
      "id": "tonwiederholung",
      "title": "Darf die Gegenstimme denselben Ton wiederholen?",
      "group": "Melodieführung",
      "tags": [
        "Tonwiederholung",
        "Repetition",
        "Cantus firmus"
      ],
      "comparisons": [],
      "related": [
        "cantus-firmus",
        "bindung-s4"
      ],
      "authors": [
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Regel 2 · erste Spezies, hinzugefügte Stimme",
          "text": "Im Cantus firmus schließt Rothgeb unmittelbare Tonwiederholung aus. Für die hinzugefügte Stimme in der ersten Spezies erlaubt er sie ausdrücklich.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        },
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio I, S. 47–48 · erste Spezies, erste D-Aussetzung",
          "text": "Josephus schreibt für die ersten beiden Töne seiner Gegenstimme zweimal a. Über dem von d nach f steigenden Cantus firmus wird so aus der Quinte eine Terz. Josephus erklärt die Stelle als Seitenbewegung, und Aloysius billigt seine Lösung.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118096",
          "examples": [
            "fux-anfang-oberstimme"
          ]
        },
        {
          "name": "John Rothgeb",
          "work": "The Second Species of Counterpoint (Music 103, 1993)",
          "locator": "Regel 8 · zweite Spezies, Halbenstimme",
          "text": "Sobald zwei Halbe gegen eine Ganze stehen, darf die Halbenstimme weder im Takt noch über den Taktstrich hinweg denselben Ton neu anschlagen.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/Second_Species(2v).html"
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. I, S. 24, Students’ Work · einstimmige instrumentale Melodieübung",
          "text": "Piston rät, unmittelbare Wiederholungen sparsam einzusetzen. Auch ein einzelner Ton soll nicht unverhältnismäßig viel Gewicht bekommen. Die Übung gilt der durchgehenden Kontur einer längeren Phrase.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. III, § 31 mit Anm. 1, S. 20 · nach Stimmenzahl",
          "text": "In zwei Stimmen darf keine Stimme denselben Ton zweimal nacheinander anschlagen. Ab drei Stimmen darf zwischen vorletztem und letztem Takt ausnahmsweise eine Halbe oder Viertel wiederholt werden. Die Wiederholung ganzer Noten in der ersten Spezies erlauben die Autoren erst ab fünf Stimmen und nur sparsam.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch3melod.pdf#page=3",
          "comparison": "In derselben zweistimmigen ersten Spezies lässt Rothgeb den wiederholten Ton der Gegenstimme ausdrücklich zu. Bei Fux billigt Aloysius das zweimal angeschlagene a. Noël-Gallon und Bitsch schließen beides für diese Besetzung aus."
        }
      ]
    },
    {
      "id": "fuge-reale-tonale-antwort",
      "title": "Wann ist die Antwort real, wann tonal?",
      "group": "Fuge",
      "tags": [
        "Dux",
        "Comes",
        "reale Antwort",
        "tonale Antwort",
        "Beantwortung",
        "real answer",
        "tonal answer",
        "Mutation",
        "Thema"
      ],
      "comparisons": [],
      "reading": "Der Dux stellt das Thema vor. Der Comes beantwortet es in einer anderen Stimme. Bei einer realen Antwort bleiben Größe und Richtung der melodischen Intervalle erhalten. Eine tonale Antwort passt einzelne Intervalle an das Verhältnis von Tonika und Dominante an. Singe zum Vergleich die ersten vier Töne der C-Dur- und der c-Moll-Fuge aus Bachs erstem Wohltemperierten Klavier.",
      "related": [
        "fuge-quintsprung",
        "fuge-antwortintervall",
        "fuge-modulierendes-thema"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. III, §§ 55–59, S. 18–19 · Vergleich zweier Themeneinsätze",
          "text": "Bei einer realen Antwort bleibt die Intervallfolge beim Versetzen erhalten. In Mozarts G-Dur-Quartett wird die Anfangsterz g–h in der Antwort zur Sekunde d–e. An Bachs E-Dur-Fuge zeigt Prout außerdem, dass eine längere Schlussnote die Einordnung als reale Antwort zulässt.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=34",
          "examples": [
            "fuge-prout-bach-mozart-antwort"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "Abschnitte On Tonal Fugue und On Real Fugue, S. 66–67, Bsp. 203 · Lehrmodell und Beispiel von Padre Martini",
          "text": "Cherubini ordnet auch die Fugen selbst nach der Antwort. Für die Realfuge beginnt sein Thema auf der Tonika und wendet sich zunächst einer anderen Harmonie als der Dominante zu. Die Antwort auf der Quinte übernimmt seine melodische Gestalt. Eine tonale Antwort richtet die Intervalle nach dem Wechsel von Tonika und Dominante ein.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=73",
          "examples": [
            "fuge-cherubini-martini-real"
          ]
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge I in C-Dur, BWV 846",
          "locator": "T. 1–4, Alt und Sopran · Notenbefund, Bach-Gesellschaft, S. 4",
          "text": "Auf die Altstimme antwortet der Sopran eine reine Quinte höher. Aus c–d–e–f wird g–a–h–c. Auch die Sprünge, die punktierte Achtel und die beiden Zweiunddreißigstel behalten ihre Gestalt.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=4",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-846-antwort"
          ]
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge II in c-Moll, BWV 847",
          "locator": "T. 1–4, Alt und Sopran · Notenbefund, Bach-Gesellschaft, S. 8",
          "text": "Der Alt springt nach c–h–c eine Quarte abwärts zum g. Im Sopran folgt auf g–fis–g ein Quintfall zum c. Eine unveränderte Quinttransposition hätte hier d ergeben. Schon dieser vierte Ton macht die tonale Anpassung hörbar.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=8",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-847-tonale-antwort"
          ]
        }
      ]
    },
    {
      "id": "fuge-antwortintervall",
      "title": "Muss der Comes eine Quinte höher einsetzen?",
      "group": "Fuge",
      "tags": [
        "Einsatzintervall",
        "Quinte",
        "Quarte",
        "Dominante",
        "Subdominante",
        "Tonart",
        "Register"
      ],
      "comparisons": [],
      "reading": "Vergleiche zwei Abstände getrennt. Der erste liegt zwischen den Anfangstönen von Dux und Comes, der zweite innerhalb des Themas. Eine Quinte aufwärts und eine Quarte abwärts erreichen dieselbe Tonklasse. Für die Tonart der Antwort ist auch der weitere Verlauf wichtig.",
      "related": [
        "fuge-reale-tonale-antwort",
        "fuge-quintsprung"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. III, §§ 55–56 und 71–72, S. 18 und 26–27 · Wahl der Antworttonart",
          "text": "Tonika und Dominante bilden bei Prout das häufigste Paar. Er belegt aber auch Antworten in der Subdominante. In Bachs Kantate „Der Himmel lacht“ hört er das Thema in C-Dur und die Antwort in F-Dur. Hier ist die Tonart der ganzen Linie entscheidend.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=42",
          "examples": [
            "fuge-prout-bach-subdominante"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "On Real Fugue und On Fugue of Imitation, S. 67–68 · Unterscheidung zweier Fugenarten",
          "text": "Für die Realfuge nennt Cherubini die Quinte als Antwortstufe. Daneben beschreibt er eine eigene Kategorie, die „fugue of imitation“. In diesem freieren Satz können Einsatzabstand und Einsatzzeitpunkt wechseln. Zu den möglichen Intervallen zählt er ausdrücklich auch Terz, Sexte, Sekunde und Septime.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=74"
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge I in C-Dur, BWV 846",
          "locator": "T. 1–4 · Notenbefund, Bach-Gesellschaft, S. 4",
          "text": "Der Sopran beginnt die Antwort auf g eine Quinte über dem Anfangston c des Alts. Der Tenor übernimmt dieselbe Antwort eine Oktave tiefer als der Sopran. Gegenüber dem ersten c liegt sein g damit eine Quarte tiefer.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=4",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-846-antwort"
          ]
        }
      ]
    },
    {
      "id": "fuge-quintsprung",
      "title": "Wird aus dem Quintsprung des Themas in der Antwort eine Quarte?",
      "group": "Fuge",
      "tags": [
        "Mutation",
        "Mutatio",
        "Tonika",
        "Dominante",
        "Quinte",
        "Quarte",
        "Quintfall",
        "Quintsprung",
        "Skalenstufe"
      ],
      "comparisons": [],
      "reading": "Spiele den Themenkopf c–g zuerst mit der Antwort g–d, dann mit g–c. Die zweite Lösung führt zur Tonika der Ausgangstonart zurück. Prüfe an Prouts beiden Bach-Beispielen, welche Quinte tatsächlich verändert wird.",
      "related": [
        "fuge-reale-tonale-antwort",
        "fuge-modulierendes-thema",
        "fuge-wechselnde-antwort"
      ],
      "authors": [
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "On Tonal Fugue, S. 66, Bsp. 200–201 · Schemata für den Themenkopf",
          "text": "Für das Quintthema c–g gibt Cherubini die Quarte g–c als Antwort. Er lässt auch vom Dominantton aus denken. Beginnt das Thema auf der Dominante und bewegt sich zur Tonika, tauschen die beiden Funktionen in der Antwort ebenfalls die Plätze.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=72",
          "examples": [
            "fuge-cherubini-quinte-quarte"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. III, §§ 88–91, S. 33–35 · zwei verschiedene Lösungen bei Bach",
          "text": "Prout vergleicht die tatsächlichen Antworten bei Bach. In der Es-Dur-Fuge aus dem zweiten Teil des Wohltemperierten Klaviers wird nur das erste b des Themas mit es beantwortet. Die späteren b erhalten f. In der g-Moll-Orgelfuge bleibt dagegen schon die erste aufsteigende Quinte als Quinte erhalten.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=49",
          "examples": [
            "fuge-prout-bach-es-tonal",
            "fuge-prout-bach-g-real"
          ]
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge VIII in dis-Moll, BWV 853",
          "locator": "T. 1–3, Alt und Sopran · Notenbefund, Bach-Gesellschaft, S. 34",
          "text": "Der erste Sprung im Alt führt von dis nach ais und verbindet so Tonika und Dominante. Der Sopran beginnt auf ais und springt eine Quarte aufwärts nach dis. Das zweite Ziel ist wieder der Grundton der Fuge.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=34",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-853-quintsprung"
          ]
        }
      ]
    },
    {
      "id": "fuge-modulierendes-thema",
      "title": "Wie antworte ich auf ein Thema, das zur Dominante moduliert?",
      "group": "Fuge",
      "tags": [
        "Modulation",
        "Dominanttonart",
        "Doppeldominante",
        "Mutation",
        "Tonika",
        "Leitton"
      ],
      "comparisons": [],
      "reading": "Notiere für den Dux die Ausgangs- und die Zieltonart. Transponiere den ganzen Dux probeweise eine Quinte hinauf. Vergleiche das erreichte Ziel mit der gedruckten Antwort und suche den ersten Ton, an dem sich die Wege trennen.",
      "related": [
        "fuge-reale-tonale-antwort",
        "fuge-quintsprung",
        "fuge-wechselnde-antwort"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. IV, §§ 114–119, S. 49–50 · Thema mit Schluss in der Dominanttonart",
          "text": "Führt das Thema von der Tonika in die Dominanttonart, soll die Antwort in der Dominante beginnen und an der entsprechenden Stelle zur Tonika zurücklenken. Eine durchgehende Quinttransposition würde in der Dominante der Dominante landen. Prout unterscheidet die am neuen Leitton erkennbare Modulation von einer durch die Schlusswendung nahegelegten.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=65",
          "examples": [
            "fuge-prout-doppeldominante"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "On Tonal Fugue, S. 67, rechte Spalte · nach Tonarten gegliederte Phrasen",
          "text": "Cherubini teilt das Thema in Phrasen und hört, welchem Akkord oder welcher Tonart sie angehören. In seinem Beispiel entsprechen den Abschnitten in C und G die Abschnitte in G und C der Antwort. Der Wechsel des Bezugssystems erklärt, wo sich die Intervalle verändern.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=73",
          "examples": [
            "fuge-cherubini-tonarten"
          ]
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge VII in Es-Dur, BWV 852",
          "locator": "T. 1–4, Sopran und Alt · Notenbefund, Bach-Gesellschaft, S. 30",
          "text": "Der Sopran beginnt auf b, der Dominante von Es-Dur. Vor der Achtelpause bleibt der Kopf im Bereich von Es-Dur. Danach erscheint a als Leitton zu b, dem Ziel des Themas in Takt 2. Die Antwort beginnt auf es und führt in Takt 4 nach es zurück. Vergleiche die Anfangsintervalle und die Töne beiderseits der Achtelpause.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=30",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-852-modulation"
          ]
        }
      ]
    },
    {
      "id": "fuge-wechselnde-antwort",
      "title": "Kann die Beantwortung innerhalb einer Fuge wechseln?",
      "group": "Fuge",
      "tags": [
        "reale und tonale Antwort",
        "Mutation",
        "gemischte Antwort",
        "wechselnde Antworten"
      ],
      "comparisons": [],
      "reading": "Bei Cherubini ändert sich das Verfahren innerhalb einer Antwort. Prout legt zwei verschiedene Antworten auf dasselbe Thema nebeneinander. Markiere die veränderten Intervalle. Welche Antwort bewahrt die Intervallfolge durchgehend?",
      "related": [
        "fuge-reale-tonale-antwort",
        "fuge-modulierendes-thema",
        "fuge-exposition"
      ],
      "authors": [
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "On Real Fugue, S. 68, Bsp. 204 · Wechsel innerhalb einer Antwort",
          "text": "Ein Thema kann für Cherubini real beginnen und erst gegen Ende die Merkmale der tonalen Fuge annehmen. Er teilt Beispiel 204 ausdrücklich in zwei Abschnitte. Entsprechend wechselt die Behandlung innerhalb ein und derselben Antwort.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=74",
          "examples": [
            "fuge-cherubini-abschnittswechsel"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. III, §§ 108–109, S. 46 · zwei Antworten innerhalb derselben Exposition",
          "text": "Prout stellt in Bachs A-Dur-Orgelfuge zwei Antworten auf dasselbe Thema gegenüber. Schon innerhalb der Exposition ist die erste tonal und die zweite real. Bei der ersten ist außerdem der Anfangston verkürzt. Das lässt sich getrennt von der Änderung des Tonhöhenverlaufs prüfen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=62",
          "examples": [
            "fuge-prout-zwei-antworten"
          ]
        }
      ]
    },
    {
      "id": "fuge-themenende",
      "title": "Wo endet das Fugenthema, wenn die nächste Stimme schon einsetzt?",
      "group": "Fuge",
      "tags": [
        "Themengrenze",
        "Themenende",
        "Themenkopf",
        "Phrasierung",
        "Themenlänge",
        "BWV 872"
      ],
      "comparisons": [],
      "reading": "In Bachs Cis-Dur-Fuge BWV 872 schlagen Prout und Keller zwei verschiedene Endtöne vor. Spiele die ersten vier Basstöne und dann die ersten acht. Welche Grenze hörst du am Anfang, und welche Gestalt erkennst du später wieder?",
      "related": [
        "fuge-engfuehrung",
        "fuge-kontrasubjekt",
        "fuge-exposition"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Analysis of J. S. Bach’s Forty-Eight Fugues (hg. Louis B. Prout, London, Edwin Ashdown, 1910)",
          "locator": "Fuge Nr. 27, S. 55–56 · WTK II, Cis-Dur, BWV 872",
          "text": "Prout grenzt das Thema auf die ersten vier Basstöne ein. Er begründet seine Lesart mit der späteren Verarbeitung. In seiner Analyse druckt er genau die vier Töne als selbstständiges Thema ab.",
          "url": "https://waltercosand.com/CosandScores/Composers%20L-P/Composers_P/Prout%2C%20Ebenezer/Prout-Analysis_of_Bach%27s_48_Fugues.pdf#page=60",
          "examples": [
            "fuge-prout-bwv872-vier-toene"
          ]
        },
        {
          "name": "Hermann Keller",
          "work": "Das Wohltemperierte Klavier von Johann Sebastian Bach. Werk und Wiedergabe (Kassel, Bärenreiter, 1965)",
          "locator": "WTK II, Cis-Dur, BWV 872, S. 130 · Deutung der Themenlänge",
          "text": "Keller hört den achten Ton, cis, als Ende des Themas. Die ersten vier Töne erkennt auch er als Kern der späteren Arbeit. Für die Gliederung des Anfangs fasst er die Basslinie aber länger. Die Vergrößerungen in Takt 25 und 27 beziehen sich nach seiner Lesart auf die ersten vier Töne.",
          "url": "https://www.hermann-keller.org/assets/downloads/547e2aeb/bwv872.pdf#page=3"
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das Wohltemperirte Clavier II, Fuga III in Cis-Dur, BWV 872 (Bach-Gesellschaft, Bd. 14, hg. Franz Kroll, Leipzig, 1866)",
          "locator": "S. 102, T. 1–2 · Partiturbeobachtung und redaktionelle Markierung",
          "text": "Der Bass beginnt nach einer Achtelpause. Wenn die Oberstimme einsetzt, läuft seine Linie weiter. Spiele den Bass zweimal und halte an den beiden markierten Stellen inne. Spiele dann beide Stimmen und höre, wie früh die Imitation einsetzt.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/4/4b/IMSLP173660-PMLP05899-2.pdf#page=14",
          "kind": "partitur",
          "examples": [
            "fuge-bach-bwv872-themengrenze"
          ]
        }
      ]
    },
    {
      "id": "fuge-kontrasubjekt",
      "title": "Woran erkenne ich ein festes Kontrasubjekt?",
      "group": "Fuge",
      "tags": [
        "Gegensatz",
        "Kontrasubjekt",
        "Gegenthema",
        "Countersubject",
        "doppelter Kontrapunkt",
        "vertauschbar",
        "obligater Kontrapunkt",
        "freier Kontrapunkt"
      ],
      "comparisons": [],
      "reading": "Verfolge die Gegenstimme über mehrere Themeneinsätze hinweg. Kehrt dieselbe melodisch-rhythmische Gestalt wieder? Kann sie sowohl über als auch unter dem Thema stehen? Vergleiche die Forderung der Schulfuge mit der Verwendung in Bachs c-Moll-Fuge.",
      "related": [
        "fuge-exposition",
        "fuge-themenende",
        "fuge-zwischenspiel",
        "doppelter-kontrapunkt"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. V, §§ 159–162 und 176, S. 72–73 und 80 · Definition und Bach-Beispiele",
          "text": "Ein Kontrasubjekt kehrt als Gegenstimme zum Thema oder zur Antwort wieder. Einzelne Einsätze dürfen ohne es auskommen. Prout sucht einen eigenen Rhythmus und eine Linie, die sich mit dem Thema im doppelten Kontrapunkt vertauschen lässt. Für eine ganze Fuge hält er ein festes Kontrasubjekt für entbehrlich.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=88",
          "examples": [
            "fuge-prout-bach-kontrasubjekt"
          ]
        },
        {
          "name": "André Gédalge",
          "work": "Traité de la fugue. De la fugue d’école (Paris, Enoch, 1901)",
          "locator": "Titel IV, §§ 105–106, S. 59–60 · Entwurf für die Schulfuge",
          "text": "Gédalge verlangt für das Kontrasubjekt der Schulfuge eine in der Oktave oder Doppeloktave vertauschbare Gegenstimme, die das Thema bei jedem Einsatz begleitet. Ihr Rhythmus soll den des Themas ergänzen. Freie Stimmen können dagegen bei jedem Einsatz anders geführt werden, wie die Setzmodelle in Titel V zeigen.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=71",
          "examples": [
            "fuge-gedalge-bach-contresujet"
          ]
        },
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "„On Counter-subject“, S. 64–65 · Lehre und Setzbeispiele",
          "text": "Cherubini lässt einen oder mehrere Gegenkontrapunkte zu und bevorzugt ihre gestaffelte Einführung. Beginnt der Gegenkontrapunkt erst später, dürfen einzelne Töne den Erfordernissen der Stimmen angepasst werden. Der doppelte Kontrapunkt soll den Lagentausch ermöglichen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=70"
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge II in c-Moll, BWV 847",
          "locator": "T. 3–4 und 7–8 · Notenbefund, Bach-Gesellschaft, S. 8",
          "text": "Sobald der Sopran in Takt 3 antwortet, führt der Alt eine absteigende Sechzehntelfigur und anschließend eine Achtellinie dagegen. Beim Themeneinsatz des Basses in Takt 7 übernimmt der Sopran diese Gegenstimme. Ihr Wechsel der Lage lässt sie als wiederkehrenden Kontrapunkt erkennen.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=8",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-847-kontrasubjekt"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. IX, S. 169 und 176, Bsp. 258 und 270 · vertauschbarer Kontrapunkt",
          "text": "Piston erklärt den Nutzen des Oktavtauschs für Thema und Kontrasubjekt. Beide Linien bleiben in engem Raum vertauschbar. Als weitergehenden Fall nennt er Bachs g-Moll-Fuge BWV 885, deren Sechzehntel-Gegenstimme auch in der Dezime oder Duodezime verwendet werden kann.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-bach-bwv885-kontrasubjekt"
          ],
          "comparison": "Gédalge fordert in der Schulfuge die Vertauschbarkeit in der Oktave oder Doppeloktave. Prouts Analyse von BWV 885 lokalisiert auch die von Piston genannten anderen Vertauschungen. Die Stellen sind über die Frage zum doppelten Kontrapunkt verlinkt."
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, § 104, S. 50 · Kontrasubjekt und Stimmtausch",
          "text": "Zum Hauptthema der Fuge können ein oder mehrere Nebenthemen als Kontrasubjekte treten. Da Thema und Kontrasubjekte durch die verschiedenen Stimmen wandern, setzen die Autoren ihre Vertauschbarkeit voraus.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch9imitPpes.pdf#page=2"
        }
      ]
    },
    {
      "id": "fuge-exposition",
      "title": "Wie viele Einsätze braucht die Exposition und in welcher Reihenfolge?",
      "group": "Fuge",
      "tags": [
        "Erste Durchführung",
        "Stimmenzahl",
        "Einsatzfolge",
        "Exposition",
        "zusätzlicher Einsatz",
        "Schulfuge"
      ],
      "comparisons": [],
      "reading": "Zeichne für jede Stimme eine Zeile und trage Dux oder Comes beim jeweiligen Einsatz ein. Prout und Gédalge ziehen bei der zweistimmigen Fuge an verschiedenen Stellen den Schlussstrich. Vergleiche anschließend die Einsatzfolge in Bachs vierstimmiger C-Dur-Fuge.",
      "related": [
        "fuge-reale-tonale-antwort",
        "fuge-gegenexposition",
        "fuge-zwischenspiel"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. VI, §§ 178–186, S. 81–83 · zwei bis vier Stimmen",
          "text": "Prout verfolgt die ersten Einsätze durch alle Stimmen. Zweistimmig genügt ihm die Folge Thema–Antwort. In der dreistimmigen Fuge kann nach den ersten drei Einsätzen ein weiterer folgen. Für vier Stimmen empfiehlt er als letzten Einsatz möglichst eine Außenstimme, weil das Thema dort besser hörbar ist.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=97"
        },
        {
          "name": "André Gédalge",
          "work": "Traité de la fugue. De la fugue d’école (Paris, Enoch, 1901)",
          "locator": "Titel V, §§ 126–128 und 133–134, S. 70–71, sowie §§ 140–142, S. 73–74 · Schulfuge",
          "text": "Gédalge verlangt in der Schulfuge mindestens vier abwechselnde Einsätze, auch bei nur zwei Stimmen. Beide Stimmen tragen dann je einmal Thema und Antwort vor. Passt die sofortige Antwort metrisch oder tonal schlecht, überbrückt eine Coda des Themas den Abstand.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=82",
          "examples": [
            "fuge-gedalge-exposition-zwei-stimmen",
            "fuge-gedalge-coda-du-sujet"
          ]
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge I in C-Dur, BWV 846",
          "locator": "T. 1–6, erste Einsätze aller vier Stimmen · Notenbefund, Bach-Gesellschaft, S. 4",
          "text": "Die ersten Einsätze folgen im Alt (c), Sopran (g), Tenor (g) und Bass (c). Der Tenor wiederholt also die Antwort des Soprans in tieferer Lage. Erst der Bass bringt das Thema wieder auf der Tonikastufe.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=4",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-846-antwort"
          ]
        }
      ]
    },
    {
      "id": "fuge-gegenexposition",
      "title": "Wann bildet eine zweite Einsatzgruppe eine Gegenexposition?",
      "group": "Fuge",
      "tags": [
        "Gegenexposition",
        "contre-exposition",
        "counter-exposition",
        "Durchführung",
        "Einsatzgruppe",
        "Rollenwechsel"
      ],
      "comparisons": [],
      "reading": "Vergleiche die Rollen der Stimmen vor und nach dem Ende der ersten Exposition. Welche Stimme wechselt vom Dux zum Comes? Prüfe dann, wie viele Einsätze die Autoren zur zweiten Gruppe zählen.",
      "related": [
        "fuge-exposition",
        "fuge-zwischenspiel",
        "fuge-engfuehrung"
      ],
      "authors": [
        {
          "name": "André Gédalge",
          "work": "Traité de la fugue. De la fugue d’école (Paris, Enoch, 1901)",
          "locator": "Titel VI, §§ 177–183, S. 108–110 · Gegenexposition der Schulfuge",
          "text": "Für Gédalge hat die fakultative Gegenexposition genau zwei Einsätze. Zuerst kommt die Antwort in einer Stimme, die zuvor das Thema hatte. Dann folgt das Thema in einer früheren Antwortstimme. Zwischen Exposition und Gegenexposition steht ein kurzes Zwischenspiel.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=120",
          "examples": [
            "fuge-gedalge-gegenexposition"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. VI, §§ 207–211, S. 89–91 · Begriff anhand des Repertoires",
          "text": "Prout beschreibt eine zweite Einsatzgruppe in denselben Tonarten. Sie kann unmittelbar folgen oder durch eine Episode abgesetzt sein. Oft tauschen die Stimmen ihre Rollen. Bei einer partiellen Gegenexposition erhält mindestens eine Stimme weder Thema noch Antwort. Eine Gegenexposition ist für Prout fakultativ.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=106"
        },
        {
          "name": "Ebenezer Prout",
          "work": "Analysis of J. S. Bach’s Forty-Eight Fugues (hg. Louis B. Prout, London, Edwin Ashdown, 1910)",
          "locator": "Fuge Nr. 9, S. 29–30 · WTK I, E-Dur, BWV 854, T. 6–10",
          "text": "In Bachs E-Dur-Fuge bezeichnet Prout drei Einsätze als Gegenexposition. In der Exposition hatte der Sopran die Antwort, Alt und Bass das Thema. Jetzt wechseln die Rollen. Der Sopran bringt das Thema, danach folgen zwei Antworten in Alt und Bass.",
          "url": "https://waltercosand.com/CosandScores/Composers%20L-P/Composers_P/Prout%2C%20Ebenezer/Prout-Analysis_of_Bach%27s_48_Fugues.pdf#page=34"
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge IX in E-Dur, BWV 854",
          "locator": "T. 5–12 · Notenbefund, Bach-Gesellschaft, S. 37",
          "text": "Im zweiten gedruckten System wandert der Themenkopf vom Sopran in den Alt. Im dritten übernimmt ihn der Bass. Singe jede Stimme getrennt und bestimme, welche von ihnen auf e und welche auf h einsetzt.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=37",
          "kind": "partitur",
          "examples": [
            "fuge-bach-bwv854-gegenexposition"
          ]
        }
      ]
    },
    {
      "id": "fuge-zwischenspiel",
      "title": "Wie unterscheide ich Codetta und Zwischenspiel?",
      "group": "Fuge",
      "tags": [
        "Codetta",
        "Coda",
        "Zwischenspiel",
        "Episode",
        "Divertissement",
        "Sequenz",
        "Themenkopf"
      ],
      "comparisons": [],
      "reading": "Höre in Bachs c-Moll-Fuge BWV 847 zuerst die Überleitung vor dem ersten Basseinsatz, dann die Takte nach diesem Einsatz. Der Themenkopf klingt an beiden Stellen an. Die Stellung innerhalb des Stücks erklärt, warum Prout zwei verschiedene Bezeichnungen wählt.",
      "related": [
        "fuge-exposition",
        "fuge-kontrasubjekt",
        "fuge-gegenexposition"
      ],
      "authors": [
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. VII, §§ 213–216, S. 92–93 · Bach, Wohltemperiertes Klavier I, c-Moll, BWV 847",
          "text": "In Bachs c-Moll-Fuge gewinnt die Codetta vor dem Basseinsatz ihr Material aus Themenkopf und Kontrasubjekt. Das erste Zwischenspiel nach der Exposition greift beide Gedanken erneut auf und führt nach Es-Dur. Prout unterscheidet die beiden Abschnitte nach ihrer Stellung zwischen den Themeneinsätzen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=108",
          "examples": [
            "fuge-prout-codetta-episode"
          ]
        },
        {
          "name": "André Gédalge",
          "work": "Traité de la fugue. De la fugue d’école (Paris, Enoch, 1901)",
          "locator": "Titel VII, §§ 187–193, S. 112–113 · Divertissement der Schulfuge",
          "text": "Für das Divertissement gewinnt Gédalge Fragmente aus Thema, Kontrasubjekt, Coda oder einer freien Stimme der Exposition. Die Imitationen sollen eine fortlaufende melodische Linie bilden. Eine Sequenz ist willkommen, wenn die Wiederholung des Motivs sie hervorbringt. Das bloße Fortschieben von Akkordverbindungen verwirft er.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=124"
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge II in c-Moll, BWV 847",
          "locator": "T. 9–11, zwischen dem ersten Basseinsatz und dem Einsatz im Sopran · Notenbefund, Bach-Gesellschaft, S. 8",
          "text": "In Takt 9 und 10 erscheint die kurze Wechselnotenfigur des Themenkopfes auf wechselnden Stufen. Der Bass führt dazu durchgehende Sechzehntel. In Takt 11 beginnt der Sopran einen vollständigen Themeneinsatz auf es.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=8",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-847-episode"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. VIII, S. 155, Bsp. 247 · paarweise Imitation",
          "text": "Piston beschreibt paarweise Imitation als mögliche Satzweise eines Fugenzwischenspiels. Beispiel 247 veranschaulicht die Stimmenverteilung an einem Konzert von Bach. Hier imitieren sich Bass und Tenor sowie Alt und Sopran.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        }
      ]
    },
    {
      "id": "fuge-engfuehrung",
      "title": "Was ist eine Engführung, und braucht jede Fuge eine?",
      "group": "Fuge",
      "tags": [
        "Engführung",
        "Stretto",
        "Stretta",
        "Einsatzabstand",
        "Kanon",
        "Überlappung",
        "Überlagerung"
      ],
      "comparisons": [],
      "reading": "Setzt die nächste Stimme ein, bevor die vorherige ihren Themenvortrag beendet, überlappen die Einsätze. Bestimme in Bachs C-Dur-Fuge den zeitlichen Abstand. Ob eine Fuge überhaupt eine solche Passage haben muss, beantworten Cherubini und Prout ausdrücklich verschieden.",
      "related": [
        "fuge-themenende",
        "fuge-exposition",
        "fuge-gegenexposition",
        "imitation-und-kanon"
      ],
      "authors": [
        {
          "name": "Luigi Cherubini",
          "work": "A Treatise on Counterpoint & Fugue (übers. Mary Cowden Clarke, hg. Josiah Pittman, London, Novello, 1854)",
          "locator": "„On Stretto“, S. 65–66, Bsp. 198 · Lehre und Setzbeispiel",
          "text": "Cherubini zählt die Engführung zu den wesentlichen Bestandteilen einer Fuge. Die Antwort setzt schon ein, während das Thema noch läuft. Bei wiederholten Engführungen empfiehlt er, die Einsatzabstände nach und nach zu verkürzen.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=71",
          "examples": [
            "fuge-cherubini-stretto"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. VIII, §§ 244–250, S. 109–110 · Prüfung an Bachs 48 Fugen",
          "text": "Prout widerspricht Cherubinis Forderung ausdrücklich. Nach seiner Zählung hat rund die Hälfte der Fugen des Wohltemperierten Klaviers keine Engführung. Für die eigene Arbeit entscheidet er nach dem Thema. Eine mögliche Überlagerung muss noch keine überzeugende sein.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=125",
          "examples": [
            "fuge-prout-stretto-abstaende"
          ]
        },
        {
          "name": "André Gédalge",
          "work": "Traité de la fugue. De la fugue d’école (Paris, Enoch, 1901)",
          "locator": "Titel VIII, §§ 261–266, S. 155 · Terminologie der Schulfuge",
          "text": "Gédalge verwendet Stretto für die einzelne Verbindung mit verkürztem Einsatzabstand und für einen ganzen Schlussabschnitt, in dem die Einsätze einander zunehmend näher rücken. Bleibt das Thema während der überlappenden Antwort vollständig erhalten, beschreibt er eine kanonische Engführung.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=167"
        },
        {
          "name": "Johann Sebastian Bach",
          "work": "Das wohltemperierte Klavier I, Fuge I in C-Dur, BWV 846",
          "locator": "T. 7–8, Sopran und Tenor · Notenbefund, Bach-Gesellschaft, S. 4",
          "text": "In Takt 7 setzt der Sopran nach einer Achtelpause mit c–d–e ein. Nur eine Viertelnote später folgt der Tenor mit g–a–h. Die punktierte Wendung des Soprans ist noch zu hören, während der Tenor den Kopf imitiert.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=4",
          "kind": "partitur",
          "examples": [
            "bach-wtk1-846-engfuehrung"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. X, S. 190, Bsp. 284 · Kanon als Technik der Fuge",
          "text": "Piston beschreibt die Engführung als einen Kanon, in dem das Fugenthema sich selbst imitiert. Seine Definition erklärt das Verfahren. Ob jede Fuge es enthalten soll, entscheidet diese Stelle nicht.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, § 104, S. 50 · kanonische Führung von Thema und Antwort",
          "text": "Unter einer eigentlichen Engführung verstehen die Autoren einen Kanon zwischen Fugenthema und Antwort. Höre auf den Moment, in dem die Antwort einsetzt, während das Thema noch weiterläuft.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch9imitPpes.pdf#page=2"
        }
      ]
    },
    {
      "id": "harmonischer-rhythmus",
      "title": "Wann wechselt die Harmonie unter einer bewegten Melodie?",
      "group": "Satzmodelle",
      "tags": [
        "harmonischer Rhythmus",
        "Grundtonwechsel",
        "Harmoniewechsel",
        "Synkope",
        "Metrum"
      ],
      "reading": "Klopfe die Taktanfänge, singe die Melodie und markiere anschließend nur die Wechsel des Akkordgrundtons. Wo fallen die drei Impulse zusammen? Vergleiche Schumanns Klavierstück mit Prouts Vorgabe für zwei Halbe gegen eine Ganze.",
      "comparisons": [],
      "related": [
        "harmonik",
        "rhythmische-selbststaendigkeit",
        "betonte-dissonanz",
        "generalbass-sextakkord"
      ],
      "authors": [
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. IV, S. 60–66, bes. Bsp. 96–97 · Schumann, Kinderszenen op. 15 Nr. 10",
          "text": "Piston verfolgt die Grundtonwechsel und die Akzente der Melodie getrennt. Bei Schumann verdeutlicht der harmonische Rhythmus die Taktgrenzen. Gerade dadurch tritt die Verschiebung der Melodie hervor.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-schumann-fast-zu-ernst"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. V, § 172, S. 76 · zweite Spezies",
          "text": "Prout bevorzugt in seiner Übung einen Akkord pro Cantus-firmus-Ton. Beide Halben können derselben Harmonie angehören. Zwei Akkorde lässt er zu, etwa für eine Kadenz oder um eine fehlerhafte Akkordfolge zu vermeiden.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=80"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, § 59, S. 32 · einfacher Kontrapunkt, auch vierte Spezies",
          "text": "Gewöhnlich gilt eine Harmonie pro Takt. Sie kann sich auch über mehrere Takte erstrecken. In der vierten Spezies ziehen die Autoren einen zweiten Klang im selben Takt einer unterbrochenen Synkopenkette vor, besonders bei Synkopen im Bass.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch4harmon.pdf#page=10"
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Nr. 26, T. 3 und Anmerkung, S. 14 (Remeš 2021, S. 37–38) · Ziffernwechsel über einem Basston",
          "text": "In Takt 3 steht über demselben Bass erst 6, dann 5. War im ersten Sextakkord die Terz oder Sexte verdoppelt, greift der Spieler bei der 5 einen Quintsextakkord. War der Bass in der Oktave verdoppelt, folgt ein Dreiklang. Die liegende Bassnote allein verrät den zweiten Griff also noch nicht.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=16",
          "examples": [
            "foerster-nr26-t3"
          ]
        }
      ]
    },
    {
      "id": "rhythmische-selbststaendigkeit",
      "title": "Woran höre ich, dass zwei Stimmen rhythmisch selbstständig sind?",
      "group": "Stimmführung",
      "tags": [
        "rhythmische Unabhängigkeit",
        "Rhythmus",
        "Akzent",
        "Augmentation",
        "Vergrößerung",
        "Umkehrung",
        "Gegenstimme"
      ],
      "reading": "Klopfe beide Stimmen auf getrennten Händen. Achte darauf, wann die Bewegung die Hand wechselt. Prüfe bei Bach außerdem, wie der Themenkopf in Umkehrung und mit längeren Notenwerten wiederkehrt.",
      "comparisons": [],
      "related": [
        "harmonischer-rhythmus",
        "fuge-kontrasubjekt",
        "imitation-und-kanon"
      ],
      "authors": [
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 79–81, Bsp. 117–120 · rhythmische Eigenständigkeit zweier Linien",
          "text": "Bei Beethoven verfolgt Piston, wie sich die Bewegung zwischen zwei Stimmen abwechselt. Bei Bach können sogar zwei Fassungen desselben Themas verschiedene Zeitebenen bilden. In Beispiel 120 erklingt die obere Fassung in Umkehrung und mit doppelten Notenwerten.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-bach-contrapunctus-vii"
          ]
        },
        {
          "name": "André Gédalge",
          "work": "Traité de la fugue. De la fugue d’école (Paris, Enoch, 1901)",
          "locator": "Titel IV, §§ 105–106, S. 59–60 · Entwurf für die Schulfuge",
          "text": "Gédalge gewinnt die rhythmische Gegenstimme aus den Freiräumen des Themas. Singe im Notenbeispiel nur die Einsätze, die in eine Pause der anderen Stimme fallen.",
          "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=71",
          "examples": [
            "fuge-gedalge-bach-contresujet"
          ]
        }
      ]
    },
    {
      "id": "doppelter-kontrapunkt",
      "title": "Was ändert sich, wenn Ober- und Unterstimme die Lage tauschen?",
      "group": "Stimmführung",
      "tags": [
        "doppelter Kontrapunkt",
        "umkehrbarer Kontrapunkt",
        "vertauschbarer Kontrapunkt",
        "Oktave",
        "Dezime",
        "Duodezime",
        "Lagentausch",
        "inversion"
      ],
      "reading": "Singe zuerst die Gegenstimme in Bachs g-Moll-Fuge BWV 885. Suche sie nach dem Lagentausch wieder. Aus einer Terz wird beim Tausch in der Oktave eine Sexte. Prüfe, welche Zusammenklänge bei einem anderen Versetzungsintervall entstehen.",
      "comparisons": [],
      "related": [
        "fuge-kontrasubjekt",
        "stimmabstand",
        "stimmkreuzung",
        "kanon-verfahren"
      ],
      "authors": [
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. IX, S. 167–169 und 176, Bsp. 256–258 und 270 · Lagentausch",
          "text": "Die Stimmen behalten beim Tausch ihre melodische Richtung. Piston lässt Ausgangslage und Vertauschung gleichzeitig erarbeiten und spielen. Eine Quinte wird beim Oktavtausch zur Quarte. In der zweistimmigen Übung muss der Satz auch diese Dissonanz tragen.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-bach-bwv885-kontrasubjekt"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Analysis of J. S. Bach’s Forty-Eight Fugues (hg. Louis B. Prout, London, Edwin Ashdown, 1910)",
          "locator": "Fuge Nr. 40, S. 75–76 · BWV 885, T. 20, 28 und 32–40",
          "text": "Prout bestimmt den Lagentausch am Verlauf einer Fuge. Bei Takt 20 betrachtet er den doppelten Kontrapunkt in der Oktave, in Takt 28 in der Duodezime und bei den folgenden beiden Einsätzen in der Dezime.",
          "url": "https://waltercosand.com/CosandScores/Composers%20L-P/Composers_P/Prout%2C%20Ebenezer/Prout-Analysis_of_Bach%27s_48_Fugues.pdf#page=80",
          "examples": [
            "piston-bach-bwv885-duodezime"
          ]
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 81–83, S. 41 · Vertauschung in der Oktave",
          "text": "Beim Oktavtausch wird die reine Quinte zur reinen Quarte. Darum schließen die Autoren die Quinte zwischen zwei Akkordtönen aus. Als Durchgang, Wechselnote oder Vorhalt darf ein Melodieton eine Quinte bilden. Die Prüfung gilt bei mehr als zwei Stimmen für jedes Stimmenpaar.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch7renvPpes.pdf#page=1",
          "comparison": "Prout findet bei Bach auch Vertauschungen in Dezime und Duodezime. Noël-Gallon und Bitsch erwähnen weitere Intervalle, beschränken ihre Übungen aber auf den Oktavtausch.",
          "examples": [
            "gallon-bitsch-nr-119"
          ]
        }
      ]
    },
    {
      "id": "imitation-und-kanon",
      "title": "Wann wird aus der Nachahmung eines Motivs ein Kanon?",
      "group": "Satzmodelle",
      "tags": [
        "motivische Imitation",
        "Kanon",
        "Canon",
        "Einsatzabstand",
        "Nachahmung",
        "Oktavkanon"
      ],
      "reading": "Merke dir den Themenbeginn. Verfolge dann die zweite Stimme über die ersten Töne hinaus. Wie lange bleibt ihr Verlauf aus der ersten Stimme ableitbar? Ab welcher Stelle gehen die Stimmen gegebenenfalls eigene Wege?",
      "comparisons": [],
      "related": [
        "fuge-engfuehrung",
        "fuge-reale-tonale-antwort",
        "rhythmische-selbststaendigkeit",
        "kanon-verfahren"
      ],
      "authors": [
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. VI, S. 111, Bsp. 184, und Kap. X, S. 188–189, Bsp. 281 · motivische Imitation und zweistimmiger Kanon",
          "text": "Bei Mozart erkennt Piston ein Motiv am gleichen Rhythmus trotz geänderter Intervalle. Im zweistimmigen Kanon folgt eine Stimme der Melodie der anderen mit zeitlichem Abstand. Zusätzliche freie Stimmen dürfen den Kanon begleiten.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-bach-oktavkanon"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Fugue (London, Augener, 9. Druck, Vorwort 1891)",
          "locator": "Kap. I, §§ 4–5, S. 1–2 · Fuge im Vergleich mit Kanon",
          "text": "Prout verfolgt die Stimmen nach ihrem Einsatz. In der Fuge dürfen sie nach dem Thema frei weitergehen. Für den Kanon verlangt er fortgesetzte Nachahmung. Dabei kann beispielsweise eine große Sekunde zur kleinen werden.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=18"
        },
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 101–103, S. 49 · Imitation, Intervalltreue und Kanon",
          "text": "Beim Kanon setzt die nachahmende Stimme so früh ein, dass beide Linien sich überlagern, und führt die Nachahmung fort. Davon unterscheiden die Autoren die Frage der Intervalltreue. Eine regelmäßige Imitation übernimmt die Intervalle genau, bei einer unregelmäßigen dürfen sie sich ändern, etwa um die Tonart zu erhalten.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch9imitPpes.pdf#page=1",
          "examples": [
            "gallon-bitsch-nr-135"
          ]
        }
      ]
    },
    {
      "id": "speziesmischung",
      "title": "Dürfen zwei Gegenstimmen dieselbe Spezies führen?",
      "group": "Satzmodelle",
      "tags": [
        "Speziesmischung",
        "kombinierter Kontrapunkt",
        "grand mélange",
        "mélanges",
        "mehrstimmig",
        "Rhythmus",
        "Halbenstimmen"
      ],
      "reading": "Markiere den Cantus firmus. Klopfe dann die Rhythmen der übrigen Stimmen einzeln. Vergleiche die Anzahl verschiedener Rhythmen bei Prout mit der Besetzung im grand mélange.",
      "related": [
        "cantus-firmus",
        "rhythmische-selbststaendigkeit",
        "dichte-s5",
        "grundrahmen"
      ],
      "comparisons": [],
      "authors": [
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 12–13 und 20, S. 13 und 16 · drei und vier Stimmen",
          "text": "In der Speziesmischung erhält jede Gegenstimme einen eigenen Rhythmus. Im vierstimmigen grand mélange stehen gegen die Ganzen des Cantus firmus eine Halbenstimme, eine Viertelstimme und eine synkopierte Stimme. Eine Fußnote lässt auch eine floride Stimme in der Mischung zu.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch2rythm.pdf#page=2",
          "comparison": "Prout beginnt seinen Lehrgang zum kombinierten Kontrapunkt ausdrücklich mit zwei bewegten Stimmen derselben Spezies. Für die französische Mischübung würden diesen beiden Stimmen verschiedene Rhythmen zugeteilt.",
          "examples": [
            "gallon-bitsch-grand-melange",
            "gallon-bitsch-nr-93-94"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. XI, §§ 394–396 und 402–403, S. 153 und 155 · kombinierter Kontrapunkt",
          "text": "Sobald mindestens zwei Stimmen in einer anderen als der ersten Spezies stehen, spricht Prout von kombiniertem Kontrapunkt. Beide dürfen dieselbe Spezies führen. Er lässt zunächst zwei Halbenstimmen gegen die gegebenen Ganzen schreiben und kombiniert erst danach unterschiedliche Spezies.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=157",
          "examples": [
            "prout-zwei-halbenstimmen"
          ]
        }
      ]
    },
    {
      "id": "dauer-der-vorhaltsvorbereitung",
      "title": "Wie lange muss ich einen Vorhalt vorbereiten?",
      "group": "Dissonanz",
      "tags": [
        "Vorbereitung",
        "Vorhalt",
        "Mindestdauer",
        "Halbe",
        "Bindung",
        "retard"
      ],
      "reading": "Miss zuerst den Vorbereitungston bis zum Taktstrich und dann den übergebundenen Teil. Welche Dauer nennt das jeweilige Lehrbuch als Maßstab?",
      "related": [
        "bindung-s4",
        "unterbrechung-s4",
        "dissonanzaufloesung",
        "sprung-in-dissonanz"
      ],
      "comparisons": [],
      "authors": [
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, Kap. V, § 63 A, S. 33 · die beiden Notenbeispiele zur Mindestdauer",
          "text": "Die Vorbereitung eines Vorhalts dauert mindestens eine Halbe. Im Notenpaar zu § 63 A genügt die Halbe, während eine Viertelvorbereitung als zu kurz markiert ist. Bei fünf oder mehr Stimmen erwähnen die Autoren auch eine Ganze als Vorbereitung.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=1",
          "comparison": "Prout formuliert die Dauer im Verhältnis zur gebundenen Note. Noël-Gallon und Bitsch geben für ihre Übungen einen festen Mindestwert an. Beim Halbennoten-Vorhalt führen beide Angaben zu derselben Grenze.",
          "examples": [
            "gallon-bitsch-vorhaltsvorbereitung"
          ]
        },
        {
          "name": "Ebenezer Prout",
          "work": "Counterpoint: Strict and Free (3. Aufl., London, Augener & Co., Vorwort 1890)",
          "locator": "Kap. VII, §§ 252–253, S. 103 · Bindung und Vorhalt",
          "text": "Prout vergleicht die Dauern beiderseits des Bindebogens. Der auf leichter Zeit beginnende Ton muss mindestens so lange dauern wie der angebundene Ton auf schwerer Zeit. Für die beiden Halben der vierten Spezies ergeben sich gleiche Dauern.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=107"
        }
      ]
    },
    {
      "id": "kanon-verfahren",
      "title": "Wie verändere ich ein Motiv durch Gegenbewegung, Krebs oder Augmentation?",
      "group": "Satzmodelle",
      "tags": [
        "Kanon",
        "Umkehrung",
        "Krebs",
        "Gegenbewegung",
        "Augmentation",
        "Diminution",
        "Vergrößerung",
        "Verkleinerung",
        "imitation rétrograde"
      ],
      "reading": "Vergleiche Tonrichtung, Reihenfolge und Dauer unabhängig voneinander. Welche Eigenschaft bleibt in jeder Antwort hörbar? Singe anschließend Bachs Themenkopf in der Vergrößerung gegen die schnellere Stimme.",
      "related": [
        "imitation-und-kanon",
        "rhythmische-selbststaendigkeit",
        "fuge-engfuehrung",
        "doppelter-kontrapunkt"
      ],
      "comparisons": [],
      "authors": [
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 105–107, S. 50–51 · Gestalt und Dauer der Antwort",
          "text": "Beim Krebs kehrt sich die Reihenfolge der Töne um, bei der Gegenbewegung die Richtung jedes Intervalls. Beide Verfahren lassen sich verbinden. Unabhängig davon können die Noten der Antwort länger oder kürzer dauern als die der Vorlage. Die Autoren kombinieren auch diese Vergrößerung oder Verkleinerung mit den Richtungswechseln.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch9imitPpes.pdf#page=2",
          "examples": [
            "gallon-bitsch-kanon-verfahren",
            "gallon-bitsch-nr-151",
            "gallon-bitsch-nr-154"
          ]
        },
        {
          "name": "Walter Piston",
          "work": "Counterpoint (London, Victor Gollancz, 6. Druck 1970, zuerst New York 1947)",
          "locator": "Kap. V, S. 80–81, Bsp. 120 · Themenvergrößerung in der Fuge",
          "text": "In Bachs Contrapunctus VII hört Piston zwei Veränderungen zugleich. Die Oberstimme bringt das Thema in Gegenbewegung und mit doppelt so langen Notenwerten. Am Notenbild lässt sich das Richtungsverhältnis getrennt vom Zeitverhältnis prüfen.",
          "url": "https://ci.nii.ac.jp/ncid/BA86907493?l=en",
          "catalogue": true,
          "examples": [
            "piston-bach-contrapunctus-vii"
          ]
        }
      ]
    },
    {
      "id": "doppelchor-basslinien",
      "title": "Wie führen zwei Basslinien den Wechsel und das Zusammensingen im Doppelchor?",
      "group": "Satzmodelle",
      "tags": [
        "Doppelchor",
        "Doppelchörigkeit",
        "Mehrchörigkeit",
        "cori spezzati",
        "Bass",
        "achtstimmig",
        "Basses données",
        "double chœur"
      ],
      "reading": "Verfolge die Pausen und Einsätze beider Basslinien. Höre dann jeden vierstimmigen Chor für sich. Welche Zusammenklänge bilden die Bässe, sobald die Gruppen gleichzeitig singen?",
      "related": [
        "cantus-firmus",
        "kadenz",
        "stimmabstand",
        "speziesmischung"
      ],
      "comparisons": [],
      "authors": [
        {
          "name": "Noël-Gallon und Marcel Bitsch",
          "work": "Traité de contrepoint (Paris, Durand, 1964, D. & F. 13955)",
          "locator": "Teil I, §§ 69–73, S. 37 · zwei vorgegebene Bässe im achtstimmigen Satz",
          "text": "Der Bass jedes Chors ist vorgegeben. Wenn die Bässe einander antworten, wechseln sich die Chöre ab. Erklingen die Bässe zugleich, singen beide Chöre. Jeder soll dabei eine gewisse harmonische Selbständigkeit behalten. Die Bässe können dabei vorübergehend verschieden beziffert sein. Als weitere Aufgabe lassen die Autoren alle acht Stimmen frei entwerfen.",
          "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch6dbleCoeur.pdf#page=1",
          "examples": [
            "gallon-bitsch-doppelchor",
            "gallon-bitsch-nr-117",
            "gallon-bitsch-nr-118"
          ]
        },
        {
          "name": "Gioseffo Zarlino",
          "work": "Le istitutioni harmoniche (Venedig, 1558)",
          "locator": "Teil III, Kap. 66, S. 268 · mehrchörige Psalmen in Venedig",
          "text": "Zarlino beschreibt zwei oder drei räumlich getrennte vierstimmige Chöre in der venezianischen Vesper. Sie singen abwechselnd und gelegentlich gemeinsam, besonders zum Schluss. Jeder Chor soll auch für sich konsonant klingen. Bei den gemeinsamen Einsätzen beobachtet Zarlino die Bässe im Einklang oder in der Oktave, bisweilen in der Terz.",
          "url": "https://tmiweb.science.uu.nl/text/transcription/zarins58.html#p268"
        }
      ]
    },
    {
      "id": "generalbass-ziffern-stufen",
      "title": "Was unterscheidet die Generalbassziffer von der Bassstufe?",
      "group": "Generalbass",
      "tags": [
        "Generalbass",
        "Bezifferung",
        "Bassstufe",
        "Tonleiter",
        "Intervalle",
        "Sextakkord",
        "Skalenstufe",
        "Foerster"
      ],
      "reading": "Lies vom selben Basston aus in zwei Richtungen. Welche Stufe ist er in der Tonleiter? Welche Töne gehören über ihn?",
      "comparisons": [],
      "related": [
        "generalbass-sextakkord",
        "generalbass-transponieren",
        "harmonik"
      ],
      "authors": [
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Vorwort und Nr. 8, T. 1, S. 4 (Remeš 2021, S. 8)",
          "text": "Beim Aussetzen eines Generalbasses ergänzt man Stimmen zu einer gegebenen Basslinie. Die Bezifferung nennt Intervalle über dem Basston. Försters zusätzliche Stufenzahl zeigt, wo dieser Ton in der geltenden Tonleiter steht. In Nr. 8 ist d die vierte Stufe von a-Moll. Die 6 über d verlangt die Sexte h, während der vorgegebene Diskant d singt.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=6",
          "examples": [
            "foerster-sextakkord"
          ]
        }
      ]
    },
    {
      "id": "generalbass-sextakkord",
      "title": "Welchen Ton darf ich beim Sextakkord verdoppeln?",
      "group": "Generalbass",
      "tags": [
        "Generalbass",
        "Sextakkord",
        "Verdopplung",
        "Stimmzahl",
        "erhöhte Sexte",
        "Leitton",
        "Orgelsatz",
        "Foerster"
      ],
      "reading": "Bestimme zuerst die Größe der Sexte und ihre Stufe in der örtlichen Tonart. Probiere erst danach verschiedene Verdopplungen am Instrument.",
      "comparisons": [],
      "related": [
        "generalbass-stimmenzahl",
        "parallelen",
        "harmonischer-rhythmus"
      ],
      "authors": [
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Vorbemerkung zu Nr. 8 und T. 7, S. 4 (Remeš 2021, S. 8)",
          "text": "Im Sextakkord liegen Terz und Sexte über dem Bass. Bei einer erhöhten Sexte prüft Förster, ob sie übermäßig ist oder ihr oberer Ton als Leitton wirkt. Für die erhöhte Sexte auf der vierten Mollstufe, die keine dieser beiden Bedingungen erfüllt, erlaubt er drei Verdopplungen. Bass, Terz oder Sexte können in einer zweiten Stimme erklingen.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=6",
          "examples": [
            "foerster-nr8-t7"
          ]
        }
      ]
    },
    {
      "id": "generalbass-zweideutiger-septakkord",
      "title": "Wann braucht der „zweydeutige“ Septimenakkord eine Vorbereitung?",
      "group": "Generalbass",
      "tags": [
        "Septimenakkord",
        "halbvermindert",
        "Vorbereitung",
        "Dissonanz",
        "siebte Stufe",
        "zweite Stufe",
        "Vogler",
        "Knecht",
        "Foerster"
      ],
      "reading": "Spiele h–d–f–a einmal in a-Moll und einmal in C-Dur. Welche Bassstufe hat der Akkord jeweils? Vergleiche nun, was der Melodieton unmittelbar vor der Septime und der Bass nach dem Akkord tun.",
      "comparisons": [],
      "related": [
        "generalbass-ziffern-stufen",
        "dissonanzaufloesung",
        "harmonik"
      ],
      "authors": [
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "„Zweydeutige Accorde“, S. 13, vor Nr. 25 (Remeš 2021, S. 34)",
          "text": "Der Klang h–d–f–a kann auf der zweiten Bassstufe in a-Moll oder auf der siebten in C-Dur stehen. Auf II in Moll verlangt Förster die Vorbereitung der Septime. Auf VII in Dur entscheidet die harmonische Fortsetzung, ob sie vorbereitet werden muss oder frei eintreten darf. Diesen zweiten Fall mit seinen zwei möglichen Behandlungen nennt er „zweydeutig“.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=15",
          "examples": [
            "foerster-septimenvergleich"
          ],
          "comparison": "Förster berichtet, Vogler und Knecht unterschieden nach der Stufe. Auf II in Moll sei Vorbereitung erforderlich, auf VII in Dur entbehrlich. Sein Einwand betrifft den zweiten Fall. Auch auf VII in Dur gibt es für ihn Verbindungen, die eine Vorbereitung verlangen."
        },
        {
          "name": "Emanuel Aloys Förster",
          "work": "Anleitung zum General-Bass (Leipzig, Breitkopf & Härtel)",
          "locator": "§ 69, S. 23, mit Verweisen auf Nr. 91–93 · Försters Kriterium",
          "text": "Folgt auf den Septimenakkord der siebten Durstufe der Tonikadreiklang, kann die Septime frei eintreten. Für die erste und zweite Umkehrung nennt Förster als Ziel den Sextakkord auf der dritten Bassstufe. Bei diesen Umkehrungen verlangt er die Dissonanz in der Oberstimme. Nimmt der Bass eine andere Wendung, verlangt er Vorbereitung.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/0/05/IMSLP522102-PMLP845377-F%C3%B6rster_anleitung_zum_general-bass_breitkopf_1804_portrait_text.pdf#page=25"
        }
      ]
    },
    {
      "id": "generalbass-stimmenzahl",
      "title": "Muss ich einen Generalbass immer vierstimmig aussetzen?",
      "group": "Generalbass",
      "tags": [
        "Begleitung",
        "Oberstimme",
        "Diskant",
        "Lage",
        "Klavier",
        "Orgel",
        "Stimmenzahl",
        "Aussetzung",
        "Continuo",
        "Foerster"
      ],
      "reading": "Spiele dieselbe Bassfolge zuerst mit drei, dann mit zwei Tönen in der rechten Hand. Welche Stimme kannst du weglassen, ohne die geforderte Harmonie zu verlieren?",
      "comparisons": [],
      "related": [
        "generalbass-sextakkord",
        "stimmabstand",
        "speziesmischung"
      ],
      "authors": [
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Vorwort und Nr. 1, T. 1–4, S. 1 (Remeš 2021, Vorwort und S. 1)",
          "text": "Für angehende Komponisten hält Förster seine Übung vierstimmig. Der angegebene Diskant zeigt eine günstige Lage. Lernende sollen weitere Lagen versuchen. Wer an der Orgel begleitet, kann besonders bei rascher Bewegung mit weniger Stimmen spielen.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=3",
          "examples": [
            "foerster-dreiklang"
          ]
        },
        {
          "name": "Daniel Gottlob Türk",
          "work": "Kurze Anweisung zum Generalbaßspielen (Halle und Leipzig, 1791)",
          "locator": "Zweites Kapitel, § 61 und Anmerkungen, S. 74–75 · Begleitung am Tasteninstrument",
          "text": "Türk lässt Anfänger zunächst vierstimmig üben. Beim Begleiten entscheidet auch die Besetzung. Im Piano oder bei kleiner Besetzung genügen oft drei Stimmen. Im Pianissimo oder unter einer solistischen Singstimme können zwei reichen. Für einen großen Chor oder ein Fortissimo kommen fünf oder mehr in Betracht.",
          "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Kurze_anweisung_zum_generalbasspielen_%28IA_kurzeanweisungzu00trkd%29.pdf#page=82"
        }
      ]
    },
    {
      "id": "generalbass-transponieren",
      "title": "Wie transponiere ich einen Generalbass am Instrument?",
      "group": "Generalbass",
      "tags": [
        "Transposition",
        "Stufen",
        "Tonarten",
        "Tastenspiel",
        "Bezifferung",
        "Foerster"
      ],
      "reading": "Spiele die Bassstufen zunächst allein. Ergänze die rechte Hand in der Ausgangstonart. Realisiere den Bass danach aus dem Kopf in einer anderen Tonart.",
      "comparisons": [],
      "related": [
        "generalbass-ziffern-stufen",
        "generalbass-stimmenzahl",
        "chromatik"
      ],
      "authors": [
        {
          "name": "Emanuel Aloys Förster",
          "work": "Practische Beyspiele als Fortsetzung zu seiner Anleitung des Generalbasses (Wien, Artaria, 1818), I. Abteilung",
          "locator": "Vorwort zur I. Abteilung · Transponierübung für Organisten",
          "text": "Förster lässt den Bass einige Tonarten aufwärts und abwärts versetzen, ohne die Akkorde vorher auszuschreiben. Von C aus nennt er etwa D und Es aufwärts sowie H und B abwärts. Die Stufen des Basses und die Intervalle darüber lassen sich so in jeder neuen Tonart an den Tasten wiederfinden.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=3",
          "examples": [
            "foerster-transponieren"
          ]
        }
      ]
    }
  ],
  "examples": {
    "goetschius-15a-sprungfolge": {
      "image": "quellen/noten/goetschius-15a-sprungfolge.webp",
      "title": "Bsp. 15a · Drei Sprungketten, drei Akkorde",
      "alt": "Einstimmige Notenzeile mit drei durch Klammern und die Ziffern I, V7 und IV bezeichneten Sprungfolgen.",
      "caption": "Spiele die erste Gruppe c–e–g–c–e nacheinander und dann als C-Dur-Dreiklang. Die zweite Gruppe hört Goetschius als Ausschnitt des Dominantseptakkords.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=21"
    },
    "goetschius-16-sprungfolge": {
      "image": "quellen/noten/goetschius-16-sprungfolge.webp",
      "title": "Bsp. 16 · Wenn der nächste Sprung den Akkord verlässt",
      "alt": "Eine Zeile mit kurzen Sprungketten in C-Dur. Die erste beginnt c–g–d.",
      "caption": "Nach c–g erwartet Goetschius hier Töne der ersten Stufe. Das angesprungene d gehört nicht dazu. In Bsp. 17 auf derselben Druckseite zeigt er, wie ein Richtungswechsel die Beurteilung verändert.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=21"
    },
    "fux-anfang-oberstimme": {
      "image": "quellen/noten/fux-anfang-oberstimme.webp",
      "title": "Die Quinte über dem Cantus firmus",
      "alt": "Zweistimmiger Satz mit Cantus firmus unten. Zwischen den Systemen stehen die Intervallzahlen, zuerst 5, zuletzt 8.",
      "caption": "Lies die erste und die letzte Intervallzahl. Josephus beginnt über dem d mit a und schließt in der Oktave.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118096"
    },
    "fux-anfang-unterstimme": {
      "image": "quellen/noten/fux-anfang-unterstimme.webp",
      "title": "Die Gegenprobe unter demselben Cantus firmus",
      "alt": "Cantus firmus oben, zwei Möglichkeiten für den ersten Basston darunter. Die Ziffern 5 und 8 sowie ein Korrekturzeichen stehen am Beginn.",
      "caption": "Jetzt liegt der Cantus firmus oben. Vergleiche die beiden ersten Basstöne, die als Alternative an derselben Stelle stehen. Aloysius erläutert die Korrektur auf S. 49.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118097"
    },
    "zarlino-anfang": {
      "image": "quellen/noten/zarlino-anfang.webp",
      "title": "Eine Quarte zwischen den Einsätzen, eine Terz beim Zusammentreffen",
      "alt": "Fünf getrennt gedruckte Stimmen. Oben steht das Soggetto, darunter stehen vier verschiedene Gegenstimmen. Die unterste setzt nach einer Pause ein.",
      "caption": "Lies die oberste Zeile zusammen mit der untersten („Quarto essempio nel grave“). Die drei mittleren Zeilen sind alternative Lösungen.",
      "credit": "Gioseffo Zarlino, Le istitutioni harmoniche, Venedig 1558, S. 174. Ausschnitt aus dem gemeinfreien Digitalisat der Library of Congress, Music Division.",
      "url": "https://www.loc.gov/resource/music.muspre1800-100213/?sp=94"
    },
    "prout-beginn": {
      "image": "quellen/noten/prout-beginn.webp",
      "title": "Beginn in Terzlage über dem Tenor",
      "alt": "Acht Takte mit Sopran über Tenor. Die beiden Stimmen beginnen im Abstand einer Dezime.",
      "caption": "§ 140. Über dem g des Tenors setzt der Sopran auf h′ ein, eine Dezime höher. Prout spricht von einer Terz. Das S bezeichnet das Thema, Ia die Tonika in Grundstellung.",
      "credit": "Prout, S. 66. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=70"
    },
    "cherubini-anfang": {
      "image": "quellen/noten/cherubini-anfang.webp",
      "title": "Welche Intervalle dürfen den Satz rahmen?",
      "alt": "Unter First bar stehen Beispiele für Quinte, Oktave und Einklang, unter Last bar Beispiele für Oktave und Einklang.",
      "caption": "Bsp. 9. Die senkrechten Striche trennen Lesebeispiele für den Anfang und den Schluss. Die Takte sind keine fortlaufende Melodie.",
      "credit": "Cherubini, S. 8. Harvard University / Google Books, via Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=12"
    },
    "goetschius-09-leitton": {
      "image": "quellen/noten/goetschius-09-leitton.webp",
      "title": "Bsp. 9 · Stufenfolge 8–7–6–5",
      "alt": "Einzelne Notenzeile mit Stufenziffern. Der erste Takt steigt in vier Vierteln von der achten bis zur fünften Stufe ab.",
      "caption": "Im ersten Takt führt das hohe c in die Abwärtsbewegung hinein. Das h setzt die Linie zur sechsten Stufe a fort.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=18"
    },
    "goetschius-45-tritonus": {
      "image": "quellen/noten/goetschius-45-tritonus.webp",
      "title": "Bsp. 45 · Zwei Gestalten des Dominantseptakkords",
      "alt": "Zwei Stimmen in C-Dur. Die übermäßige Quarte ist mit 4+ markiert, die verminderte Quinte mit 5−. Unter beiden steht V7.",
      "caption": "Suche f und h an beiden markierten Stellen. Bei vertauschter Lage bilden dieselben Töne eine verminderte Quinte.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=37"
    },
    "prout-septimensprung": {
      "image": "quellen/noten/prout-septimensprung.webp",
      "title": "Ein Septimensprung mit vorgeschriebener Fortsetzung",
      "alt": "Fünf kurze Beispiele mit aufsteigendem Septimensprung. Die ersten drei sind mit Good bezeichnet, die übrigen mit Bad.",
      "caption": "§ 20. Verfolge die obere Stimme vom g zum f und danach weiter. In den drei gebilligten Fassungen fällt das f zum e.",
      "credit": "Prout, S. 21. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=25"
    },
    "bellermann-109-sexte": {
      "image": "quellen/noten/bellermann-109-sexte.webp",
      "title": "Palestrina · Große Sexte nach einer Kadenz",
      "alt": "Tenorstimme mit Text aus Ego sum panis vivus. Rechts markiert die Aufschrift „Gr. 6te.“ den Intervallsprung.",
      "caption": "Folge dem Tenor bis zum zweiten Einsatz von „in aeternum“. An dieser Phrasengrenze hört Bellermann den Sextsprung anders als mitten in einer Melodie.",
      "credit": "Digitalisat der Sibley Music Library, University of Rochester. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=137"
    },
    "prout-sprungausgleich": {
      "image": "quellen/noten/prout-sprungausgleich.webp",
      "title": "Wie ein großer Sprung eingerahmt wird",
      "alt": "Fünf melodische Wendungen mit großen Sprüngen, unterschieden nach der Bewegung davor und danach.",
      "caption": "§ 22. Lies jeweils die Richtung von drei aufeinanderfolgenden Intervallen. Prout unterscheidet bei den letzten beiden Wendungen ausdrücklich zwischen möglich und besser.",
      "credit": "Prout, S. 22. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=26"
    },
    "goetschius-12-akkorde": {
      "image": "quellen/noten/goetschius-12-akkorde.webp",
      "title": "Bsp. 12 · Welche Akkordtöne dürfen einen Sprung tragen?",
      "alt": "Akkordreihe in C-Dur mit den Stufen I, V, IV, V7 und V9. Die II ist als selten bezeichnet, VI und III stehen in einer eigenen Gruppe.",
      "caption": "Die Überschriften unterscheiden bevorzugte, selten verwendete und für diesen Übungsschritt ungeeignete Akkorde. Lies die Septime und die None der Dominante als mögliche Melodietöne mit.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=20"
    },
    "goetschius-19-leittonsprung": {
      "image": "quellen/noten/goetschius-19-leittonsprung.webp",
      "title": "Bsp. 19 · Den Leitton von oben anspringen",
      "alt": "Erste Zeile von Beispiel 19. In mehreren kleinen Gruppen folgt auf verschieden weite Abwärtssprünge zum h jeweils ein Schritt aufwärts.",
      "caption": "Vergleiche die Ausgangshöhen der Sprünge. Das Ziel h und der Auflösungsschritt nach c bleiben gleich.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=22"
    },
    "goetschius-60-nebennoten": {
      "image": "quellen/noten/goetschius-60-nebennoten.webp",
      "title": "Bsp. 60 · Zwei Nebennoten, ein Bezugston",
      "alt": "Zwei kurze zweistimmige Beispiele. Kreuze markieren die Zwischentöne und Klammern fassen die beiden Nebennoten zusammen.",
      "caption": "Im zweiten Takt von a springt h nach d. Beide Töne umspielen c, das noch im selben Takt erreicht wird.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=45"
    },
    "cherubini-durchgang": {
      "image": "quellen/noten/cherubini-durchgang.webp",
      "title": "Vom Note-gegen-Note-Gerüst zum Durchgang",
      "alt": "Links Quinte und Terz im Note-gegen-Note-Satz, rechts dieselben Eckintervalle mit durchgehender Quarte dazwischen.",
      "caption": "Bsp. 32 I. Links stehen die beiden Gerüstklänge. Rechts füllt die Oberstimme die Terzbewegung abwärts aus. Die Ziffernfolge 5–4–3 macht den Status der mittleren Note sichtbar.",
      "credit": "Cherubini, S. 12. Harvard University / Google Books, via Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=16"
    },
    "fux-vorhalt": {
      "image": "quellen/noten/fux-vorhalt.webp",
      "title": "Drei Septimvorhalte hintereinander",
      "alt": "Der Cantus firmus steigt, während Töne der Oberstimme übergebunden werden. Dreimal steht zwischen den Stimmen die Folge 7–6.",
      "caption": "Beobachte bei jedem Taktstrich, welche Stimme den Zusammenklang verändert und welche anschließend die Auflösung singt.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118119"
    },
    "cherubini-akzent": {
      "image": "quellen/noten/cherubini-akzent.webp",
      "title": "Cherubinis eigener Stern im Zwei-gegen-eins",
      "alt": "Zwei Notensysteme eines zweistimmigen Satzes mit bewegter Oberstimme. Der Stern im zweiten System markiert einen betonten Durchgang.",
      "caption": "Bsp. 48, erste Aussetzung. Suche den Stern im unteren der beiden Systeme. Prouts Beispiel in § 168a beginnt einen Takt vor dem markierten Durchgang.",
      "credit": "Cherubini, S. 15. Harvard University / Google Books, via Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=21"
    },
    "prout-betonter-durchgang": {
      "image": "quellen/noten/prout-betonter-durchgang.webp",
      "title": "Ein betonter Durchgang bei Cherubini",
      "alt": "In zwei Systemen treffen im zweiten Takt der markierte Durchgangston der Oberstimme und der neue Basston zusammen.",
      "caption": "§ 168a. Prout zitiert hier Cherubini. Der Stern steht auf der ersten Hälfte des zweiten Takts. Erst auf der zweiten Hälfte erreicht die Oberstimme das e des a-Moll-Akkords.",
      "credit": "Prout, S. 75. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=79"
    },
    "fux-cambiata": {
      "image": "quellen/noten/fux-cambiata.webp",
      "title": "Die Septime wird im Terzsprung verlassen",
      "alt": "Im ersten Beispiel singt der Kontrapunkt oben. Die ersten drei Zweiklänge sind mit 8, 7, 5 beziffert. Im zweiten Beispiel liegt der bewegte Kontrapunkt unten.",
      "caption": "Singe im ersten Beispiel die Folge 8–7–5 über dem ausgehaltenen Ton. Der Schritt zur Septime und der Sprung von ihr weg haben verschiedene Funktionen.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118114"
    },
    "prout-vorhalt": {
      "image": "quellen/noten/prout-vorhalt.webp",
      "title": "Drei Abwärtsauflösungen und eine aufwärts",
      "alt": "Vier Vorhalte über Akkorden, bei d führt die gebundene Note von unten in die Tonika.",
      "caption": "§ 255. In (a) bis (c) wird ein Akkordton von oben erreicht. Bei (d) steigt der Leitton zur Tonika. Prout ergänzt zur Verdeutlichung der Akkorde eine dritte Stimme.",
      "credit": "Prout, S. 103. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=107"
    },
    "bellermann-182-aufloesung": {
      "image": "quellen/noten/bellermann-182-aufloesung.webp",
      "title": "Derselbe Cantus firmus mit zwei Auflösungen",
      "alt": "Drei Systeme. Oben stehen zwei alternative Gegenstimmen mit regelmäßiger bzw. unterbrochener Auflösung, unten steht der gemeinsame Cantus firmus.",
      "caption": "Lies jeweils nur eine der beiden oberen Zeilen mit der unteren. In der zweiten Fassung schiebt sich vor die reguläre Auflösung ein tieferer Konsonanzton.",
      "credit": "Digitalisat der Sibley Music Library, University of Rochester. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=210"
    },
    "zarlino-parallelen": {
      "image": "quellen/noten/zarlino-parallelen.webp",
      "title": "Drei Folgen zum Vergleich",
      "alt": "Zwei Notenzeilen mit drei beschrifteten Gruppen für parallele Einklänge, Oktaven und Quinten.",
      "caption": "Vergleiche die Stimmen innerhalb jeder der drei Gruppen. Die Tonhöhe ändert sich, der Abstand der Stimmen bleibt jeweils gleich.",
      "credit": "Gioseffo Zarlino, Le istitutioni harmoniche, Venedig 1558, S. 176. Ausschnitt aus dem gemeinfreien Digitalisat der Library of Congress, Music Division.",
      "url": "https://www.loc.gov/resource/music.muspre1800-100213/?sp=95"
    },
    "fux-oktaven": {
      "image": "quellen/noten/fux-oktaven.webp",
      "title": "Was beim Weglassen der Zwischentöne hörbar wird",
      "alt": "Links bewegt sich die Oberstimme in Halben. Rechts steht mit „idem“ die vereinfachte Fassung des Satzes. Unter dem ersten Teil sind drei Oktaven mit 8 bezeichnet.",
      "caption": "Spiele erst die ausgefüllte Fassung links, dann die Gerüsttöne rechts. Vergleiche mit dem auf derselben Quellenseite darunter als „bene“ bezeichneten Beispiel.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118107"
    },
    "bellermann-155-verdeckte": {
      "image": "quellen/noten/bellermann-155-verdeckte.webp",
      "title": "Verdeckte Quinte · Drei Lesarten",
      "alt": "Zweistimmige Beispiele mit Intervallziffern und den Urteilen „schlecht“, „gut“ und „gut“. In den beiden guten Fassungen erweitert eine halbe Note den Weg zur Quinte.",
      "caption": "Singe die Oberstimme erst nach der ersten, dann nach den beiden folgenden Fassungen. Vergleiche die Bewegung unmittelbar vor der Quinte.",
      "credit": "Digitalisat der Sibley Music Library, University of Rochester. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=183"
    },
    "zarlino-stimmtausch": {
      "image": "quellen/noten/zarlino-stimmtausch.webp",
      "title": "Ein Klang, zwei Wege durch die Stimmen",
      "alt": "Vier kurze zweistimmige Beispiele. Die obere Notenzeile bewegt sich jeweils abwärts, die untere aufwärts.",
      "caption": "Verfolge zuerst jede Stimme für sich. Vergleiche dann die Tonhöhen vor und nach dem Tausch.",
      "credit": "Gioseffo Zarlino, Le istitutioni harmoniche, Venedig 1558, S. 182. Ausschnitt aus dem gemeinfreien Digitalisat der Library of Congress, Music Division.",
      "url": "https://www.loc.gov/resource/music.muspre1800-100213/?sp=99"
    },
    "fux-stimmkreuzung": {
      "image": "quellen/noten/fux-stimmkreuzung.webp",
      "title": "Vier Töne lang über dem Cantus firmus",
      "alt": "Die untere Notenzeile ist mit Contrapunctum beschriftet. Bei den nummerierten Tönen 4 bis 7 klingt sie über der auf der oberen Zeile notierten Stimme.",
      "caption": "Die beiden Stimmen behalten ihre Notenzeilen. Singe den Bass von Ton 3 bis 8 und vergleiche seine klingende Lage mit dem Cantus firmus.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118101"
    },
    "prout-kreuzung": {
      "image": "quellen/noten/prout-kreuzung.webp",
      "title": "Einklang oder Stimmkreuzung?",
      "alt": "Kurzes Beispiel auf einem System. Bei a treffen sich beide Stimmen, bei b kreuzen sie sich kurz.",
      "caption": "§ 179. Bei (a) entsteht ein Einklang. Bei (b) wechselt die bewegte Stimme auf der unbetonten Hälfte die Seite des Themas und kehrt zum nächsten Harmonieton zurück.",
      "credit": "Prout, S. 78. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=82"
    },
    "bellermann-148-kreuzung": {
      "image": "quellen/noten/bellermann-148-kreuzung.webp",
      "title": "Erste Gattung · Kreuzung bei „NB.“",
      "alt": "Zwei Notensysteme für Contrapunctus und Cantus firmus. Das Kürzel NB. steht über der Stelle, an der die als obere Stimme notierte Linie unter den Cantus firmus tritt.",
      "caption": "Lies die beiden Schlüssel und vergleiche bei „NB.“ die klingenden Tonhöhen. Die Stimmen behalten ihre eigenen Systeme, während sich ihre tatsächliche Höhenordnung umkehrt.",
      "credit": "Digitalisat der Sibley Music Library, University of Rochester. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=176"
    },
    "cherubini-kreuzung": {
      "image": "quellen/noten/cherubini-kreuzung.webp",
      "title": "Drei markierte Stimmkreuzungen im Note-gegen-Note-Satz",
      "alt": "Zwei Stimmen in ganzen Noten. Drei Kreuze über der oberen Notenzeile markieren die Stellen, an denen sie unter der anderen Stimme liegt.",
      "caption": "Bsp. 10. Wer die gekreuzten Stimmen verfolgen will, liest jede auf ihrem eigenen System weiter. Die Kreuze stammen aus dem Druck.",
      "credit": "Cherubini, S. 8. Harvard University / Google Books, via Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=12"
    },
    "prout-uebergreifen": {
      "image": "quellen/noten/prout-uebergreifen.webp",
      "title": "Übergreifen mit und ohne Zwischenton",
      "alt": "Vier kurze Zweistimmigkeiten, paarweise mit Bad und Good bewertet.",
      "caption": "§ 178, zweite Notenzeile. Vergleiche jeweils zwei Fassungen. In den von Prout gebilligten Varianten ändert der Zwischenton die Bewegungsrichtung vor dem nächsten Harmonieton.",
      "credit": "Prout, S. 78. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=82"
    },
    "goetschius-43c-abstand": {
      "image": "quellen/noten/goetschius-43c-abstand.webp",
      "title": "Bsp. 43c · Mehr als zwei Oktaven Abstand",
      "alt": "Zweistimmige Lösung c mit vorgegebener Oberstimme. Im dritten Takt steigt die Oberstimme, während die neu erfundene Unterstimme in tiefer Lage bleibt.",
      "caption": "Halte im dritten Takt dort an, wo die Oberstimme ihre Spitzennote erreicht. Singe anschließend beide Linien getrennt, wie Goetschius es für die Prüfung einer Lösung verlangt.",
      "credit": "Digitalisat der Cornell University Library, Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Exercises_in_elementary_counterpoint_%28IA_cu31924021751098%29.pdf#page=35"
    },
    "fux-cantus-d": {
      "image": "quellen/noten/fux-cantus-d.webp",
      "title": "Der erste Cantus firmus in D",
      "alt": "Elf gleich lange Töne im Altschlüssel. Die Linie lautet d–f–e–d–g–f–a–g–f–e–d.",
      "caption": "Singe die Linie für sich. Ihr höchster Ton ist das a an siebter Stelle. Verfolge von dort die vier Schritte zurück zur Finalis d.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118094"
    },
    "bellermann-124-aeolisch": {
      "image": "quellen/noten/bellermann-124-aeolisch.webp",
      "title": "Zwei äolische Schlusswendungen",
      "alt": "Zwei einstimmige Notenbeispiele a und b mit Vorzeichen vor der sechsten und siebten Stufe.",
      "caption": "Verfolge die letzten drei Tonhöhen vor bzw. bis zur Finalis a. Mit fis–gis–a vermeidet die Stimme eine übermäßige Sekunde.",
      "credit": "Digitalisat der Sibley Music Library, University of Rochester. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=152"
    },
    "fux-durchgang": {
      "image": "quellen/noten/fux-durchgang.webp",
      "title": "Wie aus einer Terz zwei Schritte werden",
      "alt": "Zwei Paare kleiner einstimmiger Notenbeispiele, jeweils Grundform und Diminution. Die ausgeschriebene Fassung fügt zwischen die beiden Töne eine Note ein.",
      "caption": "Vergleiche die beiden Fassungen jedes Tonpaares. Fux isoliert zuerst die melodische Bewegung. Ob der eingeschobene Ton zum Cantus firmus dissoniert, hängt von der zweiten Stimme ab.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118105"
    },
    "prout-terzabgang": {
      "image": "quellen/noten/prout-terzabgang.webp",
      "title": "Eine Nebennote im Schritt erreichen und im Terzfall verlassen",
      "alt": "Eine absteigende Folge von Harmonietönen in der Oberstimme. Sterne markieren dazwischengeschobene obere Nebentöne.",
      "caption": "§ 165. Lies die Oberstimme zuerst ohne die Sterne. Ihre Harmonietöne fallen stufenweise. Mit den eingefügten Noten entsteht jeweils ein Sekundschritt aufwärts und eine Terz abwärts.",
      "credit": "Prout, S. 74. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=78"
    },
    "fux-drittes-viertel": {
      "image": "quellen/noten/fux-drittes-viertel.webp",
      "title": "Eine Dissonanz auf dem dritten Viertel",
      "alt": "Sechs kurze, bezifferte Wendungen. Im ersten Beispiel lauten die Intervalle 6, 5, 4, 3. Die Quarte steht an dritter Stelle.",
      "caption": "Lies die erste Gruppe als 6–5–4–3. Die Quarte füllt den Schrittweg von der Quinte zur Terz. Vergleiche, welche Intervallzahlen in den übrigen Gruppen an dritter Stelle stehen.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118113"
    },
    "prout-wechselnoten": {
      "image": "quellen/noten/prout-wechselnoten.webp",
      "title": "Zwei Wechselnoten um e",
      "alt": "Zwei kurze Oberstimmenfiguren. Die erste führt von e über f und d zurück nach e, die zweite vertauscht die Nachbartöne.",
      "caption": "§ 208c–d. In (c) überspringt f den Zielton e und fällt nach d. Erst die vierte Note schließt die Figur auf e. (d) kehrt die Reihenfolge der beiden Nachbarn um.",
      "credit": "Prout, S. 88. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=92"
    },
    "fux-konsonante-bindung": {
      "image": "quellen/noten/fux-konsonante-bindung.webp",
      "title": "Eine Synkopenkette ganz aus Konsonanzen",
      "alt": "Haltebögen führen die Töne der oberen Stimme über den Taktstrich. Die Intervallzahlen sind ausschließlich Oktaven, Quinten und Terzen.",
      "caption": "Vergleiche die Intervalle vor und nach jedem Taktstrich. Die rhythmische Verschiebung bleibt hörbar, auch wenn keine Dissonanz entsteht.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118118"
    },
    "fux-unterbrechung": {
      "image": "quellen/noten/fux-unterbrechung.webp",
      "title": "Josephus unterbricht die Bindungen",
      "alt": "Übung mit Cantus firmus unten. In der Mitte des Satzes unterbrechen frei angeschlagene Halbe die Folge der Bindebögen der Oberstimme.",
      "caption": "Vergleiche Takt 5 mit Takt 3 und 4. Genau über diese fehlende Bindung sprechen Lehrer und Schüler unter dem Notensystem.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118123"
    },
    "prout-kette": {
      "image": "quellen/noten/prout-kette.webp",
      "title": "Warum die Kette über diesem Bass abreißt",
      "alt": "Drei Fortsetzungsversuche einer Synkopenkette über dem zum g fallenden Moll-Bass.",
      "caption": "§ 262. Prout verwirft alle drei Versuche. Bei (a) entstünden mit der Auflösung Quinten, bei (b) Oktaven. Bei (c) ergäbe die Auflösung eine für seine Mollübung unbrauchbare Sexte über der Dominante.",
      "credit": "Prout, S. 105. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=109"
    },
    "fux-floridus": {
      "image": "quellen/noten/fux-floridus.webp",
      "title": "Aloysius’ Modell für den floriden Kontrapunkt",
      "alt": "Ein ganzer zweistimmiger Satz in zwei Systempaaren. Unten stehen die gleich langen Töne des Cantus firmus, oben wechseln Pausen, kleine Notenwerte und übergebundene Töne.",
      "caption": "Suche zuerst zwei Stellen, an denen eine Note über den Taktstrich gebunden wird. Verfolge dann, wie die kürzeren Noten diese Stellen miteinander verbinden.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118126"
    },
    "prout-achtel": {
      "image": "quellen/noten/prout-achtel.webp",
      "title": "Achtel auf leichten oder schweren Zählzeiten",
      "alt": "Vier Takte mit demselben liegenden Unterton. Bei a und b steht das Achtelpaar auf einem leichten Viertel, bei c und d auf einem schweren.",
      "caption": "§ 301. (a) und (b) unterteilen ein leichtes Viertel. Bei (c) und (d) liegt die Verkleinerung auf einem schweren Viertel und verschiebt für Prout das hörbare Gewicht.",
      "credit": "Prout, S. 118. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=122"
    },
    "cherubini-kadenz": {
      "image": "quellen/noten/cherubini-kadenz.webp",
      "title": "Über dem Bass zur Kadenz",
      "alt": "Zwei Takte mit der Ziffernfolge 5–6–8. Über dem fallenden Bass steigt die Oberstimme in zwei Schritten zur Oktave.",
      "caption": "Bsp. 46. Bei unverändertem vorletztem Basston steigt die Oberstimme von der Quinte zur großen Sexte. Der nächste Schritt führt in die Schlussoktave.",
      "credit": "Cherubini, S. 14. Harvard University / Google Books, via Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=20"
    },
    "prout-schlussbass": {
      "image": "quellen/noten/prout-schlussbass.webp",
      "title": "Zum Schlussgrundton im Schritt oder Sprung",
      "alt": "Drei Schlüsse zur Oktave. Die obere Stimme fällt unverändert, die Bassführung ist jeweils eine andere.",
      "caption": "§ 119. Die Bassstimme erreicht das Schluss-c zuerst im Halbtonschritt, dann im aufsteigenden Quartsprung, zuletzt im absteigenden Quintsprung. Prout bevorzugt die erste Fassung und beanstandet bei der letzten die verdeckte Oktave.",
      "credit": "Prout, S. 60. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=64"
    },
    "prout-zweiklang": {
      "image": "quellen/noten/prout-zweiklang.webp",
      "title": "Welche Dreiklänge kann eine Terz vertreten?",
      "alt": "Vier Terzen auf unterschiedlichen Basstönen in C-Dur. Das erste Beispiel zeigt d und f.",
      "caption": "§ 115. Setze in Gedanken den fehlenden dritten Akkordton ein. Für (a) ergeben sich mit a oder h zwei mögliche Dreiklänge.",
      "credit": "Prout, S. 59. Cornell University Library / Internet Archive, gemeinfrei. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=63"
    },
    "zarlino-kadenz": {
      "image": "quellen/noten/zarlino-kadenz.webp",
      "title": "Verzierte Klauseln zum Einklang",
      "alt": "Zwei Stimmen zeigen mehrere Fassungen einer Klausel. Die Noten der Gegenstimme werden innerhalb der Zeile zunehmend unterteilt.",
      "caption": "Suche in der ersten vollständig klingenden Klausel die Folge Sekunde – kleine Terz – Einklang. Vergleiche dann die kleineren Notenwerte in den folgenden Fassungen.",
      "credit": "Gioseffo Zarlino, Le istitutioni harmoniche, Venedig 1558, S. 222. Ausschnitt aus dem gemeinfreien Digitalisat der Library of Congress, Music Division.",
      "url": "https://www.loc.gov/resource/music.muspre1800-100213/?sp=119"
    },
    "fux-kadenz": {
      "image": "quellen/noten/fux-kadenz.webp",
      "title": "Zwei Stimmverteilungen derselben Schlussaufgabe",
      "alt": "Zwei zweistimmige Schlüsse nebeneinander. Links bewegen sich die Halben oben, rechts unten. Beide Gegenstimmen führen mit einem erhöhten Ton in den Schluss.",
      "caption": "Verfolge jeweils die Stimme mit den beiden Halben. Links öffnet sich die große Sexte zur Oktave, rechts zieht sich die kleine Terz zum Einklang zusammen.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118106"
    },
    "cherubini-52-53-cambiata": {
      "image": "quellen/noten/cherubini-52-53-cambiata.webp",
      "title": "Bsp. 52 und 53 · Zwei Wege von der Oktave zur Quinte",
      "alt": "Bei gleichem Basston lauten die ersten Intervallziffern in Bsp. 52 8–7–5–6, in Bsp. 53 8–6–5–6.",
      "caption": "In Bsp. 52 verlässt die Oberstimme die dissonante Septime mit einem Terzsprung. Cherubinis bevorzugte Fassung in Bsp. 53 setzt diese Terz früher an und erreicht die Quinte von der konsonanten Sexte aus.",
      "credit": "Digitalisat über IMSLP und Wikimedia Commons. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/0/03/Cours_de_contrepoint_et_de_fugue_%28IA_imslp-de-contrepoint-et-de-fugue-cherubini-luigi%29.pdf#page=20"
    },
    "bellermann-164-palestrina": {
      "image": "quellen/noten/bellermann-164-palestrina.webp",
      "title": "Palestrina · Ego sum panis vivus",
      "alt": "Vier Vokalstimmen mit lateinischem Text. Sternchen im Notentext kennzeichnen die Wechselnoten in verschiedenen Stimmen.",
      "caption": "Suche die Sternchen und singe jeweils die betroffene Stimme über die markierte Note hinaus. Das Motettenzitat belegt die Figur in einem vierstimmigen Repertoirestück.",
      "credit": "Digitalisat der Sibley Music Library, University of Rochester. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=71310&itemId=22248#page=192"
    },
    "fux-einklang": {
      "image": "quellen/noten/fux-einklang.webp",
      "title": "Aus der Terz zum Einklang",
      "alt": "Zwei gleichzeitige Notenköpfe im Terzabstand. Rechts treffen sich beide Stimmen auf demselben Ton, darüber steht die Ziffer 1.",
      "caption": "Singe zunächst die höhere Linie und danach die tiefere. Beide enden auf derselben Tonhöhe. Auf der Folgeseite beschränkt Fux diesen Zusammenklang ausdrücklich auf die Ränder der Übung.",
      "credit": "Johann Joseph Fux, Gradus ad Parnassum (Wien, 1725). Wienbibliothek im Rathaus, B-61291. Ausschnitt, Public Domain Mark 1.0.",
      "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118102"
    },
    "fuge-prout-bach-mozart-antwort": {
      "image": "quellen/noten/fuge-prout-bach-mozart-antwort.webp",
      "title": "Bach und Mozart bei Prout",
      "alt": "Zwei einzeilig gedruckte Ausschnitte mit S für das Thema und A für die Antwort. Oben die E-Dur-Fuge aus dem zweiten Teil des Wohltemperierten Klaviers, unten Mozarts G-Dur-Quartett.",
      "caption": "Singe jeweils die ersten beiden Töne bei S und bei A. In Mozarts Beispiel ändert sich die Intervallgröße. Lies bei Bach auch den gegenüber dem Thema verlängerten Schlusston.",
      "credit": "Prout, Fugue, S. 18. University of North Carolina at Chapel Hill, Music Library, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=34"
    },
    "fuge-cherubini-martini-real": {
      "image": "quellen/noten/fuge-cherubini-martini-real.webp",
      "title": "Padre Martini als Modell der Realfuge",
      "alt": "Das Thema setzt oben ein. In der unteren Notenzeile beginnt die mit Response bezeichnete Antwort, während oben das Kontrasubjekt einsetzt.",
      "caption": "Prüfe die ersten drei Töne der beiden Einsätze. Die eckigen Klammern im Druck zeigen, wo in der ersten Stimme das Thema endet und der Kontrapunkt zur Antwort beginnt.",
      "credit": "Cherubini, A Treatise on Counterpoint & Fugue, S. 67. Harvard University / Google Books, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=73"
    },
    "fuge-cherubini-quinte-quarte": {
      "image": "quellen/noten/fuge-cherubini-quinte-quarte.webp",
      "title": "Zwei Töne für Thema und Antwort",
      "alt": "Beispiel 200 stellt je zwei Töne als Subject und Response einander gegenüber. Die obere und untere Zeile zeigen verschiedene Lagen.",
      "caption": "Singe die erste Zeile in ihrer notierten Lage. Vergleiche dann den Abstand der beiden Anfänge in der zweiten Zeile mit dem der ersten.",
      "credit": "Cherubini, A Treatise on Counterpoint & Fugue, S. 66. Harvard University / Google Books, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=72"
    },
    "fuge-prout-bach-es-tonal": {
      "image": "quellen/noten/fuge-prout-bach-es-tonal.webp",
      "title": "Es-Dur · Die erste Quinte wird zur Quarte",
      "alt": "Übereinander gedruckte Themen- und Antwortzeile aus Bachs Es-Dur-Fuge, WTK II/7. Die Schlüssel der beiden Zeilen unterscheiden sich.",
      "caption": "Spiele es–b im Thema und b–es in der Antwort. Suche anschließend die weiteren b im Thema und prüfe, welcher Ton ihnen in der unteren Zeile entspricht.",
      "credit": "Prout, Fugue, S. 33. University of North Carolina at Chapel Hill, Music Library, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=49"
    },
    "fuge-prout-bach-g-real": {
      "image": "quellen/noten/fuge-prout-bach-g-real.webp",
      "title": "g-Moll · Die erste Quinte bleibt erhalten",
      "alt": "Übereinander gedruckte Themen- und Antwortzeile mit aufsteigenden Quinten aus der g-Moll-Orgelfuge. Beide Zeilen stehen im Violinschlüssel.",
      "caption": "Lies in der oberen Zeile g–d und unten d–a. Vergleiche diesen realen Beginn mit dem tonalen Beginn der Es-Dur-Fuge.",
      "credit": "Prout, Fugue, S. 35. University of North Carolina at Chapel Hill, Music Library, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=51"
    },
    "fuge-prout-doppeldominante": {
      "image": "quellen/noten/fuge-prout-doppeldominante.webp",
      "title": "Prouts Gegenprobe am Mozart-Thema",
      "alt": "Eine einzelne Zeile mit fünf langen Noten und einem zusätzlichen Kreuz vor dem vorletzten Ton.",
      "caption": "Prout versetzt hier Mozarts Thema aus § 57 probeweise ohne Anpassung. Singe d–fis–h–gis–a. Die Linie führt nach A. Für die Rückkehr zur Ausgangstonart G gibt Mozart eine andere Antwort.",
      "credit": "Prout, Fugue, S. 49. University of North Carolina at Chapel Hill, Music Library, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=65"
    },
    "fuge-cherubini-tonarten": {
      "image": "quellen/noten/fuge-cherubini-tonarten.webp",
      "title": "Die Tonarten über den Phrasen lesen",
      "alt": "Zwei Ausschnitte mit eckigen Klammern. Über dem Thema stehen In C und In G, über der Antwort In G und In C.",
      "caption": "Lies die Töne unter den beiden Klammergrenzen. Das d am Ende der ersten melodischen Phrase leitet zum g weiter. Die entsprechende Wendung der Antwort führt von g nach c.",
      "credit": "Cherubini, A Treatise on Counterpoint & Fugue, S. 67. Harvard University / Google Books, via Internet Archive. Gemeinfreier Notendruck, zwei Ausschnitte derselben Seite in Druckreihenfolge.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=73"
    },
    "fuge-prout-bach-subdominante": {
      "image": "quellen/noten/fuge-prout-bach-subdominante.webp",
      "title": "Bach · Eine Antwort in der Subdominante",
      "alt": "Zwei Stimmen aus der von Prout als Der Himmel lacht bezeichneten Kantate. Die zweite Stimme setzt nach einer Pause ein und enthält ein b.",
      "caption": "Verfolge die mit A bezeichnete untere Stimme bis zu ihrem b. Höre die kantable Linie in F-Dur und vergleiche sie mit dem C-Dur-Thema der oberen Stimme.",
      "credit": "Prout, Fugue, S. 26. University of North Carolina at Chapel Hill, Music Library, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=42"
    },
    "fuge-cherubini-abschnittswechsel": {
      "image": "quellen/noten/fuge-cherubini-abschnittswechsel.webp",
      "title": "Zwei Verfahren innerhalb einer Antwort",
      "alt": "Ein zweizeiliges Notenbeispiel. Über den Abschnitten stehen die Bezeichnungen Real fugue und Tonal fugue.",
      "caption": "Lies zuerst nur bis zum Ende des als „Real fugue“ bezeichneten Abschnitts. Verfolge anschließend die Tonhöhen des Schlusses in beiden Zeilen.",
      "credit": "Cherubini, A Treatise on Counterpoint & Fugue, S. 68. Harvard University / Google Books, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=74"
    },
    "fuge-prout-zwei-antworten": {
      "image": "quellen/noten/fuge-prout-zwei-antworten.webp",
      "title": "Zwei Antworten auf dasselbe Thema",
      "alt": "Das Thema S über den getrennt gesetzten Anfängen A 1 und A 2 aus Bachs A-Dur-Orgelfuge. Die erste Antwort beginnt nach einer Pause.",
      "caption": "Singe den Themenkopf erst mit A 1, dann mit A 2 im Wechsel. Prüfe den Abstand zwischen den ersten beiden Tonhöhen und anschließend die Dauer des ersten Tons.",
      "credit": "Prout, Fugue, S. 46. University of North Carolina at Chapel Hill, Music Library, via Internet Archive. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=62"
    },
    "fuge-prout-bach-kontrasubjekt": {
      "image": "quellen/noten/fuge-prout-bach-kontrasubjekt.webp",
      "title": "Bachs c-Moll-Fuge · die erste Gegenstimme",
      "alt": "Zwei Systeme aus BWV 847. Erst trägt die tiefer notierte Stimme das Thema allein vor. Beim Einsatz der höheren Stimme steht über der unteren Linie CS.",
      "caption": "Spiele im zweiten System die mit CS bezeichnete Stimme allein. Wenn du die Antwort darüber hinzunimmst, hörst du zwei verschiedene Bewegungsmuster.",
      "credit": "Ebenezer Prout, S. 72. University of North Carolina at Chapel Hill / Internet Archive. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=88"
    },
    "fuge-gedalge-bach-contresujet": {
      "image": "quellen/noten/fuge-gedalge-bach-contresujet.webp",
      "title": "Eine Stimme füllt die Pausen der anderen",
      "alt": "Zwei Notenzeilen tragen die Bezeichnungen Sujet und Contresujet. Am Anfang sind Pausen und verschieden lange Noten beider Stimmen gegeneinander versetzt.",
      "caption": "Lies die ersten beiden Takte senkrecht. Wo die Oberstimme pausiert, führt die Unterstimme den Puls weiter. Gédalge führt die Stelle unter Bachs Namen als Beispiel für die rhythmische Ergänzung an.",
      "credit": "André Gédalge, S. 60. Sibley Music Library, Eastman School of Music, University of Rochester. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=72"
    },
    "fuge-gedalge-exposition-zwei-stimmen": {
      "image": "quellen/noten/fuge-gedalge-exposition-zwei-stimmen.webp",
      "title": "Vier Einsätze in zwei Stimmen · Gédalges Schema",
      "alt": "Zwei beschriftete Schemata. Eingekreiste Zahlen von eins bis vier zeigen Sujet, Réponse, Sujet, Réponse. Im ersten Schema beginnt die obere, im zweiten die untere Stimme.",
      "caption": "Verfolge in Modell Nr. 1 die eingekreisten Zahlen. Nach der Antwort singt dieselbe untere Stimme das Thema. Erst der vierte Einsatz führt die Antwort in die Oberstimme.",
      "credit": "André Gédalge, S. 74. Sibley Music Library, Eastman School of Music, University of Rochester. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=86"
    },
    "fuge-gedalge-coda-du-sujet": {
      "image": "quellen/noten/fuge-gedalge-coda-du-sujet.webp",
      "title": "Die Coda des Themas vor dem Kontrasubjekt",
      "alt": "Zwei Stimmen. Die obere Zeile ist in fin du Sujet, Coda und Contresujet gegliedert. Die Antwort setzt unten ein, während die Coda oben noch läuft.",
      "caption": "Markiere den Beginn der Antwort und den Beginn des Kontrasubjekts. Die beiden Einsätze fallen auseinander. Die Coda überbrückt ihren Abstand.",
      "credit": "André Gédalge, S. 71. Sibley Music Library, Eastman School of Music, University of Rochester. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=83"
    },
    "fuge-prout-codetta-episode": {
      "image": "quellen/noten/fuge-prout-codetta-episode.webp",
      "title": "Dasselbe Material vor und nach dem Basseinsatz",
      "alt": "Drei Klaviersysteme aus BWV 847. Oben steht Codetta, in der Mitte erscheint das Thema im Bass, unten steht Episode.",
      "caption": "Vergleiche die erste und die dritte Zeile. Beide greifen den Themenkopf auf. In der ersten Zeile pausiert der Bass noch, in der dritten verarbeitet er bereits den Beginn des Kontrasubjekts.",
      "credit": "Ebenezer Prout, S. 93. University of North Carolina at Chapel Hill / Internet Archive. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=109"
    },
    "fuge-cherubini-stretto": {
      "image": "quellen/noten/fuge-cherubini-stretto.webp",
      "title": "Einsätze nacheinander und ineinander",
      "alt": "Zwei Fassungen im Violinschlüssel und C-Schlüssel. Die Überschriften Subject und Response kennzeichnen die unterschiedlich weit auseinanderliegenden Einsätze.",
      "caption": "Suche in beiden Fassungen das erste erklingende Zeichen der Unterstimme. Unten hört man die Antwort bereits, während die Oberstimme noch das Thema singt.",
      "credit": "Luigi Cherubini, S. 65. Harvard University / Google Books, via Internet Archive. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/A_treatise_on_counterpoint_%26_fugue_%28IA_atreatiseoncoun00pittgoog%29.pdf#page=71"
    },
    "fuge-prout-stretto-abstaende": {
      "image": "quellen/noten/fuge-prout-stretto-abstaende.webp",
      "title": "Vier Versuche an demselben Thema",
      "alt": "Zwei Notensysteme enthalten die Fassungen a bis d. Die Stimmen setzen in verschiedenen Abständen ein. In c bleibt Platz für einen ergänzenden Bass.",
      "caption": "Zähle die Einsatzabstände. Bei (a) und (b) beträgt der Abstand einen Takt, bei (c) einen halben. In (d) folgen drei Einsätze im Viertelabstand. Prout bezeichnet diese Versuche als Demonstration der Machbarkeit.",
      "credit": "Ebenezer Prout, S. 110. University of North Carolina at Chapel Hill / Internet Archive. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Fugue_%28IA_fugueprout%29.pdf#page=126"
    },
    "fuge-gedalge-gegenexposition": {
      "image": "quellen/noten/fuge-gedalge-gegenexposition.webp",
      "title": "Gédalges dreistimmige Gegenexposition",
      "alt": "Vier dreistimmige Schemata. Die Ziffer 1 steht jeweils über der Antwort, die Ziffer 2 über dem Thema. Eine der Stimmen führt freien Kontrapunkt.",
      "caption": "Verfolge in Schema (c) die Mittelstimme und dann den Bass. Die Oberstimme bleibt frei. In (d) ändern sich die Stimmlagen, die Reihenfolge Antwort–Thema bleibt gleich.",
      "credit": "André Gédalge, Traité de la fugue, S. 109. Sibley Music Library, University of Rochester. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=73074&itemId=23136#page=121"
    },
    "fuge-bach-bwv854-gegenexposition": {
      "image": "quellen/noten/fuge-bach-bwv854-gegenexposition.webp",
      "title": "BWV 854 · Die zweite Einsatzgruppe",
      "alt": "Zwei Klaviersysteme mit den Takten 5 bis 12 der dreistimmigen E-Dur-Fuge. Der Themenkopf tritt nacheinander in der Ober-, Mittel- und Unterstimme auf.",
      "caption": "Zähle ab der gedruckten 5. Verfolge in Takt 6–10 zuerst die Oberstimme, dann den Alt und schließlich den Bass. Vergleiche für jeden Einsatz die Tonstufe mit derjenigen derselben Stimme in der ersten Durchführung.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier I, Bach-Gesellschaft, Bd. XIV, hrsg. Franz Kroll, Leipzig 1866, S. 37. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=37"
    },
    "fuge-prout-bwv872-vier-toene": {
      "image": "quellen/noten/fuge-prout-bwv872-vier-toene.webp",
      "title": "Das Thema in Prouts Analyse",
      "alt": "Kurzes Beispiel im Bassschlüssel mit Auftaktpause und vier Tönen in Cis-Dur.",
      "caption": "Prouts Notenzeile bricht nach dem vierten Ton ab. Singe diese Gestalt und suche sie anschließend in Bachs vollständigem Satz.",
      "credit": "Prout, Analysis of J. S. Bach’s Forty-Eight Fugues, S. 56. Exemplar der University of Toronto, Faculty of Music Library. Gemeinfreier Druck, Ausschnitt.",
      "url": "https://waltercosand.com/CosandScores/Composers%20L-P/Composers_P/Prout%2C%20Ebenezer/Prout-Analysis_of_Bach%27s_48_Fugues.pdf#page=60"
    },
    "fuge-bach-bwv872-themengrenze": {
      "image": "quellen/noten/fuge-bach-bwv872-themengrenze.webp",
      "title": "Zwei mögliche Enden derselben Basslinie",
      "alt": "Beginn der Cis-Dur-Fuge BWV 872. Unter der Bassstimme stehen zwei redaktionelle Markierungen bei der vierten und bei der achten Note.",
      "caption": "Die Striche bezeichnen die Tonanfänge der beiden vorgeschlagenen Schlusstöne. Prouts vierter Ton steht noch im ersten Takt, Kellers achter Ton im zweiten.",
      "credit": "J. S. Bach, Bach-Gesellschaft, Bd. 14, S. 102 (1866), via IMSLP. Gemeinfreier Notendruck. Ausschnitt mit zwei redaktionellen Markierungen.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/4/4b/IMSLP173660-PMLP05899-2.pdf#page=14"
    },
    "bach-wtk1-846-antwort": {
      "image": "quellen/noten/bach-wtk1-846-antwort.webp",
      "title": "BWV 846 · Vier Einsätze in der C-Dur-Fuge",
      "alt": "Zwei Klaviersysteme mit Takt 1 bis 6. Zuerst setzt die Altstimme ein, danach die Stimmen Sopran, Tenor und Bass.",
      "caption": "Verfolge die drei steigenden Achtel am Beginn jedes Einsatzes. Die erste und die vierte Stimme beginnen auf c, die beiden mittleren Einsätze auf g in verschiedenen Oktaven.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=4"
    },
    "bach-wtk1-847-tonale-antwort": {
      "image": "quellen/noten/bach-wtk1-847-tonale-antwort.webp",
      "title": "BWV 847 · Thema im Alt und Antwort im Sopran",
      "alt": "Die ersten sechs Takte der c-Moll-Fuge. Die zunächst allein spielende Stimme erhält in Takt 3 eine höhere Gegenstimme.",
      "caption": "Singe die ersten vier Töne im Alt und dann im Sopran. Auf c–h–c folgt unten g, auf g–fis–g oben c. Die Antwort erreicht an dieser Stelle die Tonika der Grundtonart.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=8"
    },
    "bach-wtk1-853-quintsprung": {
      "image": "quellen/noten/bach-wtk1-853-quintsprung.webp",
      "title": "BWV 853 · Quintaufstieg und Quartantwort",
      "alt": "Erstes System der dis-Moll-Fuge. Der Alt beginnt mit einem Aufwärtssprung. In Takt 3 setzt der Sopran ebenfalls mit einem Aufwärtssprung ein.",
      "caption": "Lies zunächst die ersten zwei Töne des Alts, dann die ersten zwei mit aufwärts gerichtetem Hals im Sopran. Aus dis–ais wird ais–dis.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=34"
    },
    "bach-wtk1-852-modulation": {
      "image": "quellen/noten/bach-wtk1-852-modulation.webp",
      "title": "BWV 852 · Zwei verschiedene Wege zum Schluss des Themas",
      "alt": "Zwei Systeme der Es-Dur-Fuge, Takt 1 bis 6. In der Oberstimme beginnt das Thema auf b. Ab Takt 3 antwortet die Mittelstimme.",
      "caption": "Lies im Sopran bis zum ersten Sechzehntel auf der dritten Zählzeit von Takt 2 und im Alt bis zur entsprechenden Stelle in Takt 4. Achte auf das Auflösungszeichen vor a im Thema und auf den Schluss jedes Einsatzes.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=30"
    },
    "bach-wtk1-847-kontrasubjekt": {
      "image": "quellen/noten/bach-wtk1-847-kontrasubjekt.webp",
      "title": "BWV 847 · Dieselbe Gegenstimme unter und über dem Thema",
      "alt": "Zwei getrennte Ausschnitte, oben Takt 1 bis 3, unten Takt 7 bis 9. Am Ende des ersten Ausschnitts läuft die Altstimme abwärts, zu Beginn des zweiten die Sopranstimme.",
      "caption": "Vergleiche die absteigende Sechzehntelkette im Alt von Takt 3 mit jener im Sopran von Takt 7. Im ersten Ausschnitt liegt das Thema darüber, im zweiten darunter. Die beiden Ausschnitte stehen im Original in der ersten und dritten Notenzeile.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=8"
    },
    "bach-wtk1-847-episode": {
      "image": "quellen/noten/bach-wtk1-847-episode.webp",
      "title": "BWV 847 · Sequenz zwischen Basseinsatz und Es-Dur-Einsatz",
      "alt": "Zwei Klaviersysteme mit Takt 7 bis 12 der c-Moll-Fuge. Nach dem Einsatz im Bass folgen kurze Themenkopf-Figuren in den oberen Stimmen und Sechzehntel im Bass.",
      "caption": "Der letzte Takt des oberen und der erste Takt des unteren Systems bilden den Kern des Zwischenspiels. Vergleiche die Figuren und suche anschließend im Sopran den vollständigen Einsatz auf es.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=8"
    },
    "bach-wtk1-846-engfuehrung": {
      "image": "quellen/noten/bach-wtk1-846-engfuehrung.webp",
      "title": "BWV 846 · Zwei Stimmen im Abstand einer Viertelnote",
      "alt": "Takte 7 und 8 der C-Dur-Fuge. Im oberen System setzt der Sopran ein. Im unteren System antwortet der Tenor, während der Sopran weiterläuft.",
      "caption": "Singe im Sopran c–d–e und setze im Tenor mit g–a–h ein. Das g des Tenors erklingt bereits zum e des Soprans.",
      "credit": "J. S. Bach, Das wohltemperirte Clavier, Teil I. Bach-Gesellschaft, Bd. XIV, hrsg. von Franz Kroll, Leipzig 1866. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/2b/IMSLP173661-PMLP05948-1.pdf#page=4"
    },
    "piston-beethoven-op18-1-adagio": {
      "image": "quellen/noten/piston-beethoven-op18-1-adagio.webp",
      "title": "Beethovens erste Violine · vom a zum b und zurück ins tiefere Register",
      "alt": "Der Beginn des Adagio aus dem Streichquartett op. 18 Nr. 1. Nach einem Takt Pause beginnt die erste Violine auf a. Gegen Ende der ersten Zeile fällt sie vom hohen b zum cis.",
      "caption": "Spiele die erste Violine ab Takt 2. Der höchste Ton b fällt in Takt 6, den fünften Takt der klingenden Phrase. Von dort fällt die Linie unmittelbar zum cis. Piston bespricht diese Stelle in Beispiel 1.",
      "credit": "Ludwig van Beethoven, Streichquartett op. 18 Nr. 1, II, T. 1–9 (bis zum ersten Ton von T. 9). Violino I, Mainz, Schott, zwischen 1835 und 1850, S. 4. Sibley Music Library, University of Rochester, gemeinfreies Digitalisat. Zwei Ausschnitte derselben Seite.",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemFileId=36634&itemId=15798#page=4"
    },
    "piston-bach-bwv971-andante": {
      "image": "quellen/noten/piston-bach-bwv971-andante.webp",
      "title": "Die Oberstimme setzt über einer bereits hörbaren Begleitung ein",
      "alt": "Anfang des Andante aus dem Italienischen Konzert. Drei Takte erklingt die Begleitung allein. Im vierten Takt kommt die reich verzierte Oberstimme hinzu.",
      "caption": "Spiele zuerst die linke Hand. Behalte deren Achtelpuls bei und singe ab Takt 4 die rechte Hand dazu. Piston empfiehlt nach Beispiel 88 den ganzen Satz zur Analyse. Der Atlas zeigt dafür den Satzanfang.",
      "credit": "J. S. Bach, Italienisches Konzert BWV 971, II, T. 1–7. Bach-Gesellschaft, Bd. III, Leipzig, Breitkopf & Härtel, 1853, S. 144. Gemeinfreier Notendruck, Ausschnitt.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/2/23/IMSLP00795-BWV0971.pdf#page=6"
    },
    "piston-bach-bwv885-kontrasubjekt": {
      "image": "quellen/noten/piston-bach-bwv885-kontrasubjekt.webp",
      "title": "BWV 885 · Antwort und Gegenstimme",
      "alt": "Die g-Moll-Fuge beginnt im Tenor. An der gedruckten 5 setzt im oberen System die Antwort ein. Darunter beginnt eine Linie mit Sechzehnteln.",
      "caption": "Singe bei der 5 zunächst die Unterstimme, dann die Stimme darüber. Der Tenor wechselt vom Thema zur Gegenstimme für die Antwort des Alts. Piston bespricht die Vertauschbarkeit dieser Linien in Beispiel 270. Hier ist der Anfang der Fuge in der Bach-Gesellschaft-Ausgabe zu sehen.",
      "credit": "J. S. Bach, Das Wohltemperirte Clavier II, Bach-Gesellschaft, Bd. 14, hg. Franz Kroll, Leipzig 1866. Gemeinfreier Druck, Ausschnitt. S. 156, T. 1–10.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/4/4b/IMSLP173660-PMLP05899-2.pdf#page=68"
    },
    "piston-bach-bwv885-duodezime": {
      "image": "quellen/noten/piston-bach-bwv885-duodezime.webp",
      "title": "BWV 885 · dieselben Stimmen in anderer Lage",
      "alt": "Zweite Notenzeile von Seite 157. Der Themeneinsatz in der Mittelstimme ist von schnelleren Gegenstimmen umgeben. Die Zahl 30 markiert den letzten Takt des Systems.",
      "caption": "Zähle von der gedruckten 30 zwei Takte zurück. In Takt 28 übernimmt der Alt das Thema. Suche die aus der Exposition vertrauten Sechzehntel und vergleiche die Zusammenklänge mit der ersten Fassung. Prout bestimmt für diese Stelle die Vertauschung in der Duodezime.",
      "credit": "J. S. Bach, Das Wohltemperirte Clavier II, Bach-Gesellschaft, Bd. 14, hg. Franz Kroll, Leipzig 1866. Gemeinfreier Druck, Ausschnitt. S. 157, T. 27–30.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/4/4b/IMSLP173660-PMLP05899-2.pdf#page=69"
    },
    "piston-bach-oktavkanon": {
      "image": "quellen/noten/piston-bach-oktavkanon.webp",
      "title": "Bachs Oktavkanon · vier Takte Vorsprung",
      "alt": "Zwei Systeme des Canon alla Octava. Vier Takte lang spielt die Oberstimme allein. Am Beginn der zweiten Zeile übernimmt die Unterstimme ihre Melodie.",
      "caption": "Spiele die erste Zeile. Beginne sie dann eine Oktave tiefer, während die Oberstimme in der zweiten Zeile weiterspielt. Diesen Kanon wählt Piston für Beispiel 281. Hier steht sein Beginn im Nägeli-Druck.",
      "credit": "J. S. Bach, Die Kunst der Fuge, Canon alla Octava, Zürich, Hans Georg Nägeli, [1802], S. 141. Zentralbibliothek Zürich, Mus 839, e-rara, Public Domain Mark, DOI 10.3931/e-rara-23502. Ausschnitt.",
      "url": "https://www.e-rara.ch/zuz/content/pageview/7282169"
    },
    "piston-bach-contrapunctus-vii": {
      "image": "quellen/noten/piston-bach-contrapunctus-vii.webp",
      "title": "Bachs Contrapunctus VII · ein Themenkopf in zwei Zeitmaßen",
      "alt": "Vier Notenzeilen in Partituranordnung. Der Tenor beginnt in Takt 1. Der Sopran setzt in Takt 2 mit längeren Werten ein, der Alt im dritten Takt mit kürzeren. Der Bass pausiert.",
      "caption": "Vergleichsstelle aus demselben Werk, Takt 1–3. Klopfe im Tenor die ersten drei Töne d–a–g (Viertel, punktierte Achtel, Sechzehntel). Der Sopran antwortet mit a–d–e (Halbe, punktierte Viertel, Achtel). Die erste Quinte fällt nun, und die drei Dauern sind jeweils verdoppelt.",
      "credit": "J. S. Bach, Die Kunst der Fuge, BWV 1080/7. Notensatz Arnaud Gossart (2006) nach Breitkopf & Härtel (1885), Mutopia-2006/04/13-736. Vom Notensetzer als gemeinfrei gekennzeichnet. Ausschnitt.",
      "url": "https://www.mutopiaproject.org/ftp/BachJS/BWV1080/contrapunctusVII/contrapunctusVII-a4.pdf#page=1"
    },
    "piston-schumann-fast-zu-ernst": {
      "image": "quellen/noten/piston-schumann-fast-zu-ernst.webp",
      "title": "Schumann · Fast zu ernst",
      "alt": "Beginn von Fast zu ernst im Zweiachteltakt. Die Oberstimme beginnt auftaktig und bindet über die Taktstriche, während die linke Hand auf den Taktanfängen spielt.",
      "caption": "Spiele zuerst nur die oberste Stimme. Ergänze die linke Hand und klopfe die Eins mit. Wo du den Taktanfang hörst, kann sich durch die zweite Hand ändern. Piston untersucht das Stück in Beispiel 96. Der Atlas zeigt den Anfang in einem separaten historischen Druck.",
      "credit": "Robert Schumann, Kinderscenen op. 15, Nr. 10, Auftakt und T. 1–5, gedruckte S. 14. Leipzig, Breitkopf & Härtel, Pl.-Nr. 6016. Badische Landesbibliothek Karlsruhe, DonMusDr 3156, Public Domain Mark 1.0. Ausschnitt.",
      "url": "https://digital.blb-karlsruhe.de/blbihd/content/pageview/6854379"
    },
    "gallon-bitsch-nr-1-2": {
      "kind": "buchbeispiel",
      "title": "Nr. 1 und 2 · Cantus firmus unten und oben",
      "caption": "Suche das Kürzel C.F. in beiden Systemen. Lies die vorgegebene Dur-Melodie zuerst in der Unterstimme von Nr. 1, dann in der Oberstimme von Nr. 2. Singe dazu die jeweils neu erfundene Gegenstimme.",
      "credit": "Marcel Bitsch · Aussetzung in Noël-Gallon und Marcel Bitsch, Traité de contrepoint, Teil II, Nr. 1–2, S. 60. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=2"
    },
    "gallon-bitsch-nr-7-9": {
      "kind": "buchbeispiel",
      "title": "Nr. 7 und 9 · zwei Halbe, zwei Schlüsse",
      "caption": "Vergleiche die letzten beiden Takte der Oberstimme. In der Durfassung Nr. 7 bewegt sie sich in Halben. In der Mollfassung Nr. 9 bindet Bitsch den Ton in den vorletzten Takt. Suche die Stelle, an der wieder beide Stimmen einen Ton neu ansetzen.",
      "credit": "Marcel Bitsch · Aussetzung in Noël-Gallon und Marcel Bitsch, Traité de contrepoint, Teil II, Nr. 7 und 9, S. 61. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=3"
    },
    "gallon-bitsch-nr-15-16": {
      "kind": "buchbeispiel",
      "title": "Nr. 15 und 16 · Synkopen über und unter dem Cantus",
      "caption": "Singe nur die gebundene Stimme, zuerst oben in Nr. 15, dann unten in Nr. 16. Halte bei jedem Tonwechsel des Cantus firmus inne. Welche gebundenen Töne bleiben konsonant, welche werden zum Vorhalt?",
      "credit": "Marcel Bitsch · Aussetzung in Noël-Gallon und Marcel Bitsch, Traité de contrepoint, Teil II, Nr. 15–16, S. 63. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=5"
    },
    "gallon-bitsch-nr-19-20": {
      "kind": "buchbeispiel",
      "title": "Nr. 19 und 20 · vom gleichmäßigen Puls zum Floridus",
      "caption": "Suche in Nr. 19 den Wechsel zwischen Bindungen, Vierteln und Halben. Lies anschließend Nr. 20 mit dem Cantus firmus in der Oberstimme. Wo setzt die bewegte Unterstimme ein?",
      "credit": "Noël-Gallon · Aussetzung in Noël-Gallon und Marcel Bitsch, Traité de contrepoint, Teil II, Nr. 19–20, S. 63. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch1simpl2.pdf#page=5"
    },
    "gallon-bitsch-nr-93-94": {
      "kind": "buchbeispiel",
      "title": "Nr. 93 und 94 · zwei Besetzungen im grand mélange",
      "caption": "Bei Sevrette liegen die gegebenen Ganzen im Bass, bei Kelkel im Tenor. Suche zuerst die Viertelstimme und dann die Synkopen. In Nr. 94, Takt 8, erläutert die Fußnote den Einklang von Bass und Tenor auf schwerer Zeit.",
      "credit": "Danielle Sevrette (Nr. 93) und Manfred Kelkel (Nr. 94) · Aussetzung in Noël-Gallon und Marcel Bitsch, Traité de contrepoint, Teil II, Nr. 93–94, S. 81. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch3simpl4.pdf#page=9"
    },
    "gallon-bitsch-durchgang-nebennote": {
      "image": "quellen/noten/gallon-bitsch-durchgang-nebennote.webp",
      "title": "Zwei Fortsetzungen für dieselbe leichte Halbe",
      "alt": "Der Bass wechselt von c zu a. Die obere Stimme geht in A von e über d nach c, in B von e über d zurück nach e.",
      "caption": "Die Ausschnitte stammen aus der Mitte einer gedachten Übung. In beiden liegt auf der leichten Halben d über c. Erst die nächste Note zeigt, ob d Durchgang oder untere Nebennote war. Beide Figuren entsprechen § 66.",
      "credit": "Neu komponiertes Notenbeispiel der Atlasredaktion nach der Regel bei Noël-Gallon und Marcel Bitsch, Traité de contrepoint (1964), S. 35, § 66.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=3",
      "kind": "leseuebung"
    },
    "gallon-bitsch-vorhaltsvorbereitung": {
      "image": "quellen/noten/gallon-bitsch-vorhaltsvorbereitung.webp",
      "title": "Wie früh muss das f erklingen?",
      "alt": "Zwei Oberstimmen mit derselben Tonfolge a–g–f über dem Bass f. Das f ist über den Taktstrich gebunden. In A dauert es vor dem Taktstrich eine Halbe, in B nur ein Viertel. Über dem neuen Basston g löst es sich jedes Mal nach e.",
      "caption": "Das f bildet über dem Basston f eine Oktave. Mit dem Basswechsel nach g wird es zur Septime, die nach e weitergeht. In A dauert die Vorbereitung eine Halbe und erfüllt § 63. In B setzt dasselbe f erst auf dem letzten Viertel ein. Den Unterschied hört man schon vor dem Basswechsel.",
      "credit": "Neu komponiertes Notenbeispiel der Atlasredaktion nach der Regel bei Noël-Gallon und Marcel Bitsch, Traité de contrepoint (1964), S. 33, § 63 A.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch5notEtrang.pdf#page=1",
      "kind": "leseuebung"
    },
    "gallon-bitsch-nr-119": {
      "kind": "buchbeispiel",
      "title": "Nr. 119 und 120 · Zwei Übungen zum Oktavtausch",
      "caption": "Nr. 119 und 120 sind zwei eigenständige Sätze. Die zweite Lage fehlt jeweils absichtlich. Vertausche in Nr. 119 die Lagen und prüfe, wie sich die Intervalle verändern.",
      "credit": "Noël-Gallon · Teil II, Nr. 119 und 120, S. 97. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch9renv2.pdf#page=1"
    },
    "gallon-bitsch-nr-135": {
      "kind": "buchbeispiel",
      "title": "Nr. 135–136 · Oktavkanon und Kanon in Gegenbewegung",
      "caption": "Vergleiche die beiden ersten Einsätze in jeder Aufgabe. In Nr. 135 wiederholt die zweite Stimme den Melodieverlauf in der Oktave. In Nr. 136 antwortet sie auf einen Aufwärtsschritt mit einem Abwärtsschritt und umgekehrt.",
      "credit": "Noël-Gallon · Teil II, Nr. 135–136, S. 111. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch13imit2.pdf#page=1"
    },
    "gallon-bitsch-kanon-verfahren": {
      "image": "quellen/noten/gallon-bitsch-kanon-verfahren.webp",
      "title": "Vier Lesarten eines Motivs",
      "alt": "Vorlage d′–e′–f′–a′. In Gegenbewegung ab d′ folgen c′–h–g, im Krebs beginnt die Zeile mit a′. In der Augmentation haben die ursprünglichen Töne den doppelten Wert.",
      "caption": "Singe jede Zeile. Bei der Gegenbewegung wird der erste Aufwärtsschritt zu einem Abwärtsschritt gleicher Größe. Im Krebs wechselst du die Leserichtung. Für die Augmentation hältst du jeden Ton doppelt so lange.",
      "credit": "Eigenes Motiv und redaktionelles Schema zu Teil I, §§ 105–107. Die Zeilen isolieren die Verfahren. Die ausgeführten Kanons stehen in den verlinkten Aufgaben.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch9imitPpes.pdf#page=2",
      "kind": "leseuebung"
    },
    "gallon-bitsch-nr-151": {
      "kind": "buchbeispiel",
      "title": "Nr. 151a–d · Ein Kanon in vier Gestalten",
      "caption": "Vergleiche 151a zunächst mit 151b in Gegenbewegung, dann mit 151c im Krebs. Prüfe in 151d, wie sich rückläufige Tonfolge und umgekehrte Intervallrichtung verbinden. Die vier Fassungen gehören zu derselben dreistimmigen Aufgabe.",
      "credit": "Alphonse Autran · Teil II, Nr. 151a–d, S. 116. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch14imit3.pdf#page=4"
    },
    "gallon-bitsch-nr-154": {
      "kind": "buchbeispiel",
      "title": "Nr. 154 · Augmentation im vierstimmigen Kanon",
      "caption": "Bestimme die Stimme mit den längeren Notenwerten. Lies anschließend die Anmerkung zu Takt 8. Wie begründen die Autoren die zwei aufeinanderfolgenden Quinten zwischen Sopran und Alt?",
      "credit": "Marcel Bitsch · Teil II, Nr. 154, S. 117. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch15imit4.pdf#page=1"
    },
    "gallon-bitsch-doppelchor": {
      "image": "quellen/noten/gallon-bitsch-doppelchor.webp",
      "title": "Die Bässe steuern die Einsätze der Chöre",
      "alt": "Drei Abschnitte. Zuerst singt Chor I, dann Chor II, dann singen beide Chöre entsprechend den gleichzeitig geführten Bässen.",
      "caption": "Lies jede Reihe für sich und vergleiche dann die Einträge übereinander. Wo beide vorgegebenen Bässe klingen, treffen auch die beiden Chöre zusammen.",
      "credit": "Redaktionelles Ablaufschema zu Teil I, §§ 69–71. Eigene Einteilung in drei Abschnitte.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p1/ch6dbleCoeur.pdf#page=1",
      "kind": "leseuebung"
    },
    "gallon-bitsch-nr-117": {
      "kind": "buchbeispiel",
      "title": "Nr. 117 · Doppelchor in Dur",
      "caption": "Lies zuerst nur die beiden Basssysteme und markiere die Pausen. Lies dann die vier Stimmen jedes Chors zusammen. Wo hörst du einen Wechsel der Gruppen und wo einen gemeinsamen Einsatz?",
      "credit": "Noël-Gallon · Teil II, Nr. 117, S. 91–92. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch8simplDlbCoeur.pdf#page=1"
    },
    "gallon-bitsch-nr-118": {
      "kind": "buchbeispiel",
      "title": "Nr. 118 · Doppelchor in Moll",
      "caption": "Suche die beiden mit B.D. (basse donnée) bezeichneten Stimmen. Verfolge, wann die zweite Basslinie auf die erste antwortet und wann beide zugleich klingen.",
      "credit": "René Saorgin · Teil II, Nr. 118, S. 93. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch8simplDlbCoeur.pdf#page=3"
    },
    "gallon-bitsch-grand-melange": {
      "kind": "leseanalyse",
      "title": "Vier Stimmen im grand mélange",
      "caption": "Die Synkopen wandern vom Sopran in den Bass, die Viertel vom Alt in den Sopran. Lies danach die Originalsysteme von Nr. 93 und 94. Wo setzt die Halbenstimme in jeder Lösung ein?",
      "alt": "Nr. 93 von oben nach unten: Synkopen, Viertel, Halbe, Cantus. Nr. 94: Viertel, Halbe, Cantus, Synkopen.",
      "credit": "Redaktionelle Analyse der Aussetzungen von Danielle Sevrette und Manfred Kelkel, Teil II, S. 81, Nr. 93 und 94.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch3simpl4.pdf#page=9",
      "image": "quellen/noten/gallon-bitsch-grand-melange.webp"
    },
    "prout-zwei-halbenstimmen": {
      "image": "quellen/noten/prout-zwei-halbenstimmen.webp",
      "title": "Zwei Stimmen in der zweiten Spezies",
      "alt": "Prouts dreistimmiges Beispiel mit dem gegebenen Thema in Ganzen im Sopran. Die beiden Unterstimmen setzen nach einer halben Pause mit Halben ein.",
      "caption": "Lies den Anfang von § 403. Im Sopran steht das mit S bezeichnete Thema. Klopfe die Einsätze der beiden Unterstimmen dazu. Nach ihrer gemeinsamen halben Pause bewegen sie sich beide in Halben.",
      "credit": "Ebenezer Prout, Counterpoint: Strict and Free, 3. Auflage, S. 155, § 403, erstes Beispiel. Cornell University Library / Internet Archive, gemeinfreier Druck. Ausschnitt.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Counterpoint-_strict_and_free_%28IA_cu31924021789650%29.pdf#page=159"
    },
    "gallon-bitsch-nr-152": {
      "kind": "buchbeispiel",
      "title": "Nr. 152 · Direkte Quinte zwischen Sopran und Bass",
      "caption": "Spiele in Takt 6–7 nur Sopran und Bass und höre auf die Bewegung in die Quinte. Nimm dann die Mittelstimmen hinzu. Im vierstimmigen Kanon begründen die Autoren diese direkte Außenquinte ausdrücklich mit der Schwierigkeit der Aufgabe.",
      "credit": "Marcel Bitsch · Teil II, Nr. 152, T. 6–7 und Anmerkung, S. 117. Zuschreibung im Index des exemples, S. 129.",
      "url": "https://www.normalesup.org/~sage/Musique/%3E16/contrepoint/p2/ch15imit4.pdf#page=1"
    },
    "foerster-dreiklang": {
      "title": "Nr. 1 · Bassstufen im Dreiklangssatz",
      "caption": "Unter dem Bass stehen die Stufenpaare 1–5, 6–2, 5–1 und 4–5. Spiele die beiden ausgeschriebenen Klänge im ersten Takt. Ergänze die Mittelstimmen dort, wo nur Bass und Oberstimme stehen.",
      "alt": "Die ersten vier Takte von Nr. 1. Unter jeder Bassnote steht ihre Stufe. Die ersten beiden Klänge sind vollständig ausgesetzt.",
      "credit": "Emanuel Aloys Förster, Practische Beyspiele, Wien, Artaria, 1818, I. Abteilung, S. 1, Nr. 1, T. 1–4. Ausschnitt aus dem historischen Druck, IMSLP Nr. 756100. Gemeinfrei.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=3",
      "image": "quellen/noten/foerster-dreiklang.webp"
    },
    "foerster-sextakkord": {
      "title": "Nr. 8 · Eine Bassnote mit zwei verschiedenen Zahlen",
      "caption": "Schau auf die zweite Hälfte des ersten Takts. Die 4 unter dem Bass bezeichnet seine Stufe in der Tonleiter. Die 6 darüber verlangt eine Sexte über diesem Basston. Spiele Terz und Sexte hinzu.",
      "alt": "Die ersten vier Takte von Nr. 8. An der zweiten Bassnote des ersten Takts steht eine 4 unter dem System und eine 6 über dem Basston.",
      "credit": "Emanuel Aloys Förster, Practische Beyspiele, Wien, Artaria, 1818, I. Abteilung, S. 4, Nr. 8, T. 1–4. Ausschnitt aus dem historischen Druck, IMSLP Nr. 756100. Gemeinfrei.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=6",
      "image": "quellen/noten/foerster-sextakkord.webp"
    },
    "foerster-septimenvergleich": {
      "title": "Die Septime auf der zweiten Stufe in Moll und Dur",
      "caption": "Spiele in beiden Sätzen die ersten beiden Klänge. Links bleibt das a über dem neuen Bass h liegen, rechts das c über d. Der gehaltene Ton wird jeweils zur Septime. Verfolge dann den Bass bis zur Tonika.",
      "alt": "Zwei kurze vierstimmige Notenbeispiele, links in Moll und rechts in Dur. Die Bassstufen 1, 2 und 5 stehen unter den Systemen. Über der zweiten Stufe ist die Septime beziffert.",
      "credit": "Emanuel Aloys Förster, Practische Beyspiele, Wien, Artaria, 1818, I. Abteilung, S. 13, unnummerierter Vergleich zwischen Nr. 24 und 25. Ausschnitt aus dem historischen Druck, IMSLP Nr. 756100. Gemeinfrei.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=15",
      "image": "quellen/noten/foerster-septimenvergleich.webp"
    },
    "foerster-vermindert": {
      "title": "Nach Nr. 2 · Drei Fortschreitungen in zwei Fassungen",
      "caption": "Spiele dieselbe Stelle zuerst bei a, dann bei b. Verfolge die Stimme, die bei b eine übermäßige Sekunde zurücklegt. Wie ändert Förster ihren Weg bei a? Wiederhole die Hörprobe mit den beiden anderen Lagen.",
      "alt": "Drei kurze Akkordpaare in Gruppe a und drei in Gruppe b. Förster billigt die Stimmführung bei a und beanstandet die übermäßige Sekunde bei b.",
      "credit": "Emanuel Aloys Förster, Practische Beyspiele, Wien, Artaria, 1818, I. Abteilung, S. 1–2, Anmerkung zu Nr. 2 und Notenbeispiele a und b. Ausschnitt aus dem historischen Druck, IMSLP Nr. 756100. Gemeinfrei.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=4",
      "image": "quellen/noten/foerster-vermindert.webp"
    },
    "foerster-aufwaerts": {
      "title": "Nr. 19 · Eine aufsteigende Dissonanz",
      "caption": "Das Kreuz über der ersten Halben in Takt 5 verweist auf Försters Anmerkung. Spiele zunächst Bass und Sopran. Ergänze dann die Mittelstimmen aus den Ziffern und verfolge den aufwärts geführten Dissonanzton in den nächsten Klang.",
      "alt": "Takte 1–6 der Nr. 19. In Takt 5 kennzeichnet ein Pluszeichen die Stelle, auf die sich Försters Kommentar zur aufwärts geführten Dissonanz bezieht.",
      "credit": "Emanuel Aloys Förster, Practische Beyspiele, Wien, Artaria, 1818, I. Abteilung, S. 9, Nr. 19, T. 1–6. Anmerkung auf S. 10. Ausschnitt aus dem historischen Druck, IMSLP Nr. 756100. Gemeinfrei.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=11",
      "image": "quellen/noten/foerster-aufwaerts.webp"
    },
    "foerster-nr8-t7": {
      "kind": "buchbeispiel",
      "title": "Nr. 8 · Erhöhte Sexte über der vierten Stufe in Moll",
      "caption": "In der zweiten Takthälfte von T. 7 steht a im Bass. Der vorgezeichnete Griff darüber enthält a, c und fis. Höre, welcher Ton verdoppelt ist. In e-Moll ist das fis die zweite Stufe. Die Sexte a–fis ist groß.",
      "credit": "Emanuel Aloys Förster, Nr. 8, T. 7, zweite Halbe, Artaria 1818, I. Abteilung, S. 4.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=6"
    },
    "foerster-nr26-t11": {
      "kind": "buchbeispiel",
      "title": "Nr. 26 · die Verdopplung vor der Quintfolge prüfen",
      "caption": "Spiele in Takt 11 die Bassnoten h–c mit dem g im Diskant. Ergänze zum ersten Sextakkord einmal ein weiteres g, dann ein h. Verfolge die Mittelstimmen zum folgenden Quintsextakkord. Försters Erläuterung zum Zeichen +++ steht am Fuß derselben Druckseite.",
      "credit": "Emanuel Aloys Förster, Nr. 26, T. 11 (Zeichen +++), Artaria 1818, I. Abteilung, S. 14.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=16"
    },
    "foerster-nr11": {
      "kind": "buchbeispiel",
      "title": "Nr. 11 · zwei Stufenzahlen unter einem g",
      "caption": "Lies die beiden Stufenangaben 5 und 4 unter dem ersten Basston von Takt 13 in ihren beiden Zeilen. Singe den Diskant h–cis–d bis Takt 14. Probiere dieselbe Linie mit b und vergleiche den ersten Schritt.",
      "credit": "Emanuel Aloys Förster, Nr. 11, T. 13–14 (Zeichen +), Artaria 1818, I. Abteilung, S. 6.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=8"
    },
    "foerster-transponieren": {
      "kind": "leseuebung",
      "title": "Derselbe bezifferte Bass in C-Dur und Es-Dur",
      "alt": "Zwei Basszeilen mit den Stufen 1, 3, 4, 5, 1. Die Ziffer 6 steht in C-Dur beim e und in Es-Dur beim g.",
      "caption": "Spiele c–e–f–g–c und ergänze über e die Terz g und die Sexte c. Versetze den Bass nach Es-Dur. Welche zwei Töne ergänzen jetzt das g? Spiele die neue Lage und vergleiche die beiden Sextakkorde.",
      "credit": "Eigenes Notenbeispiel der Atlasredaktion zur Übung im Vorwort der Practischen Beyspiele. Es-Dur, zweiter Basston g mit b und es.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=3",
      "image": "quellen/noten/foerster-transponieren.webp"
    },
    "foerster-nr26-t3": {
      "kind": "buchbeispiel",
      "title": "Nr. 26 · Zwei Griffe über demselben Basston",
      "caption": "Halte den Bass in Takt 3 und spiele beide von Förster erläuterten Lösungen der Folge 6–5. Verfolge, wie die Verdopplung im ersten Griff die Stimmen im zweiten verändert.",
      "credit": "Emanuel Aloys Förster, Nr. 26, T. 3 und Anmerkung zum ersten Pluszeichen, Artaria 1818, I. Abteilung, S. 14.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/b/bc/IMSLP756100-PMLP1199877-Practische_Beyspiele.pdf#page=16"
    }
  }
};
