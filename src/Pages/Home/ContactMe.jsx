export default function ContactMe() {
  const openEmail = () => {
    window.open("mailto:tntran@usc.edu", "_blank");
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Please fill the form or email me at tntran@usc.edu
        </p>
      </div>
      <div>
        <button className="btn btn-github" onClick={openEmail}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 33 33"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 6h24a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0-2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z M2 8a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6l-14 9-14-9V8z"
              fill="currentColor"
            />
          </svg>
          Click here to create an email!
        </button>
      </div>
      <form className="contact--form--container" netlify>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="text"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
