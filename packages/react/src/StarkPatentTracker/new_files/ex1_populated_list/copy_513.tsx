import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '18e6248c-3caa-4e0a-9aee-6493876406e3', title: 'PATENT_TITLE_4442' },
            { id: 'c62a629a-5200-4e03-af4d-bc46e9b8d120', title: 'PATENT_TITLE_5689' },
            { id: '1ba1981a-1e77-4106-ba6d-fd42475bb867', title: 'PATENT_TITLE_4304' },
            { id: '8b2fee3e-fce8-4c24-b940-145c1c0fc0ad', title: 'PATENT_TITLE_1706' },
        ]}
    />
)

export default App