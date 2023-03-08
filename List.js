const Person = (props) =>{
    return(
        <li>
        <span>{props.name}</span>
        <button onClick={props.delete}>Usuń</button>
        </li>
    )
}


class AnotherOneReactExercise extends React.Component{
    state = {
        names: [
            {id: 1, name: "Pawel"},
            {id: 2, name: "Marek"},
            {id: 3, name: "Tomek"},
            ] 
    }
    
    handleDelete(id){
        console.log("klikniete")
        const names = [...this.state.names]
        const index = names.findIndex(person => person.id === id)
        names.splice(index,1)
        this.setState({
            names,
        })
    }

    render(){
        return(
           <ul>
            {this.state.names.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this,person.id)}/>)}
           </ul>
            
            
        )
    }
}
ReactDOM.render(<AnotherOneReactExercise />, document.getElementById('whiskacz'))