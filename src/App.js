import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const Body = styled.div`
	background-color: ${({ theme }) => theme.bg};
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Router>
				<NavBar />
			</Router>
			<Body>
				<Hero />
				<Skills />
				<Experience />
				<Projects />
			</Body>
		</ThemeProvider>
	);
}

export default App;
