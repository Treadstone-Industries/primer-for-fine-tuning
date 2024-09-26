import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3668d56e-7f62-4c56-945d-46f1c1f6962a', title: 'PATENT_TITLE_8543' },
            { id: '3d949e3f-bf2d-4766-bf24-ab8b4761c32b', title: 'PATENT_TITLE_5504' },
            { id: '670142b0-2823-4015-9afb-a557f8a02afe', title: 'PATENT_TITLE_1102' },
        ]}
    />
)

export default App