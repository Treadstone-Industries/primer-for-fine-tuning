import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'af7e4cf8-1bf1-4228-b6b0-529a26a05ab2', title: 'PATENT_TITLE_5576' },
            { id: '2a052063-2171-4788-870b-0a9e5feb0317', title: 'PATENT_TITLE_3553' },
            { id: '3d0f2468-2120-4b5e-b67f-290adfcddb44', title: 'PATENT_TITLE_8215' },
            { id: '05d66edf-3166-41b4-8c44-71ee290a992c', title: 'PATENT_TITLE_8043' },
            { id: '6b35c528-45b4-4ed0-b775-60f47f9c60b2', title: 'PATENT_TITLE_1516' },
            { id: '02599d15-2fa0-4c75-932b-ad22df266fad', title: 'PATENT_TITLE_4879' },
        ]}
    />
)

export default App