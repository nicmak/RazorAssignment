import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'
import ActionFace from 'material-ui/svg-icons/action/face'
import ActionAssessment from 'material-ui/svg-icons/action/assessment'




export default class MenuItems extends Component {
	render () {
		return (
    
    <div>
      <ListItem
        primaryText='Profiles'
        leftIcon={<ActionFace/>}
        onClick={()=>{this.props.select_menuItem('Profile');this.props.getPersonInfo()}}
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