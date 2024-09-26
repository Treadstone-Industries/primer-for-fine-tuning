import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '176080e0-8885-4bbd-b335-133116b4e2c9', title: 'PATENT_TITLE_5068' },
            { id: '65278160-1bcb-4ba4-ab02-6310b388b2e2', title: 'PATENT_TITLE_5199' },
        ]}
    />
)

export default App