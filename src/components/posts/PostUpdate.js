import React, {Component} from 'react'
import {Alert} from 'reactstrap';

class PostUpdate extends Component{
    
    tituloRef = React.createRef();
    contenidoRef = React.createRef();
    
    actualizarPost = (e) => {
        e.preventDefault();
        
      const post = {
           title : this.tituloRef.current.value,
           body: this.contenidoRef.current.value,
           id: this.props.post.id
      }
      
      this.props.actualizarPost(post);
      
      alert("actualizado")
    }    
    
    render(){
        
        const title_text = (this.props.post) ? this.props.post.title : '';
        const body_text = (this.props.post) ? this.props.post.body : '';
        
        return(
            <div>
               <Alert color="danger"><h1>Update a post</h1></Alert>
               <br/>
               <form onSubmit={this.actualizarPost} style={{width:'80%',paddingLeft:'10px'}}>
                    <div className="form-group">
                         <label>Titulo del Post:</label>
                         <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo del Post" defaultValue={title_text}/>
                    </div>
                    <div className="form-group">
                         <label>Contenido: </label>
                         <textarea className="form-control" ref={this.contenidoRef}  placeholder="Contenido" value={body_text}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Actualizar</button>
               </form>                
            </div>
        )
    }
}

export default PostUpdate;