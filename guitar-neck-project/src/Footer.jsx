import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <hr />
                <p>this is a footer</p>
                <div className="footer-flex">
                    <Link to="/" exact="true">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/guitar-neck">Guitar Neck</Link>
                </div>
            </div>
        </>
    )
}

export default Footer