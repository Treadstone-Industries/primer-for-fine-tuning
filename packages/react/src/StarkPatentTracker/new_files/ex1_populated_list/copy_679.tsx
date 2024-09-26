import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dbb2a17f-d799-4a50-9bcb-4ce199e7b265', title: 'PATENT_TITLE_4395' },
            { id: 'ac7e8c8e-ec15-45db-8cbf-8b258a8d725d', title: 'PATENT_TITLE_4914' },
            { id: '68b5d532-5257-4230-bebc-d4ce69da86e1', title: 'PATENT_TITLE_3430' },
            { id: '8597cb32-a935-41b4-9161-3a614fb0e82f', title: 'PATENT_TITLE_8172' },
            { id: 'a83dc4cd-7c65-4faa-88b3-6ab669a221ab', title: 'PATENT_TITLE_1047' },
            { id: '662b5969-6eef-4a9b-8387-9c756119c739', title: 'PATENT_TITLE_5231' },
            { id: '7bcdf393-444c-4bfe-b4b0-27bb6aa1c9de', title: 'PATENT_TITLE_5234' },
            { id: '8f5508d7-51d0-4e74-b218-560500cfbce7', title: 'PATENT_TITLE_8585' },
            { id: '25210a1f-04d4-4374-8c14-1669687bf4c9', title: 'PATENT_TITLE_2311' },
            { id: '865ebaa8-537d-4d87-9d95-49efdf81d3af', title: 'PATENT_TITLE_8990' },
        ]}
    />
)

export default App