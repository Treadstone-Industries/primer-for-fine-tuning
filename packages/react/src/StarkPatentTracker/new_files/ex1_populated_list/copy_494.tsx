import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '671a9586-f2fe-4c9c-a82c-dd8f2bd52a18', title: 'PATENT_TITLE_5979' },
            { id: 'e71bcf33-9b6b-4cae-8453-5077031c6898', title: 'PATENT_TITLE_1676' },
            { id: '91f1328f-2d6d-4791-8808-4038b842ab8b', title: 'PATENT_TITLE_9957' },
            { id: '011d0225-42fe-4291-be5e-440c9109f6e6', title: 'PATENT_TITLE_4366' },
        ]}
    />
)

export default App