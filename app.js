const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const path = require('path')
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 3159;

const AuthMiddleware = require('./ApiAuthMiddleware')


//Dt routes files
const leads = require('./routes/DT_ROUTES/leadsRouter')
const quotes = require('./routes/DT_ROUTES/QuotesRouter')
const HomeRoute = require('./routes/DT_ROUTES/HomeRoute')
const ApikeyGenrate = require('./routes/DT_ROUTES/ApikeyGenerate')
const AccountRoute = require('./routes/DT_ROUTES/AccountRoute')
const DealRoute = require('./routes/DT_ROUTES/DealRoute')
const CompanyRouter = require('./routes/DT_ROUTES/CompanyRoute')
const LoginRoute = require('./routes/DT_ROUTES/LoginRoute')
const ContactRouter = require('./routes/DT_ROUTES/ContactRoute')
const Role = require('./routes/DT_ROUTES/RoleRouter')


//EPR routes file
const TransportRoute = require('./routes/EPR_ROUTES/TransporterRoute')
const CustomerRoute = require('./routes/EPR_ROUTES/CustomerRoute')
const CollectionCenterRoute = require('./routes/EPR_ROUTES/CollectioCenterRoute')
const Ulb = require('./routes/EPR_ROUTES/UlbRoute')
const DisposalRoute = require('./routes/EPR_ROUTES/DisposalRoute')
const EprLoginRoute = require('./routes/EPR_ROUTES/LoginRoute')
const AttachmentRoute = require('./routes/EPR_ROUTES/AttachmentRoute')
const UserRoute = require('./routes/EPR_ROUTES/UserRoute')
const RoleRoute = require('./routes/EPR_ROUTES/RoleRoute')
const PoRoute = require('./routes/EPR_ROUTES/PoRoute')
const DisposalExecutionRouter = require('./routes/EPR_ROUTES/DisposalExecutionRoute')
const TragetRouter = require('./routes/EPR_ROUTES/TargetRoute')
const TargetSettingModel = require('./routes/EPR_ROUTES/TargetSettingRoute')




const UploadFile = require('./UploadFile.js');


mongoose.connect("mongodb://localhost:27017/DT_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (err) console.log(err)
    console.log('Database Connected!!')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(fileUpload());
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/apikey', ApikeyGenrate)

app.use('/', HomeRoute)
app.use(AuthMiddleware)
app.use('/dt/upload', UploadFile)


//DT routes
// app.use('/dt/account',AccountRoute)
// app.use('/dt/leads',leads)
// app.use('/dt/quotes',quotes)
// app.use('/dt/contact',ContactRouter)
// app.use('/dt/deals',DealRoute)
// app.use('/dt/company',CompanyRouter)
// app.use('/dt/login',LoginRoute)
// app.use('/dt/role',Role)


//EPR routes
app.use('/epr/transporter', TransportRoute)
app.use('/epr/customer', CustomerRoute)

app.use('/epr/collectioncenter', CollectionCenterRoute)
app.use('/epr/ulb', Ulb)
app.use('/epr/disposal', DisposalRoute)
app.use('/epr/login', EprLoginRoute)
app.use('/epr/attachment', AttachmentRoute)
app.use('/epr/user', UserRoute)
app.use('/epr/role', RoleRoute)
app.use('/epr/po', PoRoute)
app.use('/epr/disposalexecution', DisposalExecutionRouter)
app.use('/epr/target', TragetRouter)
app.use('/epr/targetsetting', TargetSettingModel)


app.use(express.static('public'))
app.listen(PORT, () => {
    console.log("server is running on port " + PORT + "!!!!")
})