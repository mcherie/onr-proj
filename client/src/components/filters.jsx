import React from "react"
import styled from "styled-components"
import { Cards } from "./cards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


export const Filters = ({ data, fetchAreaData, selectedArea }) => {

    const guageData = data.data

    const Wrapper = styled.div`
        flex: 1;
        text-align: left;
        display: flex;
    `
    const Box = styled.div`
        flex: 1;
    `
    const Content = styled.div`
        flex: 3;
        margin-top: 3vh;        
    `
    const Results = styled.div`
        width: 30vh;
        height: 10vh;
        border: 1px solid rgba(112, 112, 112, 0.3);
        border-radius: 5px;
        margin-top: 1vh;
        padding-left: 2vh;
        height: auto;
        color: #65696D;
    `

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50vh;
    `

    const Selected = styled.div`
        height: 12px;
        width: 12px;
        background: #0170C5;
        display: inline-block;
    `
    const Unselected = styled.div`
        height: 12px;
        width: 12px;
        background: #eee;
        display: inline-block;
    `

    return (
        <Wrapper>
            <Box />
            <Content>
                <span style={{ color: "#4C4F52"}}>Filters</span>
                <Results >
                    <p><Selected /> All CQA Results <FontAwesomeIcon icon={faInfoCircle} size="xxs" color="#5F5F60" /></p>
                    <p><Unselected /> CQAs with Closed Loop <FontAwesomeIcon icon={faInfoCircle} size="xxs" color="#5F5F60" /> </p>
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