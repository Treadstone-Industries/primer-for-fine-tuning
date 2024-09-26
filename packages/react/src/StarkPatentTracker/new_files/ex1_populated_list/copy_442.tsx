import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ad5c6320-e907-42a5-b4f5-8119294a7f93', title: 'PATENT_TITLE_2960' },
            { id: 'ff593cc1-de6f-4ffe-917e-7b494ce844b5', title: 'PATENT_TITLE_2649' },
        ]}
    />
)

export default App