import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4bcc3089-1fa7-4df6-8949-d45c84762f68', title: 'PATENT_TITLE_9962' },
            { id: '72ffc1b2-1e9e-4da9-a5ef-64ccc5a80664', title: 'PATENT_TITLE_4776' },
            { id: 'c3b4b6f2-1773-4a54-a44b-0529399f3026', title: 'PATENT_TITLE_9804' },
            { id: '8b9b6833-c98d-4839-b740-5d535789c9e8', title: 'PATENT_TITLE_7033' },
            { id: '0b0d69da-59b6-44ab-9eb0-e45a4eb99363', title: 'PATENT_TITLE_2935' },
            { id: '4f8a57d8-8148-499d-9e95-db4abfdeee66', title: 'PATENT_TITLE_5605' },
            { id: 'ed51f777-3803-4d98-8b9b-3910f429f2fa', title: 'PATENT_TITLE_8063' },
        ]}
    />
)

export default App