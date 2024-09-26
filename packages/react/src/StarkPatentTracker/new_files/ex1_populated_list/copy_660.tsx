import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a6d59e15-bd37-4472-a8f4-82a7fec8a8d8', title: 'PATENT_TITLE_6243' },
            { id: 'a3c860d8-f9e0-4589-9920-36c6e2ddca1a', title: 'PATENT_TITLE_3555' },
            { id: 'dbcec0e4-b142-4c02-bbf4-4d58549da21e', title: 'PATENT_TITLE_1065' },
            { id: 'cf1ff56d-a4f8-4f77-92b5-a22402e5ff9e', title: 'PATENT_TITLE_7526' },
            { id: '9fe4da00-e937-4433-8ed7-8761a991cd75', title: 'PATENT_TITLE_9087' },
        ]}
    />
)

export default App