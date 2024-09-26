import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4cd890f6-0b84-4d7a-9152-f0b4db9fa18e', title: 'PATENT_TITLE_3200' },
            { id: '7975b658-710d-453e-b213-c5b8a38df029', title: 'PATENT_TITLE_6889' },
            { id: 'a5383867-1eae-443c-8788-1b3b19c7ea79', title: 'PATENT_TITLE_3990' },
        ]}
    />
)

export default App