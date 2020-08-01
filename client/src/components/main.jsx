import React from "react"
import styled from "styled-components"
import { Filters } from "./filters"
import { Trend } from "./trend"

export const Main = () => {

    const Layout = styled.div`
        display: flex;
    `
    return (
        <Layout >
            <Filters />
            <Trend />
        </Layout>
    )
}