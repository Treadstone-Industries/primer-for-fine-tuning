import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '458684c0-134e-4adb-8d42-8675ac5a99dc', title: 'PATENT_TITLE_5755' },
            { id: '5e031e90-a627-42bd-9b4b-371c7fabca4f', title: 'PATENT_TITLE_4758' },
        ]}
    />
)

export default App