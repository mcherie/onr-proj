import React from "react"
import { VictoryTheme, VictoryArea, VictoryGroup, VictoryChart, VictoryClipContainer } from "victory"

export const AreaChart = ({ areaData }) => {

    return (

        <VictoryChart width={400} height={400}>
            <VictoryGroup
                style={{
                    data: { strokeWidth: 3, fillOpacity: 0.4 }
                }}
            >
                <VictoryArea
                    style={{
                        data: { fill: "cyan", stroke: "cyan", }
                    }}
                    data={ areaData? areaData.map(each => {
                        return {
                            x: each.date, 
                            y: each.score
                        }
                    }) : [
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                    ]}
                    labels={({ datum }) => datum.y+"%"}
                    interpolation="natural"
                />

            </VictoryGroup>
        </VictoryChart>

    )
}