import React from 'react'

const CharacterList = (props) => {

    return (
        props.character.map((character) => {
        return <option key={character.name+"id"} value = {character.name}>{character.name}</option>
        })
    )

}

export default CharacterList;