# Tony Willert

**Educational research and data analytics**

I combine a background in education with Python, statistics, and machine learning. My projects turn data into findings that people can understand and tools they can explore.

## Featured project

### LearnerCue: Who should coaches review first?

When coaching time is limited, the order of review matters. LearnerCue uses historical course data to explore which still-enrolled learners could be reviewed first on a given course day. Coaches remain responsible for deciding whether and how to offer support.

**[Try the interactive demo](https://fwsproject-cjpggxprduvuak9kugbusk.streamlit.app/)** · **[Explore the code, notebooks, and documentation](https://github.com/TonyWillert/FWS_Project)**

- **Data and question:** Open University Learning Analytics Dataset (OULAD). The analysis covers 16 weekly checkpoints and uses only information available by each checkpoint.
- **Analysis and modelling:** Data quality checks, exploratory analysis, comparisons with simple references and several models, temporal evaluation, and exported weekly Histogram Gradient Boosting models.
- **Application:** A Streamlit app with a course overview, the full ranked course roster, observations for selected learners, and a simulated coach review workflow. The interface is available in English and German.
- **Exploratory result:** On day 27 of the 2014J course presentations, Average Precision was **0.625**, compared with **0.429** for a reference based on course and registration data. The top roughly 20% per course included **1,006 of 2,947** later withdrawals or failures: **34.1% recall** and **64.2% precision**.

The public demo uses **synthetic data to show the interface**. The figures above come from a separate historical OULAD evaluation. The 2014J data were revisited during development, so these are exploratory results rather than an untouched final test. They do not establish that coach outreach prevents withdrawal or that the model transfers to another institution. The management view is labelled as a provisional planning scenario.

**Tools:** Python · pandas · scikit-learn · Streamlit · Jupyter · Git

## About me

I have a master's degree in educational sciences and experience with empirical work in higher education. I am particularly interested in projects that connect data analysis with education and social questions.

[GitHub profile](https://github.com/TonyWillert) · [LearnerCue repository](https://github.com/TonyWillert/FWS_Project)
