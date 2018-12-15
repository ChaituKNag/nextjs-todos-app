import {withRouter} from 'next/router';
import { Menu } from 'semantic-ui-react';
import { Component } from 'react';

class Header extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            activeState : this.props.router.route
        }
    }

    routerPush = (url) => {
        this.props.router.push(url);
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
export default withRouter(Header);