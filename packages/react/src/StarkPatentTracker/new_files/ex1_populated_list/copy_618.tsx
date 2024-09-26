import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c013e10e-0774-41ad-b77e-142c16ae8ec9', title: 'PATENT_TITLE_4150' },
            { id: '2c143894-96c9-411c-a858-6db4531a17f2', title: 'PATENT_TITLE_8543' },
            { id: '49700025-e491-4cc0-a9b5-974720f54d33', title: 'PATENT_TITLE_8417' },
            { id: '91461833-e2ea-4028-b6b1-882228a0159a', title: 'PATENT_TITLE_1447' },
            { id: 'b5ab8919-ed82-4e17-a60c-ebb65fdc7c42', title: 'PATENT_TITLE_6989' },
            { id: '9b383119-d666-4c69-952f-78f832f00de0', title: 'PATENT_TITLE_8704' },
        ]}
    />
)

export default App