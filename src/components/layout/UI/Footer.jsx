import { FaPhoneSquare } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid p-4 making mt-5">
        <h2>Gamezone</h2>
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://images-static.nykaa.com/uploads/632e2731-8aea-488e-88aa-051412179433.jpg?tr=cm-pad_resize,w-1200"
              alt="Gamezone"
              className="w-100 img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Footer Top Section */}
      <div className="container-fluid bg-dark text-white">
  <div className="row justify-content-around p-4 p-md-5 gy-4">
    
    {/* Email Input + Button */}
    <div className="col-md-4">
      <h6 className="d-flex align-items-center gap-2">
        <MdForwardToInbox size={20} /> Get special discount on your inbox
      </h6>
      <div className="row mt-3 g-2">
        <div className="col-12 col-sm-8">
        <input
     className="form-control bg-transparent p-2 text-white border-light"
    type="email"
     placeholder="Your Email"
     style={{ color: 'white' }}
/>

        </div>
        <div className="col-12 col-sm-4">
          <button className="btn btn-outline-light w-100">Send</button>
        </div>
      </div>
    </div>

    {/* Mobile App Links */}
    <div className="col-md-3 text-center">
      <h6 className="d-flex justify-content-center align-items-center gap-2 text-center">
        <FaPhoneSquare size={18} /> Experience the Nykaa mobile app
      </h6>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="d-block mt-3"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          style={{ width: '150px' }}
        />
      </a>
      <a
        href="https://www.apple.com/in/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="d-block mt-2"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          style={{ width: '150px' }}
        />
      </a>
    </div>

    {/* Help Section */}
    <div className="col-md-4">
      <h6 className="d-flex align-items-center gap-2">
        <IoMdPhonePortrait size={20} /> For any help, you may call us at:
      </h6>
      <p className="mb-0 mt-2">1800-267-4444</p>
      <p className="small text-muted mb-0">
        (Mon–Sat: 8AM to 10PM | Sun: 10AM to 7PM)
      </p>
    </div>

  </div>
</div>


      {/* Footer Bottom Section */}
      <div className="container-fluid mase text-white bg-secondary">
        <div className="row justify-content-around pt-4 text-center p-4">
          <div className="col-lg-2 col-sm-6 mt-3">
            <h5 className="text-dark">NYKAA</h5>
            <a className="nav-link text-white" href="#">Careers</a>
            <a className="nav-link text-white" href="#">Authenticity</a>
            <a className="nav-link text-white" href="#">Press</a>
            <a className="nav-link text-white" href="#">Testimonials</a>
            <a className="nav-link text-white" href="#">Nykaa CSR</a>
          </div>

          <div className="col-lg-2 col-sm-6 mt-3">
            <h5 className="text-dark">Help</h5>
            <a className="nav-link text-white" href="#">Contact Us</a>
            <a className="nav-link text-white" href="#">Frequently asked questions</a>
            <a className="nav-link text-white" href="#">Store Locator</a>
            <a className="nav-link text-white" href="#">Cancellation & Return</a>
            <a className="nav-link text-white" href="#">Shipping & Delivery</a>
            <a className="nav-link text-white" href="#">Sell on Nykaa</a>
          </div>

          <div className="col-lg-2 col-sm-6 mt-3">
            <h5 className="text-dark">Inspire Me</h5>
            <a className="nav-link text-white" href="#">Beauty Book</a>
            <a className="nav-link text-white" href="#">Nykaa Network</a>
            <a className="nav-link text-white" href="#">Buying Guides</a>
          </div>

          <div className="col-lg-2 col-sm-6 mt-3">
            <h5 className="text-dark">Quick Links</h5>
            <a className="nav-link text-white" href="#">Offer Zone</a>
            <a className="nav-link text-white" href="#">New Launches</a>
            <a className="nav-link text-white" href="#">Nykaa Man</a>
            <a className="nav-link text-white" href="#">Nykaa Fashion</a>
            <a className="nav-link text-white" href="#">Nykaa Pro</a>
            <a className="nav-link text-white" href="#">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center bg-dark text-white py-3">
        <h6>© 2025 NYKAA E-RETAIL LIMITED All Rights Reserved.</h6>
      </div>
    </>
  );
};
