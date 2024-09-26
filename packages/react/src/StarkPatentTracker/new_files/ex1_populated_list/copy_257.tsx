import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cfe3842b-47b8-4ece-9706-38b2ae8c2f52', title: 'PATENT_TITLE_6055' },
            { id: '31e62f48-98e2-44db-9d6b-d656737aa1f6', title: 'PATENT_TITLE_7294' },
        ]}
    />
)

export default App