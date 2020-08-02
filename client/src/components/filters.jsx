import React from "react"

import styled from "styled-components"
import { Cards } from "./cards"

export const Filters = () => {

    const Wrapper = styled.div`
        background: red;
        flex: 1;
        justify-content: start;
        text-align: left;
        display: flex;
    `

    const Box = styled.div`
        flex: 1;
    `

    const Content = styled.div`
        background: pink;
        flex: 3;
    `

    const Results = styled.div`
        width: 30vh;
        height: 10vh;
        border: 1px solid grey;
        border-radius: 5px;
    `

    const Container = styled.div`
        display: flex;
        background: yellow;
        flex-wrap: wrap;
        justify-content: space-between;
    `

    return (
        <Wrapper>
            <Box />
            <Content>
                Filters
                <Results >
                    All CQA Results
                    CQAs with Closed Loop
                </Results>
                <Container>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </Container>
            </Content>
        </Wrapper >
    )

}