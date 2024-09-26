import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '20e09afb-b351-4d22-8ca3-fc1e18762eb4', title: 'PATENT_TITLE_6624' },
            { id: '140531d4-1334-4301-b983-fedb8579b780', title: 'PATENT_TITLE_1094' },
            { id: 'c1f4c712-836a-416c-9df6-b268aaebae55', title: 'PATENT_TITLE_3468' },
            { id: '50d9bcca-795c-4b56-bab2-1e7dc7788c37', title: 'PATENT_TITLE_6551' },
            { id: '98bcc4bf-3b1e-4168-894b-9f341e6c56dc', title: 'PATENT_TITLE_4819' },
        ]}
    />
)

export default App