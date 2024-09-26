import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'be802176-0543-495a-b8cd-07871ddbc136', title: 'PATENT_TITLE_4641' },
            { id: '279b5b10-7a03-477f-9f48-9b0769b4b9e8', title: 'PATENT_TITLE_1092' },
            { id: '69915b0c-6400-44d0-b1d4-86946ceac5c0', title: 'PATENT_TITLE_8615' },
        ]}
    />
)

export default App