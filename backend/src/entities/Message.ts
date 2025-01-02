import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number; // se usar o ! significa que a não passagem de dados, o banco irá criar um id automaticamente

  @Column()
  content: string;

  @Column("date")
  date: Date;

  @Column({ nullable: true })
  image?: string;

  constructor(content: string, date: Date, image?: string) {
    this.content = content;
    this.date = date;
    if (image) this.image = image;
  }
}