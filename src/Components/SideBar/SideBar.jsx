import React, {Component} from 'react'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import MenuItems from '../MenuItems/MenuItems'
import Data from '../Data/Data'
import Profile from '../Profile/Profile'
import './Styles/Sidebar.css'

//mapStateToProps is simply 'the source of state'
//in this case we only want the states from menuItemReducer
// the state can then be accessed as a prop from menuItemReducer shown below
// as this.props.menuItemReducer
const mapStateToProps = (state) => {
  return {
    menuItemReducer:state.menuItemReducer,
  }
}

//mapDispatchToProps, sends 'data' or an action to the Reducer,
//in this case the action carries SHOW_COMPONENT which is directly associated
// to menuItemReducer, which then takes the component paramter

//In order to run the dispatch action, the function is called below via this.props
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

//This function will accept the component name  from the menuItemReducer,
// if it matches its specific case, it will render the designated component
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
          //The function select_menuItem is passed as prop to MenuItem component,
          //please check this component to see how function is run
        />
      </Drawer>
        { 
         componentName(this.props.menuItemReducer.component)
        }
    </div>
	  )
	}
}

//Connect simply connects this component SideBar to the Redux Store
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)