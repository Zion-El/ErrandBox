import { Link } from "react-router-dom";
import { BasicButton } from "./button";

interface FormTagProps{
    title:string;
    desc:string;
}

export interface agentCardProps{
    desc: string;
    title: string;
    logoUrl: string;
    imgUrl: string; 
    border: string; 
    bgColor: string; 
  }

export const FormTag = ({title, desc}:FormTagProps) =>(
    <div className="w-full p-6 lg:p-10 bg-[#FFF7E9]">
        <p className="text-center font-[500] font-Int text-[20px] text-[#221F20]">{title}</p>
        <p className="text-center font-[400] font-Int text-[12px] text-[#616161]">{desc}</p>
    </div>
)
export const FormHero = () =>(
    <div className="w-full min-h-[70vh] p-10 flex justify-center items-center">
        <div className="space-y-8">
            <div className="relative">
                <img src="/png/box.png" alt="box" className="absolute top-[-30px] w-[500px] h-[150px]" />
                <p className="text-center font-[800] font-Int text-[32px] lg:text-[40px] leading-[45px] text-[#221F20]">Get Started<br/>with <span className="text-[#052370]">ErandBox</span></p>                
            </div>

            <p className="text-center font-[400] font-Int text-[12px] text-[#616161]">Fill the details below to get your errand started.</p>            
        </div>

    </div>
)

export const FlipCard = ({title, desc, logoUrl, imgUrl, border, bgColor}: agentCardProps) =>{
    return(
        <div style={{backgroundColor:bgColor}} className={`${border} flex flex-col justify-between gap-8 min-w-[300px] lg:w-[30%] border-[#FE5000] rounded-[6px] p-4`}>
            <div className=' flex justify-between items-center'>
                <p className='text-[#1B1A1A] text-[20px] lg:text-[22px] w-[80%] font-Int font-[600] leading-[28px]'>{title}</p>
                <img src={logoUrl} className='w-[38px] h-[38px]' alt="aiit" />
            </div>

            <p className='text-[#1B1A1A] text-[14px] font-Int font-[500]'>{desc}</p>

            <img className='w-full rounded-[10px] h-[170px]' src={imgUrl} alt="aiit" />

            <div className="w-1/2">
                <Link to={'/'}><BasicButton style=' border border-[#616161]' px="px-3" radius="rounded-[10px]" bgColor="transparent" textColor="#051235" title='Become an agent >'/></Link>                
            </div>


        </div>
    )
}