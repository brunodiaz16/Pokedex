import React, { useEffect, useState } from 'react'
import { Grid, GridContainer } from './ApperanceGrid.style'

function ApperanceGridCompund({sprites}) {
  const [frontSprites, setFrontSprites] = useState()

  useEffect(() => {
    let newSprintArray = Object.values(sprites)
    newSprintArray = newSprintArray.filter(sprite => typeof sprite === 'string' && !sprite.includes('back'))
    setFrontSprites(newSprintArray)
    
  },[sprites])
  
  return (
    <>
      <h2>Sprites</h2>
        <GridContainer>
            {frontSprites && frontSprites.map((sprite, i) => (
                <Grid key={`Grid${i}`}>
                    <img key={`img${i}`} src={sprite} alt='img'/>
                </Grid>
                
            ))}
        </GridContainer>
    </>

  )
}

export default ApperanceGridCompund