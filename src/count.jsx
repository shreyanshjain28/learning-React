import React, {Component} from 'react'


class Count extends Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0 
        }

    } 

   increment() {
        this.setState ({
            count : this.state.count + 1 
        },
        () => console.log( this.state.count )
        )
    }
    
    decrement (){

        this.setState ({
            count : this.state.count - 1 
        }, ()=> console.log(this.state.count))
    }

    fiveIncrement () {

        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            
            <div>
                <div> Count - {this.state.count}</div>
                <button onClick={() => this.increment() } >Count increment </button>
                <button onClick={() => this.decrement() } >count decrease </button>
                <button onClick={() => this.fiveIncrement() } > five increment  </button>
            </div>
        )

    }


}

export default Count