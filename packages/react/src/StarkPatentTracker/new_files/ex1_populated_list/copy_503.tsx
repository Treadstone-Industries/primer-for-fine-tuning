import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b8fd016b-3981-41e1-9f70-838c110336c5', title: 'PATENT_TITLE_9036' },
            { id: '669f3827-b3a2-4ecf-a30b-d23822d8aa64', title: 'PATENT_TITLE_6386' },
            { id: '054d48c0-8f08-4df8-8992-36b0ee1b1440', title: 'PATENT_TITLE_1958' },
        ]}
    />
)

export default App