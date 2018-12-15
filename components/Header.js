import Router from 'next/router';
import { Menu } from 'semantic-ui-react';

const routerPush = (url) => () => Router.push(url);

const Header = () => (
    <Menu style={{
        marginTop: '2rem'
    }}>
        <Menu.Item onClick={routerPush('/')}>Home</Menu.Item>
        <Menu.Item onClick={routerPush('/about')}>About Us</Menu.Item>
    </Menu>
);
export default Header