import React from "react"
import styled from "styled-components"
import { Cards } from "./cards"

export const Filters = ({ data, fetchAreaData, selectedArea }) => {

    const guageData = data.data

    const Wrapper = styled.div`
        flex: 1;
        justify-content: start;
        text-align: left;
        display: flex;
    `
    const Box = styled.div`
        flex: 1;
    `
    const Content = styled.div`
        flex: 3;
        margin: auto;
    `
    const Results = styled.div`
        width: 30vh;
        height: 10vh;
        border: 1px solid grey;
        border-radius: 5px;
        margin-top: 1vh;
        padding-left: 2vh;
        height: auto;
        color: #65696D;
        font-size: 0.8em;
    `

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50vh;
    `

    return (
        <Wrapper>
            <Box />
            <Content>
                <span style={{ fontSize: "0.8em", color: "#4C4F52"}}>Filters</span>
                <Results >
                    <p>■ All CQA Results ◉ </p>
                    <p>□ CQAs with Closed Loop ◉ </p>
                </Results>
                <Container >
                    {guageData && guageData.map(each => <Cards 
                        title={each.name} 
                        score={each.score} 
                        sample={each.sample} 
                        fetchAreaData={()=>fetchAreaData(each.name)} 
                        selectedArea={selectedArea}
                        />)}
                </Container>
            </Content>
        </Wrapper >
    )

}