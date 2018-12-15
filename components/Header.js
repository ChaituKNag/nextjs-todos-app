import Router from 'next/router';
import { Menu } from 'semantic-ui-react';
import { Component } from 'react';

class Header extends Component{ 

    state = {
        activeState: Router.route
    }

    routerPush = (url) => {
        Router.push(url);
        this.setState({
            activeState: url
        });
    }

    render() {
        const { activeState } = this.state;
        return (
            <Menu style={{ marginTop : '2rem' }}>
                <Menu.Item 
                    onClick={() => this.routerPush('/')} 
                    active={ activeState === '/'} 
                >Home</Menu.Item>
                <Menu.Item 
                    onClick={() => this.routerPush('/about')} 
                    active={ activeState === '/about'}
                >About Us</Menu.Item>
            </Menu>
        )
    }
};
export default Header