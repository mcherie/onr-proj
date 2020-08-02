import React from "react"
import styled from "styled-components"
import { Filters } from "./filters"
import { Trend } from "./trend"

export const Main = (data) => {

    console.log("2. middle main data is", data)

    const Layout = styled.div`
        display: flex;
    `
    return (
        <Layout >
            <Filters data={data}/>
            <Trend />
        </Layout>
    )
}