interface textProps{
    text: string
}
export const Label = ({ text }:textProps) => {
	return (
		<p className="font-Rob font-[500] text-[#475569] text-[14px]">{text}</p>
	);
};
export const CheckLabel = ({ text }:textProps) => {
	return (
		<label
			// checked
			// for="checkbox"
			className="font-Rob font-[400] text-black text-[12px]"
		>
			{text}
		</label>
	);
};
