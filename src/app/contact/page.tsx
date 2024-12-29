import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact-head'>
        <h2>Get In Touch with Our Agents</h2>
      </div>
      <div className='contact'>
        <form>
          <label>Full Name</label><br />
          <input type="text" placeholder="Your Name.." required/><br />
          <label>Email Address</label><br />
          <input type="Email" placeholder="Your E-mail.." required/><br />
          <label>Contact Number</label><br />
          <input type="Number" placeholder="Your Phone Number.." required/><br />
          <label>Message</label><br />
          <textarea placeholder="Your Message" required rows={5}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
