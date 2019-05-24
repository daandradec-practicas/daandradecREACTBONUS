import React,{Component} from 'react';

class PostDetail extends Component{
    render(){
        
        if(!this.props.post) return null;
        
        return (
            <div>
                <h3>
                    {this.props.post.title}
                </h3>
                <p>
                    {this.props.post.body}
                </p>
            </div>
        );
    }
}

export default PostDetail;