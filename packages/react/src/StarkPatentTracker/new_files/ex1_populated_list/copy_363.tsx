import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bcf7b9ba-0510-4321-ba6b-7f54ca69d522', title: 'PATENT_TITLE_6512' },
            { id: '976ab856-3b6d-4afe-bddf-9e82c111375c', title: 'PATENT_TITLE_3219' },
            { id: 'b5fd9ca8-28ba-4717-9b7b-22498ec93672', title: 'PATENT_TITLE_4764' },
            { id: '21ca230a-bee4-4d87-8fd2-44940c1f87d7', title: 'PATENT_TITLE_8780' },
            { id: '3fa3fd08-6b9d-46d9-8f08-7e440fcbe040', title: 'PATENT_TITLE_4348' },
            { id: 'a0dbedd7-60e3-46be-9d7c-16ac3605bb72', title: 'PATENT_TITLE_1553' },
            { id: '1b6005bb-73fa-476b-b8e6-1a66d8a0cc10', title: 'PATENT_TITLE_8499' },
            { id: '9242bef1-813d-4229-b1b6-53c4449f4828', title: 'PATENT_TITLE_3509' },
            { id: '10feb247-a6bf-4f20-b829-ff6807341d27', title: 'PATENT_TITLE_3914' },
        ]}
    />
)

export default App