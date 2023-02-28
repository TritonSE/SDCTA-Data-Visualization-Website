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
