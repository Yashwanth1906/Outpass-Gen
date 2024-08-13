-- CreateTable
CREATE TABLE "Student" (
    "rollNo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("rollNo")
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
    "advisorApproved" BOOLEAN NOT NULL DEFAULT false,
    "hodApproved" BOOLEAN NOT NULL DEFAULT false,
    "wardApproved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Outpass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Warden" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Warden_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "Outpass" ADD CONSTRAINT "Outpass_rollNo_fkey" FOREIGN KEY ("rollNo") REFERENCES "Student"("rollNo") ON DELETE RESTRICT ON UPDATE CASCADE;
