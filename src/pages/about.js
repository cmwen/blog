import React from 'react';
import Layout from '../components/Layout';

export default props => (
  <Layout {...props}>
    <div>
      <h1>About</h1>
      <p>This site is power by GatsbyJS.</p>
      <a href="https://www.linkedin.com/in/chung-min-wen/">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32px"
          height="32px"
          viewBox="0 0 510 510"
        >
          <g>
            <g id="post-linkedin">
              <path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
        M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9
        S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204
        V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z" />
            </g>
          </g>
        </svg>
      </a>

      <a href="https://twitter.com/cmw1n">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32px"
          height="32px"
          viewBox="0 0 486.392 486.392"
        >
          <g>
            <g>
              <g>
                <path d="M395.193,0H91.198C40.826,0,0,40.826,0,91.198v303.995c0,50.372,40.826,91.198,91.198,91.198
        h303.995c50.372,0,91.198-40.827,91.198-91.198V91.198C486.392,40.826,445.565,0,395.193,0z M364.186,188.598l0.182,7.752
        c0,79.16-60.221,170.359-170.359,170.359c-33.804,0-65.268-9.91-91.776-26.904c4.682,0.547,9.454,0.851,14.288,0.851
        c28.059,0,53.868-9.576,74.357-25.627c-26.204-0.486-48.305-17.814-55.935-41.586c3.678,0.669,7.387,1.034,11.278,1.034
        c5.472,0,10.761-0.699,15.777-2.067c-27.39-5.533-48.031-29.7-48.031-58.701v-0.76c8.086,4.499,17.297,7.174,27.116,7.509
        c-16.051-10.731-26.63-29.062-26.63-49.825c0-10.974,2.949-21.249,8.086-30.095c29.518,36.236,73.658,60.069,123.422,62.562
        c-1.034-4.378-1.55-8.968-1.55-13.649c0-33.044,26.812-59.857,59.887-59.857c17.206,0,32.771,7.265,43.714,18.908
        c13.619-2.706,26.448-7.691,38.03-14.531c-4.469,13.984-13.953,25.718-26.326,33.135c12.069-1.429,23.651-4.682,34.382-9.424
        C386.073,169.659,375.889,180.208,364.186,188.598z" />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  </Layout>
);
