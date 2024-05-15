-- CreateTable
CREATE TABLE "character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "faction" VARCHAR(20) NOT NULL,
    "age" INTEGER,
    "height" INTEGER,
    "weight" INTEGER,
    "position" TEXT,
    "race" TEXT,
    "history" TEXT,
    "birthday" TIMESTAMP(3),
    "image" TEXT,
    "profile" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
