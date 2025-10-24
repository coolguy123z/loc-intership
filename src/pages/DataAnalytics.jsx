import React, { useEffect } from "react";
import insights from "../data/netflix_insights.json";
import titlesByCountry from "../images/analytics/titles_by_country.svg";
import topGenres from "../images/analytics/top_genres.svg";
import releasesByYear from "../images/analytics/releases_by_year.svg";
import "../css/styles/dataAnalytics.css";

const DataAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    project_title: projectTitle,
    insight_cards: insightCards,
    narrative,
    country_genres: countryGenres,
    workflow,
    recommendations,
    type_mix: typeMix,
  } = insights;

  const movieCount = typeMix["Movie"] ?? 0;
  const tvCount = typeMix["TV Show"] ?? 0;

  return (
    <div className="data-analytics-page">
      <section className="data-analytics-hero">
        <div className="section-container">
          <h1>{projectTitle}</h1>
          <p>
            We partnered with a fictional media intelligence team to audit 60 recent
            Netflix titles, blending Python-powered cleaning, Matplotlib visuals, and a
            Power BI storyboard to surface where the catalogue is expanding fastest.
          </p>
          <div className="tools-badge">
            <span>Python · Pandas-style wrangling</span>
            <span>Matplotlib-inspired SVGs</span>
            <span>Power BI storyboard</span>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading">Executive snapshot</h2>
        <p className="section-subhead">
          Four fast facts highlight the shape of the library before we dive into deeper
          cuts. Each metric was calculated from a cleaned dataset that standardised
          multi-country and multi-genre fields and filtered duplicate listings.
        </p>
        <div className="analytics-grid threecol">
          {insightCards.map((card) => (
            <article key={card.title} className="insight-card">
              <h3>{card.title}</h3>
              <p className="insight-value">{card.value}</p>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading">Visual insights</h2>
        <p className="section-subhead">
          Cleaned aggregates were exported from the Python notebook and rendered as
          Matplotlib-style SVGs for the web. They pair with the Power BI storyboard
          delivered to stakeholders.
        </p>
        <div className="analytics-grid twocol">
          <div className="chart-wrapper">
            <h3>Where titles are produced</h3>
            <img src={titlesByCountry} alt="Bar chart of top production countries" />
            <p>
              South Korea, Canada, and Japan are leading the charge on non-U.S. growth,
              each contributing four titles in the sample. Together they account for a
              third of the catalogue additions.
            </p>
          </div>
          <div className="chart-wrapper">
            <h3>Genre mix</h3>
            <img src={topGenres} alt="Bar chart of most frequent genres" />
            <p>
              Dramas dominate with 21 appearances, closely followed by documentary-led
              categories. This dual focus balances emotional storytelling with
              fact-driven content that performs well in retention dashboards.
            </p>
          </div>
          <div className="chart-wrapper">
            <h3>Release cadence</h3>
            <img src={releasesByYear} alt="Line chart showing releases per year" />
            <p>
              Output climbed steadily from 2014 to a 2021 peak. Even the pandemic years
              maintained momentum thanks to diversified production hubs across APAC and
              LATAM.
            </p>
          </div>
          <div className="chart-wrapper">
            <h3>Format balance</h3>
            <p>
              Movies make up {movieCount} titles while series contribute {tvCount}. The
              near 50/50 split aligns with internal goals to give equal weight to
              bingeable shows and cinematic releases.
            </p>
            <p>
              The balance also feeds directly into a Power BI dashboard that lets
              leadership scenario-plan release mixes per quarter.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading">Key storylines</h2>
        <div className="analytics-grid twocol">
          {narrative.map((item) => (
            <article key={item.heading} className="narrative-card">
              <h4>{item.heading}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading">Country focus</h2>
        <p className="section-subhead">
          Regional genre preferences surfaced after exploding the multi-select fields
          with Python. These pair neatly with the Tableau-style heatmap delivered in the
          companion dashboard.
        </p>
        <div className="chart-wrapper">
          <table className="country-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Titles</th>
                <th>Top genres</th>
              </tr>
            </thead>
            <tbody>
              {countryGenres.map((entry) => (
                <tr key={entry.country}>
                  <td>{entry.country}</td>
                  <td>{entry.title_count}</td>
                  <td>{entry.top_genres.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading">Workflow recap</h2>
        <p className="section-subhead">
          Deliverables combined a reproducible Python pipeline with a polished Power BI
          experience for executives. Each phase fed the next, ensuring the story stayed
          anchored in the data.
        </p>
        <div className="workflow-steps">
          {workflow.map((step) => (
            <div key={step.step} className="workflow-item">
              <h4>{step.step}</h4>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading">Recommendations</h2>
        <p className="section-subhead">
          Prioritised actions were packaged as a one-page executive summary, mirroring
          how an analyst would communicate next steps at the end of an internship
          project.
        </p>
        <ul className="recommendations-list">
          {recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DataAnalytics;
