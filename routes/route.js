import express from 'express'
import { saveSentEmails,getEmails,moveEmailsToBin,toggleStarredEmails,deleteEmails} from '../controller/email-controller.js'



const routes = express.Router()

//save is the route from frontend i have to store in databse
// if this end point what should i do that i will give in callback fun

//all these callback fun work i ll do with controller
//create controller folder

//if this save matches then call what is in callback

routes.post('/save',saveSentEmails);
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveSentEmails);
routes.post('/bin',moveEmailsToBin);
routes.post('/starred',toggleStarredEmails);
routes.delete('/delete',deleteEmails)

export default routes;