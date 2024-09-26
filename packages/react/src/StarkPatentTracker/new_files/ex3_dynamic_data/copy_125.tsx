import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '234f5992-d449-4a4f-a596-a2dcee921638', title: 'PATENT_TITLE_4211' },
        { id: '278b578a-c5b1-46f2-b182-046ce9552efe', title: 'PATENT_TITLE_3698' },
        { id: '92a130c1-6632-47a6-b72f-7990cdbb16ba', title: 'PATENT_TITLE_3637' },
        { id: '49768467-991d-4c2b-aa61-93095d324101', title: 'PATENT_TITLE_3028' },
        { id: '27378d8e-6b7d-4b10-955a-23869c104d97', title: 'PATENT_TITLE_3103' },
        { id: 'fd60c96a-a327-451f-809d-5987bc097824', title: 'PATENT_TITLE_7723' },
        { id: 'd975096c-6f0a-4251-a275-ee74c7591076', title: 'PATENT_TITLE_3935' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App