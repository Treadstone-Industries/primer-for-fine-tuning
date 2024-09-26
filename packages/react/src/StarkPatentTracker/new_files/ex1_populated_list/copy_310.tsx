import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f9d7937b-3737-439e-87bf-f5133f492617', title: 'PATENT_TITLE_6496' },
            { id: 'e185740c-fa00-4d86-8d90-21a652048d44', title: 'PATENT_TITLE_4178' },
            { id: '5d3cf90f-f0bd-4ffa-b41c-b26d9933438b', title: 'PATENT_TITLE_5176' },
            { id: '864615a6-f998-4ea1-abab-937810c9e740', title: 'PATENT_TITLE_9286' },
            { id: '4608e9f9-f4a1-4e27-b77a-09685b7d7bf3', title: 'PATENT_TITLE_1553' },
            { id: 'c6d06e96-7a14-4ec0-8f4d-08436d5b26e3', title: 'PATENT_TITLE_4528' },
            { id: 'af7ffa65-b961-4df5-99bc-9b25a68a848b', title: 'PATENT_TITLE_3008' },
        ]}
    />
)

export default App