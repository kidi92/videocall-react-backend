import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createComplaint = async (req, res) => {
  const { keterangan } = req.body;
  try {
    const comp = await prisma.complaint.create({
      data: {
        keterangan: keterangan,
      },
    });
    res.status(201).json(comp);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
