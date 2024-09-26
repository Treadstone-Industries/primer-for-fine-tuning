import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fbaafa7a-2a8d-4e46-8975-dee3f3b99101', title: 'PATENT_TITLE_5084' },
            { id: '3d834d86-b22a-470e-bb3e-65eef4d530a8', title: 'PATENT_TITLE_1934' },
            { id: '1a0e9c8e-0dff-4c4a-8666-dcb33a879847', title: 'PATENT_TITLE_1796' },
            { id: 'e633f3db-408d-4a43-87f1-c75e27e651e7', title: 'PATENT_TITLE_6118' },
            { id: 'e3ed3409-1e2c-47e0-8566-0e46a16f312c', title: 'PATENT_TITLE_7116' },
            { id: 'a8a2b779-2fb0-44f7-8bd8-5f7592c5b6a3', title: 'PATENT_TITLE_1987' },
            { id: 'ea5e263e-66fc-43d0-8aea-73399eceaf88', title: 'PATENT_TITLE_5629' },
            { id: 'fe299e96-6f9b-410c-813e-4284fd919b07', title: 'PATENT_TITLE_2642' },
            { id: '7c15537f-ef0d-449e-98c3-35c96e764c56', title: 'PATENT_TITLE_8863' },
        ]}
    />
)

export default App