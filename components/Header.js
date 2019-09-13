import { withRouter } from 'next/router';
import { Menu, Dropdown } from 'semantic-ui-react';
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
            <Menu style={{ marginTop : '1rem' }}>
                <Menu.Item 
                    onClick={() => this.routerPush('/')} 
                    active={ activeState === '/'} 
                >Home</Menu.Item>
                <Menu.Item 
                    onClick={() => this.routerPush('/about')} 
                    active={ activeState === '/about'}
                >About Us</Menu.Item>
                <Dropdown text='Apps' item>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Todos App' 
                            onClick={() => this.routerPush('/todos')} 
                            active={ activeState === '/todos'}
                        />
                        <Dropdown.Item text='Login' 
                            onClick={() => this.routerPush('/login')} 
                            active={ activeState === '/login'}
                        />
                        <Dropdown.Item text='Open...' description='ctrl + o' />
                        <Dropdown.Item text='Save as...' description='ctrl + s' />
                        <Dropdown.Item text='Rename' description='ctrl + r' />
                        <Dropdown.Item text='Make a copy' />
                        <Dropdown.Item icon='folder' text='Move to folder' />
                        <Dropdown.Item icon='trash' text='Move to trash' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
};
export default withRouter(Header);