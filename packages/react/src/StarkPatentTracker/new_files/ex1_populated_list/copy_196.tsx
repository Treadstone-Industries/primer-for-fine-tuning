import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '82efbb27-f079-44f4-a0ff-1e65b4d4d843', title: 'PATENT_TITLE_2470' },
            { id: '9a8c4cb3-7179-41be-b702-3238c1e3d95c', title: 'PATENT_TITLE_4204' },
            { id: 'b3dc3990-b9ef-4e4b-a77a-6f95b8cdb1a3', title: 'PATENT_TITLE_1997' },
            { id: '181da3dd-2418-498d-b50d-b5c51e64a847', title: 'PATENT_TITLE_3635' },
            { id: '53ee134b-05a1-4e7c-910d-4f0489098ef7', title: 'PATENT_TITLE_5382' },
            { id: '6ad5b2aa-8c65-4ecc-9baa-b5c76f042ad3', title: 'PATENT_TITLE_9881' },
            { id: 'b7b3bc91-e7fe-4742-a060-ac3fab7a8d94', title: 'PATENT_TITLE_6371' },
            { id: '14025540-2d5a-41d7-86ed-c10311a070c3', title: 'PATENT_TITLE_6389' },
            { id: '363a5869-a85f-44f4-8459-a9eb2bb7f0b2', title: 'PATENT_TITLE_5796' },
        ]}
    />
)

export default App