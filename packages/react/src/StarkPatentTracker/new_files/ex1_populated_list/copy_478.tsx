import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '47a69a57-b6c1-43fd-8bd5-ff09bec98918', title: 'PATENT_TITLE_2861' },
            { id: '8eca1f11-cab6-4449-821d-97274db2664f', title: 'PATENT_TITLE_9461' },
            { id: '6caccfcf-62a3-484a-b7bc-ac8ca5a8c152', title: 'PATENT_TITLE_2883' },
            { id: '14e30260-f841-40af-8b85-f80a1fb3fc6c', title: 'PATENT_TITLE_4982' },
            { id: '22e3d3f2-b909-4578-a9c3-5f56c02e1c2d', title: 'PATENT_TITLE_7665' },
        ]}
    />
)

export default App