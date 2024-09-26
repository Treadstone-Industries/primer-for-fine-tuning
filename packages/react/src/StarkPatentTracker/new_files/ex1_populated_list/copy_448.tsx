import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f5391a71-e729-4da2-ac52-3075a04a72aa', title: 'PATENT_TITLE_9469' },
            { id: 'b564c43c-c053-4441-9978-e8272ec7ee57', title: 'PATENT_TITLE_8234' },
            { id: '072974bb-df10-4c09-982e-7bce93ae673a', title: 'PATENT_TITLE_4999' },
            { id: 'f0e44ed2-e04c-4c9a-ba17-962bac02c832', title: 'PATENT_TITLE_8118' },
            { id: '736b104b-97da-4e33-91a3-3e79de3b67e7', title: 'PATENT_TITLE_1469' },
            { id: '1769c281-1398-43ab-95d8-fb2812c203e6', title: 'PATENT_TITLE_7413' },
            { id: '40a13628-63f1-4a33-9063-a4cbe29033c5', title: 'PATENT_TITLE_8383' },
        ]}
    />
)

export default App