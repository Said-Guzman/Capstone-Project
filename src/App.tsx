import { useState } from "react"
import Navbar from "./scenes"
import  {SelectedPage} from "@/shared/types"

function App() {

const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)


return (
    <div className="app bg-extra2">
      <Navbar
      selectedPage = {selectedPage}
      setSelectedPage = {setSelectedPage} 
      />
    </div>
  )
}

export default App
