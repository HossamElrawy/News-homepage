import styles from './App.module.css'
import logo from "../assets/images/logo.svg"
import web3 from "../assets/images/image-web-3-desktop.jpg"
import labtop from "../assets/images/image-top-laptops.jpg"
import reto from "../assets/images/image-retro-pcs.jpg"
import gaming from "../assets/images/image-gaming-growth.jpg"
import openMenu from "../assets/images/icon-menu.svg"
import closeMenu from "../assets/images/icon-menu-close.svg"
import web3Mobile from "../assets/images/image-web-3-mobile.jpg"
import { useState, useEffect } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth < 800);
  const [showNavElements , setShowNavElements] = useState (false)

  useEffect(() => {
    const handleResize = () => setMenuOpen(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
function handleClick() {
  setShowNavElements(prev => !prev);
}

useEffect(() => {
  document.body.style.overflow = showNavElements ? 'hidden' : 'auto';
}, [showNavElements]);

  return (
    <div className={styles.rootElement}>
      <header className={styles.header}>
        <img src={logo} alt="" />
        {menuOpen ? 
        <>
          <button className={styles.hamButton} onClick={handleClick}>
            {showNavElements ? <img src={closeMenu} alt="" /> : <img src={openMenu} alt='' />}
          </button>
          {showNavElements ?
          <>
            <div className={styles.overlay}></div>
            <div className={styles.navBarElements}>
              <p className={styles.navElement}>
                Home
              </p>
              <p className={styles.navElement}>
                New
              </p>
              <p className={styles.navElement}>
                Popular
              </p>
              <p className={styles.navElement}>
                Trending
              </p>
              <p className={styles.navElement}>
                Categories
              </p>
            </div>
          </> : <></>}
        </> :
        <div className={styles.navBar}>
          <p className={styles.navElement}>
            Home
          </p>
          <p className={styles.navElement}>
            New
          </p>
          <p className={styles.navElement}>
            Popular
          </p>
          <p className={styles.navElement}>
            Trending
          </p>
          <p className={styles.navElement}>
            Categories
          </p>
        </div>}
      </header>
      <main className={styles.main}>
        <div className={styles.leftSection}>
          <img src={web3} alt="" className={styles.web3DesktopImg}/>
          <img src={web3Mobile} alt="" className={styles.web3MobileImg}/>
          <div className={styles.descriptionSection}>
            <p className={styles.headline}>
              The Bright Future of Web 3.0?
            </p>
            <div className={styles.explainationSection}>
              <p className={styles.explainationPara}>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
              </p>
              <button className={styles.readMoreButton}>
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <p className={styles.newPara}>
            New 
          </p>
          <div className={styles.newsDiv}>
            <p className={styles.newsHead}>
              Hydrogen VS Electric Cars
            </p>
            <p className={styles.newsExplaination}>
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr />
          <div className={styles.newsDiv}>
            <p className={styles.newsHead}>
              The Downsides of AI Artistry
            </p>
            <p className={styles.newsExplaination}>
              What are the possible adverse effects of on-demand AI image generation?
            </p>
          </div>
          <hr />
          <div className={styles.newsDiv}>
            <p className={styles.newsHead}>
              Is VC Funding Drying Up?
            </p>
            <p className={styles.newsExplaination}>
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
          </div>
        </div>
      </main>
      <section className={styles.lowerSection}>
        <div className={styles.smallNews}>
          <img src={reto} className={styles.newsImg} alt="" />
          <div className={styles.divAfterDiv}>
            <p className={styles.numPara}>
              01
            </p>
            <p className={styles.newA}>
              Reviving Retro PCs
            </p>
            <p className={styles.newD}>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className={styles.smallNews}>
          <img src={labtop} className={styles.newsImg} alt="" />
          <div className={styles.divAfterDiv}>
            <p className={styles.numPara}>
              02
            </p>
            <p className={styles.newA}>
              Top 10 Laptops of 2022
            </p>
            <p className={styles.newD}>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className={styles.smallNews}>
          <img src={gaming} className={styles.newsImg} alt="" />
          <div className={styles.divAfterDiv}>
            <p className={styles.numPara}>
              03
            </p>
            <p className={styles.newA}>
              The Growth of Gaming
            </p>
            <p className={styles.newD}>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
