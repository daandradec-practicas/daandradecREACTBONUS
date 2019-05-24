import React, { Component } from 'react';
import {Alert} from 'reactstrap';

class PostCreate extends Component {
    
    tituloRef = React.createRef();
    contenidoRef = React.createRef();
    
    crearPost = (e) => {
        e.preventDefault();
        
      const post = {
           title : this.tituloRef.current.value,
           body: this.contenidoRef.current.value,
           userId: 101
      }
      
      this.props.crearPost(post);
        
        e.target.reset();
    }
    
    render(){
    return (
        <div>
           <Alert color="info"><h1>Create a post</h1></Alert>
           <br/>
           <form onSubmit={this.crearPost} style={{width:'80%',paddingLeft:'10px'}}>
                <div className="form-group">
                     <label>Titulo del Post:</label>
                     <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo del Post"/>
                </div>
                <div className="form-group">
                     <label>Contenido: </label>
                     <textarea className="form-control" ref={this.contenidoRef}  placeholder="Contenido"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
           </form>
        </div>
  );
  }
}

export default PostCreate;