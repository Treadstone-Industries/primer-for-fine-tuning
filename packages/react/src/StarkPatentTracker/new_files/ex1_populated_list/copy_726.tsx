import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c5ec7acd-7256-48dc-a436-63d4cd3f7eca', title: 'PATENT_TITLE_2014' },
            { id: 'e9601bbc-313c-4bb5-a19b-ae794847dbb7', title: 'PATENT_TITLE_7755' },
        ]}
    />
)

export default App