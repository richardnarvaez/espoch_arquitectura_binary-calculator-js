import React, { Component } from 'react';

import { convertToDecimal, convertOneToOther } from '../../../lib/bCalculator'

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            chan: "0"
        }
    }

    calculate = (event) => {
        event.preventDefault();
        if (this.state.n1 != null) {
            console.log("You are submitting " + this.state.n1 + " hola: " + convertOneToOther(this.state.n1 + "", 10, 2, 0));
            this.setState({chan: convertOneToOther(this.state.n1 + "", 10, 2, 0)})
        }
    }

    inputChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {
        return (
            <div style={{ color: "#fff", textAlign: "center" }}>

                <div style={{ margin: 32 }}>
                    <h1 style={{ fontSize: "2rem" }}>{this.state.chan}</h1>

                    <div className="">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">2</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">3</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">4</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                            <label class="form-check-label" for="inlineRadio4">8</label>
                        </div>


                    </div>
                </div>

                <form className="card" style={{ color: "#fff", textAlign: "left" }} onSubmit={this.calculate}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Numero Original</label>
                        <input onChange={this.inputChange} type="text" name="n1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="101100" />
                        <small id="emailHelp" class="form-text text-muted">Intenta con 101010110101</small>
                    </div>
                    <div className="">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">DEC</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">BIN</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">HEX</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                            <label class="form-check-label" for="inlineRadio4">OCT</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                            <label class="form-check-label" for="inlineRadio5">OTRO</label>
                        </div>


                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }
}
