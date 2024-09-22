import { Link } from "react-router-dom";

import {
  logo,
  instagramlogo,
  xlogo,
  tiktoklogo,
  facebooklogo,
} from "../assets/images";

const Footer = () => {
  return (
    <div className="bg-reverse_red">
      <div className="inner-frame py-12 text-text_color_light">
        <div className=" flex flex-col items-center text-center">
          <div>
            <h2 className="footer-text-big">Opening Hours</h2>
            <p className="footer-text-small">
              Mondays - Sundays <br />
              7:00AM - 9:00PM
            </p>
          </div>
          <div>
            <h2 className="footer-text-big">Contact Us</h2>
            <p className="footer-text-small">
              thebukaxperience@gmail.com <br />
              08082939294, 09133111336, <br />
              08081632600
            </p>
          </div>
        </div>

        {/* <div className=" flex flex-col items-center text-center">
          <div>
            <h2 className="footer-text-big">Quick Navigation</h2>
            <ul className="footer-text-small flex flex-col gap-3">
              <li>
                <Link>Carreers</Link>
              </li>
              <li>
                <Link>Menu</Link>
              </li>
              <li>
                <Link></Link>Loyalty Offers
              </li>
              <li>
                <Link>My Account</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-text-big">Find Us Here</h2>
            <div className="footer-text-small flex gap-4">
              <Link>
                <img src={instagramlogo} width={25} alt="" />
              </Link>
              <Link>
                <img src={facebooklogo} width={25} alt="" />
              </Link>
              <Link>
                <img src={xlogo} width={25} alt="" />
              </Link>
              <Link>
                <img src={tiktoklogo} width={25} alt="" />
              </Link>
            </div>
          </div>
        </div> */}

        <div>
          <div className="flex flex-col items-center  text-center">
            <h2 className="footer-text-big">Tel Us how we're doing...</h2>
            <p className="footer-text-small">
              Your feedback is valuable to us.
            </p>
            <button className="bg-main_red  text-text_color_light rounded-full font-semibold p-4 max-w-[300px]">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
