import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6cff56c5-a659-4263-b218-e0aafbb2d783', title: 'PATENT_TITLE_2944' },
            { id: 'd5fe7121-0d62-4173-a5bd-b865bb157bd6', title: 'PATENT_TITLE_4455' },
            { id: '848f054b-469a-4ba4-8d09-edec4f91e262', title: 'PATENT_TITLE_2753' },
            { id: 'da7e44d7-2c77-45ea-91f4-e205d87549bb', title: 'PATENT_TITLE_2465' },
            { id: 'ba92d18d-4ae8-4197-842d-6e76e3e66df0', title: 'PATENT_TITLE_7594' },
            { id: '4a328f08-c915-4e1e-8201-10a416a2c46d', title: 'PATENT_TITLE_4822' },
            { id: '9d4c0987-df31-488b-8196-d53cac2ec44d', title: 'PATENT_TITLE_5684' },
            { id: 'f445719b-64ea-43a0-90f5-fa8192c71b32', title: 'PATENT_TITLE_7931' },
            { id: '8a228527-ae9b-461b-bfbe-bc86feb88610', title: 'PATENT_TITLE_4502' },
        ]}
    />
)

export default App