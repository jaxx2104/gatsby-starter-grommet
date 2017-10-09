import Chart, { Area, Axis, Base, Layers } from 'grommet/components/chart/Chart'
import get from 'lodash/get'
import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <Chart vertical={true} full={true}>
        <Base height="xsmall" width="full" />
        <Layers>
          <Area
            colorIndex="graph-2"
            values={[100, 95, 80, 82, 75, undefined, 60, 55, 0, 15, 40, 50]}
          />
          <Area
            colorIndex="graph-4"
            values={[50, 40, 15, 0, 55, 60, undefined, 75, 82, 80, 95, 100]}
          />
        </Layers>
      </Chart>
    )
  }
}

export default Bio
