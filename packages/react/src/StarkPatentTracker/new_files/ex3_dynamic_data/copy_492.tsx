import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b0b79e40-2a83-4ca5-b427-a910fea4376d', title: 'PATENT_TITLE_5552' },
        { id: 'ff4c95d2-b854-41ba-9aed-180640c64553', title: 'PATENT_TITLE_7116' },
        { id: 'feab431b-7b9c-4dcd-957e-2cea0d0922e7', title: 'PATENT_TITLE_2967' },
        { id: 'f45b94cc-eeea-49d8-bd25-6fe86c2797b9', title: 'PATENT_TITLE_9640' },
        { id: '0cdabb87-6126-42bf-830b-89cb58ab7355', title: 'PATENT_TITLE_7281' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App