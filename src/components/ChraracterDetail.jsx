import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive"; 
import { GrClose } from 'react-icons/gr';

const Outside = styled.div``;

const Inside = styled.div`
    ${mobile({height: '100%', overflowY: 'scroll'})}
`;

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
    width: 80%;
    height: auto;
    padding: 3rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    ${mobile({height: '80%', width: '95%', padding: '2rem'})}    
`;

const Top = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;
`;

const ButtonClose = styled.button`
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

const Details = styled.div`
    display: flex;
    justify-content: center;
    ${mobile({flexDirection: 'column'})}    
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: left;
`;

const Image = styled.img`
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    max-width: 90%;
    max-height: auto;
    transition: all 0.5s;
    &:hover {
        -moz-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);
        box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);
    }
    ${mobile({maxWidth: '100%'})}    
`;

const InfoContainer = styled.div`
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    background: ${props => props.bg === 'Male' ? '#1c7ee6' : props.bg === 'Female' ? '#e61ee6' : '#d48b02'};
    flex: 1;
    padding: 2rem; 
    transition: all 0.5s;
    &:hover {
        -moz-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);
        box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);
    }
    ${mobile({padding: '0.5rem'})}
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
    ${mobile({justifyContent: 'left'})}
`;

const Name = styled.h2``;

const CharacterID = styled.p`
    font-size: 12px;
`;

const Message = styled.h3`
    text-align: center;
`;

const Item1 = styled.span``;

const Item2 = styled.span`
    ${mobile({paddingLeft: '0.5rem'})}  
`;

const ChraracterDetail = ({ showGenerate, character, handleClose, loading }) => {
    return (
        <Outside>
            {
                showGenerate &&
                (
                    <BigContainer>
                        <Container>
                            {
                                loading ?
                                    <Message>Loading...</Message> :
                                    <Inside>
                                        <Top>
                                            <ButtonClose onClick={handleClose}><GrClose style={{ fontSize: "24px" }} /></ButtonClose>
                                        </Top>
                                        <Details>
                                            <ImgContainer>
                                                <Image src={character.image} />
                                            </ImgContainer>
                                            <InfoContainer bg={character.gender}>
                                                <Name>{character.name}</Name>
                                                <Info>
                                                    <CharacterID>CHARACTER ID: {character.id}</CharacterID>
                                                </Info>
                                                <Info>
                                                    <Item1>Status:</Item1>
                                                    <Item2>{character.status}</Item2>
                                                </Info>
                                                <Info>
                                                    <Item1>Species:</Item1>
                                                    <Item2>{character.species}</Item2>
                                                </Info>
                                                <Info>
                                                    <Item1>Type:</Item1>
                                                    <Item2>{character.type}</Item2>
                                                </Info>
                                                <Info>
                                                    <Item1>Gender:</Item1>
                                                    <Item2>{character.gender}</Item2>
                                                </Info>
                                                <Info>
                                                    <Item1>Origin:</Item1>
                                                    <Item2>{character.origin.name}</Item2>
                                                </Info>
                                                <Info>
                                                    <Item1>Location:</Item1>
                                                    <Item2>{character.location.name}</Item2>
                                                </Info>
                                                <Info>
                                                    <Item1>Created at:</Item1>
                                                    <Item2>{(new Date((character?.created).split('T')[0])).toDateString()}</Item2>
                                                </Info>
                                            </InfoContainer>
                                        </Details>
                                    </Inside>
                            }
                        </Container>
                    </BigContainer>
                )
            }
        </Outside>
    )
}

export default ChraracterDetail