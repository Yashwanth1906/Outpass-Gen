/*
  Warnings:

  - You are about to drop the column `staffId` on the `StaffRequests` table. All the data in the column will be lost.
  - Added the required column `staffId1` to the `StaffRequests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffId2` to the `StaffRequests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StaffRequests" DROP CONSTRAINT "StaffRequests_staffId_fkey";

-- AlterTable
ALTER TABLE "StaffRequests" DROP COLUMN "staffId",
ADD COLUMN     "staffId1" TEXT NOT NULL,
ADD COLUMN     "staffId2" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_staffId1_fkey" FOREIGN KEY ("staffId1") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_staffId2_fkey" FOREIGN KEY ("staffId2") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
