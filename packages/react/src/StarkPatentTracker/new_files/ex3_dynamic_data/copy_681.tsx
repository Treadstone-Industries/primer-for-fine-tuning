import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '07263b1e-65c6-4537-bf4a-044482045604', title: 'PATENT_TITLE_3154' },
        { id: '420008cf-feed-4ed6-bef4-0deaa41fefa9', title: 'PATENT_TITLE_3328' },
        { id: '9095d6cb-ad3f-4b63-8fb9-9e3d88ca7094', title: 'PATENT_TITLE_7754' },
        { id: '2a40df9a-ddf0-4857-bfda-1a8970e0f185', title: 'PATENT_TITLE_1275' },
        { id: '5bc98115-5414-43dd-8007-0c6cfc1e07fc', title: 'PATENT_TITLE_3081' },
        { id: 'a81c5eee-569c-42db-89e7-82da09cbdd24', title: 'PATENT_TITLE_5899' },
        { id: '565957fa-3f9b-4f50-969f-3761c4aa0b95', title: 'PATENT_TITLE_3344' },
        { id: 'a299ebed-d2c2-4d21-8fe5-db89389d923e', title: 'PATENT_TITLE_8811' },
        { id: '93dd5904-f8d8-4a13-9cbd-102c70586d3d', title: 'PATENT_TITLE_4425' },
        { id: 'f0d1cedc-382d-41d5-a8e3-407ce9f32067', title: 'PATENT_TITLE_9043' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App