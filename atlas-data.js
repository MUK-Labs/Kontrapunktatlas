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
        }
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
        "unbetonte-dissonanz"
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
        "cambiata"
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
        "verdeckte-parallelen"
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
        "stimmuebergreifen"
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
        }
      ],
      "reading": "Bellermann setzt für zwei benachbarte Singstimmen die Dezime als Grenze, Shaffer die Duodezime. Goetschius verteidigt in Beispiel 43c sogar einen Abstand von mehr als zwei Oktaven. Singe seine Linien einzeln und spiele dann den dritten Takt zweistimmig."
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
        }
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
        "dissonanzaufloesung"
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
        }
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
        }
      ],
      "reading": "Prout deutet den Zweiklang als Ausschnitt eines möglichen Akkords. Hindemiths Bestimmungstafel ordnet vollständige Klänge unter anderem nach ihrem Tritonusgehalt. Prüfe bei jedem Beleg, welche Töne tatsächlich erklingen und welche ergänzt werden."
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
        }
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
        "tonwiederholung"
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
    }
  }
};
