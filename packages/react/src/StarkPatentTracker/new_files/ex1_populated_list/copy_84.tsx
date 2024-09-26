import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8e20190d-2919-460d-99f7-ce7170808d82', title: 'PATENT_TITLE_5042' },
            { id: '72ab79ee-4072-416e-9b79-3393ecad4771', title: 'PATENT_TITLE_7360' },
            { id: '846f5d5f-99ff-43dd-a80a-41161ae00c6c', title: 'PATENT_TITLE_6778' },
            { id: '40479f9e-d141-4289-96fb-901c5f50a08e', title: 'PATENT_TITLE_5363' },
            { id: '12eb19ea-8f13-41dc-abbb-4c7494646f66', title: 'PATENT_TITLE_2578' },
        ]}
    />
)

export default App