import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd3b05e87-fa3a-4a25-9dad-5736ca1cab87', title: 'PATENT_TITLE_9604' },
            { id: '0a3baaa6-6144-4bf0-9755-ca3e6bd026b2', title: 'PATENT_TITLE_5423' },
            { id: 'ed4d4b7b-7d2d-462f-9fdc-946f138a3206', title: 'PATENT_TITLE_9590' },
            { id: '781e4d02-a3a8-4811-81d7-19b3c3a2ffbf', title: 'PATENT_TITLE_7219' },
            { id: '2a89e81f-c2ea-45db-8666-a7d86f686b6e', title: 'PATENT_TITLE_1063' },
            { id: '9d447487-886c-4463-97b3-63c484caf221', title: 'PATENT_TITLE_2467' },
            { id: '17e16a55-f0df-4e58-b192-57f16c784e62', title: 'PATENT_TITLE_7992' },
            { id: '82afed14-fc6d-4782-bb71-9b8f394d0057', title: 'PATENT_TITLE_3014' },
            { id: '35bf0563-6a71-4fab-9c82-b933b1a909d7', title: 'PATENT_TITLE_6958' },
        ]}
    />
)

export default App