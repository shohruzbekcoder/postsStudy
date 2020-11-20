import PropTypes from "prop-types";
import CKEditor from "ckeditor4-react";
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class TwoWayBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "<p>React is really <em>nice</em>!</p>",
      // radioValueMavzu: 'boshqa',
      // radioValueUrin: 'post',
      miniText: 'To\'liq tanishing',
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSabmit = this.handleSabmit.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.textChange = this.textChange.bind(this);
    
  }

  onEditorChange(evt) {
    // console.log(this.state.data);
    this.setState({
      data: evt.editor.getData()
    });
  }

  handleChange(changeEvent) {
    this.setState({
      data: changeEvent.target.value
    });
  }

  handleChange1(changeEvent) {
    this.setState({
      text: changeEvent.target.value
    });
  }

  textChange(changeEvent){
    this.setState({
      miniText: changeEvent.target.value
    });
  }
  
  handleSabmit() {
    let one = this.state.data;
    let start = one.search(/src/i);
    let src = "";
    for(let i = start + 5; i < one.length; i++){
      if(one[i] == "\"") break;
      src = src + one[i];
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: this.state.data,
        postMiniText: this.state.miniText,
        text: this.state.text,
        postImage: src
      })
      };

      fetch('http://localhost:8080/createPost', requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log({data});
            
          });
  };

  render() {
    return (
      <>
        <div>
            <CKEditor data={this.state.data} onChange={this.onEditorChange} />
            {/* <EditorPreview data={this.state.data} /> */}
        </div>
        <h4 style={{
            textAlign: "center",
            paddingBottom: "15px",
            paddingTop: "15px"
          }}>
            Tayyorlangan maqolaning saytdagi o'rini va mavzusi
        </h4>
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        <TextField 
          id="outlined-basic"
          label="Maqola haqida qisqacha"
          variant="outlined"
          onChange={this.textChange}
          style={{width: "100%", marginBottom: "15px"}}
        />
          <TextareaAutosize aria-label="minimum height" rowsMin={3} onChange={this.handleChange1} placeholder="Minimum 3 rows" style={{width: "100%"}} />
          
        </div>
        <div style={{textAlign:"right",padding: "10px"}}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={this.handleSabmit}
            >
                Save
            </Button>
        </div>
      </>
    );
  }
}

class EditorPreview extends Component {
  render() {
    return (
      <div className="editor-preview">
        <h4 style={{paddingTop: "10px", textAlign: "center"}}>Maqolaning kurisnishi</h4>
        <hr/>
        <div style={{padding:"10px"}} dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
        <hr/>
      </div>
    );
  }
}

EditorPreview.defaultProps = {
  data: ""
};

EditorPreview.propTypes = {
  data: PropTypes.string
};

export default TwoWayBinding;
