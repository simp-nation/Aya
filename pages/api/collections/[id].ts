import { NextApiRequest, NextApiResponse } from "next";

import methods from "../../../lib/methods";
import { searchCollectionById } from "../../../lib/database";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const {
      query: { id },
    } = req;

    try {
      const dbResult = await searchCollectionById(parseInt(id[0]));

      res.status(200).json(dbResult);
    } catch (e) {
      res.status(404).json({
        code: res.statusCode.toString(),
        message: "Resource does not exist",
      });
    }
  },
});
