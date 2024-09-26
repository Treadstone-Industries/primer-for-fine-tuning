import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f9d20fbc-3705-4828-8fcc-34cf865f5f36', title: 'PATENT_TITLE_3967' },
            { id: 'fe6dd5eb-f815-4a96-aeb3-1ee7f0fa230e', title: 'PATENT_TITLE_6500' },
            { id: 'c3063f18-187b-4de9-b44d-906b123e623e', title: 'PATENT_TITLE_4607' },
            { id: 'f07d521a-4c1c-409b-8953-ce2ca759de16', title: 'PATENT_TITLE_1686' },
        ]}
    />
)

export default App