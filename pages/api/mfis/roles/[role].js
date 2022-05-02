import { Mfis } from "../data";

export default function mfiHandler({ query: { role } }, res) {
  const filtered = Mfis.filter((mfi) => mfi.roles == role);

  res.status(200).json(filtered);
}
