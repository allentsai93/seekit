import * as React from 'react';
import { connect } from 'react-redux';
import colours from '../colours';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    background-color: ${colours.bg}
    color: ${colours.fc}
`;

const Results = () => {
    return (
        <Container>
            
        </Container>
    )
}

export default connect()(Results);