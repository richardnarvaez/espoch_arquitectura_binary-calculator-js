import React, { Component } from 'react';

import { convertToDecimal, convertOneToOther, calcC1C2 } from '../../../lib/bCalculator'

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            selectedOption: "op1",
            base: "10",
            chan: "00100100",
            hex2: "24",
            oct: "44",
            Dec: "0",
            c1: "0",
            c2: "0",
            cm1: "0",
            cm2: "0",
            ndecim: "0",
            resultcalSRBin: "00000000",
            resultcalSRBin_2: "00000000",
            resultcalSRC1: "00000000",
            resultcalSRC1_2: "00000000",
            resultcalSRC2: "00000000",
            resultcalSRC2_2: "00000000",
            resultcalSR: "-------",
            resultcalSR_2: "-------",
            rang: "[0, 0]"

        }
    }

    transform = (event) => {
        event.preventDefault();
        let base = this.state.base != "" ? this.state.base : 10
        let ndecim = this.state.ndecim != "" ? this.state.ndecim : 0

        if (this.state.n1 != null) {
            if (this.state.n1 >= 0) {
                let binn = convertOneToOther(this.state.n1 + "", base, 2, ndecim);
                this.setState({
                    chan: binn,
                    hex2: convertOneToOther(this.state.n1 + "", base, 16, ndecim),
                    oct: convertOneToOther(this.state.n1 + "", base, 8, ndecim),
                    cm1: binn,
                    cm2: binn,
                })

            } else if (this.state.n1 < 0) {
                let cmm = calcC1C2(this.state.n1)
                this.setState({
                    chan: "Syntax Error",
                    hex2: "Syntax Error",
                    oct: "Syntax Error",
                    cm1: cmm.com1,
                    cm2: cmm.com2,
                })
            }
        }

    }

    calculate = (event) => {
        event.preventDefault();

        // if (this.state.cn1 != null) {
        //     if (this.state.cn1 >= 0) {
        //         this.setState({ resultcalSuma: convertOneToOther(this.state.cn1 + "", 10, 2, 0) + " + " + convertOneToOther(this.state.cn2 + "", 10, 2, 0) + " = " + convertOneToOther((parseInt(this.state.cn1) + parseInt(this.state.cn2)) + "", 10, 2, 0) })

        //         this.setState({ resultcalResta: convertOneToOther(this.state.cn1 + "", 10, 2, 0) + " - " + convertOneToOther(this.state.cn2 + "", 10, 2, 0) + " = " + convertOneToOther((this.state.cn1 - this.state.cn2) + "", 10, 2, 0) })
        //     }
        //     else {

        //     }
        // }
    }

    suma = () => {
        let n1 = calcC1C2(this.state.cn1);
        let n2 = calcC1C2(this.state.cn2);
        let res = parseInt(this.state.cn1) + parseInt(this.state.cn2)
        let res_com = convertOneToOther(Math.abs(res) + "", 10, 2, 0)

        this.setState({
            rang: n1.rang + " | " + n2.rang,
            resultcalSRBin: n1.binario,
            resultcalSRBin_2: n2.binario,
            resultcalSRC1: n1.com1,
            resultcalSRC1_2: n2.com1,
            resultcalSRC2: n1.com2,
            resultcalSRC2_2: n2.com2,
            resultcalSR: res < 0 ? "-" + res_com : res_com,
            resultcalSR_2: res
        })
    }

    resta = () => {
        console.log(this.state.cn1, this.state.cn2)
        let n1 = calcC1C2(this.state.cn1);
        let n2 = calcC1C2(this.state.cn2);
        let res = parseInt(this.state.cn1) - parseInt(this.state.cn2)
        let res_com = convertOneToOther(Math.abs(res) + "", 10, 2, 0)

        this.setState({
            rang: n1.rang + " | " + n2.rang,
            resultcalSRBin: n1.binario,
            resultcalSRBin_2: n2.binario,
            resultcalSRC1: n1.com1,
            resultcalSRC1_2: n2.com1,
            resultcalSRC2: n1.com2,
            resultcalSRC2_2: n2.com2,
            resultcalSR: res < 0 ? "-" + res_com : res_com,
            resultcalSR_2: res
        })

    }

    inputChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    radioChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }



    render() {
        return (
            <div style={{
                height: "100vh",
                overflowY: "scroll",
                overflowX: "hidden"
            }}>
                <div style={{ color: "#fff" }} className="container">

                    <div style={{ margin: 16, display: "flex", alignItems: "center", textAlign: "center", flexDirection: "column" }}>
                        <img style={{ width: 42, height: 42, marginTop: 16 }} src="https://cimogsys.espoch.edu.ec/idi/public/img/logos/espoch.png" />
                        <div style={{ marginLeft: 8 }}>
                            <h2 className="mt-3" style={{ fontWeight: "bold" }}>ESCUELA SUPERIOR POLITECNICA DE CHIMBORAZO</h2>
                            <h2>Arquitectura de computadores 4A</h2>
                        </div>
                    </div>

                    <div className="resultados" style={{ padding: "32px 0 " }}>


                        <div className="d-flex" style={{ alignItems: "flex-end", justifyContent: "center" }}>
                            {{
                                'op1': <><h1 style={{ fontSize: "3rem" }}>{this.state.chan}</h1> <p>BIN</p></>,
                                'op2': <><h1 style={{ fontSize: "3rem" }}>{this.state.hex2}</h1><p>HEX</p></>,
                                'op3': <><h1 style={{ fontSize: "3rem" }}>{this.state.oct}</h1><p>OCT</p></>,
                                'op4': <><h1 style={{ fontSize: "3rem" }}>{this.state.cm1}</h1><p>CM1</p></>,
                                'op5': <><h1 style={{ fontSize: "3rem" }}>{this.state.cm2}</h1><p>CM2</p></>

                            }[this.state.selectedOption]
                            }
                        </div>
                        {/* <div className="d-flex" style={{ alignItems: "flex-end", justifyContent: "flex-end" }}><h1 style={{ fontSize: "2rem" }}></div>
                        <div className="d-flex" style={{ alignItems: "flex-end", justifyContent: "flex-end" }}><h1 style={{ fontSize: "2rem" }}></div>
                        <div className="d-flex" style={{ alignItems: "flex-end", justifyContent: "flex-end" }}><h1 style={{ fontSize: "2rem" }}></p></div>
                        <div className="d-flex" style={{ alignItems: "flex-end", justifyContent: "flex-end" }}><h1 style={{ fontSize: "2rem" }}>/p></div> */}

                    </div>

                    <div className="accordion" id="accordionExample" style={{
                        background: "#fff", marginBottom: "10rem", borderRadius: 12,
                        boxShadow: "0 1px 5px #00000059",
                        marginTop: 16
                    }} >
                        <div>
                            <div className="card-header" id="headingOne">
                                <button className="btn btn-link btn-block text-left collapsed" style={{ color: "#000", display: "flex", alignItems: "center", justifyContent: "space-between" }} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className="d-flex" style={{ display: "flex", alignItems: "center" }}>
                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" />
                                        </svg>
                                        <div style={{
                                            marginLeft: 16,
                                            maxWidth: 200,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            <p style={{ fontWeight: "bold", textDecoration: "none" }}>Convertir</p>
                                            <p>Realiza conversiones a distintas bases</p>
                                        </div>
                                    </div>

                                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>

                                </button>
                            </div>

                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">

                                <form style={{ textAlign: "left", color: "#000", padding: 16 }} onSubmit={this.transform}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Numero Original</label>
                                        <input onChange={this.inputChange} type="text" name="n1" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                        <small id="emailHelp" className="form-text text-muted">Numero </small>
                                    </div>

                                    <div style={{ padding: "16px 0" }}>
                                        <div class="form-check form-check-inline">
                                            <input checked={this.state.selectedOption === 'op1'} onChange={this.radioChange} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="op1" />
                                            <label class="form-check-label" for="inlineRadio1">BIN</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input checked={this.state.selectedOption === 'op2'} onChange={this.radioChange} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="op2" />
                                            <label class="form-check-label" for="inlineRadio2">HEX</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input checked={this.state.selectedOption === 'op3'} onChange={this.radioChange} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="op3" />
                                            <label class="form-check-label" for="inlineRadio3">OCT</label>
                                        </div>

                                        <div class="form-check form-check-inline">
                                            <input hecked={this.state.selectedOption === 'op4'} onChange={this.radioChange} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="op4" />
                                            <label class="form-check-label" for="inlineRadio4">CM1</label>
                                        </div>

                                        <div class="form-check form-check-inline">
                                            <input hecked={this.state.selectedOption === 'op5'} onChange={this.radioChange} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="op5" />
                                            <label class="form-check-label" for="inlineRadio5">CM2</label>
                                        </div>
                                    </div>


                                    {/* <div className="d-flex" >
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Base</label>
                                            <input onChange={this.inputChange} type="text" name="base" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seleccionar la base" />
                                            <small id="emailHelp" className="form-text text-muted">Por defecto es DECIMAL</small>
                                        </div>
                                        <div className="form-group" style={{ marginLeft: 16}}>
                                            <label htmlFor="exampleInputEmail1">Num Decimales</label>
                                            <input onChange={this.inputChange} type="text" name="ndecim" className="form-control" placeholder="Seleccionar el numero de decimales" />
                                            <small id="emailHelp" className="form-text text-muted">Por defecto es 0</small>
                                        </div>
                                    </div> */}

                                    <button type="submit" className="btn btn-primary">Convertir</button>

                                </form>

                            </div>
                        </div>

                        <div>
                            <div className="card-header" id="headingTwo">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{ color: "#000", display: "flex", alignItems: "center", justifyContent: "space-between" }} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="d-flex" style={{ alignItems: "center" }}>
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M9,2H4A2,2 0 0,0 2,4V9A2,2 0 0,0 4,11H9A2,2 0 0,0 11,9V4A2,2 0 0,0 9,2M9,7H4V6H9V7M20,13H15A2,2 0 0,0 13,15V20A2,2 0 0,0 15,22H20A2,2 0 0,0 22,20V15A2,2 0 0,0 20,13M20,19H15V18H20V19M20,17H15V16H20V17M20,2H15A2,2 0 0,0 13,4V9A2,2 0 0,0 15,11H20A2,2 0 0,0 22,9V4A2,2 0 0,0 20,2M20,7H18V9H17V7H15V6H17V4H18V6H20V7M9,13H4A2,2 0 0,0 2,15V20A2,2 0 0,0 4,22H9A2,2 0 0,0 11,20V15A2,2 0 0,0 9,13M8.62,18.91L7.91,19.62L6.5,18.21L5.09,19.62L4.38,18.91L5.79,17.5L4.38,16.09L5.09,15.38L6.5,16.79L7.91,15.38L8.62,16.09L7.21,17.5L8.62,18.91Z" />
                                            </svg>
                                            <div className="flex-grow-1" style={{
                                                marginLeft: 16,
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            }}>
                                                <p style={{ fontWeight: "bold", textDecoration: "none" }}>Operaciones</p>
                                                <p>Realiza sumas, restas con las bases</p>
                                            </div>
                                        </div>

                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </button>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body" style={{ color: "#000" }}>
                                    <p style={{ color: "#ccc" }}>#0 Rango</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 4 }}> {this.state.rang}</p>

                                    <p style={{ color: "#ccc" }}>#1 Binarios</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 4 }}> {this.state.resultcalSRBin}</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 16 }}> {this.state.resultcalSRBin_2}</p>

                                    <p style={{ color: "#ccc" }}>#2  Complemento a 1</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 4 }}>{this.state.resultcalSRC1}</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 16 }}> {this.state.resultcalSRC1_2}</p>

                                    <p style={{ color: "#ccc" }}>#3  Complemento a 2</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 4 }}>{this.state.resultcalSRC2}</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 16 }}> {this.state.resultcalSRC2_2}</p>

                                    <p style={{ color: "#ccc" }}>#4  Resultado</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 4 }}>{this.state.resultcalSR}</p>
                                    <p style={{ color: "#000", textAlign: "right", fontWeight: "bold", paddingBottom: 16 }}>{this.state.resultcalSR_2}</p>

                                    <div style={{ color: "#fff", textAlign: "left" }} onSubmit={this.calculate}>
                                        <div className="form-group">
                                            <input style={{ textAlign: "right" }} onChange={this.inputChange} type="text" name="cn1" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                            <small id="emailHelp" className="form-text text-muted">Ingrese un numero decimal</small>
                                        </div>

                                        <div className="form-group">
                                            <input style={{ textAlign: "right" }} onChange={this.inputChange} type="text" name="cn2" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                            <small id="emailHelp" className="form-text text-muted">Ingrese un numero decimal</small>

                                        </div>

                                        <div>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <button style={{
                                                padding: "4px 22px",
                                                border: "none",
                                                borderRadius: 1000,
                                                boxShadow: "0 1px 4px #0000001a"
                                            }} onClick={this.suma} className="btn btn-primary">Suma</button>

                                            <button style={{
                                                padding: "4px 22px",
                                                marginLeft: 8,
                                                border: "none",
                                                borderRadius: 1000,
                                                boxShadow: "0 1px 4px #0000001a"
                                            }} onClick={this.resta} className="btn btn-primary">Resta</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{ color: "#000", display: "flex", alignItems: "center", justifyContent: "space-between" }} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className="d-flex" style={{ display: "flex", alignItems: "center" }}>
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                            </svg>
                                            <div style={{
                                                marginLeft: 16,
                                                maxWidth: 200,
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            }}>
                                                <p style={{ fontWeight: "bold", textDecoration: "none" }}>
                                                    Informacion</p>
                                                <p>Version, desarrolladores y mas</p>
                                            </div>
                                        </div>

                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div style={{ color: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, flexDirection: "column" }}>

                                    <p>v0.1.2</p>
                                    <p>Riobamba, Ecuador</p>

                                    <p className="mt-3" style={{ color: "#a2a2a2" }}>Anderson Tufiño</p>
                                    <p style={{ color: "#a2a2a2" }}>Wilson Lluilema</p>
                                    <p style={{ color: "#a2a2a2" }}>Richard Vinueza</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                {/* <ul className="nav bottomMenu justify-content-around align-items-center" style={{ background: "#fff", position: "absolute", bottom: 0, right: 0, left: 0 }}>
                    <li className="nav-item">
                        <div onClick={() => {

                        }} className={"nav-link btMenu bm1" + (this.props.item === 0 ? " active" : "")}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                            </svg>
                            <p>Explorar</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div onClick={() => {

                            this.send.bind(this, "f1")
                        }} className={"nav-link btMenu bm2" + (this.props.item === 1 ? " active" : "")}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                            </svg>
                            <p>Feed</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div onClick={() => {

                        }} className={"nav-link btMenu bm3" + (this.props.item === 2 ? " active" : "")}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.65,2.85L19.26,6.71L22.77,8.5L21,12L22.78,15.5L19.24,17.29L18.63,21.15L14.74,20.54L11.97,23.3L9.19,20.5L5.33,21.14L4.71,17.25L1.22,15.47L3,11.97L1.23,8.5L4.74,6.69L5.35,2.86L9.22,3.5L12,0.69L14.77,3.46L18.65,2.85M9.5,7A1.5,1.5 0 0,0 8,8.5A1.5,1.5 0 0,0 9.5,10A1.5,1.5 0 0,0 11,8.5A1.5,1.5 0 0,0 9.5,7M14.5,14A1.5,1.5 0 0,0 13,15.5A1.5,1.5 0 0,0 14.5,17A1.5,1.5 0 0,0 16,15.5A1.5,1.5 0 0,0 14.5,14M8.41,17L17,8.41L15.59,7L7,15.59L8.41,17Z" />
                            </svg>
                            <p>List</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div onClick={() => {

                            this.send.bind(this, "f3")
                        }} className={"nav-link btMenu bm4" + (this.props.item === 3 ? " active" : "")}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M.75 7.5H10.5L11.25 9H1.5L.75 7.5M1.75 10.5H11.5L12.25 12H2.5L1.75 10.5M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M8 18.5C8.83 18.5 9.5 17.83 9.5 17C9.5 16.17 8.83 15.5 8 15.5C7.17 15.5 6.5 16.17 6.5 17C6.5 17.83 7.17 18.5 8 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H11C11 18.66 9.65 20 8 20C6.34 20 5 18.66 5 17H3V13.5 13.5H5V15H5.76C6.31 14.39 7.11 14 8 14C8.89 14 9.69 14.39 10.24 15H15V6H3V6C3 4.89 3.89 4 5 4H17V8H20Z" />
                            </svg>
                            <p>Challenges</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div onClick={() => {
                            this.send.bind(this, "f4")
                        }} className={"nav-link btMenu bm5" + (this.props.item === 4 ? " active" : "")}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18" />
                            </svg>
                            <p>Profile</p>
                        </div>
                    </li>
                </ul> */}

            </div >
        );
    }
}
