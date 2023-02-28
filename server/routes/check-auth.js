import {Router} from 'express';
import {createUser} from './controllers/authcontroller';
import {checkIfAuthenticated} from './middlewares/auth-middleware';


const router = Router();


router.post('/auth/signup', createUser);
//sample route
router.get('/articles', checkIfAuthenticated, async (_, res) => {
  return res.send(articles);
});  

export default router;