import { Component } from 'react';

class Paciente extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : [{idConsultas : 1, paciente : 'Rafael', medico : 'Will', especialidade : 'nd', data : 05/07, hora : 17}]
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
                            <tbody>
                                {
                                    this.state.listaConsultas.map( (consulta) => {
                                        return (
                                            <tr key={consulta.idConsultas}>
                                                <td>{consulta.idConsultas}</td>
                                                <td>{consulta.paciente}</td>
                                                <td>{consulta.medico}</td>
                                                <td>{consulta.especialidade}</td>
                                                <td>{consulta.data}</td>
                                                <td>{consulta.hora}</td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        );
    }

}

export default Paciente;