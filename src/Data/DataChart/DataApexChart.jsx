import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button } from 'react-bootstrap';

// Line Charts START*************

// Basic Chart

export class BasicChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{

        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: '#6c5ffc'
      }],
      options: {
        chart: {
          height: 225,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },

        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        tooltip: {
          
       color: '#000'
        }
      },

    };
  }
  render() {
    return (

      <div id="chart">

        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />

      </div>

    )
  }
};

// Stepline chart

export class Stepline extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        color: '#05c3FB'
      }],
      options: {
        chart: {
          type: 'line',
          height: 350
        },
        stroke: {
          curve: 'stepline',
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        }
      },


    };
  }
  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>

    )
  }
};

// Dashed line Chart with Gradient color

export class Dashedline extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        forecastDataPoints: {
          count: 7
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        title: {
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        yaxis: {
          min: -10,
          max: 40
        }
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>

    )
  }
};

// Real time Chart


export class Annotation extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2'
        },
        annotations: {
          yaxis: [{
            y: 49,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Support',
            }
          }, {
            y: 69,
            y2: 91,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
              borderColor: '#333',
              style: {
                fontSize: '10px',
                color: '#333',
                background: '#FEB019',
              },
              text: 'Y-axis range',
            }
          }],
          xaxis: [{
            x: new Date('27 Nov').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Anno Test',
            }
          }, {
            x: new Date('8 Dec').getTime(),
            x2: new Date('12 Dec').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
              borderColor: '#B3F7CA',
              style: {
                fontSize: '10px',
                color: '#fff',
                background: '#00E396',
              },
              offsetY: -10,
              text: 'X-axis range',
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },

        labels: ['13 Nov', '16 Nov', '19 Nov', '22 Nov', '25 Nov', '28 Nov', '17 Dec', '22 Dec', '27 Dec'],
        xaxis: {
          type: 'datetime',
        },
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>


    );
  }
}



// Line Charts END*************


// Bar Charts START*************


// Basic Chart



export class BasicBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        color: '#6c5ffc'
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
      </div>

    )
  }
};

// Grouped Bar Chart

export class GroupedBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [44, 55, 41, 64, 22, 43, 21],
        color: '#6c5ffc'
      }, {
        data: [53, 32, 33, 52, 13, 44, 32],
        color: '#05c3fb'
      }],
      options: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
      </div>
    )
  }
};

// Stacked Bar

export class StackedBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data 1',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Data 2',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Data 3',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Data 4',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Data 5',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      options: {
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },

        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
          labels: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={430} />
      </div>

    )
  }
};


// Bar Chart with Nagetive Values

export class BarNagetiveValue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Positive Value',
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
          3.9, 3.5, 3
        ]
      },
      {
        name: 'Nagetive Value',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
        -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
      }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 440,
          stacked: true
        },
        colors: ['#008FFB', '#FF4560'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },

        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%"
            }
          }
        },

        xaxis: {
          categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
          ],
          title: {
            text: 'Percent'
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%"
            }
          }
        },
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={430} />
      </div>
    )
  }
};

// Bar Charts END*************

// Area Charts START*********

// Basic Area Chart

export class BasicAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
        color: '#05c3fb'
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
        color: '#4ecc48'
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    )
  }
};

// Stacked Chart

export class StackedChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'South',
          data: [120, 232, 301, 434, 290, 130, 410]

        },
        {
          name: 'North',
          data: [520, 432, 601, 634, 390, 330, 520]
        },
        {
          name: 'Central',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ],
      options: {
        chart: {
          type: 'area',
          height: 350,
          stacked: true

        },
        colors: ['#008FFB', '#00E396', '#CED4DC'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          }
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center'
        }
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    )
  }
};

// Area Chart with Nagetive Values

export class NagetiveArea extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'north',
        data: [{
          x: 1996,
          y: 322
        },
        {
          x: 1997,
          y: 324
        },
        {
          x: 1998,
          y: 329
        },
        {
          x: 1999,
          y: 342
        },
        {
          x: 2000,
          y: 348
        },
        {
          x: 2001,
          y: 334
        },
        {
          x: 2002,
          y: 325
        },
        {
          x: 2003,
          y: 316
        },
        {
          x: 2004,
          y: 318
        },
        {
          x: 2005,
          y: 330
        },
        {
          x: 2006,
          y: 355
        },
        {
          x: 2007,
          y: 366
        },
        {
          x: 2008,
          y: 337
        },
        {
          x: 2009,
          y: 352
        },
        {
          x: 2010,
          y: 377
        },
        {
          x: 2011,
          y: 383
        },
        {
          x: 2012,
          y: 344
        },
        {
          x: 2013,
          y: 366
        },
        {
          x: 2014,
          y: 389
        },
        {
          x: 2015,
          y: 334
        }
        ]
      }, {
        name: 'south',
        data: [
          {
            x: 1996,
            y: 162
          },
          {
            x: 1997,
            y: 90
          },
          {
            x: 1998,
            y: 50
          },
          {
            x: 1999,
            y: 77
          },
          {
            x: 2000,
            y: 35
          },
          {
            x: 2001,
            y: -45
          },
          {
            x: 2002,
            y: -88
          },
          {
            x: 2003,
            y: -120
          },
          {
            x: 2004,
            y: -156
          },
          {
            x: 2005,
            y: -123
          },
          {
            x: 2006,
            y: -88
          },
          {
            x: 2007,
            y: -66
          },
          {
            x: 2008,
            y: -45
          },
          {
            x: 2009,
            y: -29
          },
          {
            x: 2010,
            y: -45
          },
          {
            x: 2011,
            y: -88
          },
          {
            x: 2012,
            y: -132
          },
          {
            x: 2013,
            y: -146
          },
          {
            x: 2014,
            y: -169
          },
          {
            x: 2015,
            y: -184
          }
        ]
      }],
      options: {
        chart: {
          type: 'area',
          height: 350
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },

        xaxis: {
          type: 'datetime',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 4,
          floating: false,

          labels: {
            style: {
              colors: '#8e8da4',
            },
            offsetY: -7,
            offsetX: 0,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 0.5
        },
        tooltip: {
          x: {
            format: "yyyy",
          },
          fixed: {
            enabled: false,
            position: 'topRight'
          }
        },
        grid: {
          yaxis: {
            lines: {
              offsetX: -30
            }
          },
          padding: {
            left: 20
          }
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>

    );
  }
}


// Date Time X-axis

// export class DateTime extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       series: [{
//         data: [
//           [1327359600000, 30.95],
//           [1327446000000, 31.34],
//           [1327532400000, 31.18],
//           [1327618800000, 31.05],
//           [1327878000000, 31.00],
//           [1327964400000, 30.95],
//           [1328050800000, 31.24],
//           [1328137200000, 31.29],
//           [1328223600000, 31.85],
//           [1328482800000, 31.86],
//           [1328569200000, 32.28],
//           [1328655600000, 32.10],
//           [1328742000000, 32.65],
//           [1328828400000, 32.21],
//           [1329087600000, 32.35],
//           [1329174000000, 32.44],
//           [1329260400000, 32.46],
//           [1329346800000, 32.86],
//           [1329433200000, 32.75],
//           [1329778800000, 32.54],
//           [1329865200000, 32.33],
//           [1329951600000, 32.97],
//           [1330038000000, 33.41],
//           [1330297200000, 33.27],
//           [1330383600000, 33.27],
//           [1330470000000, 32.89],
//           [1330556400000, 33.10],
//           [1330642800000, 33.73],
//           [1330902000000, 33.22],
//           [1330988400000, 31.99],
//           [1331074800000, 32.41],
//           [1331161200000, 33.05],
//           [1331247600000, 33.64],
//           [1331506800000, 33.56],
//           [1331593200000, 34.22],
//           [1331679600000, 33.77],
//           [1331766000000, 34.17],
//           [1331852400000, 33.82],
//           [1332111600000, 34.51],
//           [1332198000000, 33.16],
//           [1332284400000, 33.56],
//           [1332370800000, 33.71],
//           [1332457200000, 33.81],
//           [1332712800000, 34.40],
//           [1332799200000, 34.63],
//           [1332885600000, 34.46],
//           [1332972000000, 34.48],
//           [1333058400000, 34.31],
//           [1333317600000, 34.70],
//           [1333404000000, 34.31],
//           [1333490400000, 33.46],
//           [1333576800000, 33.59],
//           [1333922400000, 33.22],
//           [1334008800000, 32.61],
//           [1334095200000, 33.01],
//           [1334181600000, 33.55],
//           [1334268000000, 33.18],
//           [1334527200000, 32.84],
//           [1334613600000, 33.84],
//           [1334700000000, 33.39],
//           [1334786400000, 32.91],
//           [1334872800000, 33.06],
//           [1335132000000, 32.62],
//           [1335218400000, 32.40],
//           [1335304800000, 33.13],
//           [1335391200000, 33.26],
//           [1335477600000, 33.58],
//           [1335736800000, 33.55],
//           [1335823200000, 33.77],
//           [1335909600000, 33.76],
//           [1335996000000, 33.32],
//           [1336082400000, 32.61],
//           [1336341600000, 32.52],
//           [1336428000000, 32.67],
//           [1336514400000, 32.52],
//           [1336600800000, 31.92],
//           [1336687200000, 32.20],
//           [1336946400000, 32.23],
//           [1337032800000, 32.33],
//           [1337119200000, 32.36],
//           [1337205600000, 32.01],
//           [1337292000000, 31.31],
//           [1337551200000, 32.01],
//           [1337637600000, 32.01],
//           [1337724000000, 32.18],
//           [1337810400000, 31.54],
//           [1337896800000, 31.60],
//           [1338242400000, 32.05],
//           [1338328800000, 31.29],
//           [1338415200000, 31.05],
//           [1338501600000, 29.82],
//           [1338760800000, 30.31],
//           [1338847200000, 30.70],
//           [1338933600000, 31.69],
//           [1339020000000, 31.32],
//           [1339106400000, 31.65],
//           [1339365600000, 31.13],
//           [1339452000000, 31.77],
//           [1339538400000, 31.79],
//           [1339624800000, 31.67],
//           [1339711200000, 32.39],
//           [1339970400000, 32.63],
//           [1340056800000, 32.89],
//           [1340143200000, 31.99],
//           [1340229600000, 31.23],
//           [1340316000000, 31.57],
//           [1340575200000, 30.84],
//           [1340661600000, 31.07],
//           [1340748000000, 31.41],
//           [1340834400000, 31.17],
//           [1340920800000, 32.37],
//           [1341180000000, 32.19],
//           [1341266400000, 32.51],
//           [1341439200000, 32.53],
//           [1341525600000, 31.37],
//           [1341784800000, 30.43],
//           [1341871200000, 30.44],
//           [1341957600000, 30.20],
//           [1342044000000, 30.14],
//           [1342130400000, 30.65],
//           [1342389600000, 30.40],
//           [1342476000000, 30.65],
//           [1342562400000, 31.43],
//           [1342648800000, 31.89],
//           [1342735200000, 31.38],
//           [1342994400000, 30.64],
//           [1343080800000, 30.02],
//           [1343167200000, 30.33],
//           [1343253600000, 30.95],
//           [1343340000000, 31.89],
//           [1343599200000, 31.01],
//           [1343685600000, 30.88],
//           [1343772000000, 30.69],
//           [1343858400000, 30.58],
//           [1343944800000, 32.02],
//           [1344204000000, 32.14],
//           [1344290400000, 32.37],
//           [1344376800000, 32.51],
//           [1344463200000, 32.65],
//           [1344549600000, 32.64],
//           [1344808800000, 32.27],
//           [1344895200000, 32.10],
//           [1344981600000, 32.91],
//           [1345068000000, 33.65],
//           [1345154400000, 33.80],
//           [1345413600000, 33.92],
//           [1345500000000, 33.75],
//           [1345586400000, 33.84],
//           [1345672800000, 33.50],
//           [1345759200000, 32.26],
//           [1346018400000, 32.32],
//           [1346104800000, 32.06],
//           [1346191200000, 31.96],
//           [1346277600000, 31.46],
//           [1346364000000, 31.27],
//           [1346709600000, 31.43],
//           [1346796000000, 32.26],
//           [1346882400000, 32.79],
//           [1346968800000, 32.46],
//           [1347228000000, 32.13],
//           [1347314400000, 32.43],
//           [1347400800000, 32.42],
//           [1347487200000, 32.81],
//           [1347573600000, 33.34],
//           [1347832800000, 33.41],
//           [1347919200000, 32.57],
//           [1348005600000, 33.12],
//           [1348092000000, 34.53],
//           [1348178400000, 33.83],
//           [1348437600000, 33.41],
//           [1348524000000, 32.90],
//           [1348610400000, 32.53],
//           [1348696800000, 32.80],
//           [1348783200000, 32.44],
//           [1349042400000, 32.62],
//           [1349128800000, 32.57],
//           [1349215200000, 32.60],
//           [1349301600000, 32.68],
//           [1349388000000, 32.47],
//           [1349647200000, 32.23],
//           [1349733600000, 31.68],
//           [1349820000000, 31.51],
//           [1349906400000, 31.78],
//           [1349992800000, 31.94],
//           [1350252000000, 32.33],
//           [1350338400000, 33.24],
//           [1350424800000, 33.44],
//           [1350511200000, 33.48],
//           [1350597600000, 33.24],
//           [1350856800000, 33.49],
//           [1350943200000, 33.31],
//           [1351029600000, 33.36],
//           [1351116000000, 33.40],
//           [1351202400000, 34.01],
//           [1351638000000, 34.02],
//           [1351724400000, 34.36],
//           [1351810800000, 34.39],
//           [1352070000000, 34.24],
//           [1352156400000, 34.39],
//           [1352242800000, 33.47],
//           [1352329200000, 32.98],
//           [1352415600000, 32.90],
//           [1352674800000, 32.70],
//           [1352761200000, 32.54],
//           [1352847600000, 32.23],
//           [1352934000000, 32.64],
//           [1353020400000, 32.65],
//           [1353279600000, 32.92],
//           [1353366000000, 32.64],
//           [1353452400000, 32.84],
//           [1353625200000, 33.40],
//           [1353884400000, 33.30],
//           [1353970800000, 33.18],
//           [1354057200000, 33.88],
//           [1354143600000, 34.09],
//           [1354230000000, 34.61],
//           [1354489200000, 34.70],
//           [1354575600000, 35.30],
//           [1354662000000, 35.40],
//           [1354748400000, 35.14],
//           [1354834800000, 35.48],
//           [1355094000000, 35.75],
//           [1355180400000, 35.54],
//           [1355266800000, 35.96],
//           [1355353200000, 35.53],
//           [1355439600000, 37.56],
//           [1355698800000, 37.42],
//           [1355785200000, 37.49],
//           [1355871600000, 38.09],
//           [1355958000000, 37.87],
//           [1356044400000, 37.71],
//           [1356303600000, 37.53],
//           [1356476400000, 37.55],
//           [1356562800000, 37.30],
//           [1356649200000, 36.90],
//           [1356908400000, 37.68],
//           [1357081200000, 38.34],
//           [1357167600000, 37.75],
//           [1357254000000, 38.13],
//           [1357513200000, 37.94],
//           [1357599600000, 38.14],
//           [1357686000000, 38.66],
//           [1357772400000, 38.62],
//           [1357858800000, 38.09],
//           [1358118000000, 38.16],
//           [1358204400000, 38.15],
//           [1358290800000, 37.88],
//           [1358377200000, 37.73],
//           [1358463600000, 37.98],
//           [1358809200000, 37.95],
//           [1358895600000, 38.25],
//           [1358982000000, 38.10],
//           [1359068400000, 38.32],
//           [1359327600000, 38.24],
//           [1359414000000, 38.52],
//           [1359500400000, 37.94],
//           [1359586800000, 37.83],
//           [1359673200000, 38.34],
//           [1359932400000, 38.10],
//           [1360018800000, 38.51],
//           [1360105200000, 38.40],
//           [1360191600000, 38.07],
//           [1360278000000, 39.12],
//           [1360537200000, 38.64],
//           [1360623600000, 38.89],
//           [1360710000000, 38.81],
//           [1360796400000, 38.61],
//           [1360882800000, 38.63],
//           [1361228400000, 38.99],
//           [1361314800000, 38.77],
//           [1361401200000, 38.34],
//           [1361487600000, 38.55],
//           [1361746800000, 38.11],
//           [1361833200000, 38.59],
//           [1361919600000, 39.60],
//         ]
//       }],
//       options: {
//         chart: {
//           id: 'area-datetime',
//           type: 'area',
//           height: 350,
//           zoom: {
//             autoScaleYaxis: true
//           }
//         },
//         annotations: {
//           yaxis: [{
//             y: 30,
//             borderColor: '#999',
//             label: {
//               show: true,
//               text: 'Support',
//               style: {
//                 color: "#fff",
//                 background: '#00E396'
//               }
//             }
//           }],
//           xaxis: [{
//             x: new Date('14 Nov 2012').getTime(),
//             borderColor: '#999',
//             yAxisIndex: 0,
//             label: {
//               show: true,
//               text: 'Rally',
//               style: {
//                 color: "#fff",
//                 background: '#775DD0'
//               }
//             }
//           }]
//         },
//         dataLabels: {
//           enabled: false
//         },
//         markers: {
//           size: 0,
//           style: 'hollow',
//         },
//         xaxis: {
//           type: 'datetime',
//           min: new Date('01 Mar 2012').getTime(),
//           tickAmount: 6,
//         },
//         tooltip: {
//           x: {
//             format: 'dd MMM yyyy'
//           }
//         },
//         fill: {
//           type: 'gradient',
//           gradient: {
//             shadeIntensity: 1,
//             opacityFrom: 0.7,
//             opacityTo: 0.9,
//             stops: [0, 100]
//           }
//         },
//       },

//       selection: 'one_year',

//     };
//   }


//   updateData(timeline) {
//     this.setState({
//       selection: timeline
//     })

//     switch (timeline) {
//       case 'one_month':
//         ApexCharts.exec(
//           'area-datetime',
//           'zoomX',
//           new Date('28 Jan 2013').getTime(),
//           new Date('27 Feb 2013').getTime()
//         )
//         break
//       case 'six_months':
//         ApexCharts.exec(
//           'area-datetime',
//           'zoomX',
//           new Date('27 Sep 2012').getTime(),
//           new Date('27 Feb 2013').getTime()
//         )
//         break
//       case 'one_year':
//         ApexCharts.exec(
//           'area-datetime',
//           'zoomX',
//           new Date('27 Feb 2012').getTime(),
//           new Date('27 Feb 2013').getTime()
//         )
//         break
//       case 'ytd':
//         ApexCharts.exec(
//           'area-datetime',
//           'zoomX',
//           new Date('01 Jan 2013').getTime(),
//           new Date('27 Feb 2013').getTime()
//         )
//         break
//       case 'all':
//         ApexCharts.exec(
//           'area-datetime',
//           'zoomX',
//           new Date('23 Jan 2012').getTime(),
//           new Date('27 Feb 2013').getTime()
//         )
//         break
//       default:
//     }
//   }


//   render() {
//     return (

//       <div id="chart">
//         <div className="toolbar text-center">
//           <Button id="one_month"

//             onClick={() => this.updateData('one_month')} className={`${(this.state.selection === 'one_month' ? 'active' : '')}  mb-3 me-2`}>
//             1M
//           </Button>
//           &nbsp;
//           <Button id="six_months"

//             onClick={() => this.updateData('six_months')} className={`${(this.state.selection === 'six_months' ? 'active' : '')}  mb-3 me-2`}>
//             6M
//           </Button>
//           &nbsp;
//           <Button id="one_year"


//             onClick={() => this.updateData('one_year')} className={`${(this.state.selection === 'one_year' ? 'active' : '')}  mb-3 me-2`}>
//             1Y
//           </Button>
//           &nbsp;
//           <Button id="ytd"

//             onClick={() => this.updateData('ytd')} className={`${(this.state.selection === 'ytd' ? 'active' : '')}  mb-3 me-2`}>
//             YTD
//           </Button>
//           &nbsp;
//           <Button id="all"

//             onClick={() => this.updateData('all')} className={`${(this.state.selection === 'all' ? 'active' : '')}  mb-3 me-2`}>
//             ALL
//           </Button>
//         </div>

//         <div id="chart-timeline">
//           <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
//         </div>
//       </div>

//     );
//   }
// }

// Area Charts END*********

// Column Charts Start*********

// Basic Column Chart

export class BasicColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data 1',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: '#6c5ffc'
      }, {
        name: 'Data 2',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        color: '#05c3fb'
      }, {
        name: 'Data 3',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>

    )
  }
};


// Stacked Column Chart

export class StackedColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data A',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Data B',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'Data C',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'Data D',
        data: [21, 7, 25, 13, 22, 8]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
          ],
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    )
  }
};


// Column Chart with Negative Values

export class ColumnNegativeValue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
          5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
          48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: '#F15B46'
              }, {
                from: -45,
                to: 0,
                color: '#FEB019'
              }]
            },
            columnWidth: '80%',
          }
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            }
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            rotate: -90
          }
        }
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    )
  }
};

// Column with Markers

export class ColumnMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '2011',
              y: 1292,
              goals: [
                {
                  name: 'Expected',
                  value: 1400,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2012',
              y: 4432,
              goals: [
                {
                  name: 'Expected',
                  value: 5400,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2013',
              y: 5423,
              goals: [
                {
                  name: 'Expected',
                  value: 5200,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2014',
              y: 6653,
              goals: [
                {
                  name: 'Expected',
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2015',
              y: 8133,
              goals: [
                {
                  name: 'Expected',
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2016',
              y: 7132,
              goals: [
                {
                  name: 'Expected',
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2017',
              y: 7332,
              goals: [
                {
                  name: 'Expected',
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2018',
              y: 6553,
              goals: [
                {
                  name: 'Expected',
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: '#775DD0'
                }
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        colors: ['#00E396'],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>


    );
  }
}

// Column Charts END*********


// Mixed Chart START*********


// Line Column Chart

export class LineColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data 1',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        color: '#6c5ffc'
      }, {
        name: 'Data 2',
        type: 'line',
        data: [201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227],
        color: '#05c3fb'
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{


        }]
      },


    };
  }
  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    )
  }
};


// Multiple Y-Axis

export class MultipleSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data 1',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        color: '#6c5ffc'
      }, {
        name: 'Data 2',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        color: '#05c3fb'
      }, {
        name: 'Data 3',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58],
        color: '#4ecc48'
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Y-axis series 1",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Y-axis series 2",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Y-axis series 3",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft',
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>

    );
  }
}


// Line & Area


export class LineandAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
        color: '#6c5ffc'
      }, {
        name: 'Data B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
        color: '#05c3fb'
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'solid',
          opacity: [0.35, 1],
        },
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        markers: {
          size: 0
        },
        yaxis: [


        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>

    );
  }
}


// Line Column Area

export class LineColumnArea extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Data A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        color: '#6c5ffc'
      }, {
        name: 'Data B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        color: '#05c3fb'
      }, {
        name: 'Data C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        color: '#4ecc48'
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],

        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {

          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      },
    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>


    );
  }
}

// Mixed Chart END*********


// Timeline Chart START*********

// Multi-series

export class MultiSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Bob',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-11').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-11').getTime(),
                new Date('2019-03-16').getTime()
              ]
            }
          ]
        },
        {
          name: 'Joe',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-03-09').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-19').getTime()
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: true,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        xaxis: {
          type: 'datetime'
        },
        legend: {
          position: 'bottom'
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
      </div>

    );
  }
}

// Multiple series – Group rows

export class GroupSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        // George Washington
        {
          name: 'George Washington',
          data: [
            {
              x: 'President',
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            },
          ]
        },
        // John Adams
        {
          name: 'John Adams',
          data: [
            {
              x: 'President',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            },
            {
              x: 'Vice President',
              y: [
                new Date(1789, 3, 21).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            }
          ]
        },
        // Thomas Jefferson
        {
          name: 'Thomas Jefferson',
          data: [
            {
              x: 'President',
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1809, 2, 4).getTime()
              ]
            },
            {
              x: 'Vice President',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            },
            {
              x: 'Secretary of State',
              y: [
                new Date(1790, 2, 22).getTime(),
                new Date(1793, 11, 31).getTime()
              ]
            }
          ]
        },
        // Aaron Burr
        {
          name: 'Aaron Burr',
          data: [
            {
              x: 'Vice President',
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1805, 2, 4).getTime()
              ]
            }
          ]
        },
        // George Clinton
        {
          name: 'George Clinton',
          data: [
            {
              x: 'Vice President',
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1812, 3, 20).getTime()
              ]
            }
          ]
        },
        // John Jay
        {
          name: 'John Jay',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1789, 8, 25).getTime(),
                new Date(1790, 2, 22).getTime()
              ]
            }
          ]
        },
        // Edmund Randolph
        {
          name: 'Edmund Randolph',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1794, 0, 2).getTime(),
                new Date(1795, 7, 20).getTime()
              ]
            }
          ]
        },
        // Timothy Pickering
        {
          name: 'Timothy Pickering',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1795, 7, 20).getTime(),
                new Date(1800, 4, 12).getTime()
              ]
            }
          ]
        },
        // Charles Lee
        {
          name: 'Charles Lee',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1800, 5, 5).getTime()
              ]
            }
          ]
        },
        // John Marshall
        {
          name: 'John Marshall',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1800, 5, 13).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            }
          ]
        },
        // Levi Lincoln
        {
          name: 'Levi Lincoln',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1801, 2, 5).getTime(),
                new Date(1801, 4, 1).getTime()
              ]
            }
          ]
        },
        // James Madison
        {
          name: 'James Madison',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1801, 4, 2).getTime(),
                new Date(1809, 2, 3).getTime()
              ]
            }
          ]
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '50%',
            rangeBarGroupRows: true
          }
        },
        colors: [
          "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
          "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
          "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
        ],
        fill: {
          type: 'solid'
        },
        xaxis: {
          type: 'datetime'
        },
        legend: {
          position: 'bottom'
        },
        tooltip: {
          custom: function (opts) {
            // const fromYear = new Date(opts.y1).getFullYear()
            // const toYear = new Date(opts.y2).getFullYear()
            // const values = opts.ctx.rangeBar.getTooltipValues(opts)

            return (
              ''
            )
          }
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
      </div>


    );
  }
}


// Timeline Chart END*********


// Candlestick Charts START*********

// BASIC chart

export class BasicCandlestickChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },

        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={465} />
      </div>


    );
  }
}

// Customised Combo


export class CustomisedCombo extends Component {
  constructor(props) {
    super(props);

    this.state = {


      series: [{
        data: [
          { x: new Date(2016, 0), y: [101.949997, 112.839996, 89.370003, 112.209999] },
          { x: new Date(2016, 1), y: [112.269997, 117.589996, 96.820000, 106.919998] },
          { x: new Date(2016, 2), y: [107.830002, 116.989998, 104.400002, 114.099998] },
          { x: new Date(2016, 3), y: [113.750000, 120.790001, 106.309998, 117.580002] },
          { x: new Date(2016, 4), y: [117.830002, 121.080002, 115.879997, 118.809998] },
          { x: new Date(2016, 5), y: [118.500000, 119.440002, 108.230003, 114.279999] },
          { x: new Date(2016, 6), y: [114.199997, 128.330002, 112.970001, 123.940002] },
          { x: new Date(2016, 7), y: [123.849998, 126.730003, 122.070000, 126.120003] },
          { x: new Date(2016, 8), y: [126.379997, 131.979996, 125.599998, 128.270004] },
          { x: new Date(2016, 9), y: [128.380005, 133.500000, 126.750000, 130.990005] },
          { x: new Date(2016, 10), y: [131.410004, 131.940002, 113.550003, 118.419998] },
          { x: new Date(2016, 11), y: [118.379997, 122.500000, 114.000000, 115.050003] }]
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 290,
          id: 'candles',
          toolbar: {
            autoSelected: 'pan',
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#3C90EB',
              downward: '#DF7D46'
            }
          }
        },
        xaxis: {
          type: 'datetime'
        }
      },

      seriesBar: [{
        name: 'volume',
        data: [
          { x: new Date(2016, 2), y: 5.382 },
          { x: new Date(2016, 5), y: 6.436 },
          { x: new Date(2016, 8), y: 7.011 },
          { x: new Date(2016, 11), y: 8.809 }
        ]
      }],
      optionsBar: {
        chart: {
          height: 160,
          type: 'bar',
          brush: {
            enabled: true,
            target: 'candles'
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date('20 Jan 2016').getTime(),
              max: new Date('10 Dec 2016').getTime()
            },
            fill: {
              color: '#ccc',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
            }
          },
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          bar: {
            columnWidth: '80%',
            colors: {
              ranges: [{
                from: -1000,
                to: 0,
                color: '#F15B46'
              }, {
                from: 1,
                to: 10000,
                color: '#FEB019'
              }],

            },
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            offsetX: 13
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        }
      },


    };
  }



  render() {
    return (


      <div className="chart-box">
        <div id="chart-candlestick">
          <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={290} />
        </div>
        <div id="chart-bar">
          <ReactApexChart options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={160} />
        </div>
      </div>


    );
  }
}

// Candlestick Charts END*********

// Boxplot-Scatter Chart START******

// Boxplot-Scatter

export class BoxplotScatterChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Data 1',
          type: 'boxPlot',
          data: [
            {
              x: new Date('2017-01-01').getTime(),
              y: [54, 66, 69, 75, 88]
            },
            {
              x: new Date('2018-01-01').getTime(),
              y: [43, 65, 69, 76, 81]
            },
            {
              x: new Date('2019-01-01').getTime(),
              y: [31, 39, 45, 51, 59]
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: [39, 46, 55, 65, 71]
            },
            {
              x: new Date('2021-01-01').getTime(),
              y: [29, 31, 35, 39, 44]
            }
          ]
        },
        {
          name: 'Data 2',
          type: 'scatter',
          data: [
            {
              x: new Date('2017-01-01').getTime(),
              y: 32
            },
            {
              x: new Date('2018-01-01').getTime(),
              y: 25
            },
            {
              x: new Date('2019-01-01').getTime(),
              y: 64
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: 27
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: 78
            },
            {
              x: new Date('2021-01-01').getTime(),
              y: 15
            }
          ]
        }
      ],
      options: {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        colors: ['#008FFB', '#FEB019'],

        xaxis: {
          type: 'datetime',
          tooltip: {
            formatter: function (val) {
              return new Date(val).getFullYear()
            }
          }
        },
        tooltip: {
          shared: false,
          intersect: true
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
      </div>


    );
  }
}


// Horizontal BoxPlot

export class HorizontalBoxPlot extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'Data A',
              y: [54, 66, 69, 75, 88]
            },
            {
              x: 'Data B',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: 'Data C',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: 'Data D',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Data E',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Data F',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: 'Data G',
              y: [54, 59, 66, 71, 88]
            }
          ],

        }
      ],
      options: {
        chart: {
          type: 'boxPlot',
          height: 350
        },

        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '50%'
          },
          boxPlot: {
            colors: {
              upper: '#6c5ffc',
              lower: '#05c3fb'
            }
          }
        },
        stroke: {
          colors: ['#6c757d']
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
      </div>

    );
  }
}

// Boxplot-Scatter Chart END******

//  TREEMAP Charts START******

// Basic TreeMap

export class BasicTreeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218
            },
            {
              x: 'Kolkata',
              y: 149
            },
            {
              x: 'Mumbai',
              y: 184
            },
            {
              x: 'Ahmedabad',
              y: 55
            },
            {
              x: 'Bangaluru',
              y: 84
            },
            {
              x: 'Pune',
              y: 31
            },
            {
              x: 'Chennai',
              y: 70
            },
            {
              x: 'Jaipur',
              y: 30
            },
            {
              x: 'Surat',
              y: 44
            },
            {
              x: 'Hyderabad',
              y: 68
            },
            {
              x: 'Lucknow',
              y: 28
            },
            {
              x: 'Indore',
              y: 19
            },
            {
              x: 'Kanpur',
              y: 29
            }
          ]
        }
      ],
      options: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap'
        },
        plotOptions: {
          treemap: {
            colorScale: {
              ranges: [
                {
                  from: -6,
                  to: 0,
                  color: '#CD363A'
                },
                {
                  from: 0.001,
                  to: 6,
                  color: '#52B12C'
                }
              ]
            }
          }
        }
      },


    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />
      </div>
    );
  }
}

// Distributed Treemap Charts  

export class DistributedTreemap extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218
            },
            {
              x: 'Kolkata',
              y: 149
            },
            {
              x: 'Mumbai',
              y: 184
            },
            {
              x: 'Ahmedabad',
              y: 55
            },
            {
              x: 'Bangaluru',
              y: 84
            },
            {
              x: 'Pune',
              y: 31
            },
            {
              x: 'Chennai',
              y: 70
            },
            {
              x: 'Jaipur',
              y: 30
            },
            {
              x: 'Surat',
              y: 44
            },
            {
              x: 'Hyderabad',
              y: 68
            },
            {
              x: 'Lucknow',
              y: 28
            },
            {
              x: 'Indore',
              y: 19
            },
            {
              x: 'Kanpur',
              y: 29
            }
          ]
        }
      ],
      options: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap'
        },

        colors: [
          '#3B93A5',
          '#F7B844',
          '#ADD8C7',
          '#EC3C65',
          '#CDD7B6',
          '#C1F666',
          '#D43F97',
          '#1E5D8C',
          '#421243',
          '#7F94B0',
          '#EF6537',
          '#C0ADDB'
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        }
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />
      </div>
    );
  }
}

//  TREEMAP Charts END******

//  Pie Charts START******

// Simple Pie Chart

export class SimplePieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 280
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },


    };
  }

  render() {
    return (

      <div id="chart" className='apexpie-chart'>
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={410} />
      </div>

    );
  }
}

// Update Donut

export class UpdateDonut extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [44, 55, 13, 33],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      },


    };
  }


  appendData() {
    var arr = this.state.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

    this.setState({
      series: arr
    })
  }

  removeData() {
    if (this.state.series.length === 1) return

    var arr = this.state.series.slice()
    arr.pop()

    this.setState({
      series: arr
    })
  }

  randomize() {
    this.setState({
      series: this.state.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
      })
    })
  }

  reset() {
    this.setState({
      series: [44, 55, 13, 33]
    })
  }

  render() {
    return (

      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
          </div>
        </div>

        <div className="actions text-center mt-3">
          <Button className='mb-2 me-2' variant='primary' onClick={() => this.appendData()}>+ ADD</Button>&nbsp;

          <Button className='mb-2 me-2' variant='danger' onClick={() => this.removeData()}> - REMOVE</Button>&nbsp;

          <Button className='mb-2 me-2' variant='success' onClick={() => this.randomize()}> RANDOMIZE </Button> &nbsp;

          <Button className='mb-2 me-2' variant='secondary' onClick={() => this.reset()} > RESET </Button>

        </div>
      </div>
    );
  }
}


//  Pie Charts END******

//  RadialBar Charts START******

// Basic Radial Chart

export class BasicRadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Downloading...'],
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={280} />
      </div>

    );
  }
}

// Multiple Radialbars

export class MultipleRadialbar extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={280} />
      </div>


    );
  }
}

// Custom Angle Circle Chart

export class CustomAngleCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [76, 67, 61, 90],
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function (seriesName, opts) {
            return seriesName + ": &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
      },
    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart className='Custom-angle' options={this.state.options} series={this.state.series} type="radialBar" height={280} />
      </div>

    );
  }
}

// Stroked Gauge

export class StrokedGauge extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [67],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Median Ratio'],
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="" options={this.state.options} series={this.state.series} type="radialBar" height={280} />
      </div>

    );
  }
}

//  RadialBar Charts END******


//  Radar Charts START******

// Basic Radar Chart

export class BasicRadarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
      </div>
    );
  }
}

// Radar – Multiple Series

export class RadarMultipleSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
      </div>


    );
  }
}

//  Radar Charts END******


//  Radar Charts START******

// Basic Polar Area Charts

export class BasicPolarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      options: {
        chart: {
          type: 'polarArea',
        },
        legend: {
          position: 'bottom'
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height:300,
              position: 'center',
              
            },
          }
        },
      ]
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart className='polar-Chart' options={this.state.options} series={this.state.series} type="polarArea" width={420} />
      </div>
    );
  }
}

// Polar Area Monochrome Charts

export class PolarMonochrome extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [42, 47, 52, 58, 65],
      options: {
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            },
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
      },
    };
  }
  render() {
    return (
      <div className="Chart">
        <ReactApexChart className="polar-monochrome" options={this.state.options} series={this.state.series} type="polarArea" width={380} />
      </div>
    );
  }
}
//  Radar Charts END******
