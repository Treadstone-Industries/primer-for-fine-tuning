import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8665139a-ea15-41e2-8654-e125afa7549a', title: 'PATENT_TITLE_9161' },
            { id: 'c657bf5c-3382-4c2d-a214-d6e5f192a0d2', title: 'PATENT_TITLE_1622' },
            { id: 'c180b0a2-f268-4a2b-a65e-0b1f1824310c', title: 'PATENT_TITLE_3444' },
            { id: '65746d14-55c2-4af2-9742-09464de5bc65', title: 'PATENT_TITLE_9849' },
            { id: '4db66398-8b45-4545-924d-4865b949b9d8', title: 'PATENT_TITLE_1390' },
            { id: '432c2155-4b4e-42cb-86db-14d3be302025', title: 'PATENT_TITLE_4871' },
            { id: 'b5c812ee-7feb-495a-abaa-eedc188b32c7', title: 'PATENT_TITLE_7739' },
            { id: '4b8354c4-4097-41ed-8c62-07b112323275', title: 'PATENT_TITLE_1295' },
            { id: 'fe1e1ee8-07a6-4825-a837-203c8dd2d60d', title: 'PATENT_TITLE_2979' },
            { id: '6afbaa2f-d95f-44fb-8634-8235bccf8a5f', title: 'PATENT_TITLE_9056' },
        ]}
    />
)

export default App