import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '46822613-41af-4b36-861a-5ecee219ecfc', title: 'PATENT_TITLE_6440' },
            { id: 'df29e415-fbf9-448c-84af-899bc15c0461', title: 'PATENT_TITLE_6990' },
            { id: '415fe7cb-6829-4c0e-88c4-b8c784d1e19d', title: 'PATENT_TITLE_6827' },
        ]}
    />
)

export default App