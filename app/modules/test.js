import bcrypt from "bcrypt";

bcrypt.hash("12345", 11, (err, hash) => {
    console.log(hash);
})