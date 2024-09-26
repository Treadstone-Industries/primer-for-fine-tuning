import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0260006c-af85-4638-939c-57dd4171fec3', title: 'PATENT_TITLE_8452' },
        { id: 'a62980e0-c316-45da-8da6-b048be6afced', title: 'PATENT_TITLE_7762' },
        { id: '34dabc61-394c-499a-adb3-d6f30790c3ab', title: 'PATENT_TITLE_8747' },
        { id: 'b9f4ff66-e35a-4c2b-98d3-f30d46ee180a', title: 'PATENT_TITLE_1639' },
        { id: '90f7980c-d4ca-45bc-a17e-03d4350f9203', title: 'PATENT_TITLE_2232' },
        { id: '64dc68be-5d81-4c96-8b8c-0399e5262088', title: 'PATENT_TITLE_9504' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App