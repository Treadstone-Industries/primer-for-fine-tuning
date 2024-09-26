import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ea06eb9f-55bd-4269-9ea8-100f91f7d442', title: 'PATENT_TITLE_5365' },
            { id: 'bf3bae6e-c118-4390-9b3a-fd376093649f', title: 'PATENT_TITLE_4802' },
            { id: '9b91c3a3-6dc5-4d77-aabb-320cb7663bbf', title: 'PATENT_TITLE_7513' },
            { id: '1250dbfc-f018-446a-b063-139a7e54b028', title: 'PATENT_TITLE_3724' },
        ]}
    />
)

export default App