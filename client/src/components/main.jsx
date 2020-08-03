import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Filters } from "./filters"
import { Trend } from "./trend"

export const Main = (data) => {

    const [areaData, setAreaData] = useState()
    const [selectedArea, setSelectedArea] = useState()

    useEffect(()=> {
        fetchAreaData("Quality Score")
    }, [])

    const fetchAreaData = (area) => {
        fetch(`http://localhost:5000/areaData/${area}`)
        .then(res => res.json())
        .then(res => setAreaData(res))
        .catch(err => new Error(err))
    }

    const Layout = styled.div`
        display: flex;
    `

    return (
        <Layout >
            <Filters data={data}/>
            <Trend areaData={areaData} fetchAreaData={()=>fetchAreaData}/>
        </Layout>
    )
}