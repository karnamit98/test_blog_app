import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';

import router from './routes/user-routes';

const app = express();
app.use(express.json())
app.use("/api/user",router)     //http://localhost:5000/api/user/<>
app.use("/api/blog",blogRouter)     //http://localhost:5000/api/blog/<>
mongoose
	.connect(
		'mongodb+srv://admin:6KiLUiXmWa59WMq9@cluster0.qif4oje.mongodb.net/Blog?retryWrites=true&w=majority'
		// () => {
		// 	console.log('DB CONNECTED!');
		// },

		// (e) => {
		// 	console.error('DB CONNECTION FAILED!', e);
		// }
	)
	.then(() => app.listen(5000))
	.then(() => console.log('Connected to DB and Listening to Localhost 5000'))
	.catch((err) => console.log(err));

// app.listen(5000)

//admin
//6KiLUiXmWa59WMq9