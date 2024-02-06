
import { HashLink as Link } from 'react-router-hash-link';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";



function CtaContact() {
    return (
        <div className="cta w-5/6 md:4/5 lg:w-4/5 xl:w-2/3 mx-auto mt-8 rounded-3xl shadow-lg bg-[#45008B] dark:bg-gray-800 poppins">
            <div className="flex flex-col justify-between sm:flex-row mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 z-20">
                
<div class=" p-4 py-6">
    <div class="flex flex-col items-center justify-center">
        <RiTeamFill className="w-24 h-24 fill-white"/>
        <p class="mt-4 mb-4 text-xl font-medium text-white">
            Expertise 
        </p>
    </div>
</div>

<div class=" p-4 py-6">
    <div class="flex flex-col items-center justify-center">
        <TfiHeadphoneAlt className="w-24 h-24 fill-white"/>
        <p class="mt-4 mb-4 text-xl font-medium text-white">
            Service client réactif
        </p>
    </div>
</div>

<div class=" p-4 py-6">
    <div class="flex flex-col items-center justify-center">
        <IoMdCheckmarkCircleOutline className="w-24 h-24 fill-white"/>
        <p class="mt-4 mb-4 text-xl font-medium text-white">
            Satisfaction garantie
        </p>
    </div>
</div>

            </div>
        </div>
    )
}

export default CtaContact;