import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'beb43d66-34f7-4903-b185-5c029481d354', title: 'PATENT_TITLE_8891' },
            { id: '88e77167-be3c-4ab6-acab-5794e44ba5c2', title: 'PATENT_TITLE_5638' },
            { id: '87b4beca-673c-4e43-b5cb-18b9c31a41c9', title: 'PATENT_TITLE_1753' },
            { id: 'fae1c302-e9c9-412b-9ed9-f4ec9724bc32', title: 'PATENT_TITLE_6787' },
            { id: '0721adee-b4d5-46e5-a550-07605f274ebe', title: 'PATENT_TITLE_2318' },
            { id: '5aeec613-1e61-4da0-b4a4-b13e0c611498', title: 'PATENT_TITLE_6945' },
            { id: 'f5029bd5-369e-436b-8385-2ff94e48914b', title: 'PATENT_TITLE_2964' },
        ]}
    />
)

export default App