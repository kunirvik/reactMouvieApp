import {Link} from 'react-router-dom'

export default function NotFoundPage() {
    return(
        <div><h1>not found!</h1>
        <Link to="/" >back to home page!</Link></div>
    )
}