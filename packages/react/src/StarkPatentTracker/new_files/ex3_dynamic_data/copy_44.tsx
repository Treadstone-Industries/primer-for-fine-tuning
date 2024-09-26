import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8e6906b1-f4e2-4b51-b497-468b2719ebb4', title: 'PATENT_TITLE_2724' },
        { id: 'a94f1e11-97cc-4d06-aa5a-d36a5dac996c', title: 'PATENT_TITLE_3371' },
        { id: '7d60d786-0943-47e2-9b9f-f8df961838ef', title: 'PATENT_TITLE_1277' },
        { id: '7c1230f7-0bc8-4619-b4a6-692ea20ba2d5', title: 'PATENT_TITLE_2191' },
        { id: '90a4c35f-99c2-4dee-8727-7672c56e9ab7', title: 'PATENT_TITLE_5488' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App