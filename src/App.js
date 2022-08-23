import './App.css';
import { Routes, Route } from "react-router-dom";
// import Loader from './components/Loader'
// import focusChart from './pics/focusChart.gif';
import { FaBeer } from 'react-icons/fa';
import Main from './components/Main';

function App() {

  // const [preloader, setPreloader] = useState(true)

  // const [timer, setTimer] = useState(3)

  // const id = useRef(null)

  // const clear = () => {
  //   window.clearInterval(id.current)
  //   setPreloader(false)
  // }

  // useEffect(() => {
  //   id.current = window.setInterval(() => {
  //     setTimer(timer => timer-1)
  //   }, 1000)
  // }, [timer])

  // useEffect(() => {
  //   if (timer <= 0){
  //     clear()
  //   }
  // }, [timer])
  
  return (
    <div className="App bg-[#0d0d0d]">
      {/* { preloader ? 
        <div className='flex justify-center align-center w-full h-full'>
          <img src={focusChart} alt='focus chart' className='w-[90vw] h-[100vh]'></img>
        </div> : */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      {/* } */}
    </div>
  );
}

export default App;
