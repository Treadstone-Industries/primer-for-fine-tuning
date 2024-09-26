import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '03d289cb-c6fa-4564-9fae-f27306b36778', title: 'PATENT_TITLE_7744' },
            { id: '3ede0f5b-2356-491b-81ad-6ce9672463f9', title: 'PATENT_TITLE_6378' },
            { id: '9a0b0cbf-0463-4aa4-a754-2b7cf378707e', title: 'PATENT_TITLE_6337' },
            { id: '53884d84-52d0-48e3-958c-193202201952', title: 'PATENT_TITLE_7239' },
            { id: 'f9f2fee5-25ee-461a-bc02-c7994900ea48', title: 'PATENT_TITLE_7120' },
            { id: 'c37f36d0-797e-4ebd-a73e-7cd2305e761b', title: 'PATENT_TITLE_6204' },
            { id: 'e68a6c58-2d00-49d2-90f7-f0d090b2c0fe', title: 'PATENT_TITLE_9765' },
            { id: 'b3ce5b09-dcd9-421b-9446-2cecf7ba9d1a', title: 'PATENT_TITLE_8803' },
            { id: '7902d988-648f-4630-a698-71496d9df090', title: 'PATENT_TITLE_5794' },
        ]}
    />
)

export default App