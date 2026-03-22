
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="page">
      {/* ── Intro ── */}
      <section className="about-hero">
        <p className="about-eyebrow">✦ Our Story</p>
        <h1 className="about-title">ABOUT SEEFLIX</h1>
        <p className="about-intro">
          Seeflix is a next-generation streaming platform built for cinephiles and
          casual viewers alike. Born from a passion for storytelling, we curate the
          finest films and series from every corner of the globe — making world
          cinema accessible to everyone.
        </p>
      </section>

      <div className="about-divider" />

      {/* ── Mission ── */}
      <section className="about-mission">
        <div className="about-mission-text">
          <h2>OUR MISSION</h2>
          <p>
            We believe great stories have the power to connect us — across cultures,
            languages, and borders. Seeflix was founded on a simple idea: everyone
            deserves access to extraordinary cinema.
          </p>
          <p>
            Our editorial team hand-picks every title in our catalogue, ensuring
            quality over quantity. We partner with independent studios, emerging
            directors, and global distributors to bring you content you won't find
            anywhere else.
          </p>
          <p>
            We are committed to a seamless, distraction-free viewing experience —
            no ads, no noise. Just stories.
          </p>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h4>Curation First</h4>
            <p>
              Every title is reviewed by our editorial team. We prioritise quality
              and diversity over sheer volume.
            </p>
          </div>
          <div className="value-card">
            <h4>Global Vision</h4>
            <p>
              From Korean dramas to Italian neo-realism — our catalogue spans 80+
              countries and 30+ languages.
            </p>
          </div>
          <div className="value-card">
            <h4>Creator Respect</h4>
            <p>
              We pay fair rates to studios and creators, ensuring the ecosystem that
              makes great content possible stays alive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
