import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '94d99ee5-cd30-493f-99b7-f90cd86decd8', title: 'PATENT_TITLE_5041' },
            { id: '8266d5ca-93b9-4634-9652-092a8c88e1c6', title: 'PATENT_TITLE_9141' },
            { id: 'bf0d6868-275b-4c61-8b7e-ef6e01420652', title: 'PATENT_TITLE_1295' },
            { id: '16c78edb-8d21-4540-80fc-fd93852cd9ec', title: 'PATENT_TITLE_5785' },
            { id: '98140476-5c4a-4d25-829d-cd43468886ca', title: 'PATENT_TITLE_2298' },
            { id: 'aa360218-f3c4-49dd-98c7-42d05781fd47', title: 'PATENT_TITLE_3948' },
            { id: '34334007-28ba-43ed-a9a1-c5eefb48efbb', title: 'PATENT_TITLE_8309' },
            { id: 'fdf529f1-735c-46e3-8e06-6d8590d52b52', title: 'PATENT_TITLE_3140' },
        ]}
    />
)

export default App