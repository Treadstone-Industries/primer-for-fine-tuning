import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cb2a8027-4b48-4639-ab57-24e7a80ff919', title: 'PATENT_TITLE_6093' },
        { id: '4eafada5-8819-4f1d-92c7-14107df46854', title: 'PATENT_TITLE_5130' },
        { id: 'e6446050-4999-4adc-9fa3-a6f3b31118c4', title: 'PATENT_TITLE_7333' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App