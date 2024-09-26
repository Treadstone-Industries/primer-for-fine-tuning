import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '96747044-756b-4df7-9763-19a2f54d0c29', title: 'PATENT_TITLE_5353' },
            { id: '0ca3b875-f381-469c-9d32-a777566d1c0b', title: 'PATENT_TITLE_3992' },
            { id: '7b9bc328-3d38-4398-a35d-211f8d04074f', title: 'PATENT_TITLE_8618' },
            { id: '19b427de-43b0-4be7-8e2c-fbd7d2cba884', title: 'PATENT_TITLE_5856' },
            { id: '1c99ae7d-f4c3-4554-a400-2e8c2abde8fe', title: 'PATENT_TITLE_2879' },
        ]}
    />
)

export default App