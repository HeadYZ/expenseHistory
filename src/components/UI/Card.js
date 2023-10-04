import './Card.css'

export default function Card(props) {
	const className = `${props.className} card`

	return <div className={className}>{props.children}</div>
}
