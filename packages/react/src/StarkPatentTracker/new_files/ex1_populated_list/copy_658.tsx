import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '546a4219-1728-4214-9acd-fd0bc5a9d35a', title: 'PATENT_TITLE_3828' },
            { id: 'cad92ff8-5539-4da2-86ea-ca5d5b17276e', title: 'PATENT_TITLE_5301' },
        ]}
    />
)

export default App