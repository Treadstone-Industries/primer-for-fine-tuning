import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9ac6ee7c-2ffd-48b5-89d9-176c87577612', title: 'PATENT_TITLE_6696' },
            { id: 'e2872c9b-f8f7-44b3-87b7-880c67acf22d', title: 'PATENT_TITLE_7778' },
            { id: '3be6958b-e03f-4166-9829-4e44899e0595', title: 'PATENT_TITLE_2095' },
            { id: 'ae36ad1d-e670-4a88-ac95-3977ae9747f5', title: 'PATENT_TITLE_4725' },
            { id: '6c5b8be4-4a11-4a81-a203-8215ed1dc03f', title: 'PATENT_TITLE_9840' },
            { id: 'eb3cd6ae-4f2d-48b6-8bd2-a193aa4b52de', title: 'PATENT_TITLE_9326' },
            { id: '89abbebe-5946-47eb-92dc-a8319d50bdcb', title: 'PATENT_TITLE_1383' },
            { id: '8a980274-955f-4d30-888d-add49ffc4b21', title: 'PATENT_TITLE_8876' },
            { id: '7e57eca0-eb1d-480d-98e5-18e1ef18bfd2', title: 'PATENT_TITLE_5828' },
            { id: '9731dd5f-4fd3-425a-ae1b-c4b7480f4943', title: 'PATENT_TITLE_5960' },
        ]}
    />
)

export default App