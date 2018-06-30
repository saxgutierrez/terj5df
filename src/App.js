import React, { Component } from 'react';

class App extends Component {
   constructor() {
    super();
                  this.state = {value: '',value1:'', id:0,
                  users: []};
                  }

   handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // comprobar envío de los input
    // alert('Nombre:' + ' ' + this.state.value + '\n' + 'Apellido:' +' ' + this.state.value1  );
    // guardando arreglo original users
    let oldUsers = this.state.users;
   
    // guardo id en variable local
    let oldid = this.state.id
    //guardando valores de los input en variables locales
    let newFirstname = this.state.value;
    let newLastname =this.state.value1;
    
    //muestra el id actual de la lista
    // alert('id:' + oldid)

    // si no están vacíos los inputs se agregar a la lista
    if ((newFirstname!=="") && (newLastname!==""))
    // agregando información del usuario a la list
    {
    // Actualizando valor de contador
    this.setState({id:this.state.id+1})
    // creación de nuevo usuario con todos los atributos id, firstname, lastname
    let newUser = {id:oldid+1,firstname:newFirstname,lastname:newLastname};    
    // concatena en el arrego users el nuevo usuario y luego se resetean los inputs
    this.setState({users:[...oldUsers,newUser],value:"",value1:""});
    }
    else{null}
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}
                 className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" value={this.state.value1} onChange={this.handleChange1.bind(this)}
                 className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user,index) =><tr>
                  <td key={user.id}>{user.firstname}</td>
                  <td key={user.id}>{user.lastname}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


