// Svg icons

import pic1 from '../../assets/images/crypto-currencies/bitcoin.svg';
import pic2 from '../../assets/images/crypto-currencies/ethereum.svg';
import pic3 from '../../assets/images/crypto-currencies/ripple.svg';
import pic4 from '../../assets/images/crypto-currencies/bitcoincash.svg';
import pic5 from '../../assets/images/crypto-currencies/cardano.svg';
import pic6 from '../../assets/images/crypto-currencies/litecoin.svg';
import pic7 from '../../assets/images/crypto-currencies/eos.svg';
import pic8 from '../../assets/images/crypto-currencies/nem.svg';
import pic9 from '../../assets/images/crypto-currencies/stellar.svg';
import pic10 from '../../assets/images/crypto-currencies/neo.svg';
import pic11 from '../../assets/images/crypto-currencies/iota.svg';
import pic12 from '../../assets/images/crypto-currencies/dash.svg';
import pic13 from '../../assets/images/crypto-currencies/monero.svg';
import pic14 from '../../assets/images/crypto-currencies/tron.svg';
import pic15 from '../../assets/images/crypto-currencies/bitcoinglod.svg';

export const COLUMNS = [
  {
    Header: "NAME",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "ICON",
    accessor: "ICON",
    className: "text-center ",

  },
  {
    Header: "PRICE",
    accessor: "PRICE",
    className: "text-center ",
  },
  {
    Header: "% 24H",
    accessor: "H",
    className: "text-center ",
  },
  {
    Header: "MARKET CAP",
    accessor: "MARKETCAP",
    className: "text-center ",
  },
  {
    Header: "CIRCULATING SUPPLY",
    accessor: "CIRCULATINGSUPPLY",
    className: "text-center ",
  },
  {
    Header: "VOLUME 24H",
    accessor: "VOLUME",
    className: "text-center ",
  },
  {
    Header: "CMGR/MONTH",
    accessor: "CMGR",
    className: "text-center ",
  },
  {
    Header: "INFLATION",
    accessor: "INFLATION",
    className: "text-center ",
  },
];

export const DATATABLE = [
  {
    NAME: 'Bitcoin',
    ICON: <img src={pic1} className="w-4 h-4" alt="" />,
    PRICE: '$10513.00',
    H: '-7%',
    MARKETCAP: '$179,470,305,923',
    CIRCULATINGSUPPLY: '16,819,612 BTC',
    VOLUME: '$9,578,830,000',
    CMGR: '8.11% / 57',
    INFLATION: '0.36%',
  },
  {
    NAME: 'Ethereum',
    ICON: <img src={pic2} className="w-4 h-4" alt="" />,
    PRICE: '$966.61',
    H: '-6%',
    MARKETCAP: '$95,270,125,036',
    CIRCULATINGSUPPLY: '97,145,024 ETH',
    VOLUME: '$3,466,060,000',
    CMGR: '22.62% / 29',
    INFLATION: '0.64%',
  },
  {
    NAME: 'BRipple',
    ICON: <img src={pic3} className="w-4 h-4" alt="" />,
    PRICE: '$1.2029',
    H: '-11%',
    MARKETCAP: '$47,649,145,657',
    CIRCULATINGSUPPLY: '38,739,144,704 XRP',
    VOLUME: '$2,081,450,000',
    CMGR: '10.85% / 53',
    INFLATION: '0.06%',
  },
  {
    NAME: 'Bitcoin Cash',
    ICON: <img src={pic4} className="w-4 h-4" alt="" />,
    PRICE: '$1547.00',
    H: '-11%',
    MARKETCAP: '$26,720,210,956',
    CIRCULATINGSUPPLY: '16,925,988 BCH',
    VOLUME: '$598,337,000',
    CMGR: '21.30% / 6',
    INFLATION: '0.32%',
  },
  {
    NAME: 'Cardano',
    ICON: <img src={pic5} className="w-4 h-4" alt="" />,
    PRICE: '$0.550768',
    H: '-9%',
    MARKETCAP: '$14,279,800,786',
    CIRCULATINGSUPPLY: '25,927,069,696 ADA',
    VOLUME: '$466,381,000',
    CMGR: '205.35% / 3',
    INFLATION: '0.00%',
  },
  {
    NAME: 'Litecoin',
    ICON: <img src={pic6} className="w-4 h-4" alt="" />,
    PRICE: '$173.86',
    H: '-7%',
    MARKETCAP: '$9,670,920,267',
    CIRCULATINGSUPPLY: '54,873,584 LTC',
    VOLUME: '$430,524,000',
    CMGR: '6.87% / 57',
    INFLATION: '0.80%',
  },
  {
    NAME: 'EOS',
    ICON: <img src={pic7} className="w-4 h-4" alt="" />,
    PRICE: '$13.394',
    H: '5%',
    MARKETCAP: '$8,420,143,033',
    CIRCULATINGSUPPLY: '621,412,800 EOS',
    VOLUME: '$2,864,780,000',
    CMGR: '53.25% / 6',
    INFLATION: '11.56%',
  },
  {
    NAME: 'NEM',
    ICON: <img src={pic8} className="w-4 h-4" alt="" />,
    PRICE: '$0.935049',
    H: '-11%',
    MARKETCAP: '$8,415,440,999',
    CIRCULATINGSUPPLY: '8,999,999,488 XEM',
    VOLUME: '$66,061,000',
    CMGR: '26.99% / 33',
    INFLATION: '0.24%',

  },
  {
    NAME: 'Stellar',
    ICON: <img src={pic9} className="w-4 h-4" alt="" />,
    PRICE: '$0.467813',
    H: '2%',
    MARKETCAP: '$8,358,735,080',
    CIRCULATINGSUPPLY: '17,867,683,840 XLM',
    VOLUME: '$370,297,000',
    CMGR: '13.12% / 41',
    INFLATION: '0.19%',
  },
  {
    NAME: 'NEO',
    ICON: <img src={pic10} className="w-4 h-4" alt="" />,
    PRICE: '$118.61',
    H: '-9%',
    MARKETCAP: '$7,693,400,000',
    CIRCULATINGSUPPLY: '65,000,000 NEO',
    VOLUME: '$318,308,000',
    CMGR: '62.68% / 15',
    INFLATION: '0.00%',
  },
  {
    NAME: 'IOTA',
    ICON: <img src={pic11} className="w-4 h-4" alt="" />,
    PRICE: '$2.34',
    H: '-14%',
    MARKETCAP: '$6,504,100,862',
    CIRCULATINGSUPPLY: '2,779,530,240 MIOTA',
    VOLUME: '$103,132,000',
    CMGR: '23.27% / 7',
    INFLATION: '-0.02%',
  },
  {
    NAME: 'Dash',
    ICON: <img src={pic12} className="w-4 h-4" alt="" />,
    PRICE: '$747.222',
    H: '-8%',
    MARKETCAP: '$5,881,413,815',
    CIRCULATINGSUPPLY: '7,833,738 DASH',
    VOLUME: '$96,147,900',
    CMGR: '19.19% / 47',
    INFLATION: '0.81%',
  },
  {
    NAME: 'Monero',
    ICON: <img src={pic13} className="w-4 h-4" alt="" />,
    PRICE: '$305.16',
    H: '-11%',
    MARKETCAP: '$4,778,157,533',
    CIRCULATINGSUPPLY: '15,633,286 XMR',
    VOLUME: '	$100,788,000',
    CMGR: '11.88% / 44',
    INFLATION: '0.78%',
  },
  {
    NAME: 'TRON',
    ICON: <img src={pic14} className="w-4 h-4" alt="" />,
    PRICE: '$0.067691',
    H: '-5%',
    MARKETCAP: '$4,450,560,896',
    CIRCULATINGSUPPLY: '65,748,193,280 TRX',
    VOLUME: '$581,651,000',
    CMGR: '142.69% / 4',
    INFLATION: '0.00%',
  },
  {
    NAME: 'Bitcoin Gold',
    ICON: <img src={pic15} className="w-4 h-4" alt="" />,
    PRICE: '$181.39',
    H: '-7%',
    MARKETCAP: '$3,084,108,676',
    CIRCULATINGSUPPLY: '16,779,700 BTG',
    VOLUME: '$199,652,000',
    CMGR: '-25.44% / 3',
    INFLATION: '0.34%',
  },
];
