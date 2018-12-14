import Header from '../components/Header';

const wrapper = {
    margin: 'auto',
    marginTop: 20,
    padding: 10,
    border: '10px solid #b0b0b0',
    backgroundColor: 'lightgrey',
    maxWidth: 960
}

const BasicLayout = (props) => (
    <div style={wrapper}>
        <Header />
        {props.children}
    </div>
);

export default BasicLayout;