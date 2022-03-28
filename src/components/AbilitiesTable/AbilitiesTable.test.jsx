import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers'
import { render, screen } from '@testing-library/react'
import React from 'react'

import AbilitiesTable from './AbilitiesTable.compound'


const mock = [
    {ability: {name: 'ability1'}},
    {ability: {name: 'ability2'}},
    {ability: {name: 'ability3'}},
]

describe('AbilitiesTable Component', () => {

    const abilities = ['ability1','ability2','ability3']
    test('renders table with rows', () => {
        render(<AbilitiesTable abilities={mock}/>)
        const titleTable = screen.getByText('Abilities');
        expect(titleTable).toBeInTheDocument()
        for( let ability of abilities) {
            expect(screen.getByText(ability)).toBeInTheDocument()
        }

    })

})