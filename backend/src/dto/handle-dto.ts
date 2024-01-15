import mongoose from "mongoose";

export class HandleDto {
    userId: mongoose.Types.ObjectId | any = "";
    codeforces: string = "";
    codechef: string = "";
    leetcode: string = "";
    atcoder: string = "";
    hackerrank: string = "";
    hackerearth: string = "";
    geeksForGeeks: string = "";
    codingNinjas: string = "";
    newtonSchool: string = "";

    constructor(obj: any) {
        this.userId = obj && obj.userId ? obj.userId : "";
        this.codeforces = obj && obj.codeforces ? obj.codeforces : "";
        this.codechef = obj && obj.codechef ? obj.codechef : "";
        this.leetcode = obj && obj.leetcode ? obj.leetcode : "";
        this.atcoder = obj && obj.atcoder ? obj.atcoder : "";
        this.hackerrank = obj && obj.hackerrank ? obj.hackerrank : "";
        this.hackerearth = obj && obj.hackerearth ? obj.hackerearth : "";
        this.geeksForGeeks = obj && obj.geeksForGeeks ? obj.geeksForGeeks : "";
        this.codingNinjas = obj && obj.codingNinjas ? obj.codingNinjas : "";
        this.newtonSchool = obj && obj.newtonSchool ? obj.newtonSchool : "";
    }
};