import React from "react";
import "./Weather.css"
import humidity from "../img/humidity.png"
import temp from "../img/temp.png"
import wind from "../img/wind.png"
import background from "../img/background.png"

export class Weather extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        data : null
    }
  }
  componentDidMount() {
    const url = "http://localhost:4000/weather"
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    if(!this.state.data){
        return <p>cargando...</p>
    }

    return (
        <section>
            <div id = "card">
                <div className="fondo">         
                    <img src={background} alt ="imagen" width="350px" height="420px" className ="fondo-imagen" />            
                    <header>
                        <div className="ciudad">
                            <h1> {this.state.data.name} </h1>
                        </div>
                        <div className="fecha">
                            <p>16 Abril 2021</p>
                        </div>
                        <div className="grado">
                            <p>{this.state.data.main.temp}°</p>
                        </div>
                    </header>
                    <div className="estado">
                        <p>Clima / {this.state.data.weather[0].main}</p>
                    </div>
                </div>
                <div className="descripcion">   
                    <div className="datos">
                        <div className="datos-izquierda">
                            <img src={temp} alt = "icono" width="40px"/>
                            <p>Temperatura</p> 
                        </div>
                        <div>
                            <p> {this.state.data.main.temp} </p>
                        </div>
                    </div>           
                    <div className="datos">
                        <div className="datos-izquierda">
                            <img src={humidity} alt="icono" width="40px"/>
                            <p>Humedad</p> 
                        </div>
                        <div>
                            <p> {this.state.data.main.humidity}% </p>
                        </div>
                    </div>            
                    <div className="datos">
                        <div className="datos-izquierda">
                            <img src={wind} alt = "icono" width="40px"/>
                            <p>Velocidad Viento</p> 
                        </div>
                        <div>
                            <p> {this.state.data.wind.speed}m/s </p>
                        </div>
                    </div>                                                                         
                </div>
            </div>
        </section>
      
    )
  }
}