import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ee038128-80e3-4a66-9ae9-e68d3b74f9a7', title: 'PATENT_TITLE_2086' },
        { id: 'de4c47d9-3f82-4eb1-a8fc-7fd193e9ca31', title: 'PATENT_TITLE_7867' },
        { id: '216f9263-75b3-442a-9e23-1aafdb648e5f', title: 'PATENT_TITLE_8016' },
        { id: '26e0c9b0-fb07-4cd6-8ce0-647fb93a1cf7', title: 'PATENT_TITLE_7950' },
        { id: 'e564cd44-6600-412e-8e50-c47143a9d5b1', title: 'PATENT_TITLE_1494' },
        { id: 'f06fa464-7fa4-4246-853b-16638e421438', title: 'PATENT_TITLE_2400' },
        { id: '0a190c6c-f00a-438b-ab6d-bac9c0ac911d', title: 'PATENT_TITLE_4915' },
        { id: 'eb03b214-790f-4cd8-b888-fce0d410a641', title: 'PATENT_TITLE_4224' },
        { id: '5c84f552-de59-4a49-a106-9d7439f602d3', title: 'PATENT_TITLE_3452' },
        { id: '3b3d00a7-bc83-478a-a939-6933f068f41c', title: 'PATENT_TITLE_9227' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App