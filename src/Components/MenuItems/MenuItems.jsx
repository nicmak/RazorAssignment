import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'
import ActionFace from 'material-ui/svg-icons/action/face'
import ActionAssessment from 'material-ui/svg-icons/action/assessment'

export default class MenuItems extends Component {
	render () {
		return (
    //The prop representing the function select_menuItem is passed here from
    //SideBar.jsx, here onClick is used to trigger the function
    <div>
      <ListItem
        primaryText='Profiles'
        leftIcon={<ActionFace/>}
        onClick={()=>{this.props.select_menuItem('Profile')}}
      />
      <ListItem
        primaryText='Data'
        leftIcon={<ActionAssessment/>}
        onClick={()=>{this.props.select_menuItem('Data')}}
      />
    </div>
		)
	}
}