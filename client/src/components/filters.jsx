import React from "react"

import styled from "styled-components"

export const Filters = () => {

    const Wrapper = styled.div`
        background: red;
        flex: 1;
        justify-content: start;
        text-align: left;
    `

    const Box = styled.div`
        padding-left: 20vh;
        // font-size: 1em;
    `

    const Results = styled.div`
        width: 30vh;
        border: 1px solid grey;
        border-radius: 5px;
    `

    return (
        <Wrapper> 
            <Box >
                Filters
                <Results >
                    All CQA Results
                    CQAs with Closed Loop
                </Results>
            </Box>
        </Wrapper >
    )

}