import { Request, Response } from 'express';
import { sampleServices } from '../services';
import { responseMessage, statusCode, util } from '../modules';

const sampleController = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await sampleServices.sampleService();
    res
      .status(statusCode.OK)
      .json(util.success(statusCode.OK, responseMessage.READ_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.BAD_REQUEST)
      .json(util.fail(statusCode.BAD_REQUEST, responseMessage.BAD_REQUEST));
  }
};

export default {
  sampleController,
};
