import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '352b3fef-dacf-411f-bd0f-a9df12505688', title: 'PATENT_TITLE_6023' },
            { id: '954c2af4-56b8-4ccf-b931-7ce7e697f790', title: 'PATENT_TITLE_6010' },
            { id: 'e1e76743-959a-417a-9d8a-7247f52967cb', title: 'PATENT_TITLE_5450' },
            { id: '3c2aa1a9-50d7-4f85-aee8-679f1a49647d', title: 'PATENT_TITLE_7641' },
            { id: 'bfdc8256-e783-40eb-ac22-259e85059721', title: 'PATENT_TITLE_7064' },
        ]}
    />
)

export default App