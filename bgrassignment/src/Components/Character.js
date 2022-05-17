import React, { useEffect, useState } from 'react'
import CharacterList from './CharacterList';
import Movies from './Movies';
import './Character.module.css'

const Character = () => {
    // const [isLoading, setIsLoading] = useState(false)
    const [characterInfoList, setCharacterInfoList] = useState([]);
    const [filmInfo, setFilmInfo] = useState()

    useEffect(() => {
        fetchCharacter();
    }, [])

    async function fetchCharacter() {
        const response = await fetch('https://swapi.dev/api/people')
        const data = await response.json();

        const transformedCharacterInfo = data.results.map((characterInfo) => {

            return {
                name: characterInfo.name,
                film: characterInfo.films
            }
        })
        setCharacterInfoList(transformedCharacterInfo)
    }

    async function fetchFilmData(filmApiList) {
        console.log(filmApiList)
        const filmsInfo = await Promise.all(
            filmApiList.film.map(async (filmApi) => {
                const response = await fetch(filmApi)
                const filmData = await response.json()

                const filmInfo = {
                    name: filmData.title,
                    releaseDate: filmData.release_date
                }

                return filmInfo
            })   
        )
        setFilmInfo(filmsInfo)
    }

    // const fetchFilmList = (characterName) => {
    //     const filmListForCharacter = characterInfoList.find(item => item.name === characterName)
    //     return filmListForCharacter.film
    // }



    const handleSelect = (e) => {
        // const filmApiList = fetchFilmList(e.target.value)

        const filmListAPIForCharacter = characterInfoList.find(item => item.name === e.target.value)
        fetchFilmData(filmListAPIForCharacter)


    }
    return (
        <React.Fragment>
            <section>
                <h2>List of Movies</h2>
                <select className="form-select" aria-label="Default select example"
                    onChange={handleSelect}>
                    {characterInfoList && <CharacterList character={characterInfoList} />}
                </select>
            </section>
            <section>
            {filmInfo && <Movies movies={filmInfo}/>} 
            </section>

        </React.Fragment>
    )
}

export default Character;