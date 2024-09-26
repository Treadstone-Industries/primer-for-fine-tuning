import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a973ad86-e46b-4a2a-b90a-17ce4e5f6966', title: 'PATENT_TITLE_8004' },
            { id: '773d7a6f-163c-4c9b-87d3-773d4e0a1ad2', title: 'PATENT_TITLE_9509' },
            { id: '975cc62b-0af5-479f-8885-5977030b3b5f', title: 'PATENT_TITLE_5297' },
            { id: '940c3ec7-44df-44f6-bd1b-0ae16d658879', title: 'PATENT_TITLE_3741' },
            { id: '6d380654-78da-48af-b5fc-81883102ef0f', title: 'PATENT_TITLE_3327' },
        ]}
    />
)

export default App