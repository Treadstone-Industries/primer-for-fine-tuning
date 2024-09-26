import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '79c378ea-5a41-481f-91d8-90d42e36c652', title: 'PATENT_TITLE_9339' },
            { id: 'f66ba68a-d4fb-4ef0-b34e-4ff14ee153ac', title: 'PATENT_TITLE_2113' },
            { id: '20f35833-8859-4af7-aa6b-42a360b1538c', title: 'PATENT_TITLE_6790' },
        ]}
    />
)

export default App