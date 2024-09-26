import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '94650a95-d1f6-46dd-a16f-92f6f73a2992', title: 'PATENT_TITLE_5226' },
            { id: 'd8a4f8d0-5f7a-4135-b652-c531ba747484', title: 'PATENT_TITLE_6357' },
            { id: 'f504f018-080d-408c-ab70-26c2540e2bcf', title: 'PATENT_TITLE_1459' },
            { id: '71f2dc9b-7900-470e-91a0-1940e941ebd9', title: 'PATENT_TITLE_1646' },
            { id: '36b564c5-7abc-405b-9a9b-53dedc17e294', title: 'PATENT_TITLE_1899' },
            { id: '6505a009-e2d8-4de6-ab19-1fddddf604c9', title: 'PATENT_TITLE_7108' },
            { id: 'd2070575-4282-4beb-9ef7-4716f45df7a3', title: 'PATENT_TITLE_6484' },
            { id: '3d09ebd9-2aea-4a68-bfc5-b6483ecb1df8', title: 'PATENT_TITLE_1761' },
            { id: '7426feff-c4e5-4d19-bce0-b0347e7180ef', title: 'PATENT_TITLE_2306' },
        ]}
    />
)

export default App