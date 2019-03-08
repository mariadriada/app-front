import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import './Select.scss'

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 2,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 20,
    color: '#ced4da',
    fill: 'red',
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'BlinkMacSystemFont',
      '-apple-system',      
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 2,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 120,
  },
  iconComponent: {
      fill: 'red'
  }
});

class SelectElement extends React.Component {

    constructor(props){
        super(props)
        this.name = null
        this.id = null
        this.valueDefault = null
        this.values = []

        this.state = {
            value: this.props.valueDefault,
            values: ['Others']
        }
    }        

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
        <form className={classes.root} autoComplete="off">
            
            <FormControl className={classes.margin}>         
            <Select
                className="select-element"
                value={this.state.value}
                onChange={this.handleChange}
                input={<BootstrapInput name={this.props.name} id={this.props.id} />}
            >
           
            {
                this.props.values.map((value, i) => {
                    return(
                        <MenuItem key={i} value={value}>{value}</MenuItem>
                    )
                })
            }
            </Select>
            </FormControl>
            
        </form>
        );
    }
}

SelectElement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectElement);