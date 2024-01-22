/*
  Warnings:

  - Added the required column `room` to the `Call` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `call` ADD COLUMN `room` VARCHAR(191) NOT NULL;
