import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Filters } from "./filters"
import { Trend } from "./trend"

export const Main = (data) => {

    const [areaData, setAreaData] = useState()
    const [selectedArea, setSelectedArea] = useState("Quality Score")

    useEffect(()=> {
        fetchAreaData("Quality Score")
    }, [])

    const fetchAreaData = (area) => {
        setSelectedArea(area)
        fetch(`https://onr-proj.herokuapp.com/areaData/${area}`)
        .then(res => res.json())
        .then(res => setAreaData(res))
        .catch(err => new Error(err))
    }

    const Layout = styled.div`
        display: flex;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    `

    return (
        <Layout >
            <Filters data={data} fetchAreaData={fetchAreaData} selectedArea={selectedArea}/>
            <Trend areaData={areaData} selectedArea={selectedArea}/>
        </Layout>
    )
}