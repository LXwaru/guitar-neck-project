import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="nav-flex">
                <p><strong>template nav</strong></p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/guitar-neck">Guitar Neck</NavLink>
            </div>
            <hr />
        </>
    )
}

export default Nav

