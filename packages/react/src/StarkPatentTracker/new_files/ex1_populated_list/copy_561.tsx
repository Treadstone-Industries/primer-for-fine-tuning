import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ce2dc5bd-f323-46e8-86f7-33a153fc5295', title: 'PATENT_TITLE_4235' },
            { id: '3e6fcf5f-0f82-45c2-8fe7-050370a71c44', title: 'PATENT_TITLE_7737' },
            { id: 'e6a7875b-fa04-4e6e-8a72-d53d3ed53ff0', title: 'PATENT_TITLE_9266' },
            { id: 'dca9d610-870a-42a2-92f3-ecbeb611804b', title: 'PATENT_TITLE_4711' },
            { id: 'c171eff9-2eda-4c7b-b91d-c0c361e31600', title: 'PATENT_TITLE_6514' },
        ]}
    />
)

export default App