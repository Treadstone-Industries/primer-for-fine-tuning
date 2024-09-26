import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '40f61e9e-b3f0-472f-969b-de8f746cf44a', title: 'PATENT_TITLE_5643' },
            { id: '3f683ab4-3c7c-4355-9e00-88dbb9686e2a', title: 'PATENT_TITLE_4117' },
            { id: 'a255d727-be08-49da-8ed7-af4255b493ff', title: 'PATENT_TITLE_6077' },
            { id: '03fceaf3-3faf-47fc-9140-f1675f58bee0', title: 'PATENT_TITLE_4234' },
            { id: '77211037-b864-4c96-9ac7-a8502a110b5e', title: 'PATENT_TITLE_2344' },
            { id: 'd79087fb-14d6-4021-8236-e647338bb3ce', title: 'PATENT_TITLE_4695' },
            { id: 'c39e36af-8a3b-42f3-8f0a-dde71fb5f8ce', title: 'PATENT_TITLE_7296' },
            { id: 'f3378295-2fab-4564-bb75-7ee76ea9c545', title: 'PATENT_TITLE_6807' },
            { id: '8ecea37b-245c-4d21-acc5-d96ed8bba74a', title: 'PATENT_TITLE_1538' },
        ]}
    />
)

export default App