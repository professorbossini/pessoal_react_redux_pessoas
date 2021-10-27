import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'primereact/button'
class PessoaLista extends Component{
    render(){
        return (
            this.props.pessoas.map((pessoa => (
                //filhos em linha, margem abaixo de cada um, borda, centralizado horizontalmente
                <div className="flex flex-row mb-2 w-6 border border-round border-1 border-400 justify-content-center">
                    {/* padding, largura */}
                    <div className="p-2 w-6">
                        <p className="text-center">{pessoa.nome} {pessoa.sobrenome}</p>
                        <p className="text-center">{pessoa.endereco}</p>
                    </div>
                    {/* flex e centralizando nos dois eixos */}
                    <div className="flex flex-row justify-content-center align-items-center">
                        <Button 
                            icon="pi pi-info-circle"
                            className="p-button-rounded"
                        />
                    </div>
                </div>
            )))
        )
    }
}

//esse nome é uma convenção apenas
const mapStateToProps = (state) => {
    console.log(state)
    return {pessoas: state.pessoas }
}
//A função connect é chamada
//Ela recebe mapStateToProps como parâmetro
//a expressão connect(mapStateToProps) resulta em uma função
//ela é chamada com PessoaLista como parâmetro
//O props de PessoaList passa a ter acesso ao estado
// export default connect(mapStateToProps)(PessoaLista)
// talvez mais didático
const resultadoDaConnect = connect(mapStateToProps)
//esta função tem acesso ao estado e ao componente
//assim, ela pode torná-lo disponível via props do componente
// export default resultadoDaConnect(PessoaLista)
export default resultadoDaConnect (PessoaLista)