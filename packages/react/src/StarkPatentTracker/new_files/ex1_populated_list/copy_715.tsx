import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '75a1b3f5-56ec-4388-9532-17f0053fdf59', title: 'PATENT_TITLE_2229' },
            { id: '83fd75c3-8b91-4faf-8828-d48004af4e93', title: 'PATENT_TITLE_2421' },
        ]}
    />
)

export default App