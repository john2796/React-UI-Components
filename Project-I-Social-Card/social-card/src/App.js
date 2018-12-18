import React from 'react';
import styled from "styled-components";
import Post from './components/Post/Post';


const AppWrapper = styled.div`
  max-width: 650px;
  margin: 20px auto;

`


const App = () => (
  <AppWrapper>
    <Post />
    <Post />
    <Post />
  </AppWrapper>
)
export default App;
