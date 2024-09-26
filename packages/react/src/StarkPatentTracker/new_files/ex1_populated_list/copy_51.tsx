import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c8ebb96d-22a6-4a53-9b18-8e013ae0e9da', title: 'PATENT_TITLE_8404' },
            { id: '59d65f44-4d6f-4f48-a70e-1fa7e219b36b', title: 'PATENT_TITLE_4268' },
            { id: '0a70cb73-8e94-4587-bb81-86a28af8e6df', title: 'PATENT_TITLE_6754' },
            { id: '27b810b2-0f1c-421e-99e1-14bcc7aa98d9', title: 'PATENT_TITLE_7192' },
            { id: '85c68d44-dac8-4a2f-9020-09a52c9943ca', title: 'PATENT_TITLE_6658' },
        ]}
    />
)

export default App