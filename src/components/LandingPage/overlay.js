import React from 'react'
import './overlay.css'
//import LoginPage from '../../containers/LogIn/LoginPage'
import Aux from '../../hoc/Aux'

//const styles = {
    

const OverlayPage = (props) =>{
    // const {classes} = props
        return(
           <Aux>
            <div className="overlay-content">
            <h2 className="landing-title">WELCOME TO JUBILEE</h2>
            <h1 className= "slogan">THIS IS HOW DEBT FREE FEELS</h1>
            <h3 className="invite">JOIN US AND BEGIN YOUR JOURNEY TODAY</h3>
            </div>
            
            </Aux>
            )
        
} 

export default OverlayPage