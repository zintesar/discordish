import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from "react-icons/fa";


const sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col
                        bg-gray-100 text-gray-900 shadow-lg
                        dark:bg-gray-900 dark:text-white">

            <SideBarIcon icon={<FaFire size={28}></FaFire>}></SideBarIcon>
            <SideBarIcon icon={<BsPlus size={28}></BsPlus>}></SideBarIcon>
            <SideBarIcon icon={<BsFillLightningFill size={28}></BsFillLightningFill>}></SideBarIcon>
            <SideBarIcon icon={<FaPoo size={28}></FaPoo>}></SideBarIcon>

        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => {
    return (
        <div className='sidebar-icon group'>
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}


export default sidebar