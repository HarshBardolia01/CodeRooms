export const toJson = (arg: object | any) => {
    return arg ? JSON.parse(JSON.stringify(arg)) : null;
};

export const isObjectEmpty = (obj: object) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const isArrayEmpty = (arr: Array<any>) => {
    return Array.isArray(arr) && !arr.length;
};

export const isValidDateObject = (date: Date) => {
    return new Date(date).toString() !== "Invalid Date";
};

export const isValidDateString = (date: string) => {
    return !isNaN(Date.parse(date));
};

export const isObject = (obj: object) => {
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null
      ? true
      : false;
};
  
export const isArray = (arr: Array<any>) => {
    return typeof arr === "object" && Array.isArray(arr) && arr !== null
      ? true
      : false;
};