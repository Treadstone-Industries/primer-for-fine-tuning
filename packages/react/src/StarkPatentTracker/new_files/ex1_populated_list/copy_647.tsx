import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1c459fe2-5883-4f7f-a948-3c1113b3041f', title: 'PATENT_TITLE_8170' },
            { id: 'b06bfa96-d7cc-4dec-b082-3a50d48f54c0', title: 'PATENT_TITLE_6276' },
            { id: '70409106-0bfd-4823-b6a6-258907703895', title: 'PATENT_TITLE_8788' },
            { id: '80275b31-42c5-4e50-88cc-4b0521686f0e', title: 'PATENT_TITLE_6370' },
            { id: '06e67a1f-6ee8-42d1-8a0c-d5b8c326de23', title: 'PATENT_TITLE_2369' },
            { id: '6388b7a8-3ff1-4658-bc7f-2e434e7a3e03', title: 'PATENT_TITLE_7759' },
        ]}
    />
)

export default App