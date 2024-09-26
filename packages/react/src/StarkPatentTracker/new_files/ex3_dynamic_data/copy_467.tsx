import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c83ba6ae-aeb0-4e74-8d12-8f700cbd1180', title: 'PATENT_TITLE_5491' },
        { id: '6838d8b2-33c4-4ee2-a9af-c6248c3da110', title: 'PATENT_TITLE_1207' },
        { id: 'c9db91ff-2304-42bc-a53c-cce2d20e986e', title: 'PATENT_TITLE_2854' },
        { id: '1a643448-a750-4fd9-9099-0a657ac449f7', title: 'PATENT_TITLE_6650' },
        { id: 'c109cca3-8ec3-4aa1-8a87-3d1707ef9af7', title: 'PATENT_TITLE_2678' },
        { id: 'ae32f1dd-5f9d-4a85-b8eb-4573a14fafb5', title: 'PATENT_TITLE_3471' },
        { id: 'a8101c0f-3e92-43ac-b1b0-67bdc2cfa2a4', title: 'PATENT_TITLE_9174' },
        { id: '7ccb200d-58f1-4879-afdb-9ce051dcd4c9', title: 'PATENT_TITLE_5034' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App