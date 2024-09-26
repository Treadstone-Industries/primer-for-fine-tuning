import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '599a929d-53af-471d-aa4a-8fac7a75e470', title: 'PATENT_TITLE_3269' },
            { id: 'bb62b8ee-e6c9-41f1-8b22-69c81ffcd97f', title: 'PATENT_TITLE_2264' },
            { id: '7c685806-7c9f-42f4-96c1-9078edc90e57', title: 'PATENT_TITLE_9279' },
        ]}
    />
)

export default App