import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import { select, svg } from "d3"
// import { path } from "../../../api/app"



export const Circle = ({name, score, sample}) => {

    const svgRef = useRef()

    const data1 = [score, 100-score]

    const createPie = d3.pie()
        // .value(d => d.value)
        // .sort(null)

    const createArc = d3
        .arc()
        .innerRadius(32)
        .outerRadius(40)

    const colors = d3.scaleOrdinal(d3.schemeCategory10)

    const format = d3.format(".0f")

    useEffect(()=> {

        const data = createPie(data1)
        const group = d3.select(svgRef.current)
        const groupWithData = group.selectAll("g.arc").data(data)

        groupWithData.exit().remove()

        const groupWithUpdate = groupWithData
            .enter()
            .append("g")
            .attr("class", "arc")

        const path = groupWithUpdate
            .append("path")
            .merge(groupWithData.select("path.arc"))

        path
            .attr("class", "arc")
            .attr("d", createArc)
            .attr("fill", (d, i) => colors(i))
        

    
        const text = groupWithUpdate
            .append("text")
            .merge(groupWithData.select("text"))

        text
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("transform", d => `translate(${createArc.centroid(d)})`)
            .style("fill", "white")
            .style("font-size", 10)
            .text(d => format(d.value))

        // path.append("text")
        //     .attr("text-anchor", "middle")
        //     .attr('font-size', '4em')
        //     .text("hello")

        // const svg = d3.select(svgRef.current)
        // svg
        //     .selectAll("path")
        //     .data([25, 30, 45])
        //     // .join(
        //     //     enter => enter.append("circle"),
        //     //     update => update.attr
        //     // )
        //     .join("circle")
        //     .attr("r", value => value)
        //     .attr("cx", value => value * 2 )
        //     .attr("cy", value => value * 2 )
        //     .attr("stroke", "red")
    }, [])

      return (
        <svg width="85" height="85" style={{backgroundColor: "grey"}}>
            <g ref={svgRef} transform={`translate(${40} ${40})`}
            />
        </svg>
      )
    }