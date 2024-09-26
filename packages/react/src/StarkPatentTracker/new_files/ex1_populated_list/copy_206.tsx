import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '04c23186-f180-4857-8954-869c15989c2a', title: 'PATENT_TITLE_1150' },
            { id: '532d540f-d3e6-46de-a86c-3c9a5fe28b82', title: 'PATENT_TITLE_6960' },
            { id: '79c55a4a-4d13-41ac-adb7-bb16e10991d3', title: 'PATENT_TITLE_2761' },
            { id: 'ba1ee9e6-c0e7-4e78-b110-8e444c413d42', title: 'PATENT_TITLE_6470' },
            { id: '8f3025d0-d0d1-4978-b259-006325f75233', title: 'PATENT_TITLE_8971' },
            { id: 'd83fff54-e9ab-42e4-822a-eb2a6ad9dd90', title: 'PATENT_TITLE_8044' },
            { id: '55c7b3c3-fbbb-45eb-9dd5-11dc33360e23', title: 'PATENT_TITLE_6180' },
            { id: '17b33b10-84e1-453f-8172-9bae7f6ddcff', title: 'PATENT_TITLE_9436' },
            { id: '58a8e5ff-004a-4fae-b080-595f369e8384', title: 'PATENT_TITLE_9712' },
        ]}
    />
)

export default App