import './App.css'
import {Route, Routes} from "react-router";
import DashBoard from "./pages/DashBoard.tsx";
import Description from "./pages/Description.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import Links from "./pages/Links.tsx";
import QrCode from "./pages/QrCode.tsx";


function App() {
  return (
    <>
      <Routes>
        <Route path={"/dashboard"} element={<DashBoard/>}/>
        <Route path={"/"} element={<DashBoard/>}/>
        <Route path={"/links"} element={<Links/>}/>
        <Route path={"/qr-code"} element={<QrCode/>}/>
        <Route path={"/description/:id"} element={<Description/>}/>
        <Route path={"/settings"} element={<SettingsPage/>}/>
      </Routes>
    </>
  )
}

export default App
