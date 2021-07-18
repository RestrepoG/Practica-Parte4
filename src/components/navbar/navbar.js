import { useState } from "react"
const Navbar = () =>{
    const [User, setUser] = useState(null)
    const login = () => {
        setUser({Id:1, Nombre:'Alejandro'})
    }
    const logout = () => {
        setUser(null)
    }
    
    return(
        <nav className="navbar navbar-light bg-dark bg-gradient">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 fs-4 text-white">
                    User: {User ? User.Nombre: 'Usuario No Valido'}
                </span>
                {User ? (
                <button type="button" class="btn btn-outline-light" onClick= {logout}>
                    Cerrar Sesion
                </button>
                ):(
                <button type="button" class="btn btn-outline-light" onClick= {login}>
                    Iniciar Sesion
                </button>
                )}
            </div>
        </nav>
    )
}
//exportar una funcion
export default Navbar