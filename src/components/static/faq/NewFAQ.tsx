import React from "react";
import { useState } from "react";
import styles from "./faq.module.css";

interface FaqItem {
	title: string;
	text: string;
}


const faqs: FaqItem[] = [

	{
		title: "Can I use the same account on multiple devices?",
		text: "Yes, you can access your TopItupNG account from multiple devices for added convenience.",
	},
	{
		title: "What should I do if I forget my password?",
		text: "You can easily reset your password through the app by following the forgot password link.",
	},
	{
		title: "How can I contact customer support if I have an issue?",
		text: "You can reach our customer support team via phone, email, or through the in-app chat feature.",
	},
	{
		title: "Is there a minimum amount required to add funds to my TopItupNG account?",
		text: "No, there is no minimum amount required to add funds to your TopItupNG account.",
	},

];



const NewFaq = () => {
	const [curOpen, SetCurOpen] = useState<number | null>(null);
	return (
		<section className=" px-4 py-20 w-full flex justify-center items-center ">

			<div className='border-[#ffb999] border border-l-4 border-b-4 rounded-lg py-[2rem] px-[1.5rem] md:p-[3rem]'>
				<div className="relative">
					<img src="/svg/6_stars.svg" alt="star" className="hidden md:block absolute w-16"/>
					<h2 className="text-center text-[#052370] text-[24px] md:text-[36px] font-[600] font-int leading-[30px] md:leading-[44px] mb-12">
						Got questions? We've got answers!
					</h2>					
				</div>

				<div className={styles.accordion}>
					{faqs?.map((el, i) => (
						<AccordionItem
							title={el.title}
							key={el.title}
							numb={i}
							curOpen={curOpen}
							onOpen={SetCurOpen}
							text={el.text}
						/>
					))}
				</div>				
			</div>

		</section>
	);
};

const AccordionItem: React.FC<{
	title: string;
	numb: number;
	text: string;
	curOpen: number | null;
	onOpen: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ title, numb, text, curOpen, onOpen }) => {
	const isOpen = numb === curOpen;

	function handleClick() {
		onOpen(isOpen ? null : numb);
	}
	return (
		<div
			className={`${styles.item} ${isOpen ? styles.open : ""}`}
			onClick={handleClick}
		>
			{/* <p className={styles.number}>{numb < 9 ? `0${numb + 1}` : numb + 1}</p> */}
			<div className={styles.header}>
			<p className={styles.title}>{title}</p>
			<p className={styles.icon}>{isOpen ? "-" : "+"}</p>			
			</div>

			<div className={styles.contentBox}>{isOpen && <div>{text}</div>}</div>
		</div>
	);
};
export default NewFaq;
