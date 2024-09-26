import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '495be1de-70ef-4b19-bdad-95f9bd13233e', title: 'PATENT_TITLE_9774' },
            { id: '3440b1bb-05f1-4533-92ed-e0b97042f170', title: 'PATENT_TITLE_3220' },
            { id: '4344adc8-fc38-49ad-bf7a-efb5d34da851', title: 'PATENT_TITLE_5575' },
            { id: 'ad4f8306-83fd-40a0-b8c1-47a464fb6d53', title: 'PATENT_TITLE_9580' },
            { id: 'e56166ec-8ff9-4ef5-b6d9-9c3a3fed3ea7', title: 'PATENT_TITLE_9268' },
            { id: '6565be0a-1f31-4e5c-b9c6-7a95459bc2f0', title: 'PATENT_TITLE_2155' },
            { id: '833d60a6-c5ff-4a83-9441-aa3190f8be7f', title: 'PATENT_TITLE_7499' },
            { id: '9a71c6ff-c7fb-48fd-8df4-cd3ff4b2a055', title: 'PATENT_TITLE_6757' },
        ]}
    />
)

export default App