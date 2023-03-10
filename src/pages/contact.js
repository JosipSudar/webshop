import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact us</h1>
        <p>
          Feel free to contact us any time. We will get back to you as soon as
          we can.
        </p>
        <form>
          <input type="text" placeholder="Name" />
        </form>
        <form>
          <input type="text" placeholder="Email" />
        </form>
        <form>
          <input type="text" placeholder="Message" />
        </form>
        <button type="submit">Register new account</button>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
