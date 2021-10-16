import React, { Component } from 'react'
import { connect } from 'react-redux'
class PessoaLista extends Component{
    render(){
        console.log (this.props)
        return <div>
            Pessoas
        </div>
    }
}
const mapStateToProps = (state) => {
    return {pessoas: state.pessoas }
}
export default connect(mapStateToProps)(PessoaLista)