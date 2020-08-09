import React from 'react';
import classes from './TopBar.module.css';
import { AppBar, Toolbar }from '@material-ui/core';

const TopBar = () => {
    return (
        <AppBar position="sticky">
          <Toolbar className={classes.TopBar}>
            <img src="/logo.png" className="Logo" alt="Logo" />
            <h1>Voice Post</h1>
          </Toolbar>
       </AppBar>
    );
}

export default TopBar;