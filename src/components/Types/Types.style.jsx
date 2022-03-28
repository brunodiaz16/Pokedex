import styled from 'styled-components'


const TypeContainer = styled.div`
    display:flex;
    justify-content: center
`

const Type = styled.div`
    display: flex;
    width: 100%;
    padding: 0 20px;
    & p {
        width:50%;
    }

    & img {
        width:50%;
        max-width: 20px;
        margin-right: 5px;
    }

`

export {TypeContainer, Type}