import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '139a6f01-347d-4412-b201-3833637f45b1', title: 'PATENT_TITLE_6182' },
            { id: '85ded772-2287-41cb-b6da-ae7abbeb1757', title: 'PATENT_TITLE_7970' },
            { id: '030fc733-0344-40fb-b0d9-813adc361473', title: 'PATENT_TITLE_1383' },
            { id: 'd2b7c6e7-d8cd-4612-87cc-10faf91bf82d', title: 'PATENT_TITLE_1539' },
            { id: 'ab8dde1c-7409-4b8d-ae68-214a55f343cd', title: 'PATENT_TITLE_2889' },
        ]}
    />
)

export default App