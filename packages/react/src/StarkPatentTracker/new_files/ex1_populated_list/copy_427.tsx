import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9ec6ff84-650d-4c59-bac2-811333e539ac', title: 'PATENT_TITLE_7767' },
            { id: '41458739-559e-4daa-9c7b-b9446fd7b187', title: 'PATENT_TITLE_9305' },
            { id: '85e88e9b-f846-47d2-8664-146d93902971', title: 'PATENT_TITLE_1981' },
            { id: '3e79e263-1b5d-441d-ae97-3da3146596b7', title: 'PATENT_TITLE_7279' },
            { id: 'f82f0197-7a1d-42ef-86cd-fd51570ecd2f', title: 'PATENT_TITLE_9748' },
            { id: 'f9399ce6-8e76-44a9-9b0b-278a0af47dc6', title: 'PATENT_TITLE_1800' },
        ]}
    />
)

export default App