import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3df3ab16-c111-4b18-89a8-2b4500d4428f', title: 'PATENT_TITLE_8141' },
            { id: 'fc9e5bef-1e9a-4d0c-ad04-69913dcf56f6', title: 'PATENT_TITLE_5741' },
            { id: '9c69c519-d20c-4514-8112-a389dcd9cc76', title: 'PATENT_TITLE_6102' },
            { id: '90207fe5-fbb5-411f-b001-eb1761ac3781', title: 'PATENT_TITLE_7417' },
            { id: '8b989dca-af1f-4d29-bbc8-f927cdf18504', title: 'PATENT_TITLE_7429' },
            { id: '20842908-39ee-4a4d-ae23-c65841ae21d8', title: 'PATENT_TITLE_8663' },
        ]}
    />
)

export default App