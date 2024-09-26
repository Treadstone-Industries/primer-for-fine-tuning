import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '43d8409c-f57b-4619-9635-191bd5d7400d', title: 'PATENT_TITLE_1049' },
            { id: '21596406-156e-469b-a133-86e2517cf515', title: 'PATENT_TITLE_2644' },
        ]}
    />
)

export default App