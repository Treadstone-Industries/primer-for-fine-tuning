import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3471d5a5-6f4f-4de5-8c3c-2a00c8e0059b', title: 'PATENT_TITLE_5218' },
            { id: 'aa3583bf-1cb0-4b2d-927b-b23bb0cf14a0', title: 'PATENT_TITLE_2305' },
            { id: 'be375723-4198-451d-9396-830e522e64a0', title: 'PATENT_TITLE_8321' },
            { id: '85dc793b-c5bb-4cd4-8997-7f35add3ff3c', title: 'PATENT_TITLE_9394' },
            { id: '620d7b5d-eee2-4c42-bc82-d04a59187b3a', title: 'PATENT_TITLE_7410' },
            { id: '7d17ff62-a87a-449f-ab2b-b6bc0418e325', title: 'PATENT_TITLE_9900' },
            { id: 'd64b4351-e2e6-4f0a-8407-0dbff73fb659', title: 'PATENT_TITLE_3793' },
            { id: '7e691d6a-4a35-4a93-8053-2e489337c846', title: 'PATENT_TITLE_4731' },
            { id: '25a8f3e8-a9b4-4f2e-ac6b-f421adbf9211', title: 'PATENT_TITLE_5154' },
        ]}
    />
)

export default App