import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1ae57796-8533-42c4-9e71-300fed222df8', title: 'PATENT_TITLE_7444' },
            { id: 'fbf7191a-3af9-405e-b8c2-1ae0ec31b57f', title: 'PATENT_TITLE_5670' },
            { id: '268a63ea-51f2-4a8f-a674-83d3dfede735', title: 'PATENT_TITLE_2155' },
            { id: '5e3499ae-9e85-45aa-8f96-e748b6d615bc', title: 'PATENT_TITLE_1892' },
        ]}
    />
)

export default App