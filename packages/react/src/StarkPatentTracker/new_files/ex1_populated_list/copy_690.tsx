import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '110a3308-8b81-4022-813b-969155c25ea7', title: 'PATENT_TITLE_4918' },
            { id: 'b4e989c3-e2a5-4817-b9fd-167a773c8a5a', title: 'PATENT_TITLE_1317' },
            { id: 'c61bfc5f-f4d5-403c-930d-04add9aa4daf', title: 'PATENT_TITLE_9666' },
            { id: 'afc0573a-ecb4-4194-b50e-0b0b2ebf52d1', title: 'PATENT_TITLE_6076' },
            { id: 'cd1a8fd2-626c-4537-82e7-3162dc0dc20d', title: 'PATENT_TITLE_4572' },
            { id: '3042de26-d645-41b8-b039-135098419473', title: 'PATENT_TITLE_1842' },
            { id: '2d18a0b8-ce7e-4ff8-baa5-14f949bed06d', title: 'PATENT_TITLE_5210' },
            { id: '84ba70da-4786-430f-9f66-6404f1532a21', title: 'PATENT_TITLE_3374' },
        ]}
    />
)

export default App