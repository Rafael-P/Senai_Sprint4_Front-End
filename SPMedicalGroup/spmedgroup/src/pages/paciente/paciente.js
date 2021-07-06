import { React, Component } from 'react';
import axios from 'axios';

export default class Paciente extends Component{
    constructor(props){
        super(props);
        this.state = {
            idConsultas : '',
            paciente : '',
            medico : '',
            especialidade : '',
            data : '',
            hora : '',
            isLoading : false
            //{idConsultas : 1, paciente : 'Rafael', medico : 'Will', especialidade : 'nd', data : 0507, hora : 17}
        }
    }

    listarConsultas = () => {
        axios('http://localhost:5000/api/pacientes', {
            headers : {
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }
        })
        .then (resposta => {
            if(resposta.status === 200) {
                this.setState({ listarConsultas : resposta.data })
                console.log(this.state.listarConsultas)
            }
        })

        .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.listarConsultas();
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h1>Lista de Consultas</h1>
                        <table style={{ borederCollapse : 'separate', borderSpacing : 30 }}>
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
                                    this.state.listarConsultas.map( (consulta) => {
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

//export default Paciente;