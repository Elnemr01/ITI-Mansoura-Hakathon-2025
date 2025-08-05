import { assets } from "../../assets/assets_frontend/assets"
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-left">
          <img src={assets.logo} alt="logo" className="footer-logo" />
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.    </p>
        </div>

        <div className="footer-column">
          <h1 className="footer-title">COMPANY</h1>
          <ul className="footer-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h1 className="footer-title">GET IN TOUCH</h1>
          <p>+0-000-000-000</p>
          <p>Web Master@gmail.com</p>
        </div>
      </footer>

      <hr className="footer-divider" />
      <p className="footer-copy">
        Copyright 2024 @ Web Master.dev - All Right Reserved.
      </p>

    </>
  )
}
export default Footer