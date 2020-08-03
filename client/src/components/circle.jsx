import React from "react"
import { VictoryLabel, VictoryPie, VictoryTheme} from "victory"

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
          style={{ labels: { fontSize: 25, fill: "white" } }}
          // theme={VictoryTheme.material}
          colorScale={["#005b96", "#D6D9DC", ]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 62 }}
          x={200} y={200}
          text={`${score}%`}
        />
      </svg>
    )
}