import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

import 'semantic-ui-css/semantic.min.css';

const wrapper = {
    
}

const BasicLayout = (props) => (
    <Container style={wrapper}>
        <Header/>
        {props.children}
    </Container>
);

export default BasicLayout;