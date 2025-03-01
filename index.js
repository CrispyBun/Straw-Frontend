import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors({
    methods: ['GET'],
}));
app.use(helmet({
    // Disable content security policy
    contentSecurityPolicy: false,
    // Cross origin resource policy
    crossOriginResourcePolicy: {policy: "cross-origin"},
    // Disable script-src 'self'
    hidePoweredBy: true,
}));

app.use(express.static("public"));
app.use("/board/:id", express.static("public/board/id"));

app.get("*", (req, res) => {
    res.status(404);
    res.sendFile("public/404.html", {root: __dirname});
});

const port = 5173
app.listen(port, () => {
    console.log(`Server is running on \x1b[36mhttp://localhost:${port}/`);
});