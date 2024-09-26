import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6f54ab99-acf8-4cc5-b6f6-8b7701274fbc', title: 'PATENT_TITLE_3217' },
            { id: '4d0d86f3-5dc2-42e8-abaf-a00d5c0c5c61', title: 'PATENT_TITLE_6436' },
            { id: 'cc9afe27-0cd1-421a-bcad-3102c0896459', title: 'PATENT_TITLE_4930' },
            { id: '03d97cb1-5682-4053-af85-7bec7d4200f6', title: 'PATENT_TITLE_5961' },
            { id: 'b36e43a2-e2ec-4622-83ba-c5626a67709e', title: 'PATENT_TITLE_5166' },
        ]}
    />
)

export default App