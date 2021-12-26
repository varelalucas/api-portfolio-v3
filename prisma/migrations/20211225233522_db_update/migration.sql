/*
  Warnings:

  - You are about to drop the column `video_url` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `img_url` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Projects` DROP COLUMN `video_url`,
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL;
