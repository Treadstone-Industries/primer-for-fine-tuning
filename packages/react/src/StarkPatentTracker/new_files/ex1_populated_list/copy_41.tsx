import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4bfcc6e5-4b17-4eec-bea6-6f1194cd5b69', title: 'PATENT_TITLE_1924' },
            { id: '65ad1911-6408-4a84-8f2b-cd4787ab052b', title: 'PATENT_TITLE_6283' },
            { id: '444307e0-b44a-4430-8a1c-dd7748834710', title: 'PATENT_TITLE_4611' },
            { id: '9cdc4851-3d54-46e0-aed7-10e7eda91c37', title: 'PATENT_TITLE_1608' },
        ]}
    />
)

export default App