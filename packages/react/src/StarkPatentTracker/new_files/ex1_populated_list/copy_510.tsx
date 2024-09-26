import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5f829ddf-f187-4d16-89bc-a5b6ba20ecb3', title: 'PATENT_TITLE_2232' },
            { id: 'c2fe480b-22b4-4acf-ad98-4908b050e7a1', title: 'PATENT_TITLE_4021' },
            { id: '2dfed2d6-3cd6-4fd9-a50f-9fa55d65b125', title: 'PATENT_TITLE_7940' },
            { id: '56bf1587-894a-4edc-90ee-2459f9ab161b', title: 'PATENT_TITLE_4982' },
            { id: 'c619a7c2-656b-4d14-8bef-1f3155416e24', title: 'PATENT_TITLE_5797' },
        ]}
    />
)

export default App