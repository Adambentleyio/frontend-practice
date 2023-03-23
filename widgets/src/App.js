import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';




const options = [
    {
        label: 'The Colour Red' ,
        value: 'red'
    },
    {
        label: 'The Colour Blue' ,
        value: 'blue'
    },
    {
        label: 'The Colour Yellow' ,
        value: 'yellow'
    },

]


const items = [
    {
        title: 'What is React?',
        content: 'React is a JS framework'

    },
    {
        title: 'Why use React?',
        content: 'You would use React to build a website using components'
    },
    {
        title: 'Is React just for Apps?',
        content: 'Kind of, but the term App is much broader than the monolith apps we\'re all used to'
    },

];

// const showAccordion = () => {
//     if (window.location.pathname === '/') {
//       return <Accordion items={items} />;
//     }
//   };

// const showDropdown = () => {
//     if (window.location.pathname === '/dropdown' ) {
//         return <Dropdown options={options} />
//     }
// }

// const showList = () => {
//     if (window.location.pathname === '/list' ) {
//         return <Search options={options} />
//     }
// }

// const showTranslate = () => {
//     if (window.location.pathname === '/translate' ) {
//         return <Translate options={options} />
//     }
// }


export default function App() {

    const [selected, setSelected] = useState('')

    return (
            <div className="ui container">
            <Header />
           <Route path='/'>
               <Accordion items={items} />
           </Route>
           <Route path='/list'>
               <Search />
           </Route>
           <Route path='/dropdown'>
               <Dropdown
               label="Select a color"
               options={options}
               selected={selected}
               onSelectedChange={setSelected} />
           </Route>
           <Route path='/translate'>
               <Translate />
           </Route>
            </div>

    )
}


