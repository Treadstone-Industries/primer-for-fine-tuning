import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '36caed37-d5ed-4091-b332-6cd52fb4411a', title: 'PATENT_TITLE_4628' },
            { id: 'fce76ece-9155-4cb4-b916-56627c5655c1', title: 'PATENT_TITLE_7451' },
            { id: '8667a9f9-7835-4e81-8898-bca16cf4590b', title: 'PATENT_TITLE_2899' },
            { id: '05b293a2-2f12-4c59-9706-64b63d5bd2bf', title: 'PATENT_TITLE_8737' },
            { id: '9494393f-5bdc-4186-8654-e693a04f22d8', title: 'PATENT_TITLE_7442' },
            { id: '450b930c-fd7e-4a05-93f2-94d2d213c98b', title: 'PATENT_TITLE_7749' },
            { id: '3b1ee356-1b6e-43e0-889b-b38ceb05c86f', title: 'PATENT_TITLE_3531' },
            { id: 'bc9e9080-8e4b-421e-84ff-c4eeec115dee', title: 'PATENT_TITLE_9034' },
            { id: 'f2ae8dc8-47fe-4238-a8e5-ea69b4ae7e79', title: 'PATENT_TITLE_5866' },
        ]}
    />
)

export default App