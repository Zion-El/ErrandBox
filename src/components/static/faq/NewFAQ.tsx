import React from "react";
import { useState } from "react";
import styles from "./faq.module.css";

interface FaqItem {
	title: string;
	text: string;
}


const faqs: FaqItem[] = [

	{
		title: "What Is ErrandBox?",
		text: "Our platform is designed to streamline the process of connecting individuals with qualified service providers, ensuring a hassle-free experience for our users. By leveraging advanced technology and a comprehensive network of vetted vendors, Errandbox aims to simplify daily tasks and errands, allowing our clients to focus on their priorities while we handle the details with utmost professionalism and efficiency.",
	},
	{
		title: "How Does ErrandBox Work?",
		text: "1. Visit our website ‘’www.errandboxng.com’’ \n 2. Click on the whatsapp icon and you will be directed to whatsapp to begin a conversation with one of our agents \n 3. Name the service you want from errandbox. \n 4. Curate a list and forward to our customer support agent \n 5. Then we locate the nearest agent to your destination. \n 6. An invoice is sent of the total price for the service rendered \n 7. Once payment is confirmed by our team, the agent begins work",
	},
	{
		title: "What Happens During An Errand Process?",
		text: "1. Our Customer Success Team does constant follow ups with the agent designated to a customer from the beginning phase till the completion of service. \n 2. Incases where there are price changes or issues encountered by the agents, our customer success team will be notified to inform our customer to assist them on the next steps to take.",
	},
	{
		title: "Who Is An ErrandBox Agent?",
		text: "An agent on Errandbox is an individual or entity that acts on behalf of another user or business to perform specific tasks or services. They are responsible for executing assigned jobs, and ensuring the completion of tasks according to the specified requirements and guidelines set by the user or customer. Agents play a crucial role in facilitating various operations and services offered by Errandbox.",
	},
	{
		title: "How To Become An ErrandBox Agent?",
		text: "Kindly click on this link and fill the document with accurate information.",
	},
	{
		title: "WHAT HAPPENS WHEN AN ORDER IS MISSING OR AN INCORRECT PRODUCT IS IN THE ORDER ?",
		text: "If you received an incomplete or incorrect order, please immediately contact our customer success agent within an hour of delivery. We&#39;ll get back to you with a resolution as soon as possible.",
	},

];



const NewFaq = () => {
	const [curOpen, SetCurOpen] = useState<number | null>(null);
	return (
		<section className=" px-4 py-20 w-full flex justify-center items-center  ">
			<div className="w-full lg:w-[70%]">
				<div className='border-[#ffb999] border border-l-4 border-b-4 rounded-lg py-[2rem] px-[1.5rem] md:p-[3rem] w-full'>
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
			<p className={styles.icon}>+</p>			
			{/* <p className={styles.icon}>{isOpen ? "-" : "+"}</p>			 */}
			</div>

			<div className={styles.contentBox}>{isOpen && <div>{text}</div>}</div>
		</div>
	);
};
export default NewFaq;
