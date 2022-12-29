import React from "react";
import "../App.css";
import Logo from "../assets/Logo.png";
import Ciber from "../assets/Ciber/Ciber.png";
import daysicon from "../assets/Ciber/Icon/14day.png";
import ratingstar from "../assets/Ciber/Icon/rating_stars.png";
import Capterra from "../assets/Ciber/Icon/Capterra.png";
import CROWD from "../assets/Ciber/Icon/CROWD.png";
import GetApp from "../assets/Ciber/Icon/GetApp.png";
import IconGroup from "../assets/IconGroup.png";
import Clock from "../assets/exceptions/clock.png";
import person from "../assets/exceptions/person.png";
import calendar from "../assets/exceptions/calendar.png";
import talking from "../assets/exceptions/talking.png";
import report from "../assets/exceptions/report.png";
import paper from "../assets/exceptions/paper.png";
import anceta from "../assets/exceptions/anceta.png";
import logo10 from "../assets/companies/Logo10.png";
import logo11 from "../assets/companies/Logo11.png";
import logo12 from "../assets/companies/Logo12.png";
import logo13 from "../assets/companies/Logo13.png";
import logo14 from "../assets/companies/Logo14.png";
import logo15 from "../assets/companies/Logo15.png";
import logo16 from "../assets/companies/Logo16.png";
import logo17 from "../assets/companies/Logo17.png";
import logo18 from "../assets/companies/Logo18.png";

const Page = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <div className="logo_content">
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <button className="header_button">GET NOW</button>
            </div>
          </div>
        </header>

        <main>
          <div className="ciber">
            <div className="ciber__container">
              <div className="ciber_left">
                <div className="ciber_text">
                  <div className="ciber_paragraf">
                    <h2>
                      <span> CYBER MONDAY </span> means <br />
                      an even <span> bigger sale </span>
                    </h2>
                  </div>
                  <div className="ciber_save_money">
                    <p>
                      Cyber Monday saves you money, <br />
                      WebWork saves you time.
                    </p>
                  </div>
                  <div className="ciber_button_box">
                    <button className="btn ciber_button ">SAVE BIG NOW</button>
                  </div>
                  <div className="ciber_free_trial">
                    <img src={daysicon} alt="V" />
                    <p>14-day free trial No credit card required</p>
                  </div>
                  <div className="ciber_ratingstarts">
                    <img src={ratingstar} alt="starts" />
                    <p>Reviews from 51K+ happy users below and beyond</p>
                  </div>
                  <div className="ciber_icon">
                    <div className="ciber_icon_box">
                      <img src={Capterra} alt="brand_icon" />
                      <img src={CROWD} alt="brand_icon" />
                      <img src={GetApp} alt="brand_icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ciber_right">
                <img src={Ciber} alt="Ciber_monday" />
              </div>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__container">
              <h2>Benefit both ways - monthly or yearly</h2>
              <div className="benefit_content">
                <div className="benefit_month b_box">
                  <div className="neon_box">
                    <div className="neon">
                      <span>50 %</span>
                    </div>
                  </div>
                  <div className="benefit_text">
                    <h3>Monthly</h3>
                    <div className="bnefit_price">
                      <span>
                        $4.99 <div className="price_line"></div>
                      </span>
                      <h4>$2.49</h4>
                      <h6>per user/month</h6>
                    </div>
                    <div className="benefit_chaked">
                      <div className="benefit_chaked_text">
                        <span>&#10004;</span>
                        <p>14-day Free Trial</p>
                      </div>
                      <div className="benefit_chaked_text">
                        <span>&#10004;</span>
                        <p>Access to All Features</p>
                      </div>
                      <div className="benefit_chaked_text">
                        <span>&#10004;</span>
                        <p>24/7 Support</p>
                      </div>
                    </div>
                    <div className="benefit_button">
                      <button className="btn">GET YOUR DEAL</button>
                    </div>
                    <div className="for_six_months">
                      <p>*for 6 months</p>
                    </div>
                  </div>
                </div>
                <div className="benefit_year b_box">
                  <div className="neon_box">
                    <div className="neon">
                      <span>
                        18%+ <br />
                        50%
                      </span>
                    </div>
                  </div>
                  <div className="benefit_text">
                    <h3>Yearly</h3>
                    <div className="bnefit_price">
                      <span>
                        $4.09 <div className="price_line"></div>
                      </span>
                      <h4>$2.05</h4>
                      <h6>per user/month</h6>
                    </div>
                    <div className="benefit_chaked">
                      <div className="benefit_chaked_text">
                        <span>&#10004;</span>
                        <p>14-day Free Trial</p>
                      </div>
                      <div className="benefit_chaked_text">
                        <span>&#10004;</span>
                        <p>Access to All Features</p>
                      </div>
                      <div className="benefit_chaked_text">
                        <span>&#10004;</span>
                        <p>24/7 Support</p>
                      </div>
                    </div>
                    <div className="benefit_button">
                      <button className="btn">GET YOUR DEAL</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="IconGroup__container">
            <img src={IconGroup} alt="IconGroup" />
          </div>
          <div className="exceptions">
            <div className="exception__container">
              <div className="exception_title">
                <h3>Save Big on All Features</h3>
                <span>no exceptions</span>
              </div>
              <div className="exception_box">
                <div className="exception_head">
                  <div className="exception_icon_box">
                    <img src={Clock} alt="icon" />
                    <p>Time Tracking </p>
                    <p>with Screenshots</p>
                  </div>

                  <div className="exception_icon_box">
                    <img src={person} alt="icon" />
                    <p>Task</p>
                    <p>Management</p>
                  </div>

                  <div className="exception_icon_box">
                    <img src={paper} alt="icon" />
                    <p>Communication</p>
                    <p>Channels</p>
                  </div>

                  <div className="exception_icon_box">
                    <img src={talking} alt="icon" />
                    <p>HR</p>
                    <p>Tools</p>
                  </div>

                  <div className="exception_icon_box">
                    <img src={calendar} alt="icon" />
                    <p>Online</p>
                    <p>Reports</p>
                  </div>

                  <div className="exception_icon_box">
                    <img src={report} alt="icon" />
                    <p>Time Tracking </p>
                    <p>with Screenshots</p>
                  </div>
                </div>
                <div className="exc-line"></div>
                <div className="exception_body">
                  <div className="exc-text">
                    <h3>
                      Track the time your employees spend on work and get
                      detailed information
                    </h3>

                    <div className="exception_chaked_text">
                      <span>&#10004;</span>
                      <p>4 Screenshot Modes</p>
                    </div>
                    <div className="exception_chaked_text">
                      <span>&#10004;</span>
                      <p>Idle Time Tracking</p>
                    </div>
                    <div className="exception_chaked_text">
                      <span>&#10004;</span>
                      <p>Synchronized Tracking</p>
                    </div>
                    <div className="exception_chaked_text">
                      <span>&#10004;</span>
                      <p>Billable Hours</p>
                    </div>
                    <div className="exc-button">
                      <button className="btn">RESERVE YOUR SEAT</button>
                    </div>
                  </div>
                  <div className="exc-img">
                    <img src={anceta} alt="anceta" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="companies">
            <div className="companies__container">
              <h4>Trusted by 1000+ Companies</h4>
              <div className="compaines_img">
                <img src={logo10} alt="companies icon" />
                <img src={logo11} alt="companies icon" />
                <img src={logo12} alt="companies icon" />
                <img src={logo13} alt="companies icon" />
                <img src={logo14} alt="companies icon" />
                <img src={logo15} alt="companies icon" />
                <img src={logo16} alt="companies icon" />
                <img src={logo17} alt="companies icon" />
                <img src={logo18} alt="companies icon" />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer__container">
            <div className="footer-Left">
              <span>Save 50% Now</span>
              <button className="btn footer_button">GET MY DISCOUNT</button>
            </div>
            <div className="footer_img"></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
