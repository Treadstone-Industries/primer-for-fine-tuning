import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '469ba79c-2316-433a-94b7-78ecc442ede5', title: 'PATENT_TITLE_7014' },
            { id: 'c7ba7098-31f1-46f1-9086-5a2893de4797', title: 'PATENT_TITLE_8997' },
            { id: 'ed0b8ac5-6482-46f8-b3d7-5adb8f6caaa6', title: 'PATENT_TITLE_5264' },
            { id: '89717e80-7f56-4631-bcfa-562379ba7056', title: 'PATENT_TITLE_6210' },
            { id: '97391e29-dc67-43be-b22f-de7d5a3f05e6', title: 'PATENT_TITLE_9698' },
        ]}
    />
)

export default App