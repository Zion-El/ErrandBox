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