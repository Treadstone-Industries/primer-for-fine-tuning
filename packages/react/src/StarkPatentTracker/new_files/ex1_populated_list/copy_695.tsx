import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a30340da-89bd-494e-8ef3-ae2b0f623d93', title: 'PATENT_TITLE_5611' },
            { id: 'c76c23d3-a2cd-4380-a006-19a4595f4ba6', title: 'PATENT_TITLE_5598' },
        ]}
    />
)

export default App