import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f91b9a9e-b3eb-4546-a951-f80b0ea64171', title: 'PATENT_TITLE_3755' },
            { id: '8c9d1e8a-8db9-42db-92e9-bd52f78b7431', title: 'PATENT_TITLE_5055' },
            { id: '40616e0c-e7ec-41c5-9ddd-11bc793bed3f', title: 'PATENT_TITLE_2040' },
            { id: '86b30a93-ee07-47e2-9835-8ccd8fc14317', title: 'PATENT_TITLE_9380' },
            { id: 'e879368e-f261-41cf-82d8-b28828d24f40', title: 'PATENT_TITLE_4315' },
            { id: 'b1ee5c45-7c26-4914-81c5-2853be3d3864', title: 'PATENT_TITLE_2414' },
            { id: '16646cf7-1e19-4ad1-b455-4a652b7700e8', title: 'PATENT_TITLE_8968' },
            { id: '44096584-f2b8-446c-ad63-00c61f2b2fd9', title: 'PATENT_TITLE_8108' },
        ]}
    />
)

export default App