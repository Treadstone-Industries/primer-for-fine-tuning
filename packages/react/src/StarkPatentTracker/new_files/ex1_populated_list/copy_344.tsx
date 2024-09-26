import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd2c701ab-abd6-4fc8-b780-b0d5e5706b17', title: 'PATENT_TITLE_7303' },
            { id: '3db1f9d1-3f06-41de-b944-8c837842ed7e', title: 'PATENT_TITLE_1022' },
            { id: '002ffc1a-8d90-4dfc-8694-2318203c590b', title: 'PATENT_TITLE_3818' },
            { id: 'ad8e2e05-2274-456e-9cce-12470071abab', title: 'PATENT_TITLE_6976' },
            { id: '1f0090d4-84b9-4d5d-b877-ae50132d2b0d', title: 'PATENT_TITLE_7606' },
            { id: 'e705a422-d997-4a52-a524-50fb07426ba0', title: 'PATENT_TITLE_9624' },
            { id: 'c2f9d6f3-39c3-4fb5-9c6e-6ca5c4468f19', title: 'PATENT_TITLE_4009' },
            { id: '5a9496bb-e63f-4cb8-ac03-066a80a35ab8', title: 'PATENT_TITLE_1430' },
            { id: 'd5409015-cc79-4769-9c42-7c571353fabc', title: 'PATENT_TITLE_7512' },
        ]}
    />
)

export default App