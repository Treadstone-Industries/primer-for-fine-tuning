import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b43dc8fa-d8bc-44e6-9903-6b8e9483cff1', title: 'PATENT_TITLE_4890' },
            { id: '88cbfb23-03e3-4fe4-b2b2-d8db17eac7de', title: 'PATENT_TITLE_3724' },
            { id: '8c4d8863-f3c3-4f13-ac69-93b74bace832', title: 'PATENT_TITLE_9203' },
            { id: '943d4bb0-46b6-4030-91a0-03d6ec5bae70', title: 'PATENT_TITLE_9251' },
        ]}
    />
)

export default App