import logo from './logo.svg';
import './App.css';

function Header() {
	return (
		<header>
			<nav>
				<img src={logo} alt="" width="40px" />
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
function MainContent() {
	return (
		<div>
			<h1>Fun facts about React</h1>
			<ul>
				<li>released in 2013</li>
				<li>created by jordan walke</li>
				<li>over 100k stars on Github</li>
				<li>maintained by Facebook overlords</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	);
}
function Footer() {
	return (
		<footer>
			<small>&copy; Buttonbag development. All rights reserved.</small>
		</footer>
	);
}

function App() {
	return (
		<div className="container">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
