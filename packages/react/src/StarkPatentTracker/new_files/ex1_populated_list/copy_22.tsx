import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '56bc3433-81a9-4566-9985-4a7367d6022d', title: 'PATENT_TITLE_2816' },
            { id: '8bdf36b1-74dc-4809-82f2-91672a53823b', title: 'PATENT_TITLE_4643' },
            { id: '00486af5-25cb-4e86-84c7-1c2c281967c3', title: 'PATENT_TITLE_4324' },
            { id: '6285d3cd-b380-4f3c-8fa6-1ecc394a46ac', title: 'PATENT_TITLE_3723' },
            { id: '47f0ee00-7a6a-4d78-a91c-6213de7e3d1b', title: 'PATENT_TITLE_5101' },
        ]}
    />
)

export default App