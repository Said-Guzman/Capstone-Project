import {useState} from "react";
import  {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Link from "./link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import MainLogo from "@/assets/MainLogo.png"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};


const Navbar = ({selectedPage, setSelectedPage}: Props) =>{

const flexBetween = "flex items-center justify-between";
const [isMenuToggled,setIsMenuToggled] = useState<boolean>(false)
const AboveMediumScreen = useMediaQuery("(min-width:1060px)")
 return(
<nav>
<div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
    <div className={`${flexBetween} mx-auto w-5/4 `}>
        <div className={`${flexBetween} w-full gap-16`}>
            <img alt="Logo" src={MainLogo} className="w-"/>
                {AboveMediumScreen ? (<>
                <div className={`${flexBetween} gap-8 text-sm `}>
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page="Health"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page="Articles"
                        selectedPage={selectedPage}  
                        setSelectedPage={setSelectedPage} />
                    <Link page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <p>Sign up</p>
                </div></>): (
                        <button
                        className="rounded-full bg-extra p-2"
                        onClick={ () => setIsMenuToggled( !isMenuToggled)} >
                        <Bars3Icon className="h-6 w-6  text-black" />
                       

                        </button>
                )}
        </div>
    </div>
</div>
</nav>
 )
};


export default Navbar;





















