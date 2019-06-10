import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section = styled.section`

`;

const Landing = () => {
    return (
        <Container>
            <Section>
                <h1>Landing Page</h1>
            </Section>
        </Container>
    );
}

export default Landing;