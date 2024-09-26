import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8c4b4f97-245f-452f-b4ee-1dc5c63a2918', title: 'PATENT_TITLE_9541' },
            { id: 'd04f5848-4ac1-4dda-9ac0-99d06339be2a', title: 'PATENT_TITLE_5289' },
            { id: 'cfa0daa9-cc00-424d-ac62-b82231ca0e77', title: 'PATENT_TITLE_9204' },
            { id: '2b2ed414-4b06-4c74-b26c-90f6e0bf8680', title: 'PATENT_TITLE_7123' },
            { id: '061d3f06-360e-4463-ae19-ad26e89f0a0b', title: 'PATENT_TITLE_1507' },
            { id: '0a00d96f-e0ff-4921-bbb9-feee6d83a0b4', title: 'PATENT_TITLE_8651' },
        ]}
    />
)

export default App