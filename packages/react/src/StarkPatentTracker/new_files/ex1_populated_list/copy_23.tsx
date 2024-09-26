import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ba72ce95-7582-4e20-bf1c-ef9e60057e71', title: 'PATENT_TITLE_1730' },
            { id: '8d512377-4b9b-4c91-a21e-451cd8727c43', title: 'PATENT_TITLE_5755' },
            { id: 'a2d0f271-f8d9-4b39-9421-234abbff5597', title: 'PATENT_TITLE_9669' },
            { id: 'e663e739-186c-4fb4-b1bd-a3e37f366ef9', title: 'PATENT_TITLE_4886' },
            { id: '3623a1a9-1aea-4b0d-8578-70f30abe2da7', title: 'PATENT_TITLE_5934' },
            { id: 'b44ea18f-a177-439e-933c-cf44fe807812', title: 'PATENT_TITLE_8366' },
            { id: 'a8ecb616-7314-4c3c-a644-3ce02f6ed80f', title: 'PATENT_TITLE_3491' },
            { id: 'ab91bb66-680a-4ed7-849b-e377e63d125f', title: 'PATENT_TITLE_4960' },
        ]}
    />
)

export default App