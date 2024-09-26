import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '00b36ae9-d508-41ca-b8b8-24822fbf5f78', title: 'PATENT_TITLE_3538' },
            { id: '5a80c891-2a2c-4ebe-b784-2c41c8a2ccd9', title: 'PATENT_TITLE_5775' },
            { id: '6b462f07-acd1-4692-a35d-3932e1a4d58f', title: 'PATENT_TITLE_7477' },
        ]}
    />
)

export default App