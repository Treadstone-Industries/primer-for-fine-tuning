import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '62bbfdfd-99a6-4933-8903-6c8212ba36a5', title: 'PATENT_TITLE_4277' },
            { id: '06e3cbb6-6177-43ce-afc6-b35304ae0d02', title: 'PATENT_TITLE_8114' },
            { id: '0533fba0-27a7-4d1d-a787-3fe11a93c8f3', title: 'PATENT_TITLE_6045' },
            { id: '542628f5-f699-4a28-91aa-d7918e345126', title: 'PATENT_TITLE_1253' },
        ]}
    />
)

export default App