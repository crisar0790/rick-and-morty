import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive"; 
import { GrClose } from 'react-icons/gr';

const BigContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    background: #f7e8c9;
    width: 70%;
    height: 70%;
    padding: 3rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    ${mobile({width: '95%', padding: '2rem'})}
`;

const SubContainer = styled.div`
    padding: 1rem;
    height: 90%;            
    overflow-y: scroll;
`;

const ContainerItem = styled.div`
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    background: ${props => props.bg === 'Male' ? '#1c7ee6' : props.bg === 'Female' ? '#e61ee6' : '#d48b02'};
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: translateY(-5px);
    }
`;

const Image = styled.img`
    width: 80px;
    height: auto;
`;

const Name = styled.div`
    padding-left: 1rem;
`;

const Top = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const Button = styled.button`
    cursor: pointer;
    background: #bd0a04;
    border: none; 
    transition: all 0.25s;
    &:hover {
        -moz-box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.75);
    }  
`;

const History = ({ handleHistoryClose, history, showCharacter, setShowGenerate }) => {
    return (
        <BigContainer>
            <Container>
                <Top>
                    <Button onClick={handleHistoryClose}><GrClose style={{fontSize: "24px"}} /></Button>
                </Top>
                <SubContainer>
                    {
                        history?.map((h, k) => (
                            <ContainerItem bg={h.gender} key={k} onClick={() => { showCharacter(h.id); setShowGenerate(true); handleHistoryClose() }}>
                                    <Image src={h.image} />
                                    <Name>{h.name}</Name>
                            </ContainerItem>)
                        )
                    }
                </SubContainer>
            </Container>
        </BigContainer>
    )
}

export default History