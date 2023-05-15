import Header from "../../parts/header/Header";

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>JavaScript, ReactJS, NPM, Vite, ESLint</p>
							<p>TailwindCSS, SASS, CSS, HTML, Figma (to work with design)</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>Python, FastAPI, PostgreSQL</p>
							<p>linux (server setup experience on Ubuntu 20.04)</p>
							<p>nginx (static files serving, reverse-proxy), docker (basics)</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">General</h2>
							<p>English language B2+</p>
							<p>Knowledge of the principles of computer networks</p>
							<p>Strong motivation and desire to develop</p>
						</li>
					</ul>
				</div>
			</main>
		</>
    );
}
 
export default Home;