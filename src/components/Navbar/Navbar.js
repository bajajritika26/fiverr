import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Girl from "../../img/girl.jpg"
function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Jane",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="navbarContainer">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="list">
          <Link className="link" to="/more">fiverr Business</Link>
          <Link className="link" to="/gig/123">Explore</Link>
          <Link className="link" to="/more">English</Link>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src={Girl}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/gig/123">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="gigs">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/gig/123">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/more">
              AI Services
            </Link>
            <Link className="link menuLink" to="/gigs">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/gig/123">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/gigs">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/more">
              Business
            </Link>
            <Link className="link menuLink" to="/gig/123">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
