import React from 'react';

function Logo() {
  return (
    <>
      <svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
        {' '}
        <defs>
          {' '}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            {' '}
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 1 }}
            />{' '}
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(255,0,0)', stopOpacity: 1 }}
            />{' '}
          </linearGradient>{' '}
        </defs>{' '}
        <circle cx="100" cy="100" r="90" fill="url(#grad1)" />{' '}
        <text x="50" y="50" font-size="24" fill="white">
          NFT
        </text>{' '}
        <path
          d="M 80 70 Q 100 90 120 70 Q 140 50 160 70 Q 180 90 160 110 Q 140 130 120 110 Q 100 90 80 110 Q 60 130 40 110 Q 20 90 40 70 Q 60 50 80 70 Z"
          fill="#663300"
        />{' '}
        <circle cx="60" cy="80" r="10" fill="#ffcc99" />{' '}
        <circle cx="140" cy="80" r="10" fill="#ffcc99" />{' '}
        <circle cx="60" cy="80" r="5" fill="#000000" />{' '}
        <circle cx="140" cy="80" r="5" fill="#000000" />{' '}
        <path
          d="M60,90 Q75,95,90,90 T120,90 Q125,95,130,100 T140,110 Q135,115,130,120 T120,130 Q115,135,110,140 T100,150 Q95,155,90,160 T80,170 Q75,175,70,180 T60,190 Q55,195,50,200 T40,210 Q35,215,30,220 T20,230 Q15,235,10, 240 T0, 250 L0, 200 Q10, 190, 20, 180 T40, 160 Q50, 150, 60, 140 T80, 120 Q90, 110, 100, 100 T120, 80 Q130, 70, 140, 60 T160, 40 Q170, 30, 180, 20 T200, 0 L200, 50 Q190, 60, 180, 70 T160, 90 Q150, 100, 140, 110 T120, 130 Q110, 140, 100, 150 T80, 170 Q70, 180, 60, 190 Z"
          fill="#ffcc99"
        />{' '}
        <path
          d=" M 40 80 Q 35 85 30 90 T 20 100 Q 15 105 10 110 T 0 120 L 0 80 Q 10 75 20 70 T 40 60 Z"
          fill="#663300"
        />{' '}
        <path
          d=" M 160 80 Q 165 85 170 90 T 180 100 Q 185 105 190 110 T 200 120 L 200 80 Q 190 75 180 70 T 160 60 Z"
          fill="#663300"
        />{' '}
        <path
          d=" M 80 170 Q 85 175 90 180 T 100 190 L 100 210 L 80 210 Z"
          fill="#ffcc99"
        />{' '}
        <path
          d=" M 120 170 Q 115 175 110 180 T 100 190 L 100 210 L 120 210 Z"
          fill="#ffcc99"
        />{' '}
        <path d=" M 80 210 L 120 210 L 120 230 L 80 230 Z" fill="#663300" />{' '}
        <path d=" M 40 230 L 160 230 L 160 250 L 40 250 Z" fill="#663300" />{' '}
        <path d=" M 40 250 L 160 250 L 150 260 L 50 260 Z" fill="#663300" />{' '}
      </svg>
    </>
  );
}

export default Logo;
