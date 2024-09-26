import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '67eeb62c-9cd0-4791-83a6-0f6d731de268', title: 'PATENT_TITLE_2997' },
            { id: '52fb094e-21d2-4fec-a3cb-ea0c7c48a79c', title: 'PATENT_TITLE_6539' },
            { id: '735b0ee4-8dbe-499d-9449-8e476eb2c548', title: 'PATENT_TITLE_4932' },
            { id: 'cbb51160-4f7c-4f56-9b41-1411717f262c', title: 'PATENT_TITLE_2250' },
            { id: '6fdf48af-3e7c-4298-b7c2-fddb597711e9', title: 'PATENT_TITLE_4943' },
            { id: 'c9b71921-5fb6-44a7-ae14-6ddc76ec5cf0', title: 'PATENT_TITLE_6896' },
            { id: '2d6df4ce-ef47-4987-b2f0-332e0784d5d1', title: 'PATENT_TITLE_1596' },
        ]}
    />
)

export default App