import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Rocio Abad',
  description: 'Graphic Designer based in Madrid with 16 years of experience in branding, typography and web design.',
}

const clients = ['Google', 'Disney', 'NatGeo', 'Globant', 'Mercadolibre', 'Warner', 'Paramount']
const services = ['Art Direction', 'UX/UI Design', 'Branding', 'Design', 'Agile']

const experience = [
  { years: '2024 – Present', company: 'Globant', role: 'Senior UX/UI Designer' },
  { years: '2020 – 2024', company: 'HT-Shirts', role: 'Etsy / Shopify' },
  { years: '2020 – 2022', company: 'Nulinga', role: 'Head of Design' },
  { years: '2018 – 2018', company: 'National Geographic', role: 'Project Manager & Visual Lead Designer' },
  { years: '2016 – 2018', company: 'The Walt Disney Company', role: 'Lead Visual Designer' },
  { years: '2011 – 2016', company: 'The Walt Disney Company', role: 'Senior Graphic Designer' },
  { years: '2010 – 2011', company: 'The Walt Disney Company', role: 'Graphic Designer' },
  { years: '2009 – 2010', company: 'Una Buena', role: 'Head of Design' },
  { years: '2007 – 2009', company: 'Warner Music', role: 'Graphic Designer' },
]

export default function About() {
  return (
    <>
      <section className="about-hero anim">
        <h1>Hi there,<br />I&apos;m Rocio!</h1>
        <div className="about-bio">
          <p>
            Madrid-based graphic designer, specialised in branding, typography and web design,
            with 18 years of professional experience. Inspired by strong but simply executed
            concepts, my expertise covers diverse work both in print and digital media for a
            wide-range of clients.
          </p>
          <p>
            Passionate about photography, architecture, urban culture, forthcoming trends
            and multidisciplinary creativity.
          </p>
        </div>
      </section>

      <section className="about-cols anim anim-d2">
        <div>
          <p className="about-col-label">Clients</p>
          <ul className="about-col-list">
            {clients.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div>
          <p className="about-col-label">Services</p>
          <ul className="about-col-list">
            {services.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <section className="experience-section anim anim-d3">
        <h2>Work Experience</h2>
        <div className="exp-list">
          {experience.map((e, i) => (
            <div key={i} className="exp-item">
              <span className="exp-date">{e.years}</span>
              <span className="exp-company">{e.company}</span>
              <span className="exp-role">{e.role}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
