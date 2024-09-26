import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f739d08f-25c3-461b-acd9-13b7719141d5', title: 'PATENT_TITLE_7930' },
        { id: '588c25a7-f29c-4187-bc28-47944d273111', title: 'PATENT_TITLE_7579' },
        { id: '69287480-260b-4b29-91e0-dfd45897f271', title: 'PATENT_TITLE_1389' },
        { id: '50c7ce0e-6484-4274-9df2-fa740fcd50d7', title: 'PATENT_TITLE_5586' },
        { id: 'eb2b35f9-2db6-44f0-82dd-5bbe6b43a036', title: 'PATENT_TITLE_4989' },
        { id: 'af8a98ad-121e-4c7a-9e2b-e6eefa240189', title: 'PATENT_TITLE_4529' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App