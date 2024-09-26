import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '936abc08-024f-4f78-9423-25c402127873', title: 'PATENT_TITLE_7162' },
            { id: '2bb3ecba-0b1a-4f57-a8cb-3deb40fd5065', title: 'PATENT_TITLE_3631' },
            { id: 'ab86f829-ab32-46e5-82f6-11f1d52b1b77', title: 'PATENT_TITLE_7945' },
            { id: 'fe78009b-c382-429a-adc4-63ba04fe63fc', title: 'PATENT_TITLE_5040' },
        ]}
    />
)

export default App