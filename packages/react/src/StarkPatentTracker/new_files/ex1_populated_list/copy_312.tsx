import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '062f033b-db1c-4b7c-a93c-191cf38ad033', title: 'PATENT_TITLE_8946' },
            { id: '805d0225-1d31-4992-8bb8-fb158e97ece8', title: 'PATENT_TITLE_7985' },
            { id: '1ad25730-9dbd-4239-8715-580ba50c033a', title: 'PATENT_TITLE_3229' },
        ]}
    />
)

export default App