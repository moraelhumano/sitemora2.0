import React from "react"

const Navbar = () => (
    <section>
        <nav id="header" className="fixed w-full z-30 top-0 shadow-navbar">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className=" no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center" style={{color:'white'}} href="#">
              <img className="h-12" src="assets/img/moralogo.png" alt="" />
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
        <div className="w-full shadow-navbar lg:hidden flex flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 justify-end	" id="nav-content">
            <a href="https://www.instagram.com/ladelaintuicion/" className="mr-3" target="_black">
                <img className="h-12" src="assets/img/instagram-logo.svg" alt="" />
            </a>
            <a href="https://www.facebook.com/soyelmora" className="mr-3" target="_black">
                <img className="h-12" src="assets/img/facebook-logo.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mora-developer/" className="mr-3" target="_black">
                <img className="h-12" src="assets/img/linkedin-logo.svg" alt="" />
            </a>
          <button
            id="navAction"
          ></button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-gray-100" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a href="https://www.instagram.com/ladelaintuicion/" target="_black">
                  <img className="h-12" src="assets/img/instagram-logo.svg" alt="" />
                </a>
              </li>
              <li className="mr-3">
                  <a href="https://www.facebook.com/soyelmora" target="_black">
                      <img className="h-12" src="assets/img/facebook-logo.svg" alt="" />
                  </a>
              </li>
              <li className="mr-3">
                  <a href="https://www.linkedin.com/in/mora-developer/" target="_black">
                      <img className="h-12" src="assets/img/linkedin-logo.svg" alt="" />
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