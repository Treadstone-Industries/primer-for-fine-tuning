import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c04e47ab-1f56-4e61-8e31-c7424556fb27', title: 'PATENT_TITLE_1485' },
            { id: '4c55dc47-3306-45c8-85d0-af68435de256', title: 'PATENT_TITLE_2698' },
            { id: '1b3c7c77-c0b2-4bc6-8f86-bb8de9077105', title: 'PATENT_TITLE_2409' },
            { id: '9232d3e8-8341-4309-82b8-4b6ee958a8c8', title: 'PATENT_TITLE_3770' },
            { id: '55b4336f-e31b-4e44-878b-9b7eee9e3151', title: 'PATENT_TITLE_4962' },
            { id: '7acd4922-4db3-4e0a-9eb3-2a7a06092524', title: 'PATENT_TITLE_4059' },
            { id: '7fc6b800-b838-46c9-9fc7-766f4403c120', title: 'PATENT_TITLE_1552' },
            { id: 'df583aac-2a73-42ad-8596-0b28122003d0', title: 'PATENT_TITLE_2137' },
            { id: '40d9a141-2dfc-4809-b883-f657c2038f3b', title: 'PATENT_TITLE_2636' },
        ]}
    />
)

export default App