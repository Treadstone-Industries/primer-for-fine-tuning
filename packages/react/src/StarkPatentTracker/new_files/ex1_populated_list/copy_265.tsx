import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '22a6b863-7c4e-403d-8116-b52ab3144d4f', title: 'PATENT_TITLE_1573' },
            { id: 'b666a208-3767-4944-a262-e30abca46e7b', title: 'PATENT_TITLE_9595' },
            { id: '57d695a6-f95b-4d5d-bbcc-397dd25a2e55', title: 'PATENT_TITLE_6209' },
        ]}
    />
)

export default App