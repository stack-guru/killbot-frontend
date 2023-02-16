import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


import img1 from '../../assets/images/media/1.jpg';
import img2 from '../../assets/images/media/2.jpg';
import img3 from '../../assets/images/media/3.jpg';
import img4 from '../../assets/images/media/4.jpg';
import img5 from '../../assets/images/media/5.jpg';
import img6 from '../../assets/images/media/6.jpg';



// Circle Progressbar START****

// Total Revenue

export class TotalRevenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [30, 70, 30, 100, 50, 130, 100, 140],
        color: '#1170e4'
      }],
      options: {
        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-primary mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Support Cost

export class SupportCost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [24, 18, 28, 21, 32, 28, 30],
        color: '#e82646'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-danger mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Total Requests

export class TotalRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [24, 18, 28, 21, 32, 28, 30],
        color: '#09ad95'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-success mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Requests Answered

export class RequestsAnswered extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [24, 18, 28, 21, 32, 28, 30],
        color: '#f7b731'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }
  render() {
    return (
      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-warning mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Circle Progressbar END****

// Light Gallery START*****

const images = [img1, img2, img3, img4, img5, img6];




export class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className="masonry row">
          <div className="col-xl-4 col-lg-4 col-sm-6 brick ">
            <img src={require("../../assets/images/media/1.jpg")} alt='media1' onClick={() => this.setState({ isOpen: true })} />
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 brick">
            <img src={require("../../assets/images/media/2.jpg")} alt='media2' onClick={() => this.setState({ isOpen: true })} />
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 brick">
            <img src={require("../../assets/images/media/3.jpg")} alt='media3' onClick={() => this.setState({ isOpen: true })} />
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 brick">
            <img src={require("../../assets/images/media/4.jpg")} alt='media4' onClick={() => this.setState({ isOpen: true })} />
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 brick">
            <img src={require("../../assets/images/media/5.jpg")} alt='media5' onClick={() => this.setState({ isOpen: true })} />
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 brick">
            <img src={require("../../assets/images/media/6.jpg")} alt='media6' onClick={() => this.setState({ isOpen: true })} />
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

// Light Gallery END*****
