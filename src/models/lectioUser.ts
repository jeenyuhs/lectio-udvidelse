export default class LectioUser {
    userID: number;
    schoolID: number;
    avatarID: number;

    username: string;
    classRoom: string;

    constructor(userID: number, schoolID: number, avatarID: number, username: string, classRoom: string) {
        this.userID = userID;
        this.schoolID = schoolID;
        this.avatarID = avatarID;
        this.username = username;
        this.classRoom = classRoom;
    }

    initalized(): boolean {
        // returns true, if all fields has a set value.
        return this.userID !== null || this.schoolID !== null || this.avatarID !== null || this.username !== null || this.classRoom !== null;
    }
}