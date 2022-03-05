//Imports
// React
import React from 'react';
// Libraries
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Context
import { usePortfolioContext } from './components/Context';

// Custom function imports
import ScrollToTop from './helpers';

// Component imports
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

import BlogHeader from './components/BlogHeader';
import BlogMain from './components/BlogMain';
import Post from './components/Post';

// Styled components
import { StyledPageWrap } from './components/Styled/StyledPageWrap';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
	const { currentColors } = usePortfolioContext().darkMode;

	return (
		<Router>
			<ScrollToTop />

			<Route exact path="/" component={Home} />

			<Route path={['/about', '/work']}>
				<MainHeader />
				<DarkModeToggle />
				<StyledPageWrap currentColors={currentColors}>
					<Route path="/about" component={About} />
					<Route path="/work" component={Work} />
				</StyledPageWrap>
				<Footer />
			</Route>

			<Route path="/io">
				<BlogHeader currentColors={currentColors} />
				<DarkModeToggle />
				<StyledPageWrap currentColors={currentColors}>
					<Route exact path="/io" component={BlogMain} />
					<Route path="/io/:slug" component={Post} />
				</StyledPageWrap>
				<Footer />
			</Route>
		</Router>
	);
};

export default App;
