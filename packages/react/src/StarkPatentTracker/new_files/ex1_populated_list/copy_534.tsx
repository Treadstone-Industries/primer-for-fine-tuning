import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'da53ffa8-3d0c-4779-b284-d48cfbe1f392', title: 'PATENT_TITLE_6608' },
            { id: '533dbd51-a7e4-4cf0-9e67-0027899b3987', title: 'PATENT_TITLE_6905' },
            { id: '2ed0410e-2aae-4ecb-8177-09a0ccbafa61', title: 'PATENT_TITLE_9128' },
            { id: '3048c491-d4d6-4d20-8fd0-61eba47f9fc7', title: 'PATENT_TITLE_1699' },
            { id: '94be95d3-cd41-44c7-a6d7-b60358463998', title: 'PATENT_TITLE_7313' },
            { id: '3cb5f2ab-bf9a-4813-b0b8-bc0900a53ccf', title: 'PATENT_TITLE_1805' },
            { id: 'cd06ae3b-20ba-48ac-94e3-04d8b51287d2', title: 'PATENT_TITLE_6305' },
            { id: 'd7c43ca1-a365-4bbd-a3dd-b28bdbeb961a', title: 'PATENT_TITLE_8089' },
        ]}
    />
)

export default App