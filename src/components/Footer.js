import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section position-relative pb-0 ">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget mb-5 mb-lg-0">
              <h4 className="font-weight-bold text-white mb-3">About ecom</h4>
              Lorem ipsum dolor amet consectetur adipielit sed eiusm tempor
              incididunt ut labore dolore magna aliqua enim ad minim veniam.
              <ul className="list-inline socials-links">
                <li className="list-inline-item mb-2">
                  <a className="active" href="#">
                    <i className="fa fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item mb-2">
                  <a href="#">
                    <i className="fa fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item mb-2">
                  <a href="#">
                    <i className="fa fa-vimeo"> </i>
                  </a>
                </li>
                <li className="list-inline-item mb-2">
                  <a href="#">
                    <i className="fa fa-linkedin"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 ml-lg-auto mb-5 mb-lg-0 col-md-6 col-sm-12">
            <div className="footer-widget">
              <h4 className="text-white mb-3">Navigation</h4>
              <ul className="list-unstyled lh-38">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget mb-5 mb-lg-0">
              <h4 className="text-white mb-3">Services</h4>
              <ul className="list-unstyled lh-38">
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Wordpress Development</a>
                </li>
                <li>
                  <a href="#">MERN Stack</a>
                </li>
                <li>
                  <a href="#">Front-end </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget">
              <h4 className="text-white mb-3">Contact Info</h4>
              <ul className="list-unstyled lh-38">
                <li>Rangpur, Dhaka</li>
                <li>
                  <a href="#">+8801317111458</a>
                </li>
                <li>
                  <a href="#">+8801704377331</a>
                </li>
                <li>
                  <a href="#">support@nuruzzamanchowdhury.com</a>
                </li>
                <li>
                  <a href="#">blockchainminer99@gmail.com</a>
                </li>
                <li>
                  <a href="#">nuruzzamanchowdhury8</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container border-top py-4 mt-5">
          <div className="row align-items-center justify-content-md-between">
            <div className="col-12 col-lg-4 col-sm-12">
              <div className="text-center text-lg-left">
                <span>Md. Nuruzzaman Chowdhury © 2020 All Right Reserved</span>
              </div>
            </div>
            <div className="col-lg-4 text-center col-12 col-sm-12">
              <h3 className="text-white text-lowercase">
                Md. Nuruzzaman Chowdhury
                <span className="dot"> </span>
              </h3>
            </div>
            <div className="col-lg-4 col-12 col-sm-12">
              <div className="text-center text-lg-right">
                <a href="#">
                  Terms of Service
                  <span className="mx-2">|</span>
                </a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
