import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a80bcc41-89dd-4ee9-b80f-7dbd49ec822c', title: 'PATENT_TITLE_2438' },
        { id: 'fb5f9f3e-ff81-451b-8730-38d189f7464a', title: 'PATENT_TITLE_2388' },
        { id: 'ea07828b-a58b-403f-a583-7b90f84e8657', title: 'PATENT_TITLE_6575' },
        { id: '553e4048-5729-4506-bb86-f4d6d972466a', title: 'PATENT_TITLE_7020' },
        { id: '5413563b-6bda-4052-97cc-9e289b345a12', title: 'PATENT_TITLE_1178' },
        { id: '260fc983-601c-4fc2-abcb-c433d11daa02', title: 'PATENT_TITLE_4287' },
        { id: '6c76d0fe-bbae-4409-a1be-be84e223b9a5', title: 'PATENT_TITLE_3387' },
        { id: 'a0f56739-07b2-4d55-adc1-fc5acb8c2af0', title: 'PATENT_TITLE_5188' },
        { id: 'a65ee0bc-fcfe-4886-8e2e-ee454cb7d660', title: 'PATENT_TITLE_3016' },
        { id: 'ba39a42f-5bf2-482a-8eda-73859350d5f8', title: 'PATENT_TITLE_4761' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App