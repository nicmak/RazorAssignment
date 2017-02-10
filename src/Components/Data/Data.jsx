import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import LineChart from 'react-chartjs'
import './Styles/Data.css'


export default class Data extends Component {
	render() {
		const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            data: [65, 59, 80, 81, 56, 55, 40]  
        }
    ]
    }
    const data2 = {
		    datasets: [{
		        data: [
		            11,
		            16,
		            7,
		            3,
		            14
		        ],
		    }],

		    labels: [
		        "Red",
		        "Green",
		        "Yellow",
		        "Grey",
		        "Blue"
		    ]
    }
		return (
			<div className='chart-container'>
			<Tabs>
			  <Tab label='Chart 1'>
			    <LineChart.Line data={data}  width='400' height='250'/>
			  </Tab>
			  <Tab label='Chart 2'>
			    <LineChart.Radar data={data2}  width='400' height='250'/>
			  </Tab>
			</Tabs>
			</div>
		)
	}
}