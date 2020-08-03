import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Filters } from "./filters"
import { Trend } from "./trend"

export const Main = (data) => {

    const [areaData, setAreaData] = useState()

    useEffect(()=> {
        fetchAreaData("Quality Score")
    }, [])

    const fetchAreaData = (selectedArea) => {
        console.log("I'm inside fetchAreaData:", selectedArea)
        fetch(`http://localhost:5000/areaData/${selectedArea}`)
        .then(res => res.json())
        .then(res => setAreaData(res))
        .catch(err => new Error(err))
    }

    const Layout = styled.div`
        display: flex;
    `

    return (
        <Layout >
            <Filters data={data} fetchAreaData={fetchAreaData}/>
            <Trend areaData={areaData} />
        </Layout>
    )
}