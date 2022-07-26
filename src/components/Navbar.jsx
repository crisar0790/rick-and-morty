import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 700;
`;

const Navbar = () => {
  return (
    <Container>
        <Title>RICK AND MORTY</Title>
    </Container>
  )
}

export default Navbar