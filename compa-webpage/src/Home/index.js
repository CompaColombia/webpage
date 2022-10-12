import { useState, useEffect } from 'react';
import Constants from '../Constants.js'
import img1 from '../landscape1.webp'
import img2 from '../landscape2.jpeg'
import './Home.css';


function Home({setAllIsFetched}) {

    // Hooks
    const [selectedPicture, setSelectedPicture] = useState("")

    useEffect(() => {
        const pictureArray = [img1, img2]
        const randomIndex = Math.floor(Math.random() * pictureArray.length);
        setSelectedPicture(pictureArray[randomIndex])
    })

    // Methods


    // Render
    return (
        <>
            <img src={selectedPicture} className="Background" />
            <img 
                src={`https://drive.google.com/uc?export=view&id=${Constants.HOME_LOGO_ID}`} 
                onLoad={setAllIsFetched} 
                width="100px" 
                height="100px" 
            />
            <h1 className="Main-title"> Hola Compa </h1>
            <p> Conectamos el Campo Colombiano al resto del mundo mediante la innovación tecnológica y la educación </p>
        </>
    )
}

export default Home