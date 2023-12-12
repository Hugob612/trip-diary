-- CreateTable
CREATE TABLE "travels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "destiny" TEXT NOT NULL,
    "acommodation" TEXT NOT NULL,
    "transport" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "finance" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "avaluation" TEXT NOT NULL,
    "notes" TEXT NOT NULL
);
