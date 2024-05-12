import React from 'react'
import Person from './person.jsx'


function NameList() {
    const persons = [ 
        {    
            id: 1,
            name : "Ram",
            age:25
        },
        {
            id: 2,
            name: "sam",
            age:24
        },

        {  
            id: 3,
            name: "clark",
            age: 30
        }
    ]

    const personList = persons.map(person => (
            
            <Person person={person} />
            //<h2> i am {person.name} </h2>
    
        )) 

    return(
                <div> 
                        {personList} 
                        
                </div>
            )
}

export default NameList