import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '66d1597d-04b7-496a-a435-b1ffc0807aaa', title: 'PATENT_TITLE_9328' },
            { id: 'c67db911-9ec4-42da-836e-335fbd10e6ba', title: 'PATENT_TITLE_3441' },
            { id: '9712458c-b2e2-4095-ae1f-1bd5298d7868', title: 'PATENT_TITLE_2121' },
            { id: 'feddb05e-9608-404e-84b8-94c68f7212d2', title: 'PATENT_TITLE_4537' },
            { id: '45ade69e-14ec-4387-bfec-c808a653f17b', title: 'PATENT_TITLE_2514' },
        ]}
    />
)

export default App