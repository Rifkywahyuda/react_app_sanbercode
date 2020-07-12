import React, { Component } from 'react';
import  { connect } from 'react-redux';
/*ini adalah bagian button counter*/
class Button extends Component{
   

   

    render(){
        console.log(this.props)
        return(
            <div className="button">
                <button className="minus" onClick={this.props.handleMin}>-</button>
                <input type="text" style={{alignItems:'center'}} value={this.props.hitung}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

const plusWithTimeout =()=>(dispatch)=>{
    setTimeout(()=>{
        return dispatch({type:'PLUS'})
    },5000)
}
const minWithTimeout =()=>(dispatch)=>{
    setTimeout(()=>{
        return dispatch({type:'MINUS'})
    },5000)
}

const getData =()=>async(dispatch)=>{  
    const response = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-03&sortBy=publishedAt&apiKey=39f8859e1eea478e977f13490015fcdf');
        dispatch({
            type: 'GET_DATA',
             payload: response.json()
         })
    }

const mapStateToProps=(state)=>{
    return{
        hitung : state.hitungan
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handlePlus:()=>dispatch({type:'PLUS'}),
        handleMin:()=>dispatch({type:'MINUS'}),
        handleTambah:()=>dispatch(plusWithTimeout()),
        handleKurang:()=>dispatch(minWithTimeout()),
        handleGet:()=>dispatch(getData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button);