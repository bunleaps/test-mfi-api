import { Mfis } from "./data.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  res.status(200).json(Mfis);
};
