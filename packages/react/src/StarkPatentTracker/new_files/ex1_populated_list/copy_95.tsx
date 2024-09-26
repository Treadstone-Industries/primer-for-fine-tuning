import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '14c9d9e0-66e3-4546-bbe5-0ad55e9dd83f', title: 'PATENT_TITLE_5816' },
            { id: 'a492e694-925c-4765-9bee-56ba1007a848', title: 'PATENT_TITLE_4925' },
            { id: 'e1d76de9-bc3b-4d06-976e-2c4d6eb875c6', title: 'PATENT_TITLE_5303' },
            { id: '9e3acf0a-b8f6-47ad-80e1-4f1e19fb31f8', title: 'PATENT_TITLE_4075' },
            { id: '63fd7e03-0652-4b5b-a4a9-c556393d8fcd', title: 'PATENT_TITLE_6997' },
        ]}
    />
)

export default App