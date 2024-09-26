import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4eefe00d-b431-4ef9-ae96-ad11403b744c', title: 'PATENT_TITLE_7502' },
        { id: '23c07cc3-acfc-4e0b-b7e8-272b75705596', title: 'PATENT_TITLE_7990' },
        { id: '4b642909-8b94-4161-a743-4ed676dd38bd', title: 'PATENT_TITLE_1668' },
        { id: '8352056d-15af-42da-9a1a-3cf21bbe1b21', title: 'PATENT_TITLE_3728' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App