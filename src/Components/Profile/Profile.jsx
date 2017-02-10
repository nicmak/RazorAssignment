import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import personJSON from './person.json'
import { connect } from 'react-redux'
import {fullWhite} from 'material-ui/styles/colors';
import './Styles/Profile.css'

//To understand mapStateToProps & mapDispatchToProps please refer
// to SideBar/SideBar.jsx
const mapStateToProps = (state) => {
  return {
    personInfoReducer:state.personInfoReducer
  }
}

//In mapDispatchToProps, we can make AJAX calls via multiple dispatch calls,
//but because I made a JSON file person.json, there is no need as its imported in already

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonInfo:() => {
      dispatch({
        type:'PERSON_INFO',
        payload: {
          info:personJSON
        }
      })
    }    
  }
}

class Profile extends Component {
//Before the component mounts, we want to fetch the Profile Data from person.json
//therefore we have to componentWillMount()
	componentWillMount() {
		this.props.getPersonInfo()
	}
	//Below we have to use terinary operator because the initial state of 
	//personInfoReducer is null...once the prop contains the data, it will be looped
	//through to return multiple user cards as shown below. If no user data exists,
	//nothing will be returned.  
	render() {
		return (
		<div className="people">

    
    {
		this.props.personInfoReducer ?
		this.props.personInfoReducer.info.People.map((person,index)=>{
			return (
			<Card className='person' key={index}>
		  <CardMedia
		    className="picture"
		    style={{fontFamily:'Poppins'}}
		    overlay={<CardTitle title={person.overlay}/>}
		  >
		    <img src={person.image}/>
		  </CardMedia>
		  <CardTitle title={person.name}
        style={{fontFamily:'Poppins'}}
		  />
		  <CardText
        style={{fontFamily:'Poppins', fontSize:'30px'}}
		  >
		    {person.text}
		  </CardText>
		  <CardActions>
        <RaisedButton
          label='Home'
          primary={true}
          icon={<ActionHome/>}
        />
        <RaisedButton
          label='Favorite'
          secondary={true}
          icon={<ActionFavorite/>}
        />
        <RaisedButton
          label='Message'
          backgroundColor="#a4c639"
          icon={<ActionFeedback color={fullWhite}/>}
        />

		  </CardActions>
		</Card>
			)
		})
		:null
	}
		</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

