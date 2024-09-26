import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'def3c333-0548-4a75-b436-a9448a6fcb4d', title: 'PATENT_TITLE_6646' },
            { id: '3c4dd5d3-91c2-4391-abb2-9802888cdda8', title: 'PATENT_TITLE_7318' },
            { id: '9ec7b97f-27ec-424a-8b16-5e9bfe1d082f', title: 'PATENT_TITLE_3265' },
            { id: '49998c1b-2ec6-45d2-ba5e-169cd450d580', title: 'PATENT_TITLE_7533' },
            { id: '4d5195ca-f244-47f0-bacb-2ba437441990', title: 'PATENT_TITLE_3195' },
            { id: 'b89758ca-02e4-4b7c-a979-1d534947596c', title: 'PATENT_TITLE_4487' },
            { id: '02b80316-a926-406c-aa9c-e3cd918ae495', title: 'PATENT_TITLE_4583' },
            { id: 'b18bc100-450d-4641-b006-a41c1995b114', title: 'PATENT_TITLE_4388' },
            { id: '68ecdb4c-61db-4eb5-89cb-c7bb25a3be09', title: 'PATENT_TITLE_8220' },
            { id: '29ed472b-4a94-4f7e-883c-719a1b5af40f', title: 'PATENT_TITLE_3930' },
        ]}
    />
)

export default App