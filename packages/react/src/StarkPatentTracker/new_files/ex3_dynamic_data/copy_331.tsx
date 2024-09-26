import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1aa16756-c7fb-4082-9e65-2f97ebcb52fa', title: 'PATENT_TITLE_4585' },
        { id: 'df5ff522-3037-45ed-9ef1-13d7df7117eb', title: 'PATENT_TITLE_3392' },
        { id: 'b0515824-ed5d-47ae-9ce7-ef47cfbed33f', title: 'PATENT_TITLE_4708' },
        { id: '2ebf155c-078c-4ed9-9d7c-0b1d68f8c5df', title: 'PATENT_TITLE_1369' },
        { id: 'fb2b60ed-e86f-48b3-8b83-6755a9e17d2c', title: 'PATENT_TITLE_1804' },
        { id: '7face967-a1b4-415c-af17-5e3a66c12916', title: 'PATENT_TITLE_2533' },
        { id: '71c089ef-c305-475b-8530-cc8f4c13382a', title: 'PATENT_TITLE_2279' },
        { id: '9c062969-8c32-4f26-b98a-46d5c15d7015', title: 'PATENT_TITLE_3628' },
        { id: '2755c2f6-9917-4243-83b3-93296cb62bc9', title: 'PATENT_TITLE_4692' },
        { id: '473bee5a-1d8f-4402-9164-331a905b753b', title: 'PATENT_TITLE_7357' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App