import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '978d81d5-fcc6-4c0a-920b-a02840726f4d', title: 'PATENT_TITLE_4182' },
            { id: 'ed255a82-1d1c-4dd1-abdd-c49651294b90', title: 'PATENT_TITLE_7508' },
            { id: 'bc211284-ffd5-48e7-b5e4-7b3a7f1bc2fe', title: 'PATENT_TITLE_6366' },
        ]}
    />
)

export default App