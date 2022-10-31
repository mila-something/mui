import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Header } from "./components/common/header";


const App = () => {
    return (
        <>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
        </>
      
    )
}
export default App;

