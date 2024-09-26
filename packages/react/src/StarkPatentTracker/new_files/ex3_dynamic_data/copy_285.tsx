import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ec4040ee-9a10-4b98-88c1-66a963c8f674', title: 'PATENT_TITLE_4798' },
        { id: 'c8ab6353-aad2-4c7a-8cbc-f71d7342574c', title: 'PATENT_TITLE_4382' },
        { id: '33380c16-03de-494c-a6cc-0e7cb0e15fb6', title: 'PATENT_TITLE_7887' },
        { id: '9da0b0bd-70a7-440b-9835-a7102755ad4e', title: 'PATENT_TITLE_3167' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App