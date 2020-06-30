import React, { Component } from 'react';

import { convertToDecimal, convertOneToOther } from '../../../lib/bCalculator'

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            base: "10",
            chan: "0",
            hex2: "0",
            oct: "0",
            Dec: "0",
            c1: "0",
            c2: "0"

        }
    }

    transform = (event) => {
        event.preventDefault();
        if (this.state.n1 != null) {
            console.log("You are submitting " + this.state.n1 + " hola: " + convertToDecimal(this.state.n1 + "", 16));
            if (this.state.n1 >= 0) {
                this.setState({ chan: convertOneToOther(this.state.n1 + "", 10, 2, 4) })
                this.setState({ hex2: convertOneToOther(this.state.n1 + "", 10, 16, 0) })
                this.setState({ oct: convertOneToOther(this.state.n1 + "", 10, 8, 0) })
            }
            else {
                if (this.state.n1 < 0) {

                }
                else {

                }
            }
        }
    }

    calculate = (event) => {
        event.preventDefault();
        if (this.state.cn1 != null) {
            if (this.state.cn1 >= 0) {
                this.setState({ resultcalSuma: convertOneToOther(this.state.cn1 + "", 10, 2, 0) + " + " + convertOneToOther(this.state.cn2 + "", 10, 2, 0) + " = " + convertOneToOther((parseInt(this.state.cn1) + parseInt(this.state.cn2)) + "", 10, 2, 0) })
                console.log(this.state.cn1 + this.state.cn2);
                this.setState({ resultcalResta: convertOneToOther(this.state.cn1 + "", 10, 2, 0) + " - " + convertOneToOther(this.state.cn2 + "", 10, 2, 0) + " = " + convertOneToOther((this.state.cn1 - this.state.cn2) + "", 10, 2, 0) })
            }
            else {

            }
        }
    }

    inputChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {
        return (
            <div style={{ color: "#fff" }} className="container">


                <div style={{ textAlign: "center", margin: 52 }}>
                    <img style={{ width: 124, height: 124 }} src="https://cimogsys.espoch.edu.ec/idi/public/img/logos/espoch.png" />
                    <h1 className="mt-4">ESCUELA SUPERIOR POLITECNICA DE CHIMBORAZO</h1>
                    <h2>CALCULADORA </h2>
                </div>

                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" style={{ color: "#000" }} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Convertir</button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <div className="row" style={{ margin: 32, textAlign: "right" }}>

                                    <div className="col-6" style={{ color: "#000" }}>

                                        <h7 style={{ fontSize: "2rem" }}>Resultados</h7>
                                        <h1 style={{ fontSize: "2rem" }}>Binario : {this.state.chan}</h1>
                                        <h1 style={{ fontSize: "2rem" }}>Hexadecimal : {this.state.hex2}</h1>
                                        <h1 style={{ fontSize: "2rem" }}>Octal : {this.state.oct}</h1>
                                        <h1 style={{ fontSize: "2rem" }}>C1 : {this.state.c1}</h1>
                                        <h1 style={{ fontSize: "2rem" }}>C2 : {this.state.c2}</h1>

                                    </div>

                                    <div className="col-6">
                                        <form className="card" style={{ textAlign: "left" }} onSubmit={this.transform}>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Numero Original</label>
                                                <input onChange={this.inputChange} type="text" name="n1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                                <small id="emailHelp" class="form-text text-muted">Numero </small>
                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Base</label>
                                                <input onChange={this.inputChange} type="text" name="base" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seleccionar la base" />
                                                <small id="emailHelp" class="form-text text-muted">Por defecto es DECIMAL</small>
                                            </div>


                                            <button type="submit" class="btn btn-primary">Convertir</button>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed btn-light" style={{ color: "#000" }} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Operaciones</button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body" style={{ color: "#000" }}>
                                <form className="card" style={{ color: "#fff", textAlign: "left" }} onSubmit={this.calculate}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Numero Original</label>
                                        <input onChange={this.inputChange} type="text" name="cn1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                        <small id="emailHelp" class="form-text text-muted">Ingrese un numero decimal</small>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Segundo numero</label>
                                        <input onChange={this.inputChange} type="text" name="cn2" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                        <small id="emailHelp" class="form-text text-muted">Ingrese un numero decimal</small>

                                    </div>

                                    <div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Operacion</button>
                                    <div className="mt-4">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Suma</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Resta</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Multiplicacion</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <p style={{ color: "#000" }}>Resultado : {this.state.resultcalSuma}</p>
                                            </div>
                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <p style={{ color: "#000" }}>Resultado : {this.state.resultcalResta}</p>
                                            </div>
                                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> <p style={{ color: "#000" }}>Resultado : {this.state.resultcal}</p></div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}
