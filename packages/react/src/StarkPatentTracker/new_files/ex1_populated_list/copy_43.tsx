import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '23dea264-0578-41e0-a954-2a9172f7c08a', title: 'PATENT_TITLE_7351' },
            { id: '9bc7a059-ea37-443c-b239-30340c1d996e', title: 'PATENT_TITLE_8059' },
        ]}
    />
)

export default App