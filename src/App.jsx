import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes } from 'react-router-dom'
import Favorite from './pages/Favorite'


function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [])

  return (
    <>
      <h1 className='text-[40px]'>포켓몬 도감</h1>
      <nav className='flex gap-[10px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'detail'}>상세정보</Link>
        <Link to={'search'}>검색</Link>
        <Link to={'favorite'}>찜목록</Link>
      </nav>
      <main className='flex justify-center'>
      <Routes>
        <Route path={'/'} element={<Main />}></Route>
        <Route path={'/detail/:pokemon'} element={<Detail />}></Route>
        <Route path={'/search'} element={<Search />}></Route>
        <Route path={'/search'} element={<Favorite />}></Route>
      </Routes>

      </main>
    </>
  )
}

export default App
