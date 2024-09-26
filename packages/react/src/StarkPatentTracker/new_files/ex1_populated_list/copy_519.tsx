import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '83fbd314-9f55-476d-9568-643a77ea6c3a', title: 'PATENT_TITLE_3101' },
            { id: 'f4fc1663-dd26-4d1f-b4ea-bda422151d8b', title: 'PATENT_TITLE_8872' },
            { id: '812a3402-0d40-413e-9b39-d1d2561aae87', title: 'PATENT_TITLE_4342' },
            { id: 'ca38f422-f6e9-4628-a61e-1ce3e52654e4', title: 'PATENT_TITLE_5282' },
            { id: 'a8cca032-0ff9-4d94-8fd6-01d414cf356f', title: 'PATENT_TITLE_3715' },
            { id: 'fe3829eb-2b5a-44ef-b9ac-00cd87958d53', title: 'PATENT_TITLE_2604' },
            { id: 'a6c0b3db-f109-4dfa-814e-38897556791d', title: 'PATENT_TITLE_2048' },
        ]}
    />
)

export default App