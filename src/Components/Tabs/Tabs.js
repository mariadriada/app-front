import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  palette: {
      primary: 'red'
  },
  root: {
    backgroundColor: 'white',
    width: '100%',
    margin: '0 auto'    
  },
  tab: {
    backgroundColor: 'blue',   
  },
  tab1: {
    color: 'white',    
    textAlign:'right',  
  },
  tab2: {
    color: 'white',    
    textAlign:'left',  
  },
  indicator: {
    backgroundColor: 'green',
  },
});

class TabsElement extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs className={classes.tab}
            value={this.state.value}
            onChange={this.handleChange}                       
            classes={{
                indicator: classes.indicator
              }}
              centered
            >
            <Tab label="Courses" className={classes.tab1}/>
            <Tab label="Providers" className={classes.tab2} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

TabsElement.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TabsElement);