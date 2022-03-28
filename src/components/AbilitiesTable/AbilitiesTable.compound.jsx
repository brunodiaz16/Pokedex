import React from 'react'
import {TableRow, TableHead} from './AbilitiesTable.style'

function AbilitiesTableCompound({abilities}) {
  return (
    <>
    <TableHead>Abilities</TableHead>
    {abilities.map((ability, i) => (
        <TableRow key={i}>{ability.ability.name}</TableRow>
    ))}
    </>
  )
}

export default AbilitiesTableCompound