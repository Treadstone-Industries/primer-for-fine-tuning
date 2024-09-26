import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8a71b9f1-dd99-4d05-bc06-823fc580011e', title: 'PATENT_TITLE_7530' },
            { id: 'f3f352a6-b248-45b9-af9e-a73aac1630bd', title: 'PATENT_TITLE_5438' },
            { id: 'f5af1283-5cde-493d-b0b7-1a65cd34ad6e', title: 'PATENT_TITLE_8347' },
            { id: '9a792036-a946-4285-b6a7-e002fd4aa578', title: 'PATENT_TITLE_7717' },
            { id: '80f63ca7-1f71-4f56-95ff-98fe716ebba9', title: 'PATENT_TITLE_9135' },
            { id: '1bc3644d-e2b3-4088-aa9d-6e7618a9a93c', title: 'PATENT_TITLE_8731' },
            { id: 'd44e58fd-5fb8-48f8-acb7-6dad904e7f95', title: 'PATENT_TITLE_5504' },
            { id: 'fec3f4a9-51ff-4ae9-b36a-c481269e8274', title: 'PATENT_TITLE_3163' },
        ]}
    />
)

export default App