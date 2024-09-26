import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '89b120fa-6898-4b4c-b638-5fc802f5fc19', title: 'PATENT_TITLE_5279' },
            { id: 'bca0c441-b815-49e1-9d3a-c2f0085e369f', title: 'PATENT_TITLE_8999' },
        ]}
    />
)

export default App