import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column({ nullable: true })
  public email: string;

  @Column({ nullable: true })
  public gender: string;

  @Column({ nullable: true })
  public favoriteanimal: string;

  @Column({ nullable: true })
  public motto: string;

  @Column({ nullable: true })
  public networth: string;

  @Column({ nullable: true })
  public carmake: string;

  @Column({ nullable: true })
  public favmoviegenre: string;
}
