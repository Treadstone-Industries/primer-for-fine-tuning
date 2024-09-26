import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2fe52a4b-96b8-4fdf-a72e-ed4a2edb7429', title: 'PATENT_TITLE_3623' },
            { id: '317abd2d-11a4-43e1-aa60-bcadc5288b39', title: 'PATENT_TITLE_6319' },
            { id: 'da3247d7-62ec-4813-9067-5796eb2e0b0e', title: 'PATENT_TITLE_9756' },
        ]}
    />
)

export default App