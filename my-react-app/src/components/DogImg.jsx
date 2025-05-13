import { useState } from "react";
import "../styles/DogImg.css";

function DogImg() {
    const [imageUrl, setImageUrl] = useState('');
    

const fetchDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setImageUrl(data.message);

};

return (
    <>
    <h1 className="head-text">Woof Wall</h1>
    
    <div className="dog-viewer">
        <h2>Unleash a Random Dog!</h2>
        <button onClick={fetchDogImage}>Show Me the Dog!</button>

        {imageUrl && <img src={imageUrl} alt="Random dog" className="dog-img"/>}
    </div>
    </>
    );
}

export default DogImg;