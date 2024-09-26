import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7aff2db1-b5b9-4650-8801-51d86c999d48', title: 'PATENT_TITLE_3415' },
            { id: '0041f574-e826-4ab5-a021-4ec698a98b59', title: 'PATENT_TITLE_9061' },
            { id: '858e8e50-19cb-4b9b-bcca-5141b1098544', title: 'PATENT_TITLE_3023' },
            { id: '84ac9b14-f7fe-42fd-bb44-26c6d97c314e', title: 'PATENT_TITLE_9577' },
            { id: 'b73a8e13-795b-44c0-82cc-f268cc5c2220', title: 'PATENT_TITLE_7659' },
            { id: '6743fb4e-69a1-4972-876a-c68014377f3c', title: 'PATENT_TITLE_7702' },
            { id: 'ad724eb7-09fe-47a2-b3ae-dc5f9810ef60', title: 'PATENT_TITLE_7075' },
            { id: '204a55d8-3d52-49d6-80c8-14d5663b9f8d', title: 'PATENT_TITLE_8109' },
        ]}
    />
)

export default App