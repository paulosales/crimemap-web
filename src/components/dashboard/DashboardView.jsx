import React from 'react'
import { Line } from 'react-chartjs-2';

import './DashboardView.css'

function DashboardView(props) {
  const { view } = props

  return (
    <div className="dashboard-view">
      <Line responsive={true} data={view.data}/>
    </div>
  )
}

export default DashboardView;
