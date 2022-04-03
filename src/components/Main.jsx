import React from "react";
import History from './History';
import Data from "./data.json";
import Options from "./Options";

class Main extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            historial : "",
            contador : 1,
        }
    };

    findId = ( id )  => {
        return Data.find( item => item.id === id );
    };

    handleClick = ( selectedOption ) => {
        if ( this.state.contador === 5 ) return;
            this.setState( {
            "historial" : this.state.historial + selectedOption.target.value,
            "contador": this.state.contador + 1
        } );
    }

    refresh = () => {
        this.setState( {
            "historial" : "", 
            "contador": 1,
        } )
    }

    render = () => {
        let index = this.state.historial ? ( this.state.contador ) 
        + this.state.historial.slice( -1 ).toLowerCase() : "1";
        
        let id = this.findId( index );

return <div className = { this.props.className } >
            <History historia = { id.historia } />
            <Options optionA = { id.opciones.a } optionB = { id.opciones.b } clickHandler = { this.handleClick }
            counter = { this.state.contador === 5 } />
            <div className = "reminder" > Selección anterior: { this.state.historial.slice(-1) } </div>
            <div className = "reminder" > Historial: { this.state.historial } </div>
            <button className = { this.state.contador <= 4 ? "hidden" : "buttons"} onClick = { this.refresh } >
                Volver a Empezar
            </button>
        </ div>
    };  

    componentDidUpdate() {
        console.table( this.state );
    }

    componentDidMount() {
        console.log( "componentDidMount" );
    }
}

export default Main;