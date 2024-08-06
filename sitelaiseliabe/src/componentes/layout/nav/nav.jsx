import style from '../nav/Nav.module.css'

function Nav(){
    return(
        <div>
            <ul class={`nav bg-dark ${style.nav}`}>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#nossaHistoria">Nossa História</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#infoCasamento">Informações Casamento</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Confirmar Presença</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav