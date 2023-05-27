import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/images/color-sharp.png"
export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p>I am well equiped with the skills required as a full stack developer<br></br>Here are some of my skills in web development:</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter1} />
                                  <h3>HTML</h3>
                              </div>
                              <div className="item">
                                  <img src={meter1}/>
                                  <h3>CSS</h3>
                              </div>
                              <div className="item">
                                  <img src={meter1}/>
                                  <h3>JavaScript</h3>
                              </div>
                              <div className="item">
                                  <img src={meter3} />
                                  <h3>React</h3>
                              </div>
                              <div className="item">
                                  <img src={meter2} />
                                  <h3>NodeJs</h3>
                              </div>
                              <div className="item">
                                  <img src={meter2} />
                                  <h3>MongoDB</h3>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} />
      </section>
    )
  }