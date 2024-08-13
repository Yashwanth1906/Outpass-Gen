-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "staffId1" TEXT NOT NULL,
    "hodId" TEXT NOT NULL,
    "staffId2" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Outpass" (
    "id" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "outTime" TEXT NOT NULL,
    "inTime" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "hostelBlock" TEXT NOT NULL,
    "advisorApproved" TEXT NOT NULL DEFAULT 'Pending',
    "hodApproved" TEXT NOT NULL DEFAULT 'Pending',
    "wardApproved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Outpass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffRequests" (
    "id" TEXT NOT NULL,
    "staffId1" TEXT NOT NULL,
    "staffId2" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "HOD" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HOD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warden" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Warden_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HOD_email_key" ON "HOD"("email");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_staffId1_fkey" FOREIGN KEY ("staffId1") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "HOD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_staffId2_fkey" FOREIGN KEY ("staffId2") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outpass" ADD CONSTRAINT "Outpass_rollNo_fkey" FOREIGN KEY ("rollNo") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_staffId1_fkey" FOREIGN KEY ("staffId1") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_staffId2_fkey" FOREIGN KEY ("staffId2") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRequests" ADD CONSTRAINT "StaffRequests_outpassId_fkey" FOREIGN KEY ("outpassId") REFERENCES "Outpass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HODRequests" ADD CONSTRAINT "HODRequests_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "HOD"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HODRequests" ADD CONSTRAINT "HODRequests_outpassId_fkey" FOREIGN KEY ("outpassId") REFERENCES "Outpass"("id") ON DELETE CASCADE ON UPDATE CASCADE;
