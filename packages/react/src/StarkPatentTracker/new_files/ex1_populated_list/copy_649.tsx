import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '92ce62b4-8fe2-4760-b53e-af98c1d36121', title: 'PATENT_TITLE_2111' },
            { id: '402e8935-073f-4ca1-bfca-eda67e89e039', title: 'PATENT_TITLE_6051' },
            { id: 'ad638de9-ac53-48ce-bb13-076bcf0d1a9e', title: 'PATENT_TITLE_9557' },
        ]}
    />
)

export default App