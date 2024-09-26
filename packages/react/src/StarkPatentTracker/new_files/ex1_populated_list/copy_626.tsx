import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '21c3c6d7-3858-4552-9bca-b6a44309721f', title: 'PATENT_TITLE_5843' },
            { id: 'eb089119-b955-4df0-bf22-997ca627bc1b', title: 'PATENT_TITLE_3293' },
            { id: '9f0db0ec-3994-4db5-a3e3-dfbdde09e662', title: 'PATENT_TITLE_3474' },
            { id: '90b15083-a1ac-4615-922e-672564a87292', title: 'PATENT_TITLE_1140' },
            { id: '23114578-4282-43f0-8c78-956029f43de7', title: 'PATENT_TITLE_4533' },
            { id: '6f32bddb-8960-4c3b-bd71-5c0748b2261f', title: 'PATENT_TITLE_8602' },
            { id: '615126cc-0d95-4400-be92-76f867747cbf', title: 'PATENT_TITLE_1357' },
            { id: 'cadd2d17-1bc1-45a3-8d94-7b23257b2770', title: 'PATENT_TITLE_3676' },
            { id: 'a357b929-e614-47ac-b891-e09a9c79b2a0', title: 'PATENT_TITLE_4443' },
            { id: '4d47b6cb-5fea-45e8-95cb-73982197d237', title: 'PATENT_TITLE_7797' },
        ]}
    />
)

export default App