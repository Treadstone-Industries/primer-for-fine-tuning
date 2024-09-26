import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'eab641f4-710d-434a-8b52-22906f631f32', title: 'PATENT_TITLE_1638' },
            { id: '97731857-8671-46a9-9d5b-1a67527b89e8', title: 'PATENT_TITLE_4303' },
            { id: 'dba0b454-9689-4ca0-8592-b6889f1fb040', title: 'PATENT_TITLE_3101' },
            { id: 'f0e71032-8167-4c77-a0c7-bd196b3850d6', title: 'PATENT_TITLE_9835' },
        ]}
    />
)

export default App