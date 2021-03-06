import { FC } from "react"
import "./ContactUs.scss"

/**
 * Contact Us
 * Used By: Routes
 * Purpose: Displays the Contact Us page
 */

const ContactUs: FC = () => {
  return (
    <div className="contact-us">
      <h3>Contact Us:</h3>
      <section>
        <strong>Email: </strong>patcoston@gmail.com
      </section>
    </div>
  )
}

export default ContactUs
