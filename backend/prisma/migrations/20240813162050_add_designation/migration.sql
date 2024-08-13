/*
  Warnings:

  - The primary key for the `Staff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rollNo` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hodId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffId1` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffId2` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Outpass" DROP CONSTRAINT "Outpass_rollNo_fkey";

-- AlterTable
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "rollNo",
ADD COLUMN     "hodId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "staffId1" TEXT NOT NULL,
ADD COLUMN     "staffId2" TEXT NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "HOD" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HOD_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HOD_email_key" ON "HOD"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_staffId1_fkey" FOREIGN KEY ("staffId1") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "HOD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_staffId2_fkey" FOREIGN KEY ("staffId2") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outpass" ADD CONSTRAINT "Outpass_rollNo_fkey" FOREIGN KEY ("rollNo") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
