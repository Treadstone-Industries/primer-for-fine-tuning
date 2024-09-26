import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5bdbba6e-e1f0-4412-90e7-55cade5d6886', title: 'PATENT_TITLE_6551' },
        { id: '67254a3d-210d-4554-9fe2-df2aec0530a4', title: 'PATENT_TITLE_5791' },
        { id: 'df7be4a4-0758-44ce-b51f-e3d7ab83b88e', title: 'PATENT_TITLE_1931' },
        { id: 'ae419e66-82c1-4524-ba9f-1c8b71c608f5', title: 'PATENT_TITLE_5535' },
        { id: '76a3ae41-9e45-41c5-88e0-b95380c2e7f1', title: 'PATENT_TITLE_6651' },
        { id: '9034400f-72f7-4b0b-8f22-ae50d0cabfa3', title: 'PATENT_TITLE_9399' },
        { id: '9d577aa0-49cd-4fbb-b36a-c5f9baa4e081', title: 'PATENT_TITLE_4920' },
        { id: '4a847f4d-cfbd-487d-89f0-29a6465904d8', title: 'PATENT_TITLE_9834' },
        { id: 'f7496beb-afcb-40f5-8652-9a28a0363a97', title: 'PATENT_TITLE_9433' },
        { id: '6ca921a7-7601-4a7e-ab22-936a431cc84b', title: 'PATENT_TITLE_9094' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App