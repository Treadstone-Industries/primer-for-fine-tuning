import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6a8785bc-113a-40c8-ab36-3671a70c05da', title: 'PATENT_TITLE_2412' },
            { id: '95b9b1a8-02f9-4151-8461-ba76579768e6', title: 'PATENT_TITLE_8231' },
            { id: '82a1a757-2292-4726-a7d1-2d74d961fd24', title: 'PATENT_TITLE_8447' },
            { id: '78de1028-9b0a-4dbe-b548-5101a908a811', title: 'PATENT_TITLE_2001' },
            { id: '4c963412-dfcd-4c98-a607-a26e8d5b57e9', title: 'PATENT_TITLE_3667' },
            { id: 'bc779e70-6619-4b59-9782-962ccda089b8', title: 'PATENT_TITLE_3766' },
        ]}
    />
)

export default App