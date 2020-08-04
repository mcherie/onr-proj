import React from "react"
import { VictoryLabel, VictoryPie} from "victory"

export const Circle = ({ score }) => {
    return (
        <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          width={400} height={400}
          data={[
            { x: 1, y: score},
            { x: 2, y: 100-score}
          ]}
          innerRadius={124} labelRadius={125}
          colorScale={["#005b96", "#D6D9DC", ]}
          labels={() => [``]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={[
            { fontSize: 60, fill: "#0071C5"}, 
            { fontSize: 34, fill: "grey"}
          ]}
          x={200} y={200}
          text={() => [`${score}%`, "N/A",]}
        />
      </svg>
    )
}