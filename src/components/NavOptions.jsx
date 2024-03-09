import "./NavOptions.css"

export default function NavOptions({link, text}) {
    return (
        <li className="NavOptions"><a href={link}>{text.toUpperCase()}</a></li>
    )
}