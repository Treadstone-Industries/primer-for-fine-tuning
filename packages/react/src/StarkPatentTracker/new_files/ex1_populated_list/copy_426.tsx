import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5924f074-aaef-4c60-a920-2f7f6e7d675b', title: 'PATENT_TITLE_7620' },
            { id: '9156cebe-4a25-4622-9149-3ce651122438', title: 'PATENT_TITLE_5037' },
            { id: 'd979c272-e814-42b3-8383-3063ad4c6f3b', title: 'PATENT_TITLE_2454' },
            { id: '03318103-dc30-4295-a164-c58837977b7a', title: 'PATENT_TITLE_3196' },
            { id: '6042f9f0-b943-4424-aba5-b79d944b9693', title: 'PATENT_TITLE_2217' },
            { id: '6d9eb541-e431-498b-96c1-4abb7e4b5abe', title: 'PATENT_TITLE_1497' },
        ]}
    />
)

export default App