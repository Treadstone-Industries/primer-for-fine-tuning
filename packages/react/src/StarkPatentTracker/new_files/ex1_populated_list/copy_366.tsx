import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2e5e0cb1-3503-4c6c-ac9e-8a9452ca064e', title: 'PATENT_TITLE_9243' },
            { id: '3c1a5cc4-016b-4003-868b-4e1aa2d37a00', title: 'PATENT_TITLE_2142' },
            { id: '1be12b8f-e261-4dbf-b9b3-2b31e288ef19', title: 'PATENT_TITLE_3735' },
            { id: '04bbb5b1-51c2-43e8-b1e4-aacb8ce8ac06', title: 'PATENT_TITLE_2699' },
            { id: 'a16d25bc-808d-4064-9520-2dd83b1450c4', title: 'PATENT_TITLE_4388' },
            { id: '83f29d29-1d10-419b-8d15-aae922d71017', title: 'PATENT_TITLE_3109' },
            { id: '70e730c2-ddba-4100-9847-c32c474c9956', title: 'PATENT_TITLE_4085' },
            { id: 'bcf227f1-6d6e-43eb-820c-209ce8e58e24', title: 'PATENT_TITLE_3167' },
            { id: '07573755-e278-4a80-8051-0d0591991102', title: 'PATENT_TITLE_5373' },
            { id: 'e7472026-2eaf-4ca1-b8a4-a894d55008c3', title: 'PATENT_TITLE_9890' },
        ]}
    />
)

export default App