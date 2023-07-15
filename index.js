const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];

    if (userAgent && userAgent.includes('Discordbot')) {
        // Discord scan bot detected, redirect to a specific URL
        res.redirect('https://cdn.discordapp.com/attachments/1129535539662565538/1129909133395640410/wazowski-mike.png');
    } else {
        // Regular user (non-scan bot) detected, redirect to a different URL
        res.redirect('https://discord.gg/RgyzBArR9M');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
