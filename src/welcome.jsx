/* type checking with prop types */


import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { checkPropTypes } from 'prop-types';


/*class Welcome extends Component {

    render(){
        return ( 
            
                <h1>class component name = {this.props.name} and {this.props.age} </h1>
                
               

        )
    }
} */

//rendering fucntion component 
const Welcome = (props) => {

    return <h1>Welcome {props.name} with age {props.age}</h1>
} 

Welcome.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    

};

Welcome.defaultProps = {
    name: 'zach',
}


export default Welcome