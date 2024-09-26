import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '66555a49-6a45-4b5e-a940-29ae2732d535', title: 'PATENT_TITLE_5909' },
            { id: '54253400-df75-4f44-9431-4f0eec45b52d', title: 'PATENT_TITLE_2946' },
            { id: '1a78ff91-b546-4561-91b3-7629c75091fc', title: 'PATENT_TITLE_1563' },
            { id: '14f97766-2004-4df8-8e4a-8eaeda7ad320', title: 'PATENT_TITLE_9970' },
            { id: 'c4e4a2b1-b877-440a-8af1-7085317cae43', title: 'PATENT_TITLE_8447' },
            { id: '07661102-24f9-4f27-8302-0db080342cb5', title: 'PATENT_TITLE_5561' },
            { id: 'be76570e-5e95-450d-8bc0-411307bc1b5b', title: 'PATENT_TITLE_2077' },
            { id: '0cbd208f-5014-4996-b905-8ad60f40659d', title: 'PATENT_TITLE_5131' },
            { id: '3b428254-36f1-405e-9602-575a1eb91659', title: 'PATENT_TITLE_4561' },
            { id: '4719a761-9a59-49fd-b587-328240ecd104', title: 'PATENT_TITLE_3928' },
        ]}
    />
)

export default App