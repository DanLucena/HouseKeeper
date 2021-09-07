import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    isAdmin: boolean;

    @Column()
    image?: string;

    @Column()
    level: number;

    @Column()
    currentExp: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
            this.level = 1;
            this.currentExp = 0;
            this.isAdmin = false;
            this.image = "";
        }
    }
}

export { User };