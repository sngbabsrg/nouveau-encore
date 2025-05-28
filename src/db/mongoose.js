const mongoose = require('mongoose');
// ...existing code...
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// ...existing code...