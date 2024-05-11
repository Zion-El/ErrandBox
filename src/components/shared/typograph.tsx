interface textProps{
    text: string
}
export const Label = ({ text }:textProps) => {
	return (
		<p className="font-Rob font-[500] mb-2 text-[#00] text-[14px]">{text}</p>
	);
};
export const CheckLabel = ({ text }:textProps) => {
	return (
		<label
			// checked
			// for="checkbox"
			className="font-Rob font-[500] text-black text-[12px] mb-2"
		>
			{text}
		</label>
	);
};
