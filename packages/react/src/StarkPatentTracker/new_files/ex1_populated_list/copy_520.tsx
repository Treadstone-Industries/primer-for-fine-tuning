import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'df0b8bb2-343e-4729-8703-ab15c910239d', title: 'PATENT_TITLE_5148' },
            { id: 'a0150bfd-8bb2-4853-9c30-1e647cfdd7a8', title: 'PATENT_TITLE_6334' },
            { id: '19a6d167-8d3f-4d1f-a3fe-59c91bb973f8', title: 'PATENT_TITLE_2339' },
            { id: '4fe11c89-1b67-4fd5-a2d9-f83d5c18852c', title: 'PATENT_TITLE_6060' },
            { id: 'aa800987-fc6c-44a9-9bd4-fa8359ac15f4', title: 'PATENT_TITLE_2989' },
            { id: 'd3b86a44-13ef-48ff-b053-f7b062fede00', title: 'PATENT_TITLE_1714' },
        ]}
    />
)

export default App