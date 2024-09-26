import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8502d9c0-6c39-4d46-ad44-ed3ebe34f081', title: 'PATENT_TITLE_1873' },
            { id: 'a5796ea2-d809-4fa0-832c-13d7dca0a2b2', title: 'PATENT_TITLE_3287' },
            { id: '68dbc743-7cab-4220-9cfd-b6719a4fcb06', title: 'PATENT_TITLE_3862' },
            { id: 'c96567e9-89ec-4e16-940c-4af5504d5f6b', title: 'PATENT_TITLE_4892' },
            { id: '51125ba5-6f32-4e85-845e-6e54e288e0d6', title: 'PATENT_TITLE_9949' },
            { id: '88d845fb-56d9-4b98-8bbe-241313048833', title: 'PATENT_TITLE_6167' },
            { id: 'f8aa0039-21d5-4937-850c-45c99ea5e277', title: 'PATENT_TITLE_1181' },
            { id: 'a823a82b-73a1-4aeb-a7b4-6695127a3a2d', title: 'PATENT_TITLE_1353' },
            { id: '396e17b4-95e3-4ddf-9c49-6a1015b22895', title: 'PATENT_TITLE_8198' },
        ]}
    />
)

export default App