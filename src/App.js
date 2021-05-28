import React from "react";
import "./style.css";
import styled from 'styled-components'
import * as Notes from './notes/notes.json'

export default function App() {
  return (
    <MainContainer>
     <Notes>

     </Notes>
    </MainContainer>
  );
}

const MainContainer = styled.div`

`

const Notes = styled.div`
  display: flex;
  flex-direction: column;
`