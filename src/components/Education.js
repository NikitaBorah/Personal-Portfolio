
export const Education = () => {
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
      <section className="education" id="education">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="education-bx wow zoomIn">
                          <h2>Education</h2>
                          <hr/>
                          <p>Class 10th: 98%
                          <br/>CBSE Board, DPS Guwahati
                            <hr/>
                            Class 12th: 96.4%
                            <br/>CBSE Board, DPS Guwahati
                            <hr/>
                            Currently pursuing Bachelors Of Technology in Chemical Engineering, from IIT Guwahati
                            </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }