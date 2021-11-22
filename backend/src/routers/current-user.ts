import express, { Request, Response } from 'express';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();
router.get('/api/users/currentuser', currentUser, (req, res) => {
    console.log(`Check  CurrentUser: ${req.currentUser}`);
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };