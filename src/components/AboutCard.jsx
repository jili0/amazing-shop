import { NavLink } from "react-router-dom";

NavLink;
const AboutCard = () => {
  return (
    <div className="about-card">
      <p>Title</p>
      <img
        src="/src/assets/about_bottom_phone.png"
        alt=""
        width="50"
        height="50"
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <NavLink>
        <button>Read More</button>
      </NavLink>
    </div>
  );
};

export default AboutCard;
