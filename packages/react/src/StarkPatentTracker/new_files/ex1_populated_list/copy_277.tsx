import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '13df51b1-1122-4a8c-909a-19a56727a8ea', title: 'PATENT_TITLE_2435' },
            { id: 'fda62ddf-1dc2-460c-87db-dde043647309', title: 'PATENT_TITLE_8685' },
            { id: '322c2750-99de-4536-b7f8-70e636c27c94', title: 'PATENT_TITLE_8369' },
        ]}
    />
)

export default App