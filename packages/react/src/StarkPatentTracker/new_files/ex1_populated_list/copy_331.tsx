import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '794fe34f-8853-49ff-b457-f636445185dc', title: 'PATENT_TITLE_9101' },
            { id: '2a14a152-5b75-4726-ab31-bf272d8ad1f5', title: 'PATENT_TITLE_2503' },
        ]}
    />
)

export default App