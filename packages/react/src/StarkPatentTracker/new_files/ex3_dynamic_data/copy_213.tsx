import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8c956781-4d2e-40d9-b904-c382b7a1eb97', title: 'PATENT_TITLE_1820' },
        { id: 'e6322915-116c-44d9-a80d-5c61d9716e90', title: 'PATENT_TITLE_9890' },
        { id: '3dbdd903-8ff0-44fc-9b7e-6d254a7ad17e', title: 'PATENT_TITLE_2271' },
        { id: '5a0aa099-c10e-4074-b3d9-67626f502470', title: 'PATENT_TITLE_7306' },
        { id: '7bafe433-19a5-4161-b3c7-812b22960878', title: 'PATENT_TITLE_9104' },
        { id: 'd7f4f67c-df82-4dc6-b923-f98a5133149e', title: 'PATENT_TITLE_3136' },
        { id: '0029c1bc-cf74-4c28-9d4f-644db49a381c', title: 'PATENT_TITLE_2595' },
        { id: '87aa9307-fa8b-4689-a9a8-cd4b49864834', title: 'PATENT_TITLE_2687' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App