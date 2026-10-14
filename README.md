# Tony Willert

**Bildungswissenschaft und Datenanalyse**

Ich verbinde einen bildungswissenschaftlichen Blick mit Python, Statistik und Machine Learning. In meinen Projekten möchte ich aus Daten nachvollziehbare Ergebnisse und verständliche Werkzeuge machen.

## Ausgewähltes Projekt

### LearnerCue: Wen sollten Coaches zuerst sichten?

Wenn Betreuungskapazität knapp ist, hilft eine gute Reihenfolge bei der fachlichen Sichtung. LearnerCue untersucht mit historischen Kursdaten, welche zu einem Kurstag noch angemeldeten Personen zuerst geprüft werden könnten. Die Entscheidung über Unterstützung bleibt beim Coach.

**[Interaktive Demo ausprobieren](https://fwsproject-cjpggxprduvuak9kugbusk.streamlit.app/)** · **[Code, Notebooks und ausführliche Dokumentation](https://github.com/TonyWillert/FWS_Project)**

- **Daten und Frage:** Open University Learning Analytics Dataset (OULAD). Für 16 wöchentliche Stichtage werden nur Informationen verwendet, die bis zum jeweiligen Kurstag verfügbar waren.
- **Analyse und Modell:** Datenprüfung, explorative Analyse, Vergleich einfacher Referenzen und mehrerer Modelle, zeitliche Auswertung und exportierte Wochenmodelle mit Histogram Gradient Boosting.
- **Anwendung:** Eine Streamlit-Oberfläche zeigt Kurse, eine vollständige priorisierte Kursliste, Beobachtungen zu ausgewählten Personen und einen simulierten Sichtungsablauf.
- **Beispielergebnis:** An Kurstag 27 in 2014J betrug die Average Precision 0,625 gegenüber 0,429 für eine Referenz aus Kurs- und Anmeldedaten. In den obersten rund 20 % je Kurs lagen 1.006 von 2.947 späteren Abbrüchen oder nicht bestandenen Kurseinträgen (34,1 % Recall; 64,2 % Trefferquote).

Die öffentliche Demo nutzt **synthetische Testdaten für die Bedienung**. Die genannten Kennzahlen stammen aus der getrennten historischen OULAD-Auswertung. Diese Auswertung ist explorativ; sie beweist weder eine Wirkung von Coach-Kontakten noch die Übertragbarkeit auf andere Einrichtungen. Die Leitungsansicht ist als vorläufiges Planungsszenario gekennzeichnet.

**Technologien:** Python · pandas · scikit-learn · Streamlit · Jupyter · Git

## Über mich

Ich habe einen M.A. in Bildungswissenschaft und Erfahrung mit empirischer Arbeit im Hochschulkontext. Mein Interesse gilt besonders Projekten, die Datenanalyse mit Fragen aus Bildung und gesellschaftlicher Praxis verbinden.

[GitHub-Profil](https://github.com/TonyWillert) · [LearnerCue-Projekt](https://github.com/TonyWillert/FWS_Project)
