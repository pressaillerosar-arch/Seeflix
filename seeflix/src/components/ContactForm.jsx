import './ContactForm.css'

function ContactForm() {
  return (
    <div className="contact-form-box">
      <div className="form-group">
        <label className="form-label" htmlFor="name">Your Name</label>
        <input id="name" className="form-input" type="text" placeholder="John Doe" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input id="email" className="form-input" type="email" placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea id="message" className="form-textarea" placeholder="Tell us anything…" />
      </div>
      <button className="form-submit" type="button">Send Message</button>
    </div>
  )
}

export default ContactForm
