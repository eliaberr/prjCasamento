import style from '../nav/Nav.module.css'

function Nav(){
    return(
        <div>
            <ul className={` d-none d-sm-flex nav bg-dark ${style.nav}`}>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#nossaHistoria">Nossa História</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#infoCasamento">Informações Casamento</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Confirmar Presença</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav