import React from "react"

import logo from '../assets/img/moralogo.png'; // Tell webpack this JS file uses this image
import igLogo from '../assets/img/instagram-logo.svg'; // Tell webpack this JS file uses this image
import fbLogo from '../assets/img/facebook-logo.svg'; // Tell webpack this JS file uses this image
import lnLogo from '../assets/img/linkedin-logo.svg'; // Tell webpack this JS file uses this image



      var scrollpos = window.scrollY;
      var header = document.getElementById("header");
      var navcontent = document.getElementById("nav-content");
      var navaction = document.getElementById("navAction");
      var toToggle = document.querySelectorAll(".toggleColour");

      document.addEventListener("scroll", function () {
        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
          header.classList.add("bg-white");
          navaction.classList.remove("bg-white");
          navaction.classList.add("gradient");
          navaction.classList.remove("text-gray-800");
          navaction.classList.add("text-white");
          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
          }
          header.classList.add("shadow");
          navcontent.classList.remove("bg-gray-100");
          navcontent.classList.add("bg-white");
        } else {
          header.classList.remove("bg-white");
          navaction.classList.remove("gradient");
          navaction.classList.add("bg-white");
          navaction.classList.remove("text-white");
          navaction.classList.add("text-gray-800");
          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
          }

          header.classList.remove("shadow");
          navcontent.classList.remove("bg-white");
          navcontent.classList.add("bg-gray-100");
        }
      });

const Navbar = () => (
    <section>
      <nav id="header" className="fixed w-full z-30 top-0 shadow-navbar">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className=" no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center" style={{color:'white'}} href="#">
            <img className="h-12" src={logo} alt="logoIG" />
            SALVADOR MORA
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-gray-100" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a href="https://www.instagram.com/ladelaintuicion/" target="_black">
                  <img className="h-12" src={igLogo} alt="logoIG" />
                </a>
              </li>
              <li className="mr-3">
                  <a href="https://www.facebook.com/soyelmora" target="_black">
                    <img className="h-12" src={fbLogo} alt="logoIG" />
                  </a>
              </li>
              <li className="mr-3">
                  <a href="https://www.linkedin.com/in/mora-developer/" target="_black">
                    <img className="h-12" src={lnLogo} alt="logoIG" />
                  </a>
              </li>
            </ul>
            <button id="navAction" className="bg-white text-gray-800"></button>
            
          </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    </section>
    )

    

export default Navbar