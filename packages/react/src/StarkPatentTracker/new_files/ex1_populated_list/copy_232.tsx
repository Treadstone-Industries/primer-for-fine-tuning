import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '830ccd01-a045-47c4-bfd2-05f1c455774e', title: 'PATENT_TITLE_2699' },
            { id: 'b5b76f77-0076-4315-9c8f-5ac31e71796c', title: 'PATENT_TITLE_1470' },
        ]}
    />
)

export default App