import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0e9142e3-a25f-4b49-8ad7-8a3c9e9bd9b4', title: 'PATENT_TITLE_5298' },
        { id: 'd92b3562-64db-42a6-8d7e-9a9923b32415', title: 'PATENT_TITLE_7422' },
        { id: '7670579b-37c8-49d4-892d-7e6515d26a9a', title: 'PATENT_TITLE_3790' },
        { id: '269978ef-63ba-4bab-a083-5f42704675ea', title: 'PATENT_TITLE_2185' },
        { id: '0c1ad8c7-cd31-4118-9b01-14daee0c3bba', title: 'PATENT_TITLE_3868' },
        { id: 'dec5c4b3-8e29-44cd-bcda-9b3dc07bd5ce', title: 'PATENT_TITLE_8461' },
        { id: '3a5d9e44-6df7-4ee4-a985-1e538c98c853', title: 'PATENT_TITLE_9995' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App