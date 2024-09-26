import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '310d83c0-da55-45db-b5fa-5c8d53e3ceef', title: 'PATENT_TITLE_7630' },
                { id: '0511c22b-e7b7-48e3-b817-97c746997bd4', title: 'PATENT_TITLE_2237' },
                { id: '07359d8f-8b73-452c-9e85-dc4b9af74d4d', title: 'PATENT_TITLE_6888' },
                { id: '57e8f0d4-4099-4020-a614-4c3d4a2de638', title: 'PATENT_TITLE_5664' },
                { id: 'eb1c9f8c-0702-4113-b5ee-e1260146ecd1', title: 'PATENT_TITLE_2701' },
                { id: '4c8f3eac-f82e-481f-9380-b33fd0f87373', title: 'PATENT_TITLE_1990' },
                { id: 'a6a82f65-9638-43d5-a58a-3bb355eb7134', title: 'PATENT_TITLE_2833' },
                { id: '00f76119-d633-42dd-addc-353cd7d1624e', title: 'PATENT_TITLE_3568' },
                { id: 'd2edc8ed-c0bb-48cc-bc6b-63fa270f4d2a', title: 'PATENT_TITLE_8218' },
            ]}
        />
    </Box>
)

export default App