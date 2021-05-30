import { Link } from 'react-router-dom' //this way it doesn't reload the page - it just "loads the componect"

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
