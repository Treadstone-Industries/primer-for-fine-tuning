import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0df11a19-d8ac-4005-8139-0fbe08a124ab', title: 'PATENT_TITLE_5131' },
            { id: '1bc05d65-83a8-440c-9824-cafb2e50dd50', title: 'PATENT_TITLE_8426' },
            { id: '994f1cca-e40e-4224-a1ec-238883e24f69', title: 'PATENT_TITLE_3760' },
            { id: '684d673b-034e-4371-962e-cff40ce7a4fb', title: 'PATENT_TITLE_9632' },
            { id: '672949df-4136-4220-81fe-fc6d5301b75c', title: 'PATENT_TITLE_2233' },
        ]}
    />
)

export default App