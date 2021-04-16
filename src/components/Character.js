// Write your Character component here

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
  text-align: center;
  align-items:center;
  margin-top: 1rem;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border: 5px solid white;
  color: lightgray;
`

const Character = (props) => {
    const {characters} = props
    return (
        <StyledCharacter>
            <h1> {characters.name} </h1>
            <h3> Skin Color: {characters.skin_color}</h3>
        </StyledCharacter>
    )
}

export default Character
