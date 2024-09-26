import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e2b97659-c267-4d05-b5f8-362714c45b1d', title: 'PATENT_TITLE_4304' },
            { id: 'f34349d3-aa96-41f3-8ea9-366fc03d1c1d', title: 'PATENT_TITLE_5034' },
            { id: 'ffbe92cd-fcf5-43f1-9693-3a4b450d5df1', title: 'PATENT_TITLE_1722' },
        ]}
    />
)

export default App