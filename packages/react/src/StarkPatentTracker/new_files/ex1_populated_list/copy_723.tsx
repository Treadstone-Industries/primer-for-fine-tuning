import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ae3f48a5-66e0-4c82-bea3-fb5968184b34', title: 'PATENT_TITLE_8917' },
            { id: '8f5d1173-8df3-4e39-9ca2-5be450818d3c', title: 'PATENT_TITLE_3758' },
            { id: '3ee136ca-8543-49dd-86a4-9e5068675053', title: 'PATENT_TITLE_3623' },
            { id: '715e8972-565b-46f0-bbc6-be6fa5e88710', title: 'PATENT_TITLE_9094' },
            { id: '4aed63d8-d940-4586-ba2f-49b635bf9539', title: 'PATENT_TITLE_4666' },
            { id: 'dd771408-9268-47ef-b63b-9950072c6c3e', title: 'PATENT_TITLE_3691' },
            { id: 'a75fb0fe-dd43-4fc0-9543-4d1083a4037f', title: 'PATENT_TITLE_1635' },
        ]}
    />
)

export default App