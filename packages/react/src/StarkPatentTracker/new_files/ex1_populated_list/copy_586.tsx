import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2c699a8c-eabf-421c-8d39-3b810d7d24e9', title: 'PATENT_TITLE_8515' },
            { id: '607a2a72-39c1-4fda-aeba-95eee28bcf5d', title: 'PATENT_TITLE_9186' },
            { id: 'c5ed18f3-5144-4ce1-8c0a-784eb50e84cb', title: 'PATENT_TITLE_1992' },
            { id: '328e3c90-79a0-40f0-82c5-b08e0bae805d', title: 'PATENT_TITLE_9199' },
            { id: '84d40397-9eb5-4bbb-ab24-a72665e0ba37', title: 'PATENT_TITLE_3739' },
            { id: 'afb2c189-01ad-4626-964a-945159b1827f', title: 'PATENT_TITLE_9057' },
            { id: 'cfdde624-798e-484d-aefd-ede9e30f01c6', title: 'PATENT_TITLE_3959' },
            { id: '02912d37-c29a-4006-9490-3d0835f0d479', title: 'PATENT_TITLE_8956' },
            { id: '167ed324-a5ee-4f7f-86f7-784d81775da7', title: 'PATENT_TITLE_9777' },
        ]}
    />
)

export default App