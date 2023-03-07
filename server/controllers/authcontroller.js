import admin from './firebase-service';

export const createUser = async (req, res) => {
    const {
          username,
          email,
          tier
        } = req.body;
    
    const user = await admin.auth().createUser({
        username,
        email,
        tier
    });
    
    return res.send(user);
}


export const makeUserTierTwo = async (req, res) => {
    const {userId} = req.body; // userId is the firebase uid for the user
  
    await admin.auth().setCustomUserClaims(userId, {tier: 2});
  
    return res.send({message: 'Success'})
  }