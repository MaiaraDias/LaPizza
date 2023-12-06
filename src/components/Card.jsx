import React,{useState} from "react";
import Bana from "../assets/bana.png"

function Card() {
    return(
        <section>
             <section className="Pizza">
                <h2>Faça seu pedido:</h2>
                </section>
        <section className="section-pizza">
           

            <div className="card">
                <img className="imagem" src={Bana} alt="Pizza bana"/>
          <h4>La cuma</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga esse deleniti sunt labore facere tenetur voluptate! Saepe esse maiores fugit inventore ab accusantium veritatis ullam ipsum magnam, blanditiis, dolorem deserunt!</p>
            <h3>R$ 23</h3>
            <button>Comprar agora</button>
            </div>

            <div className="card">
                <img className="imagem" src={Bana} alt="Pizza bana"/>
          <h4>La cuma</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga esse deleniti sunt labore facere tenetur voluptate! Saepe esse maiores fugit inventore ab accusantium veritatis ullam ipsum magnam, blanditiis, dolorem deserunt!</p>
            <h3>R$ 23</h3>
            <button>Comprar agora</button>
            </div>
        </section>
        </section>
    )
}
export default Card

