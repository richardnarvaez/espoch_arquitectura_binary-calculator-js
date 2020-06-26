import React, { Component } from 'react';

export default class Home extends Component {

    calculate = (event) => {
        event.preventDefault();
        if (this.state.n1 != null) {
            console.log("You are submitting " + this.state.n1);
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
                <h1>1011001010010101011010</h1>
                <form className="card" style={{ color: "#fff", textAlign: "left" }} onSubmit={this.calculate}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Numero Original</label>
                        <input onChange={this.inputChange} type="text" name="n1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="101100" />
                        <small id="emailHelp" class="form-text text-muted">Intenta con 101010110101</small>
                    </div>
                    <div className="check-select">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Dec</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Hex</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Bin</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Otro</label>
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }
}
