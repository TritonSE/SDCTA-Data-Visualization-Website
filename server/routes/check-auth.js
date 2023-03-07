import {Router} from 'express';
import {createUser} from '../controllers/authcontroller';
import {checkIfAuthenticated, checkIfTierTwo} from '../middlewares/auth-middleware';


const router = Router();


router.post('/auth/signup', createUser);
//sample route
router.get('/articles', checkIfAuthenticated, async (_, res) => {
  return res.send(articles);
});  
router.get('/tier2/records', checkIfTierTwo, async (_, res) => {
  return res.send(records);
});

export default router;