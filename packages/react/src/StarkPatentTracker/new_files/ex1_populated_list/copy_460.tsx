import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7b4896a9-ee7f-4db8-a5eb-ca51b30bdf23', title: 'PATENT_TITLE_4427' },
            { id: '291feafb-8120-4241-a51a-6bca83fc127b', title: 'PATENT_TITLE_1070' },
            { id: 'a6540652-0134-4c5b-ad31-14032cdb1f89', title: 'PATENT_TITLE_3072' },
            { id: 'f748ae79-d033-45f6-b45d-0d93b1eeeb31', title: 'PATENT_TITLE_7091' },
            { id: 'e2b08c4d-3d62-41a5-a821-cbc1a81743a2', title: 'PATENT_TITLE_7792' },
            { id: 'fb848447-1e55-4704-86dc-e767e6188649', title: 'PATENT_TITLE_3398' },
            { id: '1eaf97e7-b090-4fa0-94bc-9fcc46d18884', title: 'PATENT_TITLE_1874' },
            { id: '4418bc71-ca8f-4ff2-85f8-62e097cb6652', title: 'PATENT_TITLE_6591' },
        ]}
    />
)

export default App