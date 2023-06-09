import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM



const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    }
]


const Translate = () => {

    const [text, setText] = useState('');

    const [language, setLanguage] = useState(options[0])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                <input value={text} onChange={ (e) => setText(e.target.value)}/>
                </div>
            </div>

            <Dropdown
            label="Select a Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options} />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate