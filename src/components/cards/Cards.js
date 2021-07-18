import { bottom } from "@popperjs/core"
import { useState } from "react"

const Cards = ({user}) => {
    const {name, login, picture}=user
    const [Color, setColor]= useState(true)
    return (

        <div className="card">
            <img src={picture.large} className="card-img-top" alt={login.username}/>
            <div className="card-body">
                <h5 className="card-title">{name.first} {name.last}</h5>
                {Color ? (
                    <buttom 
                    className= 'btn btn-primary'
                    onClick={() => setColor(!Color)}>
                            Segir
                    </buttom>)
                :(
                    <buttom 
                    className= 'btn btn-lyght'
                    onClick={() => setColor(!Color)}>
                            Siguiendo
                    </buttom>)
                }
                {/* <buttom 
                className= {Color ? 'btn btn-primary':'btn btn-lyght'}
                onClick={() => setColor(!Color)}>
                    Segir
                </buttom> */}
            </div>
        </div>
    )
}

export default Cards
