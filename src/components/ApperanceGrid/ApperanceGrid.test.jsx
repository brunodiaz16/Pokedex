import { render, screen } from "@testing-library/react";
import ApperanceGridCompund from "./ApperanceGrid.compund";

const mock = {
    front: '"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"',
    fron_shiny: '"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"'
}
describe('ApperanceGrid component', () => {
    test('renders title', () => {
        render(<ApperanceGridCompund sprites={mock} />)
        const title = screen.getByText('Sprites')
        expect(title).toBeInTheDocument();
    })
})