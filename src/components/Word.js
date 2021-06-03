import {useState, useEffect} from 'react'
import '../stylesheets/Word.css'

let Word = (props) => {
    let [wordData, setWordData] = useState(null)
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            let res = await (fetch('/' + props.word))
            let data = await res.json()
            console.log(data)
            console.log(props.word)
            setWordData(data.Data)
            setLoading(false)

        }
        fetchData()
    }, [props.word])
    return (
        (loading) ?
            <h1>Loading ...</h1> :
            (wordData.word && !wordData.success) ?
                <div div className="WordContainer" >
                    <h1> {wordData.word}</h1>
                    {wordData.pronunciation && <label><b>Pronunciation: </b>{wordData.pronunciation.all}</label>}
                    <hr />
                    {wordData.results &&
                        wordData.results.map((result, index) => {
                            return (
                                <div>
                                    <p>
                                        <b>{index + 1} . </b>
                                        {result.definition} (<b>{result.partOfSpeech}</b>)
                                    </p>
                                </div>
                            )
                        })
                    }
                </div >
                : <h1>Not Found</h1>
    )
}

export default Word