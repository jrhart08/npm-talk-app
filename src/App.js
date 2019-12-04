import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Routes from './routes';

const Content = styled.div`
  max-width: 1400px;
  padding: 1em 0;
  margin: auto;
`;

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Routes />
      </Content>
    </div>
  );
}

export default App;
