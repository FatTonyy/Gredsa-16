import React, { useState } from "react";
import Title from "./components/Title";
import UploadForms from "./components/UploadForms";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function App() {
	const [selectedImg, setSelectedImg] = useState(null);
	return (
		<div className="App">
			<Title />
			<UploadForms />
			<LazyLoadComponent>
				<ImageGrid setSelectedImg={setSelectedImg} />
			</LazyLoadComponent>
			{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</div>
	);
}

export default App;
