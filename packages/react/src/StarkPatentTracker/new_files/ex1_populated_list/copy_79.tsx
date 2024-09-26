import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '90474af4-b648-4dfd-a280-4d38fa940f85', title: 'PATENT_TITLE_9230' },
            { id: '0dad2694-5f88-4d4b-9fa4-f965cd5e7399', title: 'PATENT_TITLE_8401' },
            { id: '08bd644d-bb63-42ca-9df7-af8389c062ec', title: 'PATENT_TITLE_4596' },
        ]}
    />
)

export default App