interface FormTagProps{
    title:string;
    desc:string;
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
                <img src="/png/box.png" alt="box" className="absolute" />
                <p className="text-center font-[800] font-Int text-[24px] lg:text-[40px] leading-[40px] text-[#221F20]">Get Started<br/>with <span className="text-[#052370]">ErandBox</span></p>                
            </div>

            <p className="text-center font-[400] font-Int text-[12px] text-[#616161]">Fill the details below to get your errand started.</p>            
        </div>

    </div>
)