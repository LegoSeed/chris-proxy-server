import React from 'react';



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