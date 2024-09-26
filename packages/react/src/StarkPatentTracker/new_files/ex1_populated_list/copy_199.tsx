import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b70b2afc-391c-4527-91a9-8f649e6fc233', title: 'PATENT_TITLE_1430' },
            { id: '73619c99-4024-49fb-b56b-c887d5174298', title: 'PATENT_TITLE_7355' },
            { id: '5b9b7960-7a92-4240-925d-4ea5bdab570a', title: 'PATENT_TITLE_7832' },
            { id: 'efe28172-c37b-4679-9f24-6e3648ad222b', title: 'PATENT_TITLE_7153' },
        ]}
    />
)

export default App