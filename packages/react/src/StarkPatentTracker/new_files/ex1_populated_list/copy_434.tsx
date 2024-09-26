import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dcef33d6-8aa2-4cab-b12c-18281fbbefd9', title: 'PATENT_TITLE_5376' },
            { id: '78ddbe70-8dd8-456f-8c78-e4478e9ac59b', title: 'PATENT_TITLE_9778' },
            { id: 'd9ab9362-87c8-4698-92b8-3af27cb0a542', title: 'PATENT_TITLE_8164' },
            { id: '840a74a9-4cd8-40e5-82d7-1e2e6f7d80da', title: 'PATENT_TITLE_2255' },
            { id: '9b86f597-6359-4f40-8686-291894df2cdd', title: 'PATENT_TITLE_5856' },
        ]}
    />
)

export default App