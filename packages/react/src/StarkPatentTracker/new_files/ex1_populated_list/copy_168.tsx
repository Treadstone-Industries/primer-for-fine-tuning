import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7973bcc2-2f7f-416a-a8f7-67ba6680e208', title: 'PATENT_TITLE_5933' },
            { id: '282ffe07-5c87-4649-9da9-306360ddf441', title: 'PATENT_TITLE_3776' },
        ]}
    />
)

export default App