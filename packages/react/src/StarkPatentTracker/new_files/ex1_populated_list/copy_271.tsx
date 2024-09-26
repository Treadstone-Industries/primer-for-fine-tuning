import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '893aa639-7a0e-493d-b6ac-d538a78bd8d2', title: 'PATENT_TITLE_8630' },
            { id: 'e2dbd6cc-6705-48f0-9c73-4cb30884cf7f', title: 'PATENT_TITLE_7015' },
            { id: '13be6029-ef20-4f97-a060-5d61dd9ac214', title: 'PATENT_TITLE_3322' },
        ]}
    />
)

export default App