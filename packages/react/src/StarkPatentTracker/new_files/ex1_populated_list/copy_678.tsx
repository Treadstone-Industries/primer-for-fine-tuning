import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f8719518-ea70-449e-b75b-2b8ee03c3849', title: 'PATENT_TITLE_3845' },
            { id: '07a970a0-8d18-48a0-a074-b1025fbe38f5', title: 'PATENT_TITLE_6594' },
            { id: 'f082a307-72be-4b78-8179-84c594a58432', title: 'PATENT_TITLE_8089' },
            { id: 'b68640ea-3358-447d-8634-d3a640916ac4', title: 'PATENT_TITLE_6371' },
            { id: '8adbd02a-be08-4ac3-9b5d-10e66af414ae', title: 'PATENT_TITLE_7428' },
            { id: 'a796751a-c3c0-4bf3-bc0c-24249a02bc63', title: 'PATENT_TITLE_7843' },
            { id: 'cd433359-671c-4b91-aa7d-315073b01dcf', title: 'PATENT_TITLE_2891' },
            { id: '4123474b-e738-4e5c-b884-4bb7819afa6b', title: 'PATENT_TITLE_1254' },
            { id: '63151bf3-ffb5-449f-8116-970145d0bb72', title: 'PATENT_TITLE_7310' },
            { id: 'b838f1e6-672f-4cd5-9b70-3e9e4e256db2', title: 'PATENT_TITLE_2018' },
        ]}
    />
)

export default App