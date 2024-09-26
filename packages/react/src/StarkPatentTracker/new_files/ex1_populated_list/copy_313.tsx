import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1195a38c-eb7e-4c74-8ded-36ed63e6592b', title: 'PATENT_TITLE_6655' },
            { id: '532dd973-dd0f-4fdb-8698-c8fc45fa91c7', title: 'PATENT_TITLE_8903' },
        ]}
    />
)

export default App