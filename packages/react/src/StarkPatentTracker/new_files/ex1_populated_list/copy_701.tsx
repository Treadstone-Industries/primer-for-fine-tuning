import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c83ca6a0-fd96-4601-ae56-245750121e84', title: 'PATENT_TITLE_8454' },
            { id: '10be85be-b32b-431e-b922-7174bed70345', title: 'PATENT_TITLE_5459' },
            { id: 'd1cb639e-20a9-4e96-853c-fad05aad1d26', title: 'PATENT_TITLE_6102' },
            { id: 'e9a0eb10-9fff-46a9-a037-7490efb1f982', title: 'PATENT_TITLE_4398' },
            { id: 'dfa3a4af-64d3-4ec2-bcae-fe54ec76bcb8', title: 'PATENT_TITLE_6876' },
            { id: '8cc76d76-88f6-4cb0-ab19-600084941366', title: 'PATENT_TITLE_6791' },
            { id: '421e31f1-b6b3-4d28-b693-0b8273b565ec', title: 'PATENT_TITLE_2696' },
            { id: 'e07ad2dd-4810-43ee-a85b-6f1da911ba94', title: 'PATENT_TITLE_7407' },
        ]}
    />
)

export default App