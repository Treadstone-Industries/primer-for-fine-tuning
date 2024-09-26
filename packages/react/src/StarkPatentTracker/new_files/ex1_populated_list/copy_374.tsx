import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0781872f-48b9-4a13-8e2c-94dc699c7fcc', title: 'PATENT_TITLE_5625' },
            { id: '31062ef9-17a8-4f24-90e3-61f7d2adbf81', title: 'PATENT_TITLE_5605' },
            { id: 'd2f62658-154f-452a-87b2-c169d04aba58', title: 'PATENT_TITLE_5593' },
            { id: '73ae1666-8e12-4cae-89c2-f2c5e440360b', title: 'PATENT_TITLE_9582' },
            { id: '2196b342-333e-478a-8121-dbc37c0490eb', title: 'PATENT_TITLE_4700' },
            { id: 'c1f1ffdd-81b2-4d54-959a-c511e8ecf313', title: 'PATENT_TITLE_3598' },
            { id: '4b9f1c26-0cd4-4969-8381-c0f5b38a3f6c', title: 'PATENT_TITLE_2293' },
            { id: '191ed548-8635-4e0b-a6e9-6d4060ac94a5', title: 'PATENT_TITLE_2390' },
            { id: 'da328090-ff38-422c-9db4-c98d3394c3fc', title: 'PATENT_TITLE_9814' },
        ]}
    />
)

export default App