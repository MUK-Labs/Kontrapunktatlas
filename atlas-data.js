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
          "work": "Exercises in Elementary Counterpoint (G. Schirmer, 1910)",
          "locator": "Kap. II, §§ 11–15, bes. Bsp. 15–17, S. 8–9 · einzelne Melodie",
          "text": "Bei Sprüngen in gleicher Richtung hört Goetschius die Töne als gemeinsamen Akkord. Zu den möglichen Klängen zählt er auch den Dominantsept- und den Dominantnonakkord. Wechselt die Richtung, beurteilt er die Sprünge einzeln.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/c/c7/IMSLP454481-PMLP738672-G-Exercises_in_elementary_counterpoint.pdf"
        }
      ]
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
        "kadenz"
      ],
      "authors": [
        {
          "name": "Johann Joseph Fux",
          "work": "Gradus ad Parnassum (Wien, 1725)",
          "locator": "Liber II, Exercitium I, Lectio prima, S. 46–49 · zweistimmig, Note gegen Note",
          "text": "Über dem d des Cantus firmus billigt Aloysius den Anfang auf a, also mit der Oberquinte. Als Josephus unter demselben d mit g beginnt, ersetzt Aloysius die Unterquinte durch die Oktave. So macht der Bass den Modus des Cantus firmus bereits am Anfang hörbar.",
          "url": "https://www.digital.wienbibliothek.at/wbrobv/content/pageview/4118096"
        },
        {
          "name": "John Rothgeb",
          "work": "The First Species of Counterpoint (Music 103, 1998)",
          "locator": "Beginning, Regel 1 · zweistimmig, erste Spezies",
          "text": "Über dem Cantus firmus stehen zu Beginn Einklang, reine Quinte und Oktave zur Wahl. Unter dem Cantus firmus lässt Rothgeb nur Einklang und Oktave zu.",
          "url": "https://rothfarb.faculty.music.ucsb.edu/courses/103/First_Species(2v).html"
        }
      ]
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
          "work": "Exercises in Elementary Counterpoint (G. Schirmer, 1910)",
          "locator": "Kap. I, §§ 6–9, S. 5–6 · einzelne Melodie in Dur",
          "text": "In seiner Melodieübung strebt die siebte Stufe aufwärts. In C-Dur ist h–c der Regelfall. Goetschius lässt auch h–d zu. Kommt das h von oben, darf die Linie stufenweise absteigen, etwa c–h–a–g.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/c/c7/IMSLP454481-PMLP738672-G-Exercises_in_elementary_counterpoint.pdf"
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
      }
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
          "work": "Exercises in Elementary Counterpoint (G. Schirmer, 1910)",
          "locator": "Kap. II, § 18, S. 10 · einzelne Melodie",
          "text": "Ein Abwärtssprung auf die siebte Stufe ist in dieser Melodieübung möglich. Nach dem Sprung wendet sich die Linie aufwärts und löst die Stufe auf.",
          "url": "https://s9.imslp.org/files/imglnks/usimg/c/c7/IMSLP454481-PMLP738672-G-Exercises_in_elementary_counterpoint.pdf"
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
      ]
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
      }
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
        "unterbrechung-s4"
      ]
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
      ]
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
      }
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
      }
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
      }
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
      ]
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
      }
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
      ]
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
      }
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
      ]
    }
  ]
};
