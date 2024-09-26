import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a0707062-9874-4b60-a401-e2d4a1113df4', title: 'PATENT_TITLE_1973' },
            { id: 'b633ce6b-43ca-4a23-8fe0-49e3d8d65f7a', title: 'PATENT_TITLE_7335' },
            { id: 'db92a675-629e-47f9-8a20-82ebf0efff20', title: 'PATENT_TITLE_2664' },
            { id: '3883a282-75a1-4d9d-bbc1-851eff841963', title: 'PATENT_TITLE_5881' },
            { id: '1ff770aa-b31d-4c45-93e7-a385f9753bfe', title: 'PATENT_TITLE_3457' },
        ]}
    />
)

export default App