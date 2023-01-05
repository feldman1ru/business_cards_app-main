import './App.css';
import Layout from './layout/Layout';
import CardPage from './cards/pages/CardPage';
import AboutPage from './pages/AboutPage';
// import Cards from './cards/components/Cards';
// import PageHeader from './components/PageHeader';
// import Sandbox from './sandbox/Sandbox';
// import Card from './cards/components/card/Card.jsx';

const App = () => {
	return (
		<div className="App">
			{/* <PageHeader/> */}
			{/* <Card/> */}
			{/* <Cards /> */}
			<Layout>
				<CardPage />
				{/* <AboutPage /> */}
				{/* <Sandbox /> */}
			</Layout>
		</div>
	);
};

export default App;
