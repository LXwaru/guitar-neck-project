import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="nav-flex">
                <p><strong>template nav</strong></p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/GuitarNeckNotes">Guitar Neck - Notes</NavLink>
                <NavLink to="/GuitarNeckIntervals">Guitar Neck - Intervals</NavLink>
                <NavLink to="/GuitarNeckTriads">Guitar Neck - Triads</NavLink>
            </div>
            <hr />
        </>
    )
}

export default Nav

