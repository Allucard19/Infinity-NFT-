import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-5 footer_about_section">
            <h3>
              <b>About InfinityStore</b>
            </h3>
            <p className="text-justify about_footer">
              InfinityStore is an NFT marketplace deployed on Polygon testnet.
            </p>
            <a href="Add Your git link here!!!!!">
              <button id="commonbuttons">
                <b>Know More</b>
              </button>
            </a>
          </div>
          <div className="col-md-3 footer_quicklinks_section">
            <h3>
              <b>Quick Links</b>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="Add Your git link here!!!!!">Source code</a>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer_contact_section">
            <h3>
              <b>Contact Us</b>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:teamInfinity@hotmail.com?subject =Contact you regarding InfinityStore = Message">
                  <i className="fa fa-1x fa-envelope" aria-hidden="true"></i>{" "}
                  teamInfinity@gmail.com
                </a>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
