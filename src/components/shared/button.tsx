interface BasicButtonProps{
    title: string;
    style? : string
    bgColor?: string
    textColor?: string
    textSize?:string
    textWeight?:string
    px?:string
    py?:string
    inactive?:boolean
	radius?:string
}

export const BasicButton = ({title, style, bgColor, textColor, textSize, textWeight, px, py, radius}: BasicButtonProps) => (
<button className={`${style} font-Int w-full
${bgColor? bgColor : 'bg-[#052370]'}
${textColor? textColor : 'text-[#fff]'}
${textWeight? textColor : 'font-[500]'}
${textSize? {textSize} : 'text-[12px] md:text-[16px]'}
${px? {px} : 'px-6'}
${py? {py} : 'py-2'}
${radius? {radius} : 'rounded-lg'}
hover:shadow-md transition-all ease-in-out duration-500 
`}

>{title}
</button>)


export const AuthButton = ({ title, inactive }: BasicButtonProps) => {
	return (
		<button
			disabled={inactive}
			className={`w-[350px] ${
				inactive ? "bg-[#919191] text-[#DADADA]" : "bg-[#052370] text-white"
			}  p-[10px] rounded-lg font-[500] font-Rob text-[16px]`}
			type="submit"
		>
			{title}
		</button>
	);
};