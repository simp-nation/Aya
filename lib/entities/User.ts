import {Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn} from "typeorm";
import {Post} from "./Post";
import {Collection} from "./Collection";

@Entity()
export class User {
    @PrimaryColumn("int", {unique: true})
    public id: Number;

    @Column("string", {length: 24})
    public username: String;

    @Column("string")
    public redditLink: String;

    @Column("string", {length: 100})
    public bio: String;

    @Column("array")
    @OneToMany(type => Post, post => post.id )
    public posts: Post[];

    @Column("array")
    @OneToMany(type => Collection, collection => collection.id)
    public collections: Collection[];

    @Column("timestamp")
    public dateCreated: String;
}
