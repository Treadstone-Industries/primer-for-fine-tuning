import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b0e6893b-164c-4bb4-8200-eeb4e9d1e6e5', title: 'PATENT_TITLE_7522' },
            { id: 'e0cea9d6-ebd9-4fb6-a68e-8bb54bcb8480', title: 'PATENT_TITLE_8203' },
            { id: '28938085-5a1b-49e6-8d67-05971ff8d8b9', title: 'PATENT_TITLE_9136' },
        ]}
    />
)

export default App