import bcrypt from 'bcrypt';

// COVERTING THE PASSWORD INTO HASH CODE
export const hashPassword = async(password)=>{
    try {
        const saltRounds= 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

// COMPARING THE HASH PASSWORD WITH THE PASSWORD ENTERED BY THE USER 
export const comparePassword = async(password, hashedPassword)=>{
    return bcrypt.compare(password, hashedPassword);
}