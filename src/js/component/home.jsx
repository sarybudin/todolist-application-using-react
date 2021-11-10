import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input, setInput] = useState("");
	const [lista, setLista] = useState([]);

	// se ejecuta al tener cambio de variables
	useEffect(() => {});
	// se ejecuta al renderizar
	useEffect(() => {
		console.log(">Renderizando");
	}, []);

	return (
		<div className="text-center mt-5 padre">
			<div className="contenedor">
				<h1>ToDo</h1>

				<input
					type="text"
					placeholder="whats need to be done?"
					onChange={e => {
						setInput(e.target.value);
						console.log(input);
					}}
					value={input}
					onKeyUp={e => {
						//solo enter
						if (e.keyCode === 13) {
							if (input !== "") {
								setLista([...lista, input]);
								setInput("");
							}
						}
					}}
				/>
				<ul>
					{lista.map((valorlista, key) => {
						return (
							<li key={key}>
								{valorlista}
								<a
									onClick={() => {
										lista.splice(key, 1);
										setLista([...lista]);
									}}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-trash"
										viewBox="0 0 16 16">
										<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
										<path
											fillRule="evenodd"
											d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
										/>
									</svg>
								</a>
							</li>
						);
					})}
				</ul>
				<label>{lista.length} item left</label>
			</div>
		</div>
	);
};

export default Home;
