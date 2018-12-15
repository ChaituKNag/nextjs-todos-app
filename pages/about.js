import BasicLayout from '../layouts/basic';
import aboutApi from '../api/about.json';

export default function About() {
  return (
    <BasicLayout>
        <h1>There is nothing special about this About Us page</h1>
        {
          aboutApi.map((line, i) => <p key={i}>{line}</p>)
        }
    </BasicLayout>
  );
}