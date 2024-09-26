import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '43f8da6e-099a-4383-96cf-aa3b90adb77e', title: 'PATENT_TITLE_7602' },
            { id: '1ed99c31-8fa6-4eae-8b84-776f9bd12562', title: 'PATENT_TITLE_2626' },
            { id: '5a8c10df-9b02-4acc-b21a-eb7e8414efc6', title: 'PATENT_TITLE_1150' },
            { id: '5d184d46-db9c-433c-934a-0604b79f8101', title: 'PATENT_TITLE_5876' },
        ]}
    />
)

export default App