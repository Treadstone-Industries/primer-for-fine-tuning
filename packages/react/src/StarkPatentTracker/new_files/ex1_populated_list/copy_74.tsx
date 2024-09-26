import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'af1be49b-8d33-4fa1-acdc-9639c04d653b', title: 'PATENT_TITLE_4972' },
            { id: 'e497278e-3d74-49c1-87a1-1b27cdc08f88', title: 'PATENT_TITLE_5473' },
            { id: 'ceb74c04-d9b2-458b-835f-a0fa9ff00677', title: 'PATENT_TITLE_7065' },
            { id: '1a14b00a-bb6d-4b44-9b40-83e41377f1e5', title: 'PATENT_TITLE_5402' },
        ]}
    />
)

export default App