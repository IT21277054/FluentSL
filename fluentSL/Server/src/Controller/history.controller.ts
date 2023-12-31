import { Request, Response } from 'express';
import HistoryModel from '../model/History';
import historyService from '../service/history.service';

const createUserHistory = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { title, description,user_id } = req.body;

    const newHistory = await historyService.addHistory(user_id,title, description);
    res.status(200).send(newHistory);
  } catch (err) {
    res.status(400).send({ err: 'not created' });
  }
};

const getUserHistory = async (req: Request, res: Response) => {

  try {
    const {id} =  req.params
    await HistoryModel.find({user_id:id}).then((history) => res.status(200).send(history));
  } catch (err) {
    res.status(404).send({ err: 'There is no history found' });
  }
};

const deleteUserHistory = async (req: Request, res: Response) => {
  try {
    console.log('delete');
    const { _id } = req.params;
    await HistoryModel.findByIdAndDelete(_id).then(() =>
      res.status(200).send({ message: 'History deleted successfuly' }),
    );
  } catch (err) {
    res.status(404).send({ err: 'Something went wrong' });
  }
};

export default {
  createUserHistory,
  getUserHistory,
  deleteUserHistory,
};
