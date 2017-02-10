import React, {Component} from 'react'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import MenuItems from '../MenuItems/MenuItems'
import Data from '../Data/Data'
import Profile from '../Profile/Profile'
import './Styles/Sidebar.css'

const mapStateToProps = (state) => {

  return {
    menuItemReducer:state.menuItemReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    select_menuItem: (component) => {
      dispatch({
        type:'SHOW_COMPONENT',
        payload: {
          component:component
        }
      })
    }   
  }
}


const componentName = (component) => {
  switch(component) {
      case 'Profile': {
        return <Profile/>
      }
      case 'Data': {
        return <Data/>
      }
      
  }
}

 class SideBar extends Component {
	render() {
    console.log(this.props.menuItemReducer.component)
	  return (
    <div className='container'>
      <Drawer
        className="drawer"
        open={true}
        containerStyle={{backgroundColor:'rgb(24, 209, 185)'}}
      >
        <div className='BarTitle'>Razor
        </div>
        <MenuItems
          select_menuItem={this.props.select_menuItem}
        />
      </Drawer>
        { 
         componentName(this.props.menuItemReducer.component)
        }
    </div>
	  )
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar)




