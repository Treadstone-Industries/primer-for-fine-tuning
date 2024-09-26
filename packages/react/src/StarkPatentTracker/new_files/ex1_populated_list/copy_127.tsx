import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0676da73-9467-4625-ae5a-4fef9394eba0', title: 'PATENT_TITLE_2148' },
            { id: 'f5f6a0c5-7801-4da1-a120-da4304fac41e', title: 'PATENT_TITLE_3886' },
            { id: '92a618bc-2d13-47b7-9ae2-3ec435f98210', title: 'PATENT_TITLE_8212' },
        ]}
    />
)

export default App