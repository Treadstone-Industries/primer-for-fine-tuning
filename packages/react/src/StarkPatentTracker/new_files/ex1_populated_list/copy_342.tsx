import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0ecc4826-a428-44cc-903b-62168d5bac89', title: 'PATENT_TITLE_4127' },
            { id: '4ef27c2e-af2c-48de-9ab8-d88ed2357b6e', title: 'PATENT_TITLE_1125' },
            { id: 'c1df2265-11fd-4da7-a643-ac8d56b6e528', title: 'PATENT_TITLE_6148' },
            { id: 'd8bf129c-f0d7-418f-b1ba-93ec9e81d2e6', title: 'PATENT_TITLE_7621' },
            { id: '2270b844-a49b-43eb-bee8-8445f2e8ce62', title: 'PATENT_TITLE_9058' },
            { id: 'f04da7f1-4216-47e5-9e82-803716fb1552', title: 'PATENT_TITLE_1975' },
            { id: '65db526a-fe46-40e6-b630-2d629fed7c38', title: 'PATENT_TITLE_9923' },
            { id: '0033d0bf-2eb2-427a-a197-495cc7a57b0f', title: 'PATENT_TITLE_6719' },
            { id: '2acde292-8fdb-4f2c-bcd6-bf083db2bf39', title: 'PATENT_TITLE_6894' },
        ]}
    />
)

export default App