import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bb096b2f-8480-4090-9ac2-7c8f126f4b03', title: 'PATENT_TITLE_6904' },
            { id: '614c332f-b74c-4273-9723-ff6c10bac029', title: 'PATENT_TITLE_7777' },
            { id: 'b92daf83-a711-48e0-81da-c8674cd9f57b', title: 'PATENT_TITLE_5839' },
            { id: 'f7578bab-6d60-4dd5-9168-a955d2b9d6f1', title: 'PATENT_TITLE_3898' },
        ]}
    />
)

export default App