import { lazy, Suspense, useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

const Main = lazy(() => import('./pages/Main'))
const Favorite = lazy(() => import('./pages/Favorite'))
const Search  = lazy(() => import('./pages/Search'))
const Detail = lazy(() => import('./pages/Detail'))


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(649));
  }, [])

  return (
    <>
      <h1 className='border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <div>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray] px-2'/>
          <span>🔍︎</span>
        </div>
      </nav>
      <main className='bg-[grey] pt-[30px] flex flex-wrap gap-[20px] justify-center pb-[20px]'>
        <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path={'/'} element={<Main />}></Route>
          <Route path={'/detail/:pokemonId'} element={<Detail />}></Route>
          <Route path={'/search'} element={<Search />}></Route>
          <Route path={'/favorite'} element={<Favorite />}></Route>
        </Routes>
        </Suspense>

      </main>
    </>
  )
}

export default App
