import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '09921549-0f95-4f17-a9bf-dd4e538d66f3', title: 'PATENT_TITLE_7171' },
            { id: '2ade135b-0c37-4269-ac56-961b2c16179b', title: 'PATENT_TITLE_2450' },
            { id: '18a1448d-df75-4f01-aa1d-fe85a9f878fc', title: 'PATENT_TITLE_7184' },
            { id: '2a47028f-01c6-42a3-965a-0f4c53aa8b1c', title: 'PATENT_TITLE_7077' },
            { id: '88b986e4-85ef-45e3-9ddb-ff763854c6f5', title: 'PATENT_TITLE_5119' },
            { id: '6f09f2a9-a972-4224-b9f8-eafc57bb9965', title: 'PATENT_TITLE_8334' },
            { id: 'b6926a9f-edd7-43ac-ac85-e77f6ccf87ad', title: 'PATENT_TITLE_1431' },
            { id: 'a6afa95a-573c-4789-8e0e-4266fafcaa80', title: 'PATENT_TITLE_8163' },
            { id: '38552d45-654c-4905-9885-bb326854e794', title: 'PATENT_TITLE_3650' },
        ]}
    />
)

export default App