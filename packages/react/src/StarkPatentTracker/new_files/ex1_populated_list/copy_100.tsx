import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dc58842d-67f6-40b5-b4aa-b85a23143d88', title: 'PATENT_TITLE_1884' },
            { id: '62715aea-2065-41a6-8484-f5df4bff988a', title: 'PATENT_TITLE_7224' },
            { id: 'a72fd819-e527-42eb-b0bf-2490b56218f0', title: 'PATENT_TITLE_4463' },
            { id: '593a4e4a-1d38-4c69-80d8-33b2b83eba0d', title: 'PATENT_TITLE_2265' },
            { id: 'c61caf1a-7627-4f0e-b7dc-ae4ab38a63fe', title: 'PATENT_TITLE_2871' },
            { id: 'ea14233f-61dd-4a40-8abe-c6c897554dba', title: 'PATENT_TITLE_7141' },
            { id: '06f15cda-d413-4823-b9bc-3b02f7f9ff0c', title: 'PATENT_TITLE_8784' },
            { id: 'f842090d-1df8-48ad-b708-b3732c2ae629', title: 'PATENT_TITLE_1896' },
            { id: '98bdf3c9-6cf3-43b4-a883-8499532ab4f9', title: 'PATENT_TITLE_4696' },
        ]}
    />
)

export default App