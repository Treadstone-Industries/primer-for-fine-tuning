import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '50ef1444-f48f-459d-84ee-efbd7d87d835', title: 'PATENT_TITLE_9187' },
            { id: 'f3cc3139-39ab-4168-8017-ec7a27ead743', title: 'PATENT_TITLE_4336' },
            { id: 'b507d729-71f4-4301-b4ad-6a15148f120e', title: 'PATENT_TITLE_1020' },
            { id: '6da045f1-277a-4e36-987b-362cfd70ae26', title: 'PATENT_TITLE_9802' },
            { id: 'c94ff47c-4def-4dbe-a19c-e32aa686281b', title: 'PATENT_TITLE_5297' },
        ]}
    />
)

export default App