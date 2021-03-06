import { FC } from "react"
import "./FAQs.scss"

/**
 * Frequently Asked Questions
 * Used By: Routes
 * Purpose: Displays the FAQs
 */

const FAQs: FC = () => {
  return (
    <div className="faqs">
      <h3>Frequently Asked Questions:</h3>
      <section>
        <div>
          <strong>Question:</strong> What tech was used to build this?
        </div>
        <div>
          <strong>Answer:</strong> React with TypeScript, react-router and more.
          Check package.json under dependencies full list.
        </div>
      </section>
      <section>
        <div>
          <strong>Question:</strong> Where can I get the source?
        </div>
        <div>
          <strong>Answer:</strong> The code for this project is on{" "}
          <a
            href="https://github.com/patcoston/fronty"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </div>
      </section>
      <section>
        <div>
          <strong>Question:</strong> Can I see how this was built on YouTube?
        </div>
        <div>
          <strong>Answer:</strong>{" "}
          <a
            href="https://www.youtube.com/channel/UCcTfcbnwE2fFm3Z4OMLWVOg"
            className="link"
          >
            Yes
          </a>
        </div>
      </section>
    </div>
  )
}

export default FAQs
