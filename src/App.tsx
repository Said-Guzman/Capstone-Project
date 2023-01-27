import { useEffect, useState } from "react"
import Navbar from "./scenes"
import  {SelectedPage} from "@/shared/types"
import Footer from "@/scenes/footer"


function App() {

const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
const [navTop, setNavTop] = useState<boolean>(true)

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0){
      setNavTop(true);
      setSelectedPage(SelectedPage.Home)
    }
    if (window.scrollY !== 0) setNavTop(false)
  }
  window.addEventListener("Scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, []);

return (
    <div className="app">
      <Navbar
      navTop={navTop}
      selectedPage = {selectedPage}
      setSelectedPage = {setSelectedPage} 
      />
      <Footer />
    </div>
  )
}

export default App
