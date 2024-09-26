import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '204645c4-1ae2-4dc9-9864-46aa8374b7c8', title: 'PATENT_TITLE_5780' },
            { id: '12ecbcc2-35ac-47b1-b710-f012526bf996', title: 'PATENT_TITLE_9390' },
            { id: '089c6b49-9dab-46e2-b610-1816fb78e0c1', title: 'PATENT_TITLE_6018' },
            { id: 'cacbe247-060a-4dc9-b4bf-c4f2860dad18', title: 'PATENT_TITLE_8205' },
            { id: '6d09a78a-372c-47cf-9cf0-b2e9228d597e', title: 'PATENT_TITLE_1498' },
            { id: '2a654db0-869b-4594-b33a-3ad5ea53abf5', title: 'PATENT_TITLE_1976' },
            { id: '1d4cee53-f179-4990-9edb-087187d609ce', title: 'PATENT_TITLE_1952' },
        ]}
    />
)

export default App