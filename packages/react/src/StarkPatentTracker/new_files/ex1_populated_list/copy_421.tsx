import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '77874297-f2ed-454b-a926-b9b580332c8b', title: 'PATENT_TITLE_6779' },
            { id: 'c6106dd9-967c-4002-81a7-d40ffd0c550d', title: 'PATENT_TITLE_1609' },
            { id: 'c4e16b21-602d-452b-9c74-e677d42783c0', title: 'PATENT_TITLE_8568' },
            { id: '44ec5da9-93b3-47bb-9b0e-520365d14df7', title: 'PATENT_TITLE_7583' },
            { id: '911a6a1d-1691-4020-9b44-ae0fa3df7654', title: 'PATENT_TITLE_3282' },
            { id: '1e9addcf-0e06-4ade-b203-0f1f66152038', title: 'PATENT_TITLE_6378' },
            { id: '26ee8a1c-7266-48f9-946e-6b5baaa09410', title: 'PATENT_TITLE_6623' },
            { id: '13a67a3b-6271-4b07-9c49-10da9fdc84e1', title: 'PATENT_TITLE_7933' },
            { id: 'db46b053-2a07-4cd7-b367-62d768f7c979', title: 'PATENT_TITLE_6257' },
            { id: 'f3189bbc-6c05-466d-8359-4e9bbf8bb756', title: 'PATENT_TITLE_8357' },
        ]}
    />
)

export default App