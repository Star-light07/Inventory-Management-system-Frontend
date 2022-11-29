import React from "react"
import { RiProductHuntLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import "./Home.scss"
import heroImg from "../../assets/inv-img (2).jpg"
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink"

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <ul className="home-links">
          <div className="logo">{/* <RiProductHuntLine size={35} /> */}</div>
          <ShowOnLogout>
            <div className="navbar">
              <Link to="/register">Register</Link>
            </div>
          </ShowOnLogout>
          <ShowOnLogout>
            <div className="navbar">
              <button className="login_btn">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2 className="heading">Inventory {"&"} Stock Management Solution</h2>
          <p className="sentence">
            Inventory system to control and manage products in the warehouse in
            realtime and integrated to make it easier to develop your business.
          </p>

          {/* <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
          </div> */}
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  )
}

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  )
}

export default Home
