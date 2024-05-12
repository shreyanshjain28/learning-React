import { Link } from "react-router-dom";

const HeroError = (heroName) => {

  if(heroName === 'JOKER'){
    throw new Error('You entered joker that is not a hero')
  }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default HeroError;