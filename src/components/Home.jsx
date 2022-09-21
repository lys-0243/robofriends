import React from 'react';
import Robots from './Robots';
import Title from './Title';


const Home = () => {
    return (
        <div className="wrapper">
        <div className="app_head">
          <Title />
        </div>

        <Robots />
      </div>
    );
};

export default Home;