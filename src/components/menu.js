import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import { MenuItems } from './menu_items';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      config: '',
      open: this.props.open,
      width: 1200,
      height: null
    };
  }

  componentWillMount() {
    this.setState(this.updateDimensions());
    window.addEventListener('resize', this.setState(this.updateDimensions()));
  }

  componentDidMount() {
    window.addEventListener('resize', this.setState(this.updateDimensions()));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setState(this.updateDimensions()));
  }

  getMenuWidth = () => {
    //some responsiveness to the menu
    if (this.state.width > 1600) return 300;
    else if (this.state.width <= 1600 && this.state.width > 1200) return 250;
    else if (this.state.width <= 1200 && this.state.width > 600) return 200;
    else if (this.state.width <= 600) return 200;
  }

  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    return ({ width, height });
  };

  render() {
    return (
      <Drawer
        docked
        width={this.getMenuWidth()}
        open={this.props.open}
      >
        <AppBar
          title="Shortcuts"
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
        <MenuItems />
      </Drawer>
    );
  }
}
