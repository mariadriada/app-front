import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import './Selector.scss'


const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

 class Selector extends Component {

    constructor(props) {
        super(props)     

        this.state = {
            title: this.props.title,
            options: this.props.options,
            value: this.props.value,
            viewMore: this.props.viewMore
          };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

    render(){
        const { classes } = this.props;
        
        return(
            <div className="Selector">
                <KeyboardArrowUp className="arrow"/>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{this.state.title}</FormLabel>
                    <RadioGroup
                        aria-label={this.state.title}
                        name={this.state.title}
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                   
                    {
                        this.state.options.map((value) => {
                            return (
                                <FormControlLabel 
                                    key={value}
                                    value={value} 
                                    control={<Radio color="primary" />} 
                                    label={value}
                                    checked />
                            )
                        })
                    }
                      
                    </RadioGroup>
                    <a href="#" id="viewMore">{ this.state.viewMore ? 'View more' : '' }</a>
                </FormControl>
    
            </div>
        )
    }
}

Selector.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Selector);