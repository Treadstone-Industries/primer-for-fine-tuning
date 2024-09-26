import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5d0ccc64-a325-416b-b859-69313ac51349', title: 'PATENT_TITLE_6503' },
            { id: 'b53ce8a2-5621-4fd0-90d0-a5753c61efd2', title: 'PATENT_TITLE_7501' },
            { id: 'afbe20e8-3564-434f-aaf4-b5b335ec7d77', title: 'PATENT_TITLE_6751' },
        ]}
    />
)

export default App