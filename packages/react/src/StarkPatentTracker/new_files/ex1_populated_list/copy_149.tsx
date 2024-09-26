import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '81daa12f-849c-433a-8690-aa6a3e88a149', title: 'PATENT_TITLE_9090' },
            { id: '56f97716-e95d-4106-9412-fce717ebe258', title: 'PATENT_TITLE_7201' },
            { id: '877e62fe-ddf3-4447-92b2-0ce9ed3ce931', title: 'PATENT_TITLE_6448' },
            { id: '0e268144-9d4d-47b1-bc01-ce76eb8360a3', title: 'PATENT_TITLE_8486' },
            { id: 'b77fb74f-58f0-4e23-810f-62efe901d7f2', title: 'PATENT_TITLE_3438' },
        ]}
    />
)

export default App