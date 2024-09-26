import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '22822e65-a195-4ad0-851c-faf7169a0ef9', title: 'PATENT_TITLE_8817' },
            { id: 'a6e2d61c-e032-48e9-8315-eef0d9108175', title: 'PATENT_TITLE_9245' },
            { id: 'e8c25e94-89d0-43bd-832e-75aa7690d7a5', title: 'PATENT_TITLE_2253' },
            { id: '665ac515-4e2d-4e0c-97e7-42ba6445c081', title: 'PATENT_TITLE_8456' },
            { id: '057c00f7-3115-4848-aae4-f64a566ecfb5', title: 'PATENT_TITLE_1941' },
            { id: 'c3bb426d-f314-4cec-88f6-266bac54ab33', title: 'PATENT_TITLE_7406' },
            { id: '124933a1-ba68-4f23-8714-447da394efaa', title: 'PATENT_TITLE_5011' },
            { id: '9ed19e31-3753-450e-8a6e-3217ff8b0301', title: 'PATENT_TITLE_2204' },
        ]}
    />
)

export default App