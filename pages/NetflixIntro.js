import React from 'react';
import styled from 'styled-components';

const NetflixIntroContainer = styled.div`
  display: block;
  position: relative;
  width: 300px;
  height: 300px;
  animation-name: zoom-in;
  animation-delay: 5s;
  animation-duration: 3.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  background-size: 4000px;

  &[letter="N"] {
    transform-origin: 30% center;

    .helper-1 {
      width: 19.5%;
      height: 100%;
      left: 22.4%;
      top: 0;
      transform: rotate(180deg);
    }
  }
`;

function NetflixIntro() {
  return (
    <NetflixIntroContainer letter="N">
      <div className="helper-1">Your content here</div>
    </NetflixIntroContainer>
  );
}

export default NetflixIntro;
