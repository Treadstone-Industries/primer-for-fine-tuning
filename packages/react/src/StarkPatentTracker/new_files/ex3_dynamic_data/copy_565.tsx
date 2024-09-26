import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8cbdfee1-d84c-4997-af87-5b4a8b0b6022', title: 'PATENT_TITLE_9266' },
        { id: 'eb411db5-7b7e-4750-a5b1-aafa119feed4', title: 'PATENT_TITLE_4991' },
        { id: '79c100ac-702d-4704-a848-91a7530db2d6', title: 'PATENT_TITLE_4927' },
        { id: '1de0c554-e131-430c-ae85-389ad6e80e99', title: 'PATENT_TITLE_5472' },
        { id: 'a200458c-8930-425e-b18e-f9f8af791c06', title: 'PATENT_TITLE_5847' },
        { id: '32779c8d-f060-4399-82de-7eda1a7839f7', title: 'PATENT_TITLE_6548' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App