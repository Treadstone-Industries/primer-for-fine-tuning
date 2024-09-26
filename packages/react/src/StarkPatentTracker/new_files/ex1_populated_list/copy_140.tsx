import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '92d45ae4-8e3d-4838-b643-8d0df96c061b', title: 'PATENT_TITLE_6816' },
            { id: '1a9d84a8-6d87-4d28-b8e0-e72ce764a739', title: 'PATENT_TITLE_8143' },
            { id: 'be862f39-9205-49d2-b5b1-c9076e450cd1', title: 'PATENT_TITLE_8795' },
            { id: '22449f9b-03fd-482e-abcc-5d22167265c0', title: 'PATENT_TITLE_8904' },
            { id: 'b55b9845-a6dc-41d8-a326-a9365492340b', title: 'PATENT_TITLE_6403' },
        ]}
    />
)

export default App