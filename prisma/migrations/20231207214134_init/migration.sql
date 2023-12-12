/*
  Warnings:

  - You are about to drop the column `acommodation` on the `travels` table. All the data in the column will be lost.
  - Added the required column `idAcommodation` to the `travels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idtransport` to the `travels` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "acommodations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "reserva" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "transports" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "origin" TEXT NOT NULL,
    "destiny" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_travels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "destiny" TEXT NOT NULL,
    "idAcommodation" INTEGER NOT NULL,
    "transport" TEXT NOT NULL,
    "idtransport" INTEGER NOT NULL,
    "route" TEXT NOT NULL,
    "finance" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "avaluation" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "transportId" INTEGER,
    CONSTRAINT "travels_idAcommodation_fkey" FOREIGN KEY ("idAcommodation") REFERENCES "acommodations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "travels_transportId_fkey" FOREIGN KEY ("transportId") REFERENCES "transports" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_travels" ("avaluation", "date", "destiny", "finance", "id", "notes", "recommendation", "route", "transport") SELECT "avaluation", "date", "destiny", "finance", "id", "notes", "recommendation", "route", "transport" FROM "travels";
DROP TABLE "travels";
ALTER TABLE "new_travels" RENAME TO "travels";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
