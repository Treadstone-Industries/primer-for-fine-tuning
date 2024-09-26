import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '91a5b228-6d6c-46b8-8d8b-a5ba8080f1b9', title: 'PATENT_TITLE_7818' },
            { id: '2f7d2075-17f2-447f-8c18-e1fb652432e6', title: 'PATENT_TITLE_8091' },
            { id: 'c8cdd87d-50ce-4e72-b1c8-fa83168ca0d8', title: 'PATENT_TITLE_3470' },
            { id: 'be575835-86e1-4acf-84ea-08716164873c', title: 'PATENT_TITLE_7036' },
            { id: '483e7001-bff5-468d-902f-ddee909858c8', title: 'PATENT_TITLE_9340' },
            { id: '7e082380-8aac-44ef-aaec-b477249d91b5', title: 'PATENT_TITLE_2684' },
        ]}
    />
)

export default App