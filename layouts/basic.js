import { Container } from 'semantic-ui-react';
import Header from '../components/Header';
import Head from 'next/head';
import './page.css';

import 'semantic-ui-css/semantic.min.css';

const wrapper = {
    
}

const BasicLayout = (props) => (
    <Container style={wrapper}>
        <Head>
          <title>{props.title ?  props.title + " | KNC Next.js App" : "KNC Next.js App"}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <Header/>
        {props.children}
    </Container>
);

export default BasicLayout;