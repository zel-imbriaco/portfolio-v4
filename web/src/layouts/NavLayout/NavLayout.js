import {Link, routes} from '@redwoodjs/router'

const NavLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="NavList">
            <li>
              <Link className="NavLinks" to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link className="NavLinks" to={routes.about()}>About</Link>
            </li>
            <li>
              <Link className="NavLinks" to={routes.projects()}>Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    
      <main>{children}</main>
    </div>
  )
}

export default NavLayout
