import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'aaa88dfc-3ede-47ec-a3f0-f153693dcee8', title: 'PATENT_TITLE_7311' },
            { id: 'aae94962-a9b4-4f47-938c-a443355532df', title: 'PATENT_TITLE_7680' },
            { id: '34f98409-637a-4b35-a343-fd692fa79b95', title: 'PATENT_TITLE_2394' },
        ]}
    />
)

export default App