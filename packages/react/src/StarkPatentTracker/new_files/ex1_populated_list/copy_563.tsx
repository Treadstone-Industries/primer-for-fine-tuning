import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '956302b8-a255-4f76-a467-f64e9e0926b7', title: 'PATENT_TITLE_8608' },
            { id: '0d0db3b5-9074-4575-aaed-337e5a69ef06', title: 'PATENT_TITLE_2840' },
            { id: '98ea5d65-1ead-42a8-95fe-3a4102040ca6', title: 'PATENT_TITLE_3421' },
            { id: '5bf6447f-7521-4300-80d2-a755fd8d4c2f', title: 'PATENT_TITLE_4228' },
        ]}
    />
)

export default App