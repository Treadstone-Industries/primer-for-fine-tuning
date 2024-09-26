import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3db2dc57-7afa-4c24-bdb9-3d712bb8817b', title: 'PATENT_TITLE_6870' },
            { id: '676fe476-7933-4d78-a966-4035ebe97ae8', title: 'PATENT_TITLE_2143' },
            { id: 'b1001781-e713-4d05-a715-ed0742a0af0e', title: 'PATENT_TITLE_7987' },
        ]}
    />
)

export default App