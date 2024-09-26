import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4a99dc9a-a3e2-428b-bec8-7e5f50cbdf66', title: 'PATENT_TITLE_3683' },
            { id: '1482e929-8729-4a21-845f-433fe718bab5', title: 'PATENT_TITLE_7798' },
            { id: '00429b8f-8ba6-45f4-bd7f-baad8db70a0d', title: 'PATENT_TITLE_3516' },
            { id: '3f1504fa-ac0d-40eb-ab0e-184364ef553d', title: 'PATENT_TITLE_2923' },
            { id: '0f44654d-a880-4940-bbad-93ab20df0c13', title: 'PATENT_TITLE_3107' },
            { id: '72cf0e83-f370-496c-bdfe-39c921e1e63f', title: 'PATENT_TITLE_5556' },
            { id: '1f3836d2-2c5e-40f6-9b10-97acd5d4156d', title: 'PATENT_TITLE_5429' },
            { id: 'f65b6742-1ebf-47e3-b94f-cf40c5de0719', title: 'PATENT_TITLE_4668' },
            { id: '68fffdc3-40ae-43a4-b7c1-3f5ecbc7fd54', title: 'PATENT_TITLE_2143' },
        ]}
    />
)

export default App