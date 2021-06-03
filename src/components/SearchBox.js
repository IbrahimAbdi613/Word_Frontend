import '../stylesheets/Search.css'
import {useState} from "react"
import Word from '../components/Word'

let SearchBox = (props) => {
    let [word, setWord] = useState(null)
    return (
        <div className="Container">
            <div className="input-wrapper">
                <div className="fa fa-search"></div>
                <input
                    type="text"
                    placeholder="Search here"
                    value={word}
                    onChange={event => setWord(event.target.value)}
                />
                <div className="fa fa-times"></div>
            </div>
            {word && <Word word={word}></Word>}
            {console.log(word)}
        </div>
    )
}

export default SearchBox;


