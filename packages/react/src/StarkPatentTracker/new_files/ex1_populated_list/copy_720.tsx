import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fff07671-5d74-4410-a4ad-6f6f63b4cf6a', title: 'PATENT_TITLE_9189' },
            { id: '8fcd3206-5856-4325-aaa0-6570cf53c702', title: 'PATENT_TITLE_1031' },
            { id: 'd979f441-4091-480f-9267-7a2bbc0562dd', title: 'PATENT_TITLE_7138' },
            { id: '1b78e530-ec87-4cac-be80-ec248b9d4416', title: 'PATENT_TITLE_4620' },
        ]}
    />
)

export default App