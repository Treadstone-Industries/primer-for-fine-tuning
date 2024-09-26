import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dcbd861a-fc19-4b68-b8d5-be6e41d8cd8c', title: 'PATENT_TITLE_3632' },
        { id: '3af161dd-13f9-48e6-a847-a28b19cbc381', title: 'PATENT_TITLE_8515' },
        { id: '34e28ef6-2d03-454b-b7be-31230a41a7cc', title: 'PATENT_TITLE_3784' },
        { id: 'bfd6bfea-474e-4edd-98ff-27c5b6a142ba', title: 'PATENT_TITLE_8649' },
        { id: 'd063ed50-2c33-4437-beea-dd191f7e6d25', title: 'PATENT_TITLE_9493' },
        { id: 'b27e3498-b49f-4416-b455-7212e42da4a6', title: 'PATENT_TITLE_1155' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App