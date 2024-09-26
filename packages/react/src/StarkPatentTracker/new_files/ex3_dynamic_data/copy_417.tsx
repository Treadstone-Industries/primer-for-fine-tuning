import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd0450964-283b-48b8-9bcb-1a521be3de29', title: 'PATENT_TITLE_7111' },
        { id: 'e78a1abe-7f5b-474e-8192-0c515b951343', title: 'PATENT_TITLE_3983' },
        { id: 'c1e2e856-062a-424b-95d4-a18085914634', title: 'PATENT_TITLE_3292' },
        { id: '773e3f92-b40b-49fa-9fc3-843df1d01d55', title: 'PATENT_TITLE_9950' },
        { id: '2f688a90-d377-4a14-9054-e90e910cf57c', title: 'PATENT_TITLE_7377' },
        { id: '70ccc239-c7c6-4870-96a3-7ebea8cd45ba', title: 'PATENT_TITLE_3610' },
        { id: '837abad7-26df-4763-b221-b278d1e17640', title: 'PATENT_TITLE_1187' },
        { id: '8a2ffc9f-080d-443a-8475-6418d79978a4', title: 'PATENT_TITLE_1181' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App