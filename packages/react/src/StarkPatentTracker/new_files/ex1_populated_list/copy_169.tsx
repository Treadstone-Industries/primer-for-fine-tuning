import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '93c67bcc-94ea-4de2-980a-6f5dd8806bf9', title: 'PATENT_TITLE_5675' },
            { id: 'f344398a-3de0-4547-a526-d9607d025bd4', title: 'PATENT_TITLE_2897' },
            { id: '1ebae10e-61fd-492f-8430-f894adef30ad', title: 'PATENT_TITLE_6067' },
        ]}
    />
)

export default App