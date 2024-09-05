import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const MainHeader = () => {
  const [click, setClick] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setClick(!click);
    document.body.style.overflow = click ? "auto" : "hidden"; // Disable or enable scrolling
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className={`main-header ${visible ? "visible" : "hidden"}`}>
      <header>
        <nav>
          <div className="m-logo">
            <Link to="/">
              <h1>
                SOG <span>Rental Services</span>
              </h1>
            </Link>
          </div>

          <ul className={click ? "menu active" : "menu"}>
            <div className="list1">
              <div className="list2">
                <li>
                  <NavLink to="/login">LogIn</NavLink>
                </li>
              </div>
            </div>
          </ul>

          <div className="bars" onClick={handleClick}>
            {click ? (
              <RiCloseFill id="close" />
            ) : (
              <FaBars id="bar" style={{ color: "#ee2a7b" }} />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
