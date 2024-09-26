import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ce5f8eda-4e59-43d7-9179-9b98bffd3f88', title: 'PATENT_TITLE_8853' },
            { id: '043366ad-3a83-4d71-abd6-2d49061b3b85', title: 'PATENT_TITLE_2501' },
            { id: 'ab616caf-b4ab-4239-a20e-0c35c061443c', title: 'PATENT_TITLE_4405' },
            { id: '771134a8-944c-4b6d-a5e3-d3ec454c10bf', title: 'PATENT_TITLE_3267' },
            { id: 'cb80975b-79c0-422e-b5de-18f398591e2e', title: 'PATENT_TITLE_6242' },
            { id: '8375c8b2-0540-4a77-abe1-71ebc2fb47b9', title: 'PATENT_TITLE_7518' },
            { id: '4a5eb8de-298b-429e-8c52-fc5660dd7a3d', title: 'PATENT_TITLE_2085' },
            { id: '65124836-6af4-4cb3-a3e7-a130b365f0e6', title: 'PATENT_TITLE_5758' },
            { id: '632b4707-7251-46a1-a7f0-8d18decd6ad4', title: 'PATENT_TITLE_8706' },
        ]}
    />
)

export default App