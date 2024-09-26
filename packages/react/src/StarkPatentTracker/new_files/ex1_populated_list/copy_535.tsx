import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '980a3653-6052-4187-9d8a-6a3b2d71f1e3', title: 'PATENT_TITLE_8388' },
            { id: '11202429-1264-43c1-9f75-57c6b3729b29', title: 'PATENT_TITLE_4316' },
            { id: 'f93d49c3-bb58-4e94-a6d9-7b240e660ec2', title: 'PATENT_TITLE_2330' },
        ]}
    />
)

export default App