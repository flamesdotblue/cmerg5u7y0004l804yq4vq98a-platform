import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href')
        if (id && id.startsWith('#')) {
          e.preventDefault()
          document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, [])

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <div className="logo" aria-hidden="true">🧬</div>
          <span>NovaGene Labs</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#platform">Platform</a>
          <a href="#ethics">Compliance</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-label="DNA Animation Hero">
        <div className="spline-wrap" aria-hidden="true">
          <spline-viewer url="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode"></spline-viewer>
          <div className="vignette" />
        </div>
        <div className="hero-content">
          <h1>
            Precision Genomics for a<br />Healthier Tomorrow
          </h1>
          <p className="lede">
            A vibrant synthesis of biology and computation. Our platform explores human DNA with rigor,
            safety, and purpose to accelerate next‑generation therapeutics.
          </p>
          <div className="cta-row">
            <a href="#platform" className="btn btn-primary">Explore Platform</a>
            <a href="#ethics" className="btn btn-ghost">Our Ethics</a>
          </div>
          <div className="badges">
            <span className="badge">HIPAA‑aligned</span>
            <span className="badge">IRB‑governed research</span>
            <span className="badge">Secure by design</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>Reimagining Genetic Research</h2>
          <p>
            NovaGene Labs advances ethical, consent‑driven human DNA research. We combine high‑throughput
            sequencing, privacy‑preserving analytics, and AI‑guided discovery to illuminate biological
            pathways and support translational medicine.
          </p>
          <div className="cards">
            <article className="card">
              <h3>Computational Biology</h3>
              <p>
                Multi‑omics pipelines, variant calling, and functional annotation at scale with
                transparent, reproducible science.
              </p>
            </article>
            <article className="card">
              <h3>Secure Data Infrastructure</h3>
              <p>
                End‑to‑end encryption, audit trails, and fine‑grained access controls to keep genomic
                data protected.
              </p>
            </article>
            <article className="card">
              <h3>Clinical Partnerships</h3>
              <p>
                Collaborations with providers and biobanks to translate discovery into real‑world impact,
                under strict oversight.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="platform" className="section alt">
        <div className="container split">
          <div>
            <h2>The NovaGene Platform</h2>
            <ul className="features">
              <li>
                <strong>AI‑assisted discovery</strong>
                <span>Patterns in variants and expression with explainable models.</span>
              </li>
              <li>
                <strong>Privacy by default</strong>
                <span>De‑identification, differential privacy, and role‑based access.</span>
              </li>
              <li>
                <strong>Interoperable</strong>
                <span>FHIR, GA4GH standards, and exportable workflows.</span>
              </li>
            </ul>
            <div className="cta-row">
              <a href="#contact" className="btn btn-primary">Request Access</a>
              <a href="#ethics" className="btn btn-outline">Read Compliance</a>
            </div>
          </div>
          <div className="panel glass">
            <div className="stats">
              <div className="stat">
                <span className="stat-num">10x</span>
                <span className="stat-label">faster pipelines</span>
              </div>
              <div className="stat">
                <span className="stat-num">99.99%</span>
                <span className="stat-label">data durability</span>
              </div>
              <div className="stat">
                <span className="stat-num">24/7</span>
                <span className="stat-label">monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ethics" className="section">
        <div className="container">
          <h2>Ethics & Compliance</h2>
          <p>
            All research is conducted under IRB oversight with explicit informed consent. We adhere to
            applicable regulations and uphold participant dignity, privacy, and the right to withdraw.
          </p>
          <ul className="pill-list">
            <li>IRB protocols</li>
            <li>HIPAA safeguards</li>
            <li>De‑identification</li>
            <li>Data minimization</li>
            <li>Participant rights</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container split">
          <div>
            <h2>Partner With Us</h2>
            <p>
              Interested in responsible genomic research? Let’s discuss collaborations, data access, and
              translational projects.
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="grid">
                <input required placeholder="Full name" aria-label="Full name" />
                <input required type="email" placeholder="Email" aria-label="Email" />
              </div>
              <input placeholder="Organization" aria-label="Organization" />
              <textarea rows="4" placeholder="Your goals" aria-label="Your goals" />
              <button className="btn btn-primary" type="submit">Send Inquiry</button>
            </form>
          </div>
          <div className="panel glass">
            <h3 className="panel-title">Contact</h3>
            <ul className="contact-list">
              <li><span>General:</span> hello@novagene.example</li>
              <li><span>Security:</span> security@novagene.example</li>
              <li><span>Press:</span> press@novagene.example</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} NovaGene Labs</span>
          <div className="footer-links">
            <a href="#ethics">Ethics</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
