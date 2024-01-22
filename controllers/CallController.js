import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCall = async (req, res) => {
  try {
    const response = await prisma.call.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCallStatus = async (req, res) => {
  try {
    const response = await prisma.call.findMany({
      where: {
        status: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getCallHistory = async (req, res) => {
  try {
    const response = await prisma.call.findMany({
      where: {
        status: false,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createCall = async (req, res) => {
  const { nama, kategori, status, room } = req.body;
  try {
    const comp = await prisma.call.create({
      data: {
        nama: nama,
        kategori: kategori,
        status: status,
        room: room,
      },
    });
    res.status(201).json(comp);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
