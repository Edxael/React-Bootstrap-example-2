import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog'





const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <h4>Hello from the dialog</h4>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);







 
export default class extends React.Component{
    state = { userInput: '', open: false }

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };
    
    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };
    


    render(){

        const runModal = () => {
            console.log("Executing function 'runModal'")
            console.log("The name is: ", this.state.userInput)
            this.handleClickOpen
        }

        return(
            <div>
                <h1>Modal Page.</h1>

                <input type="text" value={ this.state.userInput } onChange={ (e1) => { this.setState({ userInput: e1.target.value }) } } placeholder="Type your Name" />
                <br/><br/>
                <button onClick={runModal} >Open Sesamus</button>
            </div>
        )
    }
}