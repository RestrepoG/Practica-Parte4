import React,{Childrem, useEffect, useState} from "react"
import Cards from "./Cards"
//import Celebridades from '../../helpers/usuarios'

const ListCards = () => {
    const [Celebridades, setCelebridades] = useState([])
    const [Error, setError] = useState(false)
    useEffect(() => {
        const getUsers= async() => {
            try {
                const Res= await fetch("https://randomuser.me/api/?results=50")
                const Data= await Res.json()
                setCelebridades(Data.results)
                setError(false)
            } catch (err){
                setError(true)
               
            }
        }
       getUsers()
    }, [])
    if (Error) {
        return <div className="alert alert-danger" role="alert">
            Error Al Cargar El Api User <a href="https://randomuser.me/" className="alert-link">Verifique Link</a>.
        </div>
    }
    return (
        
        <div className="container">
            <div className="row">
                {Celebridades.map(user => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={user.login.uuid}>
                        <Cards user={user}/>
                    </div>))
                }
            </div>
        </div>
    )
}

export default ListCards
