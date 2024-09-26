import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1d089e6f-2050-448a-add9-5a858869f94d', title: 'PATENT_TITLE_2658' },
            { id: '820aee1e-bafb-4540-95b6-34c52b01dcbf', title: 'PATENT_TITLE_2735' },
        ]}
    />
)

export default App