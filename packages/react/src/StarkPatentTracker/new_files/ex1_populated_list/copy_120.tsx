import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9d1de0ed-7a19-4c5d-b72c-136f9d07ae8f', title: 'PATENT_TITLE_2836' },
            { id: 'ca27ead5-1ca1-4b6d-ae37-614c82208859', title: 'PATENT_TITLE_4282' },
            { id: '3be635a9-c4ec-48bd-bbb7-d67d67254bc2', title: 'PATENT_TITLE_1893' },
        ]}
    />
)

export default App