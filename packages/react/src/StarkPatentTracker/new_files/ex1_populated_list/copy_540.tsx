import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f206afce-ecde-44f4-be67-035ea1dc4070', title: 'PATENT_TITLE_2918' },
            { id: 'd0e8b5ae-2107-4cd4-8d61-c8890a27048a', title: 'PATENT_TITLE_7339' },
            { id: '7d4a4cf3-8205-4bf9-b742-c20ca5411bb4', title: 'PATENT_TITLE_1463' },
            { id: '6f67b0db-a485-426b-b63c-bdda76c816e5', title: 'PATENT_TITLE_7330' },
            { id: 'e284b00e-998a-45d4-82c3-147424dd2168', title: 'PATENT_TITLE_3196' },
            { id: 'c42a3e13-7bc5-4a9c-8017-0669d1734643', title: 'PATENT_TITLE_7050' },
            { id: '0e470de6-3a0d-49a1-9965-945c7b05c989', title: 'PATENT_TITLE_4744' },
        ]}
    />
)

export default App