import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ee74cb75-ee02-4e89-9f4e-8b99c4e9a17c', title: 'PATENT_TITLE_2897' },
            { id: 'e402257c-10b1-4d28-83b4-96a74e090ae2', title: 'PATENT_TITLE_1054' },
            { id: '775dc26f-559d-426a-b8a7-a385295e8492', title: 'PATENT_TITLE_6220' },
            { id: 'eec8a56c-0260-46b3-ac3f-5a8cff3e761e', title: 'PATENT_TITLE_1269' },
            { id: '89e3c2bf-7afa-4cb8-b4f4-eec3e927ceb3', title: 'PATENT_TITLE_6319' },
            { id: '66b7c4fa-5dca-4907-8c77-583130adf6df', title: 'PATENT_TITLE_3534' },
            { id: 'b86d3209-470b-40b1-a6ca-ea7649c833fc', title: 'PATENT_TITLE_9600' },
            { id: 'cd7a13bc-30aa-4916-8d7b-30e230441c3c', title: 'PATENT_TITLE_8477' },
            { id: 'c9adbf15-04a5-44ac-aa23-29ad806049d7', title: 'PATENT_TITLE_9701' },
        ]}
    />
)

export default App