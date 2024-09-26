import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5639bb78-12c6-4738-8907-7bf4c8f63b28', title: 'PATENT_TITLE_6779' },
            { id: '8dd7966e-4d37-48fc-86f4-6bcb42de1117', title: 'PATENT_TITLE_3027' },
        ]}
    />
)

export default App