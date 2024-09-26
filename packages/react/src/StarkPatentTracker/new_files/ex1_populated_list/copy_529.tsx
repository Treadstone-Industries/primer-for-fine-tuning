import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd4977e67-55d5-4215-83b8-45a264383801', title: 'PATENT_TITLE_7026' },
            { id: 'c75de021-4ee1-4e54-a4d2-faf54b36f943', title: 'PATENT_TITLE_4080' },
            { id: 'c7029587-8b99-43c5-9717-babdb89bbc41', title: 'PATENT_TITLE_1659' },
            { id: 'da09a39a-410a-4f56-ad58-d95d8e245b7d', title: 'PATENT_TITLE_7406' },
            { id: '72c0f4b0-cab0-4111-a31e-c9a8c859b4f9', title: 'PATENT_TITLE_3911' },
            { id: 'f6c262c2-ce73-46a0-98e3-c32e8425f620', title: 'PATENT_TITLE_7260' },
            { id: '5fadf45b-9a81-42ee-86e8-4d2cea63bd06', title: 'PATENT_TITLE_6223' },
            { id: 'd578860c-0f1a-4128-9115-11cbea1e045c', title: 'PATENT_TITLE_1061' },
        ]}
    />
)

export default App