<div id="myCarousel" className="carousel slide" data-ride="carousel">
  {/* Indicators */}
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
    <li data-target="#myCarousel" data-slide-to="5"></li>
    <li data-target="#myCarousel" data-slide-to="6"></li>
  </ol>

  {/* Wrapper for slides */}
  <div className="carousel-inner">
    <div className="item">
      <img src="/data/Weapons/Aged leather wrapped bow.jpg" alt="Aged leather wrapped bow" style={{
        height: '350px',
        margin: 'auto'
      }}/>
      <img src="/data/Weapons/arrows.jpeg" alt="arrows" style={{
        height: '350px',
        margin: 'auto'
      }}/>
      <img src="/data/Weapons/bone sword.png" alt="bone sword" style={{
        height: '350px',
        margin: 'auto'
      }}/>
    </div>

    <div className="item">
      <img src="/data/Weapons/arrows.jpeg" alt="arrows" style={{
        height: '350px',
        margin: 'auto'
      }}/>
    </div>

    <div className="item">
      <img src="/data/Weapons/bone sword.png" alt="bone sword" style={{
        height: '350px',
        margin: 'auto'
      }}/>
    </div>

    <div className="item">
      <img src="/data/Weapons/Claymore Helm Pike Combo.png" alt="Claymore Helm Pike Combo" style={{
        height: '350px',
        margin: 'auto'
      }}/>
    </div>

    <div className="item">
      <img src="/data/Weapons/bone sword.png" alt="bone sword" style={{
        height: '350px',
        margin: 'auto'
      }}/>
    </div>

    <div className="item">
      <img src="/data/Weapons/bone sword.png" alt="bone sword" style={{
        height: '350px',
        margin: 'auto'
      }}/>
    </div>
  </div>

  {/* Left and right controls --> */}
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>




{/*2nd try */}
<h1>Use Bootstrap's carousel to show multiple items per slide.</h1>

<div className='container'>
  <div className="row">
    <div className="col-md-12">
      <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3000" id="myCarousel">
        <div className="carousel-inner">
          <div className="item active">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="#">
                <img src="http://placehold.it/300/f44336/000000" className="img-responsive"/>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="#">
                <img src="http://placehold.it/300/e91e63/000000" className="img-responsive"/></a>
              </div>
            </div>
              <div className="item">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <a href="#">
                    <img src="http://placehold.it/300/9c27b0/000000" className="img-responsive"/></a>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <a href="#">
                      <img src="http://placehold.it/300/673ab7/000000" className="img-responsive"/></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <a href="#">
                        <img src="http://placehold.it/300/4caf50/000000" className="img-responsive"/></a>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <a href="#">
                          <img src="http://placehold.it/300/8bc34a/000000" className="img-responsive"/></a>
                        </div>
                      </div>
                      {/* add  more items here */}
                      {/* Example item start:

                      <div className="item">
                        <div className="col-xs-4">
                          <a href="#1">
                            <img src="http://placehold.it/300/8bc34a/000000" className="img-responsive"/></a>
                          </div>
                        </div>

                         Example item end */}
                      </div>
                      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <i className="glyphicon glyphicon-chevron-left"></i>
                      </a>
                      <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <i className="glyphicon glyphicon-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>




              <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img src="..." alt="..."/>
                    <div class="carousel-caption">
                      ...
                    </div>
                  </div>
                  <div class="item">
                    <img src="..." alt="..."/>
                    <div class="carousel-caption">
                      ...
                    </div>
                  </div>
                  ...
                </div>

                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
