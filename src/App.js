import React, { Component, createRef } from 'react'

export default class App extends Component {

    state = {
        cardNumber: "",
        cardCVV: "",
        cardName: "",
    }

    cardNumber = createRef();
    cardCVV = createRef();
    cardName = createRef();
    

    componentDidMount() {
        this.cardNumber.current.focus();
    }

    handleValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, () => {
            if(this.state.cardNumber.length === 16){
                this.cardCVV.current.focus();
            }
            if(this.state.cardCVV.length === 3){
                this.cardName.current.focus();
            }
        })
    }

  render() {
    const {cardNumber,cardCVV,cardName} = this.state;
    return (
      <div className='container mt-5'>
        <form>
            <h1 ref={this.title}>Formalar b-n ishlash 3</h1>
            <div className='my-3'>
                <label className='h6' htmlFor="cardNumber">Card Number:</label>
                <input type="number" className='form-control w-50' name='cardNumber' onChange={this.handleValue} id='cardNumber' value={cardNumber} ref={this.cardNumber} />
            </div>
            <div className='my-3'>
                <label className='h6' htmlFor="cardCVV">Card CVV:</label>
                <input type="number" className='form-control w-50' name='cardCVV' onChange={this.handleValue} id='cardCVV' value={cardCVV} ref={this.cardCVV} />
            </div>
            <div className='my-3'>
                <label className='h6' htmlFor="cardName">Card Name:</label>
                <input type="text" className='form-control w-50' name='cardName' onChange={this.handleValue} id='cardName' value={cardName} ref={this.cardName} />
            </div>
            <button className='btn btn-success px-4'>Pay</button>
        </form>
      </div>
    )
  }
}
