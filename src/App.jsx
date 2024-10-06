import './App.css'
import SocialIcons from './Social/SocialIcons'
import '@fortawesome/fontawesome-free/css/all.min.css';
import myImage from './my.jpg';


function App() {

  return (
    <>
      <div className='body'>
        <div className='card'>
            
            {/* above */}
            <div>
              <section className = "output-window">
	              <div className = "curved">
                  <img src={myImage} className="img" alt="Circular" />
                </div>
              </section>
            </div>

            {/* bottom */}
            <div>
                <div className='name'>
                  Deepak Pandey
                </div>

                {/* icon */}
                <div>
                  <SocialIcons />
                </div>

                {/* description */}
                <div>
                  <p className='desc'>
                  👋 Hi, Im Deepak Pandey, a passionate full-stack developer with a love for creating web applications. Currently exploring new technologies and building innovative projects in TypeScript, NextJS, and MysSQL
                  </p>
                </div>

                {/* button */}
                <div>
                  <a href="https://deepak-pandey1.github.io/Portfolio-Deepak-Pandey/#/"  target="_blank"  style={{ textDecoration: 'none' }}>
                    <div className="container-eg-btn-4 uf-border">
                      <a className="button button-7">Check out my Portfolio</a>
                    </div>
                  </a>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default App
