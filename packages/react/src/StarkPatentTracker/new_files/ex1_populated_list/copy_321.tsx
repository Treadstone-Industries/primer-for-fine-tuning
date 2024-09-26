import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '83a9a8da-c1d9-425c-89f6-cf78d1c9b43f', title: 'PATENT_TITLE_3048' },
            { id: '2193bee7-9eaa-460c-b47d-d76bd77f0b60', title: 'PATENT_TITLE_7131' },
            { id: 'bd239711-b52e-494f-b941-b746abb1c1f4', title: 'PATENT_TITLE_8558' },
            { id: '9f675f9e-9d25-453e-bce5-2f9797fc7850', title: 'PATENT_TITLE_2376' },
            { id: '51b08a16-a655-41b7-ad35-f7e7270f617d', title: 'PATENT_TITLE_9028' },
            { id: '361e817d-f632-4b83-a4ce-49202756e319', title: 'PATENT_TITLE_2297' },
            { id: 'f4b88a62-543a-476c-aab5-7279536dd52d', title: 'PATENT_TITLE_5952' },
            { id: '903a7c80-f156-4d51-998e-05432e771123', title: 'PATENT_TITLE_9065' },
            { id: '81a2435b-a4af-42d7-8971-b5d794a0cb3d', title: 'PATENT_TITLE_1327' },
            { id: '75fe4b12-0ad5-4895-910a-d5b397df8e1c', title: 'PATENT_TITLE_4115' },
        ]}
    />
)

export default App