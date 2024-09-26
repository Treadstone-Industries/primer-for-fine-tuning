import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3df10743-31d3-433c-8442-a4ad5146c264', title: 'PATENT_TITLE_5999' },
        { id: '63e42124-867f-4459-8981-68cfb28d700a', title: 'PATENT_TITLE_6341' },
        { id: 'fbcf0bdc-47cd-4166-beae-c719ec547667', title: 'PATENT_TITLE_8962' },
        { id: '31b601f9-6cb6-4e25-83fc-44afdcf5f2bd', title: 'PATENT_TITLE_7677' },
        { id: '14576537-4d2b-4313-9bb5-963a9f90b0b1', title: 'PATENT_TITLE_5096' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App