import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [numberOfServings, setNumberOfServings] = useState(100);
  const [priceType, setPriceType] = useState("monthly");
  const [priceTypeBool, setPriceTypeBool] = useState(1);

  useEffect(() => {
    priceTypeBool === 0 ? setPriceType("annual") : setPriceType("monthly");
  }, [priceTypeBool]);

  const handlePriceType = () => {
    if (priceTypeBool === 0) {
      setPriceTypeBool(1);
    }

    if (priceTypeBool === 1) {
      setPriceTypeBool(0);
    }
  };

  return (
    <React.Fragment>
      <style>
        {`
      .active.lines {
        background-color: #0099FF !important;
      }
      `}
      </style>
      {/*TITLE*/}
      <section id="title">
        <div className="container-top">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">Looking for a lollipop atternative?</h1>
              <p className="header-p">Lorem ipsum is simply dummy text of the printing  and typesrtting industry.Lorem ipsum has been the industry's standard dummy <br />text ever since the 1500s.</p>
              <button type="button" className="btn btn-primary btn-lg btnrow btn-1">Primary CTN</button>
              <button type="button" className="btn btn-secondary btn-lg btnrow btn-2">Secondary CTN</button>
            </div>
            <div className="col-lg-6">
              <img className="title-img" src="image/food.png" alt="lollipop" />
            </div>
          </div>
        </div>
        {/*MID-1*/}
        <div className="mid-1">
          <h4>This the heading in <br /> two lines.</h4>
          <div className="mid-1-img">
            <img className src="image/table.png" alt="" />
          </div>
        </div>
      </section>

      {/*MID*/}
      <section id="mid">
        <div className="container-mid">
          <div className="row">
            <div className="col-lg-12">
              <div className="mid-2">
                <h4>compare pricing today!</h4>
                <p className="mid2-p">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="btn-group serving-btn" role="group" aria-label="Basic example">
                <button onClick={() => setNumberOfServings(25)} type="button" className="btn btn-outline-primary btn3">25 serving</button>
                <button onClick={() => setNumberOfServings(50)} type="button" className="btn btn-outline-secondary btn3">50 serving</button>
                <button onClick={() => setNumberOfServings(100)} type="button" className="btn btn-outline-primary btn3">100 serving</button>
                <button onClick={() => setNumberOfServings(200)} type="button" className="btn btn-outline-secondary btn3">200 serving</button>
              </div>
            </div>
            {/*TOGGLE-BTN*/}
            <div className="col-lg-12">
              <div className="center">
                <h5 className="anual">Anual<br /> <p>50% off</p> </h5><input onClick={(e) => handlePriceType()} type="checkbox" name /><h5 className="month">monthly</h5>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*CARDS*/}

      <section id="pricing">
        <div className="cards">
          <div className="row">
            <div className="col-lg-4">
              <div className="img1">
                <img src="image/food.png" alt="lollipop" />
              </div>
              <div className="price-text">
                <div className="t-1">
                  <h4>lollipop</h4>
                  <h3>$ {priceType === "annual" ? numberOfServings / 2 : numberOfServings} <p>per month</p></h3>
                  <h5>For {numberOfServings} servings</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img2">
                <img src="image/iceandy.png" alt="iceandy" />
              </div>
              <div className="price-text">
                <div className="t-1">
                  <h4>icecandy</h4>
                  <h3>$ {priceType === "annual" ? numberOfServings : numberOfServings * 2} <p>per month</p></h3>
                  <h5>For {numberOfServings} servings</h5>
                </div>
              </div>
            </div>

            {
              priceType === "annual" ? (
                <div className="col-lg-4">
                  <div className="img3">
                    <img src="image/star.png" alt="star" />
                  </div>
                  <div className="price-text">
                    <div className="t-1 offer">

                      <h4>Your savings with lollipop</h4>
                      <h3>$ {numberOfServings} <p> per month </p></h3>
                      {/* <h5>For {numberOfServings} servings</h5> */}

                    </div>
                  </div>
                </div>) : null
            }
          </div>
        </div>
      </section>

      {/*FOOTER-*/}
      <section id="footer">
        {/*----------------------------------F-1--------------------------------------*/}
        <div className="container-bottom1">
          <h2 className="botom-heading">Here’s what our customers have to say </h2>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={4000}>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active lines" />
              <li className="lines" data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li className="lines" data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <table className="footer-table">
                  <tbody><tr>
                    <td>
                      <img className="footer-img1" src="image/pupl.png" alt="" />
                    </td>
                    <td>
                      <h1>“</h1>
                      <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum <br /> has been the industry's standard dummy text <br /> ever since the 1500s.</p>
                      <h5>Raja Ram</h5>
                      <p className="ineer-p" style={{ fontSize: '1rem' }}>Tip World</p>
                    </td>
                  </tr>
                  </tbody></table>
              </div>
              <div className="carousel-item">
                <table className="footer-table">
                  <tbody><tr>
                    <td>
                      <img className="footer-img1" src="image/pupl.png" alt="" />
                    </td>
                    <td>
                      <h1>“</h1>
                      <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum <br /> has been the industry's standard dummy text <br /> ever since the 1500s.</p>
                      <h5>Raj Ram</h5>
                      <p className="ineer-p" style={{ fontSize: '1rem' }}>Tip World</p>
                    </td>
                  </tr>
                  </tbody></table>
              </div>
              <div className="carousel-item">
                <table className="footer-table">
                  <tbody><tr>
                    <td>
                      <img className="footer-img1" src="image/pupl.png" alt="" />
                    </td>
                    <td className="tdata">
                      <h1>“</h1>
                      <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum <br /> has been the industry's standard dummy text <br /> ever since the 1500s.</p>
                      <h5>Rahul Ram</h5>
                      <p className="ineer-p" style={{ fontSize: '1rem' }}>Tip World</p>
                    </td>
                  </tr>
                  </tbody></table>
              </div>
            </div>
            <a className="carousel-control-prev btns" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next btns" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/*----------------------------------F-2--------------------------------------*/}
          <div className="container-bottom2">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="botom-heading">Loved by users,  recommended by experts</h3>
                <p className="botom-p">Lorem ipsum is simply dummy text of the printing <br /> and typesrtting industry.Lorem ipsum has been the <br /> industry's standard dummy text ever since the<br /> 1500s.</p>
                <button type="button" className="btn btn-primary btn-lg btnbotom">Primary CTN</button>
              </div>
              <div className="col-lg-6">
                <img className="footer-img2" src="image/bag.png" alt="lollipop" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </React.Fragment>
  );
}

export default App;
