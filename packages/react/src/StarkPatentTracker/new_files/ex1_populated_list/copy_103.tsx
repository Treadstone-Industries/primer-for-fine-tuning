import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '489e6d6d-1079-4128-8102-eb953a6105b5', title: 'PATENT_TITLE_4469' },
            { id: '8381d50c-dfc1-4437-b624-b881834a08a5', title: 'PATENT_TITLE_9005' },
            { id: '02567d2f-1680-4402-9bd8-02f27d0ce9ca', title: 'PATENT_TITLE_5779' },
            { id: 'e07678bf-66a0-4e6f-9b64-6621a0936a85', title: 'PATENT_TITLE_4198' },
            { id: 'f797f499-41e0-4bfe-83e8-f94b5343a138', title: 'PATENT_TITLE_6239' },
        ]}
    />
)

export default App