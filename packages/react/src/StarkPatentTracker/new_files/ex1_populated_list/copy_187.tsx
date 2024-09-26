import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2ce945ed-6d7a-4cad-b805-c7648f930ac9', title: 'PATENT_TITLE_5899' },
            { id: 'f61de302-42c9-4571-9e7d-aa99527478dd', title: 'PATENT_TITLE_5407' },
        ]}
    />
)

export default App