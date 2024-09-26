import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e5e491cf-b125-4482-b7be-966684aa9390', title: 'PATENT_TITLE_3215' },
            { id: '32f4dc80-603a-4178-bcf2-e8a7f7994d89', title: 'PATENT_TITLE_1526' },
            { id: 'b405a7ce-bbe6-4944-ba40-c13550cf40d7', title: 'PATENT_TITLE_1711' },
            { id: 'fb1df7fc-acbe-4735-94a3-a41b80c4b955', title: 'PATENT_TITLE_8548' },
            { id: '0fc72059-f235-4555-9f4a-17a5c17c144a', title: 'PATENT_TITLE_1842' },
            { id: '85b978d6-4d0b-4f71-9282-c48bd3f8e999', title: 'PATENT_TITLE_9165' },
            { id: '9e6c7238-f579-43c4-9d61-c9924e33f380', title: 'PATENT_TITLE_9733' },
        ]}
    />
)

export default App