import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a572e27f-25b3-44fc-856c-63a541631e1b', title: 'PATENT_TITLE_7249' },
        { id: 'f321ad18-aca1-46f0-a68d-ecca4800def0', title: 'PATENT_TITLE_4810' },
        { id: 'f029c46b-dfdd-4934-982f-0d086ee4cb5c', title: 'PATENT_TITLE_9584' },
        { id: 'ac65a554-7b1b-42a1-b610-b7393b426f64', title: 'PATENT_TITLE_3432' },
        { id: '5a392ac8-aedb-44da-a42f-16b563500508', title: 'PATENT_TITLE_9749' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App