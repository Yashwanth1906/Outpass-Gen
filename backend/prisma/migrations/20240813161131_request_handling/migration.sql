/*
  Warnings:

  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Outpass" ALTER COLUMN "advisorApproved" SET DEFAULT 'Pending',
ALTER COLUMN "advisorApproved" SET DATA TYPE TEXT,
ALTER COLUMN "hodApproved" SET DEFAULT 'Pending',
ALTER COLUMN "hodApproved" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "email";

-- CreateTable
CREATE TABLE "StaffRequests" (
    "id" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "outpassId" TEXT NOT NULL,
    "approveStatus" TEXT NOT NULL DEFAULT 'Pending',

    CONSTRAINT "StaffRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HODRequests" (
    "id" TEXT NOT NULL,
    "hodId" TEXT NOT NULL,
    "outpassId" TEXT NOT NULL,
    "approveStatus" TEXT NOT NULL DEFAULT 'Pending',

    CONSTRAINT "HODRequests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_outpassId_fkey" FOREIGN KEY ("outpassId") REFERENCES "Outpass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HODRequests" ADD CONSTRAINT "HODRequests_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "HOD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HODRequests" ADD CONSTRAINT "HODRequests_outpassId_fkey" FOREIGN KEY ("outpassId") REFERENCES "Outpass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
