import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '104cf8b8-a707-43fd-be06-24ae86421423', title: 'PATENT_TITLE_2896' },
            { id: '881875e3-0679-4ef4-a409-889388be6964', title: 'PATENT_TITLE_4280' },
        ]}
    />
)

export default App