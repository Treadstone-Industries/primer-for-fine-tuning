import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b7f0c511-4de0-4b83-8309-c122b8a46a84', title: 'PATENT_TITLE_4872' },
        { id: '15294658-b676-42e9-9573-d7023c9e6865', title: 'PATENT_TITLE_7631' },
        { id: '431fe976-c1fd-4988-9939-f36743dde5c3', title: 'PATENT_TITLE_4850' },
        { id: '508f64a4-b796-4082-8b8b-f22f68afb15e', title: 'PATENT_TITLE_1410' },
        { id: 'd7ffc73c-503d-47de-ac61-39f4054c7a3b', title: 'PATENT_TITLE_6025' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App