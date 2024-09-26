import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '974bf970-5161-4439-b5e1-9ab25bc6b44a', title: 'PATENT_TITLE_7935' },
        { id: '1311beea-5313-43f5-a75c-deb5507b2f59', title: 'PATENT_TITLE_5705' },
        { id: 'd26d8ee4-d012-4986-b4de-59a4c6bf4491', title: 'PATENT_TITLE_9637' },
        { id: '4f61f0c7-406f-46eb-8fda-a237cd703a0b', title: 'PATENT_TITLE_8175' },
        { id: '2a6c9ef5-f2a0-492b-915c-eac6904e0552', title: 'PATENT_TITLE_1326' },
        { id: 'a947082d-1a17-47b6-8941-1948ec0fd0f8', title: 'PATENT_TITLE_1934' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App