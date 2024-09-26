import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'daba3901-13dd-4c48-8550-0aff19f37e02', title: 'PATENT_TITLE_4081' },
        { id: '01cc51ef-a201-45e8-bf85-949e06f17c84', title: 'PATENT_TITLE_2108' },
        { id: '431ef8b1-4915-4872-a09d-384b6308b2d9', title: 'PATENT_TITLE_5550' },
        { id: 'bb5d81ce-f1f6-4bf0-a430-80b249a538de', title: 'PATENT_TITLE_2215' },
        { id: '502879cf-8cad-49d1-a848-47ccbfb59c7a', title: 'PATENT_TITLE_3306' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App