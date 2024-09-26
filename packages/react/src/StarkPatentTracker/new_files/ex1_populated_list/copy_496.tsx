import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ba1a50f4-dc3a-4049-bd2a-34f72d7b79b6', title: 'PATENT_TITLE_9014' },
            { id: '670f016b-f3c5-47b5-824a-b1281716f34a', title: 'PATENT_TITLE_6154' },
        ]}
    />
)

export default App