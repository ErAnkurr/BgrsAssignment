import React, { useEffect, useState } from 'react'
import CharacterList from './CharacterList';
import Movies from './Movies';
import './Character.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loaderActions } from './store';
import LastMovieDetails from './LastMovieDetails';
import ClipLoader from "react-spinners/ClipLoader";

const Character = () => {
    // const loading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const [characterInfoList, setCharacterInfoList] = useState([]);
    const [filmInfo, setFilmInfo] = useState();
    const [lastMovieInfo, setLastMovieInfo] = useState();

    useEffect(() => {
        fetchCharacter();
    }, [])

    async function fetchCharacter() {
        // dispatch(loaderActions.openloader);
        setLoading(true)
        const response = await fetch('https://swapi.dev/api/people')
        const data = await response.json();

        const transformedCharacterInfo = data.results.map((characterInfo) => {
            return {
                name: characterInfo.name,
                film: characterInfo.films
            }
        })
        setCharacterInfoList(transformedCharacterInfo)
        // dispatch(loaderActions.closeLoader);
        setLoading(false)
    }

    async function fetchFilmData(filmApiList) {
        setLoading(true)
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
        if(filmsInfo.length > 1)
        {
            setLastMovieInfo(filmsInfo[filmsInfo.length-1])
        }
        // dispatch(loaderActions.closeLoader); 
        setLoading(false)               
    }

    const handleSelect = (e) => {
        const filmListAPIForCharacter = characterInfoList.find(item =>
            item.name === e.target.value)
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
            <ClipLoader color={`$red`} loading={loading} size={150} />                
            <section>
                {filmInfo && <Movies movies={filmInfo} />}
            </section>
            <section>
                {lastMovieInfo && <LastMovieDetails lastMovie = {lastMovieInfo}/>}
            </section>
            
        </React.Fragment>
    )
}

export default Character;