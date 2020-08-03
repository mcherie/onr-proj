import React from "react"
import { VictoryTheme, VictoryArea, VictoryGroup, VictoryChart, VictoryClipContainer } from "victory"

export const AreaChart = ({ areaData }) => {

    return (

        <VictoryChart width={600} height={300}>
            <VictoryGroup
                style={{
                    data: { strokeWidth: 3, fillOpacity: 0.4 }
                }}
            >
                <VictoryArea
                    style={{
                        data: { fill: "#1359AC", stroke: "#03396c", }
                    }}
                    data={ areaData? areaData.map(each => {
                        return {
                            x: each.date, 
                            y: each.score
                        }
                    }) : [{ x: 1, y: 1 }]}
                    labels={({ datum }) => datum.y+"%"}
                    interpolation="natural"
                />

            </VictoryGroup>
        </VictoryChart>

    )
}