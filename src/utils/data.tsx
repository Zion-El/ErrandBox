interface LogoProps{
    size?: number
}

export const Logo = ({size} : LogoProps) =>(<img style={{width: `${size}rem`}} src="/svg/ErrandLogo.svg" alt="logo"/>)

export const FooterLinks = [
    {
        name: 'Terms',
        url: '',
    },
    {
        name: 'Privacy',
        url: '',
    },
    {
        name: 'Contact',
        url: '',
    },
]

export const CustomerCardData = [
    {
        imgUrl:'/png/cus1.png',
        logoUrl:'/svg/c1.svg',
        title:'Place Your Errand Requests',
        desc:"Tell us what you need, and we'll handle the rest! When you submit your errand details  we'll match you with the perfect Agent for the job.",
        border:'border-b-2',
        bgColor:'#F4FFFC'
    },
    {
        imgUrl:'/png/cus2.png',
        logoUrl:'/svg/c2.svg',
        title:'Our Agents Take Charge',
        desc:"Sit back and relax while our dedicated Agents spring into action and ensure every item on your list is sourced with care and efficiency.",
        border:'border-t-2',
        bgColor:'#FFF4EF'
    },
    {
        imgUrl:'/png/cus3.png',
        logoUrl:'/svg/c3.svg',
        title:'Receive Your Errands Done with a Smile',
        desc:"Enjoy the convenience of having everything you need without ever leaving your home. It's errand-running made easy!",
        border:'border-r-2',
        bgColor:'#F1F5FF'
    },
]
export const AgentCardData = [
    {
        imgUrl:'/png/cus1.png',
        logoUrl:'/svg/c1.svg',
        title:'Accept Errand Requests',
        desc:"Once you're signed up, you'll receive details for your errands, and you can accept them with a tap of a button.",
        border:'border-l-2',
        bgColor:'#F4FFFC'
    },
    {
        imgUrl:'/png/cus2.png',
        logoUrl:'/svg/c2.svg',
        title:'Run and deliver Errands with Efficiency',
        desc:"Take charge of the errands you've accepted and head to the market with a smile!",
        border:'border-t-2',
        bgColor:'#FFF4EF'
    },
    {
        imgUrl:'/png/cus3.png',
        logoUrl:'/svg/c3.svg',
        title:'Receive your Reward with a smile',
        desc:"After successfully completing each errand, you'll see your efforts pay off directly in your wallet! ",
        border:'border-l-2',
        bgColor:'#F1F5FF'
    },
]