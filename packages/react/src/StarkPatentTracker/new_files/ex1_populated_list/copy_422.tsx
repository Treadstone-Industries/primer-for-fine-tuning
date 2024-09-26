import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b76efbb3-ea54-4eb5-9c43-b87b2f7e728e', title: 'PATENT_TITLE_1483' },
            { id: '919c835b-e559-4cb2-afe5-5df99d1a322e', title: 'PATENT_TITLE_6428' },
            { id: '1e6358b7-e8fc-4cd3-9c1e-139e484be612', title: 'PATENT_TITLE_1890' },
            { id: 'e9bf8cc6-2acb-4e58-9ae9-5d5601306752', title: 'PATENT_TITLE_5273' },
            { id: 'ddcf598a-9e28-449f-8b4a-cfccc8039d1f', title: 'PATENT_TITLE_9777' },
        ]}
    />
)

export default App