import "./form.scss";

function Form() {
  return (
    <div className="form">
      <h1 className="form-title">Contact us</h1>
      <p className="form-description">
        Whether you're interested in making an order but require some further
        information, or want to talk about a partnership opportunity, you can
        reach us via the below form.
      </p>
      <form className="form-box">
        <label className="form-box-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-box-input"
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <label className="form-box-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-box-input"
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
        />
        <label className="form-box-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-box-message"
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Enter your message"
        ></textarea>
        <button className="form-box-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
