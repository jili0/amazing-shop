import contact from "../assets/contact.png";

const Support = () => {
  return (
    <div className="support">
      <div className="support-top imgContainer pt-5 px-2 h-6">
        <img
          src={contact}
          alt="women using phone"
          // width="150"
          className="mx-2 h-5"
        />
      </div>
      <div className="support-middle p-4 g-4">
        <div className="contact px-4 py-3 mx-2 my-1">
          <h2 className="my-1">Contact Us</h2>
          <p>info@example.com</p>
          <p>001985512-243</p>
          <p>Max Musterman 123 Main Street Amsterdam, 1000 Deutschland</p>
          <h3 className="my-1">Social</h3>
          <p>@exampleAccount</p>
          <p>@exampleAccount</p>
          <h3 className="my-1">Hours</h3>
          <p>08:00 - 12:00 Uhr</p>
          <p>14:00 - 17:00 Uhr</p>
        </div>
        <form className="p-3 g-1">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" placeholder="name" />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" placeholder="email" />
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" id="subject" />
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="message" cols="20" rows="5"></textarea>
          <button className="p-1">Submit</button>
        </form>
      </div>
      <div className="support-bottom"></div>
    </div>
  );
};

export default Support;
