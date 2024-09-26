import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '47666ceb-7b78-4198-9405-319d828e1345', title: 'PATENT_TITLE_2184' },
            { id: 'e472863a-83bf-4ce8-81b8-f26e6ec3dab0', title: 'PATENT_TITLE_2389' },
            { id: '6e233210-81a7-4a89-8ff2-4883c94d05e6', title: 'PATENT_TITLE_9184' },
            { id: '53fde0ea-e015-4ba2-8055-f461d86720ec', title: 'PATENT_TITLE_8963' },
            { id: 'd0c3d126-ed96-43ac-8977-6fbabeddbf00', title: 'PATENT_TITLE_4039' },
        ]}
    />
)

export default App