import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
    width: '50%',
  },
  iconButton: {
    padding: 10,
    color: 'gray'
  },    
};


class SearchBar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { classes } = this.props; 
      return (
        <Paper className={classes.root} elevation={1}>
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <InputBase id="inputSearch" className={classes.input} placeholder="Search courses and providers"
          />      
        </Paper>
      )
    }
   
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);