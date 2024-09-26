import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ae95b5a9-b8bf-4ee6-b468-4991ded30d79', title: 'PATENT_TITLE_3912' },
            { id: '000d8aeb-4488-4915-bcd0-e749731a80c2', title: 'PATENT_TITLE_9063' },
            { id: 'cd167678-f457-4de2-a865-58f2fb69977b', title: 'PATENT_TITLE_9724' },
        ]}
    />
)

export default App