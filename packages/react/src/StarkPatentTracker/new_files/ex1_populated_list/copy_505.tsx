import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '67cc5f06-a9cd-4d07-8f02-9f40946e5e3d', title: 'PATENT_TITLE_1360' },
            { id: 'ac3e2712-5238-4856-b94d-257cfc925bb5', title: 'PATENT_TITLE_8362' },
        ]}
    />
)

export default App