import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f15d0ce9-3a48-4faa-8049-048166d782b0', title: 'PATENT_TITLE_2553' },
            { id: '6dbc2445-ec8b-4c04-bdff-de99be95458c', title: 'PATENT_TITLE_8613' },
            { id: 'd295c5e2-13e2-4a6c-9fda-c9ba8689fcd3', title: 'PATENT_TITLE_1618' },
            { id: 'ac91b5ef-4114-4694-ad6b-2de51d4203dc', title: 'PATENT_TITLE_8115' },
            { id: 'dfcc1759-f688-486c-a766-8be91390ef3b', title: 'PATENT_TITLE_5513' },
            { id: 'be9a7cad-7914-4343-8902-ef5fddeb51d3', title: 'PATENT_TITLE_3736' },
            { id: '026dda7e-4a0a-43b2-bfd8-913d13ca7868', title: 'PATENT_TITLE_4257' },
            { id: '60635d1a-d7c7-4b6b-ae56-a679ae2cf038', title: 'PATENT_TITLE_9503' },
        ]}
    />
)

export default App