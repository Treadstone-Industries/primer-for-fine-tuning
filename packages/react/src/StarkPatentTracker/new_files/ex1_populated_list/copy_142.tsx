import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '326ec10d-87d8-41d9-9572-8085ffb48515', title: 'PATENT_TITLE_8924' },
            { id: '8bb3fbd0-9550-4c3d-accd-ba750f8dc849', title: 'PATENT_TITLE_7399' },
            { id: '3895b21c-2352-44df-9d4d-2c1dd4e1e95a', title: 'PATENT_TITLE_9606' },
            { id: 'b8ec624b-f05b-449b-af2f-df7f7debbeb4', title: 'PATENT_TITLE_4061' },
            { id: '8cd4d0c3-baa6-4c5c-ab58-bf281e854054', title: 'PATENT_TITLE_2631' },
            { id: 'c57f2899-a44c-4148-8993-ccc8e660aa1d', title: 'PATENT_TITLE_3146' },
            { id: '4bbae799-57ee-4e42-8919-8c6a84120d5f', title: 'PATENT_TITLE_9864' },
            { id: '22e8c99e-707a-479d-968f-8a72bcc4f57e', title: 'PATENT_TITLE_1817' },
            { id: 'df5bad87-e472-49a2-b593-b07dfbfe0a35', title: 'PATENT_TITLE_9147' },
        ]}
    />
)

export default App