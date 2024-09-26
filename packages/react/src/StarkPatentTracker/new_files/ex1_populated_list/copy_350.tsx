import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '018bc041-28b6-41c7-a8a3-c04ff1abc804', title: 'PATENT_TITLE_8469' },
            { id: '96956f0c-693c-4b64-9997-ebb63f86bbe9', title: 'PATENT_TITLE_6090' },
            { id: 'c869d24c-074a-47d0-85e7-22969a27f4bc', title: 'PATENT_TITLE_6177' },
            { id: 'c7f6109b-2b31-4b5d-b0b3-d69023b4e568', title: 'PATENT_TITLE_5124' },
            { id: 'e21c8c14-4780-4163-8165-8e48135d6d99', title: 'PATENT_TITLE_2583' },
        ]}
    />
)

export default App