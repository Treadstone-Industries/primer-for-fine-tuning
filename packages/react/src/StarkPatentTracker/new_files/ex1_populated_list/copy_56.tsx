import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bfbe2937-f9a2-4a6d-b1e6-3152697bf41a', title: 'PATENT_TITLE_1228' },
            { id: '372b2fbe-eae8-4f78-a37f-f74c5bf57950', title: 'PATENT_TITLE_1511' },
            { id: 'f036b44b-c471-421b-b864-d47fac943628', title: 'PATENT_TITLE_5005' },
            { id: '95d617b8-53b7-4f90-803b-a25f7c9e42a5', title: 'PATENT_TITLE_8227' },
            { id: '9e8dad20-fd6d-48c0-a981-6ca5caa60592', title: 'PATENT_TITLE_8068' },
            { id: '5e2bc985-c236-45f2-9cdd-ab93cd20fd3b', title: 'PATENT_TITLE_6919' },
            { id: '46c75956-76f7-44a1-a947-1d2938a6cbd0', title: 'PATENT_TITLE_8701' },
        ]}
    />
)

export default App