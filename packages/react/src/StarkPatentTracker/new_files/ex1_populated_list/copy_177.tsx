import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'aa790d27-0e46-4380-9925-f55c70c59fff', title: 'PATENT_TITLE_3057' },
            { id: '2152e41f-d902-455f-8404-37ea2caa2fa5', title: 'PATENT_TITLE_8713' },
            { id: '5cd43484-ce00-43cd-812c-fef23b0f681e', title: 'PATENT_TITLE_5831' },
            { id: '26b88634-f27e-4a8c-b6ca-5432a39f03ba', title: 'PATENT_TITLE_2048' },
            { id: '057bb3e1-91cf-41e7-a7ec-39923fc21c51', title: 'PATENT_TITLE_7520' },
        ]}
    />
)

export default App