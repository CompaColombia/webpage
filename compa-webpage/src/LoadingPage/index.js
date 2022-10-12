import './LoadingPage.css';
import { GiShinyApple, GiNotebook } from 'react-icons/gi';
import { BsFillGearFill } from 'react-icons/bs';

export default function LoadingPage() {
    return (
        <div className="LoadingPage">
            <GiShinyApple style={{color: "#279640"}} id="First" className="LoadingObject"></GiShinyApple>
            <BsFillGearFill style={{color: "#08a8de"}} id="Second" className="LoadingObject"></BsFillGearFill>
            <GiNotebook style={{color: "#eac825"}} id="Third" className="LoadingObject"></GiNotebook>
        </div>
    )
}
