import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '38a46efb-a8d5-4c31-a09a-c8946aec8534', title: 'PATENT_TITLE_5893' },
            { id: '63b5ac07-dc9b-453c-94a0-d81f1a9c4367', title: 'PATENT_TITLE_1012' },
            { id: '376694fd-c920-4923-ae2b-05512c9b9810', title: 'PATENT_TITLE_9348' },
            { id: '084e2a56-362f-4760-8394-6012d8781bc3', title: 'PATENT_TITLE_1064' },
        ]}
    />
)

export default App