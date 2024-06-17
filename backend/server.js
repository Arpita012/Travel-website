const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
const connectDB=require('./connection')
connectDB()

const bookingSchema = new mongoose.Schema({
    destination: String,
    name: String,
    email: String,
    traveldate: Date
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/book', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send({ message: 'Booking submitted successfully!' });
    } catch (error) {
        res.status(400).send({ message: 'Error submitting booking', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
