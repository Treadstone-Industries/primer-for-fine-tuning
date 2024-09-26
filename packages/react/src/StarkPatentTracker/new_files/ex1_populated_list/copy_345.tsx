import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ea7be40c-e84d-4fb2-b387-987dfdd4fe5c', title: 'PATENT_TITLE_6328' },
            { id: '88587d55-c087-47fb-a237-f3a7a778bbc2', title: 'PATENT_TITLE_2889' },
            { id: '8ba05be7-257e-468e-9965-26dbfa421599', title: 'PATENT_TITLE_9472' },
            { id: '4be790d4-0415-46d5-804a-b92ece10c5e5', title: 'PATENT_TITLE_5869' },
            { id: 'dfde2dbe-5b92-4038-aff9-dd8e03a71c8a', title: 'PATENT_TITLE_9021' },
            { id: '05f18385-97d1-4380-b918-837a7b5eac3a', title: 'PATENT_TITLE_8391' },
        ]}
    />
)

export default App