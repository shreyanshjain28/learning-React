import React,{useEffect, useState} from "react"
function Greeting(){

    const people = ['alex','john','peter'];
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

    // MAKING A CLOCK THAT TELLS HOW MUCH TIME HAS PASSED SINCE THE WINDOW IS LOADED
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
        const key = setInterval(() => {
          setCounter(count => count + 1)
        }, 1000);
    
        return () => {
          clearInterval(key);
        }
      }, [])
   
    const [value, setValue] = useState('');


    return (
       
        <p>{counter} seconds have passed.</p>     
        
        )
       
        {/* <div>
            <h1>hello {props.name}</h1>
            {props.children}

            

               
                
               {/* <ol className="test-list">
                    {
                        people.map((person)=>{

                            return <li key={person}>{person}</li>
                        })
                    }
               </ol>
                <ul>
                    {animalsList}
                </ul>

                
                <svg>
                    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
                </svg>
                <form>
                    <input type="text" />
                </form>   */}
            
     
      
    
}

//keep the fuction name or ket capitalized as they might not run as expected

export default Greeting;