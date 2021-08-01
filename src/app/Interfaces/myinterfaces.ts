
export interface ApplicationUser  {
    name: string;
    age: number;
    photoFileName: string;
    books: Book[];
    email:string;
    username:string;
    id:string
    
}
export interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
}

export interface Group {
    id: number;
    name: string;
    semester: Semester;
    semesterId: number;
    students: Student[];
    sTasks: STask[];
}

export interface Student {
    user: ApplicationUser;
    id: number;
    points: number;
    parent: Parent;
    parentId: number;
    currentSemesterId: number;
    groups: Group[];
    answers: Answer[];
}

export interface Parent {
    id: number;
    user: ApplicationUser;
    children: Student[];
}

export interface Subject {
    id: number;
    name: string;
    semesters: Semester[];
    teachers: Teacher[];
}

export interface STask {
    id: number;
    name: string;
    content: string;
    notes: string;
    type: string;
    total: number;
    answers: Answer[];
    group: Group;
    groupid: number;
    teacher: Teacher;
    teacherid: number;
}

export interface Teacher {
    user: ApplicationUser;
    id: number;
    subject: Subject;
    subjectid: number;
    sTasks: STask[];
}

export interface Semester {
    id: number;
    groups: Group[];
    semestersSubjects: Subject[];
    semesterName: string;
    startDate: Date |"date:'yyyy-MM-dd'";
    endDate: Date;
}

export interface Answer {
    id: number;
    answerContent: string;
    degree: number | null;
    datetime: string;
    student: Student;
    studentId: number;
    sTask: STask;
    sTaskid: number;
}

export interface Book {
    id: number;
    user: ApplicationUser;
    bookName: string;
    filepath: string;
    imagepath: string;
    description: string;
    points: number;
    numberOfDownloads: number;
    uploadDate: string;
}
///////////////////////////////////////
export interface LoginVModel {
    email: string;
    password: string;
    rememberMe: boolean;
}
export interface ExternalLoginVModel {
    email: string;
    rememberMe: boolean;
    providertoken: string;
    nameidentifire: string;
    provider:string
}


export interface ParentVModel {
    userid: string;
    id: number;
    name: string;
    provider: string;
    identifier: string;
    providertoken: string;
    age: number;
    photoFileName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface StudentProgressForsubjectModel {
    subject: Subject;
    submodel: studentprogressmodel[];
}

export interface studentprogressmodel {
    task: STask;
    ans: Answer;
}
export interface StudentVModel {
    userid: string;
    studentID: number;
    points: number;
    lastGroup: Group;
    name: string;
    currentSemmesterID: number;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    photoFileName: string;
}

export interface TeacherVModel {

    
    id: number;
    subjectid: number;
    photoFileName: string;
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    subjectname:string
}
export interface AdminRegisterVModel {
    email: string;
    password: string;
    name: string;
    age: number;
}
