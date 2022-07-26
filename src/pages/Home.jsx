import React, { useEffect, useState } from 'react';
import ChraracterDetail from '../components/ChraracterDetail';
import History from '../components/History';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { gql, useLazyQuery } from '@apollo/client';

const Message = styled.h2`
    padding-top: 10rem;
    text-align: center;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    Align-items: center;
    margin-top: 10rem;
`;

const Button = styled.button`
    padding: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 700;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%, rgba(9,9,121,1) 5%);
    color: white;
    font-size: 24px;
`;

const GENERATE_CHARACTER = gql`
    query findCharacter($idToSearch: ID!) {
        character(id: $idToSearch) {
            id
            name
            status
            species
            type
            gender
            origin {name}
            location {name}
            image
            created
        }
    }
`;

const Home = () => {
    const [getCharacter, { data, loading }] = useLazyQuery(GENERATE_CHARACTER);
    const [character, setCharacter] = useState(null);
    const [showGenerate, setShowGenerate] = useState(false);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const getRandomId = () => {
        return Math.floor(Math.random() * 826);
    }

    const showCharacter = (id) => {
        getCharacter({ variables: { idToSearch: id } });
    }

    useEffect(() => {
        if (data) {
            setCharacter(data.character);
        }
    }, [data, character]);

    const handleClose = () => {
        if (history.find(h => h.id === character.id)) {
            setHistory([...history]);
        } else {
            setHistory([character, ...history]);
        }
        setShowGenerate(false);
    };

    const handleHistoryClose = () => {
        setShowHistory(false);
    }

    return (
        <div>
            <Navbar />
            {!character && <Message>No character loaded.</Message>}
            <ButtonContainer>
                <Button onClick={() => { showCharacter(getRandomId()); setShowGenerate(true) }}>GENERATE</Button>
                {history.length ? <Button onClick={() => setShowHistory(true)}>HISTORY</Button> : null}
            </ButtonContainer>
            {character && <ChraracterDetail showGenerate={showGenerate} character={character} handleClose={handleClose} loading={loading} />}
            {showHistory && <History handleHistoryClose={handleHistoryClose} history={history} showCharacter={showCharacter} setShowGenerate={setShowGenerate} />}
        </div>
    )
}

export default Home