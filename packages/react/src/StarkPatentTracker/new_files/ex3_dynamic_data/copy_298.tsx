import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2a4ce1db-794b-43c8-8255-9b6f7765fbfa', title: 'PATENT_TITLE_7810' },
        { id: '2a3a4e30-de4c-4b7f-94f4-96c0b1874e97', title: 'PATENT_TITLE_1391' },
        { id: 'c593549f-bbaa-426f-8473-addd4e832aaa', title: 'PATENT_TITLE_2560' },
        { id: '9e0ee194-f1aa-403b-880a-8d47bc375659', title: 'PATENT_TITLE_6924' },
        { id: '05765c7c-fb74-4132-9225-17d16d2c8b47', title: 'PATENT_TITLE_5143' },
        { id: 'b216424c-d55e-4cbb-8a47-9697e7da200a', title: 'PATENT_TITLE_3747' },
        { id: '1c463004-0410-4111-ac1d-79177ff499fa', title: 'PATENT_TITLE_1405' },
        { id: '5d817e5d-8022-465d-9c08-e95a3bd31c71', title: 'PATENT_TITLE_7190' },
        { id: '491374bd-e352-412a-90ee-421591f0eb8d', title: 'PATENT_TITLE_2998' },
        { id: '290fc659-6b49-4040-9a73-81c63e6962fe', title: 'PATENT_TITLE_5207' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App