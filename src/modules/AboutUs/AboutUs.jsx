import "./AboutUs.css";

import { G, spoon, knife } from "../../constants/images";

const AboutUs = () => (
  <div
    className="app__aboutus section__padding app__bg flex__center"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={spoon} alt="about__spoon" className="spoon__img" />
        <p className="p__opensans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={knife} alt="about__knife" />
      </div>

      <div className="app__aboutus-content_hisory">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={spoon} alt="about__spoon" className="spoon__img" />
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
