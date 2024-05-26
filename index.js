import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

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

app.get("*", (req, res) => {
    res.status(404);
    res.send("404 placeholder :-)");
})

app.listen(5173, () => {
    console.log("Server is running on port 5173");
});