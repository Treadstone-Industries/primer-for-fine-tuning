import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'edad135b-ee34-4286-a4b6-629eea055499', title: 'PATENT_TITLE_4348' },
            { id: '53c83b7c-361e-4ee3-8b1e-a1fa8cf661ed', title: 'PATENT_TITLE_3738' },
        ]}
    />
)

export default App