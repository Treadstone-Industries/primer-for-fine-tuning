import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '29a6388e-e4e5-42fc-a9f3-e5e91f72f1c3', title: 'PATENT_TITLE_6299' },
            { id: 'b61a96aa-d857-4c9a-b723-43de46a5bca4', title: 'PATENT_TITLE_9844' },
            { id: '392396bd-1357-4e4c-a362-44d7f12fb464', title: 'PATENT_TITLE_6415' },
            { id: 'e0616b14-ac02-4544-accc-818faf048bf6', title: 'PATENT_TITLE_3894' },
            { id: 'ca290166-3e11-40bd-a095-ebe0260dd15e', title: 'PATENT_TITLE_9542' },
            { id: 'bb808ef0-1396-472b-bb30-6398373a8064', title: 'PATENT_TITLE_5005' },
            { id: '76d8b079-a4c4-43b3-a95b-44f9a565b608', title: 'PATENT_TITLE_5069' },
        ]}
    />
)

export default App