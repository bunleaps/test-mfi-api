import { Mfis } from "./data.js";

export default function mfiHandler({ query: { id } }, res) {
  const filtered = Mfis.filter((mfi) => mfi.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `MFI with id: ${id} not found.` });
  }
}
