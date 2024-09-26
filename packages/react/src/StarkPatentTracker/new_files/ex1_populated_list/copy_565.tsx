import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4f8dba99-972e-430f-9c36-1868fc8bb0a4', title: 'PATENT_TITLE_3733' },
            { id: '88642a13-4d90-403c-b1c2-609ea05a58bf', title: 'PATENT_TITLE_3882' },
            { id: 'a11e2937-8643-4337-af19-41ace2bf1be7', title: 'PATENT_TITLE_4696' },
            { id: '87305e19-c284-42ba-9b03-df583d8e4519', title: 'PATENT_TITLE_8852' },
            { id: 'c8176b32-8e85-4623-b370-490fccffb63c', title: 'PATENT_TITLE_3757' },
            { id: '2d1711cd-1af2-49bd-8a73-e0f499d59278', title: 'PATENT_TITLE_5638' },
            { id: '639491c5-7a88-40d0-89d5-b1776ac02269', title: 'PATENT_TITLE_9586' },
            { id: 'ded91217-018d-45c4-a7e8-923aa0c8e0e2', title: 'PATENT_TITLE_3697' },
            { id: 'f59543a5-a8a0-4010-ba87-103ab593cfb1', title: 'PATENT_TITLE_6343' },
        ]}
    />
)

export default App