import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '426a269a-a243-4c17-883d-dab46642521f', title: 'PATENT_TITLE_8316' },
            { id: 'a49c572d-2f78-4953-8c1d-ac9c7d2a6e5a', title: 'PATENT_TITLE_1430' },
            { id: '919ec0c4-8457-495e-b621-6c1fd9eaa8e7', title: 'PATENT_TITLE_9299' },
            { id: '313ae93e-0f26-4ec4-be3d-582c98c50785', title: 'PATENT_TITLE_8378' },
            { id: 'e36e1faf-6734-4326-9b52-960132ab28fe', title: 'PATENT_TITLE_5622' },
            { id: '79ab3981-aff6-40d2-b4b2-e477b5351201', title: 'PATENT_TITLE_1051' },
            { id: '3f363ff9-4794-40c3-b57b-219273f97f2e', title: 'PATENT_TITLE_7988' },
        ]}
    />
)

export default App