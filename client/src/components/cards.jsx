import React from "react"
import styled from "styled-components"

export const Cards = ({title, sample, score}) => {

    const Card = styled.div`
        height: 22vh;
        flex-basis: 25%;
        border: 1px solid blue;
        border-radius: 3px;
        margin-top: 3vh;
        margin-bottom: 3vh;
    `

    return (
        <Card >
            {title}
            Score: {score}
            Sample: {sample}
        </Card>
    )
}