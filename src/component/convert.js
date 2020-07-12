import React from 'react';
import './app.css';
/*ini adalah bagian dari konversi jam detik*/
class CurrencyTime extends React.Component {
  _handleChange = (e) => {
    this.props.onChangeCurrency(e.target.value);
  }

  render() {
    const {curLabel, currency} = this.props;

    return (
      <>
      <label>
        {curLabel==='menit' ? 'menit' : 'detik'}:
        <input type='number' value={currency} onChange = {this._handleChange} />
      </label>
      <br />
      </>
    )
  }
}

class Curency extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menit :0,
      detik :0
    }
  }
 
  

  onSubmit=(e) => {
    e.preventDefault();
    alert(`${this.state.menit} [menit] setara dengan ${this.state.detik} [detik]`);
  }

  onChangeMenit = (menit) => {
    let detik = (parseInt(menit)*60).toString();
    this.setState({menit, detik})
  }

  onChangeDetik = (detik) => {
    let menit = (parseInt(detik)/60).toString();
    this.setState({menit, detik})
  }

  render() {
    const {menit, detik} = this.state;
  return (
    <div className="App">
      <form onSubmit={this.onSubmit} >
        <CurrencyTime curLabel='menit ' currency={menit} onChangeCurrency = {this.onChangeMenit} />
        <CurrencyTime curLabel='detik ' currency={detik} onChangeCurrency = {this.onChangeDetik} />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}
}
export default Curency;