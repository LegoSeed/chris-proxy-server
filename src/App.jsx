import React from 'react';
import styled from 'styled-components';


const BigTitle = styled.h1`
font-family: Cera Pro,sans-serif;
  font-size: 30px;
  `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recommendedProducts: [] };
  }

  componentDidMount() {

  }



  render() {
    return (
      <div>
        <BigTitle>
          Prego Lego Project
        </BigTitle>
      </div>
    );
  }
}

export default App;