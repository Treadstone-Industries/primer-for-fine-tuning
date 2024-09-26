import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '901b5b4e-7e75-4d4d-9eaf-1266d74047f8', title: 'PATENT_TITLE_3858' },
        { id: '3de78320-74b0-4257-a29d-a175dddc66bd', title: 'PATENT_TITLE_6970' },
        { id: 'b39d3ee6-44f6-4c57-ae0b-b0f9edcce31f', title: 'PATENT_TITLE_9769' },
        { id: 'ddd6c486-cdcd-4820-8df3-4c1bebf33ef7', title: 'PATENT_TITLE_9176' },
        { id: '81428ddf-84be-4b14-b087-d6acf260204b', title: 'PATENT_TITLE_2424' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App