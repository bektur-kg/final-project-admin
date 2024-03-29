import React from 'react';
import './LoaderStyle.css'

const Loader = () => {
  return (
    <React.Fragment>
      {/*<div className="lds-spinner">*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*  <div></div>*/}
      {/*</div>*/}
      
      <div className='loader'>
        <svg className="tally" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path className="tally__path" d="M 10 10 C 10 15, 10 35, 10 70" stroke="#000" strokeWidth="8" fill="none"
                strokeLinecap="round" strokeDasharray="60 60" strokeDashoffset="60">
            <animate
              attributeName="d"
              values="
				M 10 10 C 10 15, 10 35, 10 70;
				M 10 10 C 10 15, 10 35, 10 70;
				M 10 10 C 15 15, 15 35, 10 70;
				M 10 10 C 15 15, 15 35, 10 70;
				M 10 10 C  7 15,  7 35, 10 70;
				M 10 10 C 12 15, 12 35, 10 70;
				M 10 10 C 10 15, 10 35, 10 70;
				M 10 10 C 10 15, 10 35, 10 70
				"
              keyTimes="0;0.25;0.28;0.51;0.53;0.55;0.57;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="60;0;0;-60;-60"
              keyTimes="0;0.075;0.75;0.825;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path className="tally__path" d="M 30 10 C 30 25, 30 45, 30 70" stroke="#000" strokeWidth="8" fill="none"
                strokeLinecap="round" strokeDasharray="60 60" strokeDashoffset="60">
            <animate
              attributeName="d"
              values="
				M 30 10 C 30 25, 30 45, 30 70;
				M 30 10 C 30 25, 30 45, 30 70;
				M 30 10 C 35 25, 35 45, 30 70;
				M 30 10 C 35 25, 35 45, 30 70;
				M 30 10 C 27 25, 27 45, 30 70;
				M 30 10 C 32 25, 32 45, 30 70;
				M 30 10 C 30 25, 30 45, 30 70;
				M 30 10 C 30 25, 30 45, 30 70
				"
              keyTimes="0;0.25;0.28;0.51;0.53;0.55;0.57;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              begin="0.1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="60;0;0;-60;-60"
              keyTimes="0;0.075;0.75;0.825;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              begin="0.1s"
              repeatCount="indefinite"
            />
          </path>
          <path className="tally__path" d="M 50 10 C 50 35, 50 55, 50 70" stroke="#000" strokeWidth="8" fill="none"
                strokeLinecap="round" strokeDasharray="60 60" strokeDashoffset="60">
            <animate
              attributeName="d"
              values="
				M 50 10 C 50 35, 50 55, 50 70;
				M 50 10 C 50 35, 50 55, 50 70;
				M 50 10 C 55 35, 55 55, 50 70;
				M 50 10 C 55 35, 55 55, 50 70;
				M 50 10 C 47 35, 47 55, 50 70;
				M 50 10 C 52 35, 52 55, 50 70;
				M 50 10 C 50 35, 50 55, 50 70;
				M 50 10 C 50 35, 50 55, 50 70
				"
              keyTimes="0;0.25;0.28;0.51;0.53;0.55;0.57;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              begin="0.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="60;0;0;-60;-60"
              keyTimes="0;0.075;0.75;0.825;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              begin="0.2s"
              repeatCount="indefinite"
            />
          </path>
          <path className="tally__path" d="M 70 10 C 70 45, 70 65, 70 70" stroke="#000" strokeWidth="8" fill="none"
                strokeLinecap="round" strokeDasharray="60 60" strokeDashoffset="60">
            <animate
              attributeName="d"
              values="
				M 70 10 C 70 45, 70 65, 70 70;
				M 70 10 C 70 45, 70 65, 70 70;
				M 70 10 C 75 45, 75 65, 70 70;
				M 70 10 C 75 45, 75 65, 70 70;
				M 70 10 C 67 45, 67 65, 70 70;
				M 70 10 C 72 45, 72 65, 70 70;
				M 70 10 C 70 45, 70 65, 70 70;
				M 70 10 C 70 45, 70 65, 70 70
				"
              keyTimes="0;0.25;0.28;0.51;0.53;0.55;0.57;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              begin="0.3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="60;0;0;-60;-60"
              keyTimes="0;0.075;0.75;0.825;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              begin="0.3s"
              repeatCount="indefinite"
            />
          </path>
          <line className="tally__line" x1="4" y1="20" x2="76" y2="60" stroke="#000" strokeWidth="8" fill="none"
                strokeLinecap="round" strokeDasharray="82.37 82.37" strokeDashoffset="82.37">
            <animate
              attributeName="stroke-dashoffset"
              values="82.37;82.37;0;0;-82.37;-82.37"
              keyTimes="0;0.25;0.35;0.5;0.6;1"
              keySplines="0 0 0.5 1"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Loader;