import React, {Component} from 'react'

class Event  extends Component {

    constructor(props){

        super(props) 

        this.state = {

            message : "hello"
        }
    }

        
    changeMessage() {
        this.setState ({
            message: "thank you for subscribing"
        })
    }


    render(){
        return ( 


            <div>
                <h1>event component - </h1>
                <div>{this.state.message}</div>
            </div>

        )
    }
}

export default Event