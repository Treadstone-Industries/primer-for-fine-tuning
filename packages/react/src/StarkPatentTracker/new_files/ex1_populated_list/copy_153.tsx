import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fe6705c0-ec10-456c-9fa2-2a3f4e419722', title: 'PATENT_TITLE_6589' },
            { id: '9f41d646-1e64-400e-83f3-631df6e7bd8f', title: 'PATENT_TITLE_1938' },
            { id: 'd3cc2d6f-31bd-424e-8327-a15afe736b6d', title: 'PATENT_TITLE_1402' },
            { id: '0e427c48-6b8a-47f5-8be4-77398bb2b935', title: 'PATENT_TITLE_7207' },
            { id: 'c556cac3-a183-4156-a289-804c75383202', title: 'PATENT_TITLE_8140' },
            { id: '851ac3ae-0dcd-4e7c-b8fb-a408f16f2641', title: 'PATENT_TITLE_3559' },
            { id: '4684f910-35ee-4cea-8e4e-1e65511c01ec', title: 'PATENT_TITLE_7694' },
            { id: '5f7ec3c1-21d6-40d7-928f-7796ddc28b48', title: 'PATENT_TITLE_7407' },
            { id: '35d19786-8351-437a-a0e0-d20ac3c65ac7', title: 'PATENT_TITLE_2724' },
            { id: '7f2a9ccf-78e2-459e-986e-5815c725acfa', title: 'PATENT_TITLE_2535' },
        ]}
    />
)

export default App