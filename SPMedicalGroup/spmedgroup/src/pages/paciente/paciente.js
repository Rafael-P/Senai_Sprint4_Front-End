import { Component } from 'react';

class Paciente extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : []
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h1>Lista de Consultas</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Paciente</th>
                                    <th>Médico</th>
                                    <th>Especialidade</th>
                                    <th>Data</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>
                        </table>
                    </section>
                </main>
            </div>
        );
    }

}

export default Paciente;