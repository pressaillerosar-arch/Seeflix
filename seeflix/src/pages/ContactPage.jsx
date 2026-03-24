import ContactForm from '../components/ContactForm.jsx'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="page contact-page">

      {/* ── Info contact ── */}
      <div className="contact-info">
        <h1 className="contact-title">GET IN <span>TOUCH</span></h1>
        <p className="contact-desc">
          Have a question, a suggestion, or just want to say hello? Our team is
          here for you. Fill out the form and we'll get back to you within 48 hours.
        </p>
        <div className="contact-detail">
          <div className="contact-detail-icon">✉</div>
          support@seeflix.com
        </div>
        <div className="contact-detail">
          <div className="contact-detail-icon">📍</div>
          Port-au-Prince, Haiti
        </div>
        <div className="contact-detail">
          <div className="contact-detail-icon">🕐</div>
          Mon – Fri, 9 AM – 6 PM (EST)
        </div>
      </div>

      {/* ── Formulaire ── */}
      <ContactForm />

    </div>
  )
}

export default ContactPage
