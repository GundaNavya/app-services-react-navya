import React, {Component} from 'react';
import LogTabs from '../components/LogTabs';


class UploadFile extends Component{

    state = {
        selected_file : null,
        uploaded_file : null
    }

    onSelected = (event) =>{
        console.log(event.target.files[0].name);
        this.setState({
            selected_file : event.target.files[0].name
        }) 
    }
    onBtnClick = (event) => {
        this.setState({
            uploaded_file : this.state.selected_file
        })
    }
    render(props){
        return(
            <div>   
            <LogTabs />
            <h1>From File Upload page</h1>
            <h4>FIle name is : {this.state.uploaded_file}</h4>
            <input type="file" onChange={this.onSelected}/> 
            <button onClick={this.onBtnClick}>Upload</button>           
            </div>
        )
    }
};

export default UploadFile;