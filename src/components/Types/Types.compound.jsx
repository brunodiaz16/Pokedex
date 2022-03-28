import React from 'react'
import { TypeContainer, Type } from './Types.style'
import * as typesImg from '../../assets'

function TypesCompound({types}) {
    console.log(typesImg)
  return (
    <TypeContainer>
        {types.map(type => (
            <Type>
                <img src={typesImg[type.type.name]} alt={type.type.name} />
                <p>{type.type.name}</p>
            </Type>
        ))}
    </TypeContainer>
  )
}

export default TypesCompound