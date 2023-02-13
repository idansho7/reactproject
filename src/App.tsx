/* eslint-disable @typescript-eslint/no-unused-vars */

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './components/home';
import SignUp from './components/signUp';
import BusinessSignUp from './components/businessSignUp';
import SignIn from './components/signIn';
import About from './components/about';
import { createContext, useEffect, useRef, useState } from 'react';
import StartNavbar from './components/startNavbar';
import LogNavbar from './components/logNavbar';
import AddCard from './components/addCard';
import { checkLog } from './services/log';
import Footer from './components/footer';
import MyCards from './components/myCards';
import AllCards from './components/allCards';


const themes = {
  light: {
    color: "#212529",
    background: "white",
    btn: "orange",
    hover:"#00000033"
  },
  dark: {
    color: "white",
    background: "#212529",
    btn: "purple",
    hover:"#ffffff33"
  }
}

export const SiteTheme = createContext(themes.light);
function App() {
  useEffect(() => {
    checkLog().then((res) => { setLogged(res.data.isLog); setBis(res.data.isBis); setQuan(res.data.qua) }).catch((err) => console.log(err));
  })
  let [quan, setQuan] = useState<number>(0);
  const [darkMod, setDarkMod] = useState<boolean>(false);
  let [logged, setLogged] = useState<boolean>(false);
  let [bis, setBis] = useState<boolean>(false);
  let [newC,setNewC] = useState<boolean>(false);


  useEffect(() => {
  }, [quan, logged])
  return <>
    <Router>
      <ToastContainer />

      <SiteTheme.Provider value={darkMod ? themes.dark : themes.light}>
        {logged ?
          (
            <>
              <LogNavbar darkMod={darkMod} setDarkMod={setDarkMod} setBis={setBis} setLogged={setLogged} bis={bis} quan={quan} />
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='/add-card' element={<AddCard setNewC={setNewC} quan={quan} setQuan={setQuan} />} />
                <Route path='/my-cards' element={<MyCards setNewC={setNewC} newC={newC} setQuan={setQuan} quan={quan} />} />
                <Route path='all-cards' element={<AllCards />} />
              </Routes>
            </>
          )
          :
          (
            <>
              <StartNavbar darkMod={darkMod} setDarkMod={setDarkMod} />
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/business-signup' element={<BusinessSignUp />} />
                <Route path='/signin' element={<SignIn quan={quan} setQuan={setQuan} setBis={setBis} setLogged={setLogged} />} />
              </Routes>
            </>
          )}
        <Footer />
      </SiteTheme.Provider>

    </Router>
  </>

}

export default App;
