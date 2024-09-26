import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e09d981a-9b89-4d42-99a2-8515da41bc65', title: 'PATENT_TITLE_2667' },
            { id: '5ba7b187-c7f6-4890-9149-3549ec661ada', title: 'PATENT_TITLE_6981' },
            { id: 'b7eeef7e-e756-4a60-9bf4-f943db3947aa', title: 'PATENT_TITLE_4811' },
            { id: 'd8a4159f-cbdb-4593-89d8-1e1cc7dd0673', title: 'PATENT_TITLE_9744' },
            { id: '9e8eae12-6650-4dea-ad18-3fca9a96a398', title: 'PATENT_TITLE_8769' },
            { id: 'da21d3e9-af59-472f-a832-80c42a1c4f8e', title: 'PATENT_TITLE_7840' },
            { id: '3384a386-b362-48e2-9d82-bf2965c2cc5e', title: 'PATENT_TITLE_3707' },
            { id: '27fd4149-d9dc-4210-9810-3a581c82ab5d', title: 'PATENT_TITLE_5967' },
            { id: 'de530e30-8196-4f79-9aee-564c4b1ecf5d', title: 'PATENT_TITLE_5657' },
            { id: 'a20fb342-51a8-44f6-91a7-6561cb093ede', title: 'PATENT_TITLE_3485' },
        ]}
    />
)

export default App