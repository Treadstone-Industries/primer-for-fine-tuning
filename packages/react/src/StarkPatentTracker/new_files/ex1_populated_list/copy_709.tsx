import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '47d95347-06ac-4877-9932-07477188e349', title: 'PATENT_TITLE_2285' },
            { id: '9517e911-a7d7-46ae-af97-9507d2250d3d', title: 'PATENT_TITLE_3346' },
            { id: '0adce75c-5558-4c9a-a4ee-52891b7f67a8', title: 'PATENT_TITLE_2318' },
            { id: '57bcdf58-27f0-4a1c-b4f0-cd7e2682feea', title: 'PATENT_TITLE_6654' },
            { id: 'b2152cb2-ecb3-42b2-914e-7461b7dc508b', title: 'PATENT_TITLE_9627' },
        ]}
    />
)

export default App