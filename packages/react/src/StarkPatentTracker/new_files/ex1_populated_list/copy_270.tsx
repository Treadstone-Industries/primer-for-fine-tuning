import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '040f83e0-2257-4a5c-a34e-27c9ab63b349', title: 'PATENT_TITLE_2954' },
            { id: 'd201b39b-7353-4743-bb78-c89c5d2b667e', title: 'PATENT_TITLE_5478' },
            { id: '51f0c124-4bb8-4b5d-9119-afe8a0b4133b', title: 'PATENT_TITLE_5528' },
            { id: 'e5bfb79a-3834-44e5-9019-b61fedf8907c', title: 'PATENT_TITLE_5439' },
            { id: '3ad7d853-5412-4bc4-ab5f-b1b44f822602', title: 'PATENT_TITLE_3652' },
            { id: 'c4bb57fc-657b-4d15-9a3f-8ef4d72b6742', title: 'PATENT_TITLE_8680' },
            { id: '2de19a31-b0fd-4d7d-97f9-119691768ec0', title: 'PATENT_TITLE_4808' },
            { id: 'c7d92640-0dce-4d95-b5d2-fcdff2747033', title: 'PATENT_TITLE_1043' },
        ]}
    />
)

export default App